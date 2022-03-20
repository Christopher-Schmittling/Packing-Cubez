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
  res.render('signup', {
    validateData: ''
  })
})

router.post('/', function(req, res) {
  var email = req.body.email;
  var name = req.body.name;
  var password = req.body.password;
  var confirmPassword = req.body.confirmPassword;
  var cubes = [];
  var packingLists = [];
  var signUpDate = new Date();

  User.findOne({ email: email }, function(err, foundUser) {
    if (!foundUser) {
      if (password === confirmPassword) {
        bcrypt.hash(password, saltRounds, function(err, hash) {
          var newUser = new User({
            email: email,
            password: hash,
            name: name,
            cubes: cubes,
            packingLists: packingLists,
            signUpDate: signUpDate
          });
          newUser.save(function(err) {
            if (err) {
              console.log(err)
            } else {
              res.render('cubes')
            }
          });
        })
      } else {
        res.render('signup', {
          validateData: 'Passwords do not match.'
        })
      }
    } else {
      res.render('signup', {
        validateData: 'This email is already associated with another account.'
      })
    }
  })
})

module.exports = router;
