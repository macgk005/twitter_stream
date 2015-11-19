
var app = require('express')()

var creds = require('./creds').creds,
    twitter = require('twit'),
    client = new twitter(creds),
    target = ['disney'];

var http = require('http').Server(app);

var io = require('socket.io')(http);


http.listen(3000, function(){
  console.log("port: 3000")
});

app.get('/hello', function (req, res) {
  res.send('Hello World!');
})

app.get('/twitter', function(req, res) {
  var stream = client.stream('statuses/filter', { track: target })

  stream.on('tweet', function (tweet) {
    var payload = JSON.stringify(tweet.text)
    console.log({tweets: payload});
    io.sockets.emit('stream',tweet);

  });
})

io.on('connection', function(socket){
  console.log('a user connected');
});
