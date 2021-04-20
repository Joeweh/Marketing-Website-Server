var nodemailer = require('nodemailer')

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

function sendEmail(email, subject, body)
{
  let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b34e504108e689",
      pass: "1680cd56f034a4"
    }
  });

  const message = {
    from: "joeyqsa211@gmail.com",
    to: email,
    subject: subject, 
    html: `<h1>${body}</h1>`
  };

  transport.sendMail(message, (err, info) => {
    if (err) { console.log(err) }
  }) 
}

module.exports = { isValid, sendEmail };