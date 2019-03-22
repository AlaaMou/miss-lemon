var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

/* GET first book page. */
router.get('/books/first-book', function(req, res, next) {
  res.render('first-book');
});

/* GET second book page. */
router.get('/books/second-book', function(req, res, next) {
  res.render('second-book');
});

/* GET third book page. */
router.get('/books/third-book', function(req, res, next) {
  res.render('third-book');
});



module.exports = router;
