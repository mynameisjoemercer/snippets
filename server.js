// require() is node's way of loading modules. 
var express = require('express');
var app = express();


app.get('/', function(req, res){
	console.log('req: ', req.route);
  res.sendfile(__dirname + '/index.html');
});
app.set('/main.css', function(req, res){
	console.log('req: ', req.route);
  res.sendfile(__dirname + '/main.css');
});
app.get('/main.css');
console.log(app.get('/main.css'));


app.listen(8080);
console.log('Server running on port 8080...');