var express = require('express');
var router = express.Router();
const authented = require('../models/authenicator')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', {title: 'Login Page'});
});
router.post('/', async function(req, res, next) {
  console.log(req.body)
  let uname = req.body.username;
  let passwd = req.body.password; 
  let auth = await authented(uname, passwd);
  if (auth) {
    res.render('users', {title: 'User Page'});
  } else {
    res.render('login', {title: 'Login Page'});
  }
})
module.exports = router;
