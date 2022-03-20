var mongoose = require('mongoose');


// Create the schema for Users
var ListSchema = new mongoose.Schema({
  title: {type: String, unique: true, required: [true, "Title can not be blank"]},
  tripDate: {type: Date, default: Date.now},
  cubesIncluded: [{type: mongoose.Schema.Types.ObjectID, ref: 'Cube'}],
  items: [String],
  createdDate: {type: Date, default: Date.now},
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('List' , ListSchema)
