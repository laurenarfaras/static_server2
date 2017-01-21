var express = require('express');
var server = express();
var port = 8081;

server.listen(port, function(){
  console.log('Now listening on port', port);
});
