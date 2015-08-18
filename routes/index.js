var express = require('express');
var router = express.Router();
var dstore = require('../dstore/ds');
var UserModel = require('../dstore/UserModel');

/* GET home page. */
router.get('/', function(req, res, next) {

  //saveData();  

  res.render('index', {
   title: 'Express' , data: JSON.stringify([{name:"monico moreno", id:123}, {name: "john doe", id:231}])
    });


});

function saveData(){
  dstore.connect();

  var user = new UserModel({
    name:"Monico Moreno", 
    username:"mam",
    id:123
  });

  user.save(function(err){
    if (err){
      //handle error
    }
  });
}

module.exports = router;
