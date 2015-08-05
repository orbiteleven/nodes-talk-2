// Import Express
var express = require('express');

// Implement a new Application
var app = express();

// Application route listenters
app.get('/', function rootPath(req, res) {
  res.send('Hello World!');
});

// Star the server
var server = app.listen(3000, function serveApp() {
  var host = server.address().host;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
