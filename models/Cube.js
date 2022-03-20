var mongoose = require('mongoose');


// Create the schema for Users
var CubeSchema = new mongoose.Schema({
  title: {type: String, unique: true, required: [true, "Title can not be blank"]},
  items: [String],
  createdDate: {type: Date, default: Date.now},
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('Cube' , CubeSchema)
