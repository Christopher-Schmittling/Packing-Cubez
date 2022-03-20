const mongoose = require('mongoose'),
      express = require('express'),
      ejs = require("ejs"),
      router = require('express').Router(),
      app = express(),
      _ = require("lodash"),
      bodyParser = require('body-parser'),
      Cube = mongoose.model('Cube');

app.set('view engine', 'ejs');

router.get('/', function(req, res) {
  res.render('cubes')
})

router.post('/newCube', function(req, res) {
  var randomTitle = (Math.floor(Math.random() * 10000)) + 1000;
  console.log(randomTitle);
  res.redirect('/cubes/:' + randomTitle);
})

router.get('/:cubeName', function(req, res) {
  console.log(req.params)
  const requestedCube = _.lowerCase(req.params.title);
  res.render('newCube');

});

module.exports = router;
