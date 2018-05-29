var express = require('express'),
    http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(3000);

app.use(express.static(__dirname + '/../dist'));

app.get('/', function(req, res) {
  res.send();
});

io.on('connection', function (socket) {
  console.log('user connected');
  socket.on('chat message', function (data) {
    io.emit('chat message', data);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});