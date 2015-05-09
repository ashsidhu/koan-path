var express = require('express');
var app = express();
var http = require('http');
var path = require("path");
var auth = require('./auth')
var morgan = require('morgan');
var db = require('./db');
var bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/',function(req,res,next){
  res.sendFile(path.resolve(__dirname+'/../dist/index.html'));
});

console.log('yo 3000')

app.use('/auth', auth);

var port = 3000;
app.set('port', port);

var server = http.createServer(app);

server.listen(port);