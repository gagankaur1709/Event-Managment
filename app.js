const express = require ("express");
const https = require ("https");
const bodyParser = require("body-parser");
const { db } = require("./db/config");
const { eventRoute } = require('./routes/eventRoute')
const { participantRoute } = require('./routes/participantRoute')
const { adminRoute } = require('./routes/adminRoute')
const { teamRoute } = require('./routes/teamRoute')
const app = express();
var path = require('path');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname));
app.use(express.static("public"));

//API
app.get("/", function(req,res){
  res.sendFile(path.join(__dirname + 'index.html'))
});
app.get("/sign-in", function(req,res){
  res.sendFile(path.join(__dirname + 'sign-in.html'))
});

//Routes
app.use('/api/Participant', participantRoute)
app.use('/api/Event', eventRoute)
app.use('/api/Admin', adminRoute)
app.use('/api/Team', teamRoute)


db.sync()
  .then((result) =>{
    console.log("Database connection successful");

    app.listen(3000, function(){
      console.log("Server listening on port 3000");
    })
  })
  .catch((err) =>{
    console.log(err);
  })
