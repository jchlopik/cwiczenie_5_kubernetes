const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = process.env.PORT || 3000;
 
//const url = 'mongodb://mongodb:27017/';
const url = 'mongodb://localhost:27017/';
let db;
 
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) throw err;
  db = client.db('test');
  console.log('Connected to MongoDB!');
});
 
app.get('/', (req, res) => {
  db.collection('data').find().toArray((err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
