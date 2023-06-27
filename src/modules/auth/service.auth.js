const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { findByUsername } = require('../users/repository.user');
const { secret } = require('../../config/server');

async function signIn({username, password}){
    const resultFindUsername = await findByUsername(username)

    if(!resultFindUsername)  return false;
 
    const isLoginSucefully =  bcrypt.compareSync(password, resultFindUsername.password)

    if(!isLoginSucefully) return false;
    
    delete resultFindUsername.password
    
    const token = await jwt.sign({
        data: resultFindUsername
      }, secret, { expiresIn: '1h' })
      
    return {
        token, 
    }
}

module.exports = {
    signIn
}