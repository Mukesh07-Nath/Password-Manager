const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb'); 
dotenv.config()
const bodyparser = require('body-parser')
const cors = require('cors')


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const app = express()
const dbName = 'passwordop';
const port = 3000
app.use(bodyparser.json())
app.use(cors())

client.connect();

//Get all the passwords app.get se humara passwords mil raha hai
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
  res.json(findResult)
})

//Save a password app.post se password post ho raha hai
app.post('/', async (req, res) => {
  const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
  res.send({success : true, result : findResult})
})

//Delete a password by id  app.delete se password delete ho raha hai
app.delete('/', async (req, res) => {
  const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
  res.send({success : true, result : findResult})
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})