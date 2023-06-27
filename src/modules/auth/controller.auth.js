const express = require('express') 
const { signIn } = require('./service.auth')
var userRoute = express.Router()

userRoute.post('/signin',async (req,res)=>{
  const responseSignIn = await signIn(req.body)
    if(responseSignIn){
        return res.status(200).json({data:responseSignIn, message:'Login realizado com sucesso'})
    }
    res.status(401).json({message:'Credenciais invalidas'})
})
 
module.exports = userRoute

