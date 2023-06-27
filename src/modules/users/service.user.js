const userRepository = require('./repository.user')
const bcrypt = require('bcrypt');

function findAllUsers(){
    return userRepository.findAll()
}

function createNewUser(user){
    user.password = bcrypt.hashSync(user.password,10)
    return userRepository.create(user)
}

module.exports = {
    findAllUsers,
    createNewUser
}