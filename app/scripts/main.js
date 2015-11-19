/* jshint devel:true */
console.log('\'Allo \'Allo!');

// var socket = io.connect();
// socket.on('data', function(tweet){
//   $("#data").append(tweet.text);
// });

var socket = io.connect();
console.log(socket);
socket.on("connect", function () {
    console.log("Connected!");
});
// socket.on('stream', function(tweet){
//   console.log(tweet);
// });

// $.ajax({
//   // url: "/twitter",
//   url: "http://localhost:3000/twitter",
//   type: "GET",
//   data: {},
//   dataType: 'json',

//   success: function (json) {
//     console.log('oh hai');
//     console.log(json);
//   }
// });

