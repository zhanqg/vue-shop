var express = require('express');
var router = express.Router();
const user = require('../db/model/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/user', user);
module.exports = router;
