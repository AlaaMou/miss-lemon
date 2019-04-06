
const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

/* POST Email Form */
router.post('/contact', function(req, res, next){
    const msg = {
         to: 'amini.zahra74@yahoo.com',
         from: req.body.name + '<'+ req.body.email +'>',
         subject: 'My Website - New Message',
          text: req.body.message
          };
          
    sgMail.send(msg);
    // add flash message
    req.flash('success', 'Thanks a lot for your message. I will write back to you within 24 hours. Have a great day!')
    res.redirect("/contact")
})



module.exports = router;
