var express = require('express');
var router = express.Router();
const authented = require('../models/authenicator')
const products_display = require('../models/products_display')
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
    // Call a function in the models to return a products_table in HTML string.
    html_table = products_display();
    res.render('users', {title: 'User Page', products_table: html_table});
  } else {
    res.render('login', {title: 'Login Page'});
  }
})
module.exports = router;
