import socketio = require('socket.io');
var http;

var io = socketio(http);

socketio.listen(80).sockets.

var socketManager = socketio.listen(80);

socketManager.sockets.on('connection', socket => {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', data => {
		console.log(data);
	});
});

// Storing data Associated to a client. 
// Server side sample 
socketio.listen(80).sockets.on('connection', function (socket) {
    socket.on('set nickname', function (name) {
        socket.set('nickname', name, function () { socket.emit('ready'); });
    });

    socket.on('msg', function () {
        socket.get('nickname', function (err, name) {
            console.log('Chat message by ', name);
        });
    });
});