var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function(req, res) {
	console.log(req.body);
	res.sendStatus(200);
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Moneymouth listening at http://%s:%s', host, port);
});