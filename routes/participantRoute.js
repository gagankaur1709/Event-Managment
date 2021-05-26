const express = require('express')
const { Participant1 } = require('../db/config')


const route = express.Router()

route.post('/',async(req,res,err)=>{
  try{
    const password=req.body.password
    const name=req.body.name
    const address=req.body.address
    const email=req.body.email
    const phone = req.body.phone
    const participant= await Participant1.create({
      password: password,
      name: name,
      address: address,
      email: email,
      phone: phone,
    },{fields:['password','name','address','email','phone']})
    res.status(201).send(participant)
  } catch (err){
    console.log(err.message)
  }
})

module.exports = {
  participantRoute: route
}
