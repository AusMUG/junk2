var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name:String, 
  username:{type:String, required:true},
  id: Number
}, {collection:"usersColl"});

var UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;