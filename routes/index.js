var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expressxx' });
});

router.post('/', function(req, res, next) {

 // var body = '{\'test\':123}';
  var body = '';

  req.on('data', function(chunk) {
    body += chunk;
    });

  req.on('end', function() {
     console.log(body); 
     });

  /* res.send('Got the Post'); */
  res.set('Content-Type', 'text/plain');
  res.send('this is the body, if empty its not json: ' + body);
  res.end();

});

module.exports = router;
