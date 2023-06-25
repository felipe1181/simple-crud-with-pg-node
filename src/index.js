const express = require('express')
const { userController } = require('./modules/users')
const { port } = require('./config/server')

const app = express()
 

app.use(express.json())
app.use('/users',userController)
 

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})