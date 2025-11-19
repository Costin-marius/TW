const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {

    res.send('Hello World')});

app.get('/Ping',(req, res) => {

    res.send('Pong')});

app.listen(8080);
