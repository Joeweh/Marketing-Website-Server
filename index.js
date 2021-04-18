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

  res.send({isValid: isValid(name, email, message)})
})

app.listen(3000, () => {
  console.log("App Listening At http://Marketing-Website-Server.obese_clown.repl.co");
})

function isValid(name, email, message)
{
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if (name === "")
  {
    return false;
  }
 
  if (!(email.match(mailformat)))
  {
    return false;
  }

  if (message === "")
  {
    return false;
  }
  return true;
}