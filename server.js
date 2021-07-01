const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv');

dotenv.config();

const connectionString = `mongodb+srv://user:123@cluster0.kq4ft.mongodb.net/test?retryWrites=true&w=majority`;

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function (){
    console.log('listening on 3000');
})

app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {
    console.log(req.body);
})

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => console.error(error))