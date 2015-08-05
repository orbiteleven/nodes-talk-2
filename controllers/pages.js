var express = require('express');

module.exports = function createPagesRouter(app) {
  var router = express.Router();

  router.get('/', function rootPath(req, res) {
    res.render('index', {
      message: 'This is pretty cool, eh?'
    });
  });

  router.get('/about', function aboutPath(req, res) {
    res.render('about', {
      title: 'About'
    });
  });

  router.get('/contact', function contactPath(req, res) {
    res.render('contact', {
      title: 'Contact'
    });
  });

  return router;
}
