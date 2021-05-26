const express = require('express')
const { Event1 } = require('../db/config')


const route = express.Router()

// api/addEvent/
route.post('/', async (req,res,err) => {

    try{
      const eName = req.body.name
      const eDescription = req.body.description
      const eVenue = req.body.venue
      const eDate = req.body.date
      console.log(req.body)
      console.log(eName)
     const event = await Event1.create({
       eName: eName,
       eDescription: eDescription,
       eVenue: eVenue,
       eDate: eDate,
     },{ fields: ['eName','eDescription','eVenue','eDate'] })
      res.status(201).send(event)
    } catch {
      console.log(err.message)
    }



})


route.get('/', async (req,res,err) => {
  try{
    const allEvents = await Event1.findAll()

    res.status(201).send(allEvents)
  } catch {
    console.log(err.message)
  }
})


route.delete('/', async (req,res) => {
  try{
    const eCode = req.body.eCode
    console.log(eCode)
    const deleteEventRow = await Event1.destroy({
    where: {
      eCode: eCode,
    }
  });
  res.status(201).send("Row Deleted")
  } catch (err) {
    console.log(err)
  }
})

route.put('/', async (req,res) => {
  try{
    console.log("Into try block")
    const updateEventRow = await Event1.update(
      {
       eName : req.body.eName,
       eDescription : req.body.eDescription,
       eVenue : req.body.eVenue,
       eDate : req.body.eDate,
       },

      {
    where: {
      eCode: req.body.eCode
    }
  });
  console.log(req.body)
  res.status(201).send("Row Updated")
  } catch(err) {
    console.log(err)
  }
})


module.exports = {
  eventRoute: route
}
