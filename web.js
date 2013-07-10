var express = require('express');

var buffer = new Buffer('NO CONTENT');

fs.readFile('index.html',function (err, data) {
  if (err) throw err;
  buffer = data;
}

var app = express.createServer(express.logger());

// Modified this for the startup class
app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
