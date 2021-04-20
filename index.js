var emailScript = require('./email.js')
var dbScript = require('./db.js')
var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())

app.get('/', (req, res) => {
  dbScript.connect()
  res.send('Hello World!');
})

app.get('/send-email', (req, res) => {
  let name = req.query.name
  let email = req.query.email
  let message = req.query.message

  emailScript.sendEmail(email, "Test Subject", message)

  res.send({isValid: emailScript.isValid(name, email, message)})
})

app.listen(3000, () => {
  console.log("App Listening At http://Marketing-Website-Server.obese_clown.repl.co");
})