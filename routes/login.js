var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/views/login.html');
});

/* POST the form. */
router.post('/', function(req,res,netx) {
  //insert login code here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});

module.exports = router;
