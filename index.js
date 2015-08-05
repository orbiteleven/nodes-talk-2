// Import Express
var express = require('express');

// Implement a new Application
var app = express();

// Configure our Application
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

// Import Controllers
var PagesController = require('./controllers/pages');
app.use(PagesController(app));

// Star the server
var server = app.listen(3000, function serveApp() {
  var host = server.address().host;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
