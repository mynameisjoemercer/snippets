// require() is node's way of loading modules. 
var express = require('express');

// set up express
var app = express();

var db = [
	{
		query : 'What is my favorite fruit?',
		queryId : 0,
		resultId : 1,
		results : [
		{
			id : 0,
			name : 'Apples',
			url : 'apples.com',
			snippet : 'apples are great!'
		},
		{
			id : 1,
			name : 'Peaches',
			url : 'peaches.com',
			snippet : 'everyone likes peaches!'
		},
		{
			id : 2,
			name : 'Grapefruit',
			url : 'grapefruit.com',
			snippet : 'why not?'
		}]
	}];

// routes
app.get('/query', function(req, res){
	console.log('page requested: ' + req.url);
	// res.json({part1: db[0]});
	res.json({query : db[0]});
});
app.get('/answer/:id', function(req, res){
	console.log('page requested: ' + req.url);
	res.send(db[0].results[1].snippet);
});

// ensures that we p1 send route, and p2 look for static files
app.use(app.router);

// ??? theoretically we should put static content on AWS S3

// ??? what is __dirname for?

// this handles requests for static content 
// as organized in the file structure
app.use(express.static(__dirname + '/static'));




app.listen(8080);
console.log('Server running on port 8080...');