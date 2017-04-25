var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* About us page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* Product page. */
router.get('/product', function(req, res, next) {
  res.render('product');
});

/* Gallery page. */
router.get('/gallery', function(req, res, next) {
  res.render('gallery');
});

/* News page. */
router.get('/news', function(req, res, next) {
  res.render('news');
});

/* Contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
