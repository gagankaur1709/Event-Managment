const express = require('express')
const { Admin, OrganizingTeam } = require('../db/config')


const route = express.Router()

route.post('/',async(req,res,err)=>{
  try{
    const adminPassword=req.body.password
    const adminName=req.body.name
    const adminEmail=req.body.email
    const adminPhone = req.body.phone
    const admin= await Admin.create({
      adminPassword: adminPassword,
      adminName: adminName,
      adminEmail: adminEmail,
      adminPhone: adminPhone,
    },{fields:['adminPassword','adminName','adminEmail','adminPhone']})
    res.status(201).send(admin)
  } catch (err){
    console.log(err.message)
  }
})

route.get('/',async(req,res,err)=>{
  try{
    const allTeam= await OrganizingTeam.findAll({
      where:{
        teamId: TeamId,
      }
    });
    res.status(201).send(allTeam)
  } catch {
    console.log(err)
  }
})



module.exports = {
  adminRoute: route
}
