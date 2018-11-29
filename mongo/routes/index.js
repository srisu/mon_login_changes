var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.get('/success', function(req, res, next) {
  res.render('success', { title: 'Express' });
});

router.get('/failure', function(req, res, next) {
  res.render('failure', { title: 'Express' });
});



module.exports = router;
