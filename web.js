var express = require('express');
var fs = require('fs');

var buffer = fs.readFileSync('index.html','utf8');

var app = express.createServer(express.logger());

// Modified this for the startup class
app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

app.use('/images', express.static(__dirname + "/images"));
