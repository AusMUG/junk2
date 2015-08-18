var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
   title: 'Express' , data: JSON.stringify([{name:"monico moreno", id:123}, {name: "john doe", id:231}])
    });
});

module.exports = router;
