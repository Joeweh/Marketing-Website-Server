var db = require('mysql')
var con;

function connect()
{
  con = db.createConnection({
    host: "sql5.freesqldatabase.com",
    user: "sql5406586",
    password: process.env['dbPassword'],
    database: "sql5406586"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
}

function insert(id, name, email, message)
{
  
}

function select()
{
  con.query("SELECT * FROM Users", function (err, result, fields) {
    console.log(result);
  });
}

function update()
{

}

function remove()
{

}

module.exports = { connect, insert, select, update, remove }