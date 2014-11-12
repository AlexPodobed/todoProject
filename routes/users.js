var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with ');
});

router.get('/test', function(req, res) {
  res.json({
    "hello": "world"
  })
});

module.exports = router;
