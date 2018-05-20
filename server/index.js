const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/', function(req, res) {
  res.send('<h1>Hello world</h1>');
});

app.post('/api/blogs', function(req, res) {
  console.log(req.body);
  Blogs.create(req.body);
  res.send('yo')
});

app.patch('/api/blogs/:blogId', function(req, res) {
  const query = { _id: req.params.blogId};
  Blogs.update(query, {$inc: {'views': 1}}).
    exec(function (err, posts) {
      if (err) {
        console.log('error');
      } else {
        res.send(posts)
      }
    })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
