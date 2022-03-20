const mongoose = require('mongoose'),
      express = require('express'),
      ejs = require("ejs"),
      router = require('express').Router(),
      app = express(),
      _ = require("lodash"),
      bodyParser = require('body-parser'),
      List = mongoose.model('List');

app.set('view engine', 'ejs');

router.get('/', function(req, res) {
  res.render('lists');
});

// router.post()

router.get('/:listName', function(req, res) {
  const requestedList = _.lowerCase(req.params.title);
  List.findOne({title: requestedList}, function(foundList) {
    if (!foundList) {return res.sendStatus(404)}

    res.render('/singleList', {foundList: foundList})
  });
});

module.exports = router;
