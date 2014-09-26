var express = require('express');
var fs = require('fs');

var app = express();

app.get(/^(.*)$/, function(req, res){
  var path = '.' + req.params[0];
  fs.stat(path, function(err, stat) {
    if (err || !stat.isFile()) {
      path = './login.html';
    }
    console.log('Serving', path);
    res.sendfile(path);
  });
});

var server = app.listen(80, function() {
  console.log('Listening on port %d', server.address().port);
});
