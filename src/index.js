const express = require('express')
const { userController } = require('./modules/users')
const { port } = require('./config/server')
const { authController } = require('./modules/auth')

const app = express()
 

app.use(express.json())
app.use('/users',userController)
app.use('/auth',authController)
 

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})