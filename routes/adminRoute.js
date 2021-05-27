const express = require('express')
const { Admin, OrganizingTeam } = require('../db/config')


const route = express.Router()

route.post('/',async(req,res,err)=>{
  try{
    
    const adminName=req.body.name
    const adminEmail=req.body.email
    const adminPhone = req.body.phone
    const admin= await Admin.create({
      adminName: adminName,
      adminEmail: adminEmail,
      adminPhone: adminPhone,
    },{fields:['adminName','adminEmail','adminPhone']})
    res.status(201).send(admin)
  } catch (err){
    console.log(err.message)
  }
})

route.get('/',async(req,res,err)=>{
  try{
    const allTeam= await OrganizingTeam.findAll();
    res.status(201).send(allTeam)
  } catch {
    console.log(err.message)
  }
})



module.exports = {
  adminRoute: route
}
