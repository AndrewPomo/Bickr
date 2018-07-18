const express = require('express');
const http = require('http');
const db = require('../db/index');
const bcrypt = require('bcrypt');
const bluebird = require('bluebird');
const bodyParser = require('body-parser')
const path = require('path')
// const redis = require('redis');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// bluebird.promisifyAll(redis.RedisClient.prototype);
// bluebird.promisifyAll(redis.Multi.prototype);
// const redisClient = redis.createClient(6379, 'localhost');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);

passport.use(new LocalStrategy(
  function(email, password, cb) {
    db.query('SELECT id, username, password, type FROM users WHERE username=$1', [username], (err, result) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Could\'nt find this email in our records.' });
      }

      if (!user.validPassword(password)) {
        return done(null, false, { message: 'That\'s not the right password.' });
      }
      return done(null, user);
    })
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.query('SELECT * FROM users WHERE id=$1', [id], (err, result) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

app.use(bodyParser.json())

server.listen(3000);

app.use(express.static(__dirname + '/../dist'));

app.use(passport.initialize());
app.use(passport.session());

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/../dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
    console.log('hello');
  })
})

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

app.post('/signup', function(req, res) {
  const userInfo = req.body
  bcrypt.hash(userInfo.password, 10, function(err, hash) {
    db.none('INSERT INTO users(username, email, password) VALUES(${username}, ${email}, ${password})', {
      username: userInfo.username,
      email: userInfo.email,
      password: hash
    })
    .then(response => {
      res.send('success');
    })
  });
});

app.get('/newConvo', function(req, res) {
  // res.send();
  // find compatible users.
  // put them in a room.
});

// io.on('connection', function (socket) {
//   console.log('user connected');
//   socket.on('chat message', function (data) {
//     io.emit('chat message', data);
//   });
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });