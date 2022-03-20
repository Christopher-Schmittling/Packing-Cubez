const mongoose = require('mongoose'),
      express = require('express'),
      ejs = require("ejs"),
      router = require('express').Router(),
      app = express(),
      _ = require("lodash"),
      bodyParser = require('body-parser'),
      bcrypt = require('bcrypt'),
      saltRounds = 12,
      User = mongoose.model('User');

app.set('view engine', 'ejs');

router.get('/', function(req, res) {
  res.render('login', {validateData: ''});
})

router.post('/', function(req, res) {
  User.findOne({ email: req.body.email }, function(err, foundUser) {
    if (foundUser) {
      bcrypt.compare(req.body.password, foundUser.password, function(err, result) {
        if (result) {
          res.render('cubes');
        } else {
          res.render('login', { validateData: 'Incorrect Email or Password' });
        }
      })
    } else {
      res.render('login', { validateData: 'Incorrect Email or Password' });
    }
  })
})

module.exports = router;
