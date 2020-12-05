const express = require('express')
const app = express()
const mysql = require('mysql2');
 
app.get('/', function (req, res) {
  console.log(`connecting to ${req.query.db} with ${req.query.user} using ${req.query.password} on hostname ${req.query.host}`)
  const connection = mysql.createConnection({
    host: req.query.host,
    user: req.query.user,
    password: req.query.password,
    database: req.query.db
  });
  connection.connect(error => {
    if (error) console.log('error: ', error)
    else {
      console.log('connected ok');
      connection.end(error => {});
   }
  })
})
 
app.listen(3000)

console.log('tools running');