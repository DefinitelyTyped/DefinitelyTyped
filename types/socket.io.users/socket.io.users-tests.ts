var express = require('express');
var app = express();
var httpServer = require('http').createServer(app);
var io = require('socket.io')(httpServer);
import ioUsers = require("socket.io.users");



ioUsers.Session(app, {
  "secret": "socket.io.users secret test",
  "resave": true,
  "saveUninitialized": true
});

io.use(ioUsers.Middleware());

var users = ioUsers.Users.of("/");


var userDisconnected = (user: ioUsers.User) => {
  console.log(user.get("username") + " has disconnected from all web browser windows or/and tabs");
}

var setUsername = (user: ioUsers.User, data: any) => {
  console.log(user.ip + ' is for first time visiting our site. They want ' + data.username + ' for username');
  user.set("username", data.username);
}

var joinRoom = (user: ioUsers.User, roomToJoin: string) => {
  console.log(user.get("username") + ' joined to ' + roomToJoin);
}

var leaveRoom = (user: ioUsers.User, roomToJoin: string) => {
  console.log(user.get("username") + ' joined to ' + roomToJoin);
}

var sendMessage = (user: ioUsers.User, data: any) => {
  console.log(user.get("username") + 'send ' + data.content + ' to room: ' + data.room);
}

users.on('disconnected', userDisconnected);
users.on('set username', setUsername);
users.on('join room', joinRoom); //notify other = user joined room or (GLOBAL) room created.
users.on('leave room', leaveRoom); //notify other = user left room or (GLOBAL) room removed.
users.on("send message", sendMessage); //notify other = receive message.

httpServer.on('uncaughtException', function(err: any) {
  console.log(err);
})

var httpPort = 80;
httpServer.listen(httpPort, function() {
  console.log("Server is running on " + httpPort);
});
