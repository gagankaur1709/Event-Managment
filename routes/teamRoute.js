const express = require('express')
const { OrganizingTeam } = require('../db/config')


const route = express.Router()

route.post('/',async(req,res,err)=>{
  try{
    // const teamPassword=req.body.password
    const teamName=req.body.name
    const teamEmail=req.body.email
    const teamPhone = req.body.phone
    const organizingTeam= await OrganizingTeam.create({
      // teamPassword: teamPassword,
      teamName: teamName,
      teamEmail: teamEmail,
      teamPhone: teamPhone,
    },{fields:['teamName','teamEmail','teamPhone']})
    res.status(201).send(organizingTeam)
  } catch (err){
    console.log(err.message)
  }
})

module.exports = {
  teamRoute: route
}
