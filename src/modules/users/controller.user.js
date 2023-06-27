const express = require('express')
const { findAllUsers,createNewUser } = require('./service.user')
const { authorization } = require('../auth/middleware.auth')
var userRoute = express.Router()

userRoute.get('/',[authorization],async (req,res)=>{
    const allUsers = await findAllUsers()
    res.json({data: allUsers})
})

userRoute.post('/',async (req,res)=>{
    const newUser = await createNewUser(req.body)
    res.json({data: newUser})
})

userRoute.put('/:id',async (req,res)=>{ 
    res.json({data: true})
})

userRoute.delete('/:id',async (req,res)=>{ 
    res.json({data: true})
})

module.exports = userRoute