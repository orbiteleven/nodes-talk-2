// Import Express
var express = require('express');

// Implement a new Application
var app = express();

// Configure our Application
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Application route listenters
app.get('/', function rootPath(req, res) {
  res.render('index', {
    message: 'This is pretty cool, eh?'
  })
});

// Star the server
var server = app.listen(3000, function serveApp() {
  var host = server.address().host;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
