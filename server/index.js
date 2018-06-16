const express = require('express');
const http = require('http');
const db = require('../db/index');
const bluebird = require('bluebird');
const redis = require('redis');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
const redisClient = redis.createClient(6379, 'localhost');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);

server.listen(3000);

app.use(express.static(__dirname + '/../dist'));

app.post('/newUser', function(req, res) {
  // using signup form data
  // hash user password
  // add user to db.
});

// app.post('/userViews', function(req, res) {
//   // using signup form data
//   // hash user password
//   // add user to db.
// });

app.get('/newConvo', function(req, res) {
  // res.send();
  // find compatible users.
  // put them in a room.
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