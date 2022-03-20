var mongoose = require('mongoose');


// Create the schema for Users
var UserSchema = new mongoose.Schema({
  email: {type: String, lowercase: true, unique: true, required: [true, "Email can not be blank"]},
  password: {type: String, required: [true, "Password can not be blank"]},
  name: {type: String},
  cubes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cube'}],
  packingLists: [{type: mongoose.Schema.Types.ObjectId, ref: 'List'}],
  signUpDate: {type: Date, default: Date.now}
});

mongoose.model('User' , UserSchema)
