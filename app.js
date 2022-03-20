var dotenv = require('dotenv').config(),
    express = require('express');
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    mongoose = require('mongoose');

// Create global app object
var app = express();
// Express config defaults
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


mongoose.connect(process.env.testConnection)
// import database models
require('./models/User');
require('./models/Cube');
require('./models/List');

app.use('/', require('./routes/api/login'));
app.use('/cubes', require('./routes/api/cubes'));
app.use('/lists', require('./routes/api/lists'));
app.use('/signup', require('./routes/api/signup'));


var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port ' + server.address().port);
})
