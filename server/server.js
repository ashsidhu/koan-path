var express = require('express');
var app = express();
var http = require('http');
var path = require("path");

app.use(express.static('dist'));

app.get('/',function(req,res,next){
  res.sendFile(path.resolve(__dirname+'/../dist/index.html'));
});

var port = 3000;
app.set('port', port);

var server = http.createServer(app);

server.listen(port);