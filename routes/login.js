var express = require('express');
var router = express.Router();
var path = require('path');
// Include Express Validator Functions
const { check, validationResult, Result } = require('express-validator');

// Validation rules.
var loginValidate = [
  check('username', 'Username Must Be an Email Address').isEmail().trim().escape().normalizeEmail(),
  check('password').isLength({ min: 8 })
  .withMessage('Password Must Be at Least 8 Characters')
  .matches('[0-9]').withMessage('Password Must Contain a Number')
  .matches('[A-Z]').withMessage('Password Must Contain an Uppercase Letter')
  .trim().escape()];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', '/views/login.html'));
});

/* POST the form. */
router.post('/', loginValidate, function(req,res,next) {
  var errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  else{
  //insert login code here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
}
});

module.exports = router;
