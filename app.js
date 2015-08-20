var express = require('express');
var mongoose = require('mongoose')
var schema = mongoose.Schema
var app = express();

app.use(express.static('public'));


var router = express.Router();



router.get('/', function(req, res){
	res.json({message: 'API'});
});

router.route('/projects').get(function(req, res){

	res.json({message: 'Some Message'});

});

router.route('/project/:project_id').get(function(req, res){
	res.json({message: 'Getting hours'})
});

app.use('/api', router);

var server = app.listen(3000);
console.log("Listening...");
