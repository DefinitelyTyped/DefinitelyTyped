import io = require('socket.io');

var socketManager = io.listen(80);

socketManager.sockets.on('connection', socket => {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', data => {
		console.log(data);
	});
});