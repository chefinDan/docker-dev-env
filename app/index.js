const express = require('express')
const app = express()

const MongoClient = require('mongodb').MongoClient
const url = `mongodb://${process.env.DB_PORT_27017_TCP_ADDR}:${process.env.DB_PORT_27017_TCP_PORT}/app`

MongoClient.connect(url, function(err, db) {
  console.log("Connected successfully to server")
  app.listen(process.env.PORT, function () {
    console.log(`Example app listening on port ${process.env.PORT}!`)
  });
})

app.get('/', function (req, res) {
  res.send('Hello from node app')
})
