var express = require('express');
var router = express.Router();
const user = require('../db/model/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
