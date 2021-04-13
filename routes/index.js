var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
                        title: 'Home',
                        home: 'active',
                        about:'',
                        contact: '' });
});

router.get('/contact-us', function(req, res, next) {
  res.render('contact', { 
                        title: 'Contact',
                        contact: 'active',
                        about:'',
                        home: '' });
});
router.get('/about-us', function(req, res, next) {
  res.render('about', { 
                        title: 'About',
                        about: 'active',
                        contact:'',
                        home: '' });
});

module.exports = router;
