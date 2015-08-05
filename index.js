var express = require('express');

var app = express();

app.get('/', function rootPath(req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function serveApp() {
  var host = server.address().host;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
