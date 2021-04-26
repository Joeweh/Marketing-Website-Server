var emailScript = require('./email.js')
var dbScript = require('./db.js')
var express = require('express');
var cors = require('cors')
var app = express();

const port = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/login', (req, res) => {
  
})

app.post('/signup', (req, res) => {

})

app.get('/send-email', (req, res) => {
  let name = req.query.name
  let email = req.query.email
  let message = req.query.message

  emailScript.sendEmail(email, "Test Subject", message)

  res.send({isValid: emailScript.isValid(name, email, message)})
})

app.listen(port, () => {
  console.log("App Listening At http://Marketing-Website-Server.obese_clown.repl.co");
})