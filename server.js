const express = require('express')
const app = express()
const mysql = require('mysql2');
const fs = require('fs');


app.get('/', function (req, res) {
  console.log(`connecting to ${req.query.db} with ${req.query.user} using ${req.query.password} on hostname ${req.query.host}`)
  const connection = mysql.createConnection({
    host: req.query.host,
    user: req.query.user,
    password: req.query.password,
    database: req.query.db,
    ssl: {
      ca: fs.readFileSync('./certs/BaltimoreCyberTrustRoot.crt.pem')
    }
  });
  connection.connect(error => {
    if (error) {
      console.log('error: ', error);
      res.status(500).json({message: 'connection Failed'});
    } else {
      console.log('connected ok');
      connection.end(error => { });
      res.status(200).json({message: 'OK'});
    }
  })
})

app.listen(3000)

console.log('tools running');