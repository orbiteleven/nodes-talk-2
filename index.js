// Import Express
var express = require('express');

// Import other libraries
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Implement a new Application
var app = express();

// Configure our Application
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

// Our first middlewares!
// Parse the body of the request
app.use(bodyParser.urlencoded({extended: false}));

// We want to check the body for a "_method" field
app.use(methodOverride(function methodOverride(req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// Import Controllers
app.use(require('./controllers/pages')(app)); // Pages
app.use(require('./controllers/posts')(app)); // Posts

// Star the server
var server = app.listen(3000, function serveApp() {
  var host = server.address().host;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
