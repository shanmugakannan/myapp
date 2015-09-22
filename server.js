// modules =================================================
var express        = require('express');
var app            = express();
var socketio      	   = require('socket.io');

// set port
var port = process.env.PORT || 8080; 

// set the static files location  
app.use(express.static(__dirname + '/')); 

// routes ==================================================
var route = require('./app/routes');
route(app); 

// start app ===============================================
var server = app.listen(port); 

//start chat server   
var io = socketio.listen(server);           

//Chat client connection manager
io.on('connection', function(socket){
	 socket.emit('emitting', 'msg from server!');
  socket.on('received', function(msg){
    console.log('message: ' + msg);
  });
});

// Console.log                  
console.log('MyApp Runs on  ' + port);

