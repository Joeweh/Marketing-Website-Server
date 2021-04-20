var db = require('mysql')

function connect()
{
  var con = db.createConnection({
    host: "sql5.freesqldatabase.com",
    user: "sql5406586",
    password: process.env['dbPassword']
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
}

module.exports = { connect }