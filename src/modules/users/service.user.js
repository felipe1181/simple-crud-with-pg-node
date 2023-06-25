const userRepository = require('./repository.user')
function findAllUsers(){
    return userRepository.findAll()
}

function createNewUser(user){
    return userRepository.create(user)
}

module.exports = {
    findAllUsers,
    createNewUser
}