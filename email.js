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

module.exports = { isValid };