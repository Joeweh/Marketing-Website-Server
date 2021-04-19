var emailScript = require('./email.js')
var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/verify-email', (req, res) => {
  let name = req.query.name
  let email = req.query.email
  let message = req.query.message

  res.send({isValid: emailScript.isValid(name, email, message)})
})

app.listen(3000, () => {
  console.log("App Listening At http://Marketing-Website-Server.obese_clown.repl.co");
})