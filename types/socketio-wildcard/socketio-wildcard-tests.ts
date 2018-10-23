import ioBuilder = require('socket.io');
const io = ioBuilder();
import middlewareBuilder = require('socketio-wildcard');
const middleware = middlewareBuilder();

io.use(middleware);

io.on('connection', (socket) => {
  socket.on('*', (packet) => {
    // client.emit('foo', 'bar', 'baz')
    packet.data === ['foo', 'bar', 'baz'];
  });
});

io.listen(8000);

import clientIo = require('socket.io-client');
const socket = clientIo('http://localhost');
import patchBuilder = require('socketio-wildcard');
const patch = patchBuilder(clientIo.Manager);
patch(socket);

socket.on('*', () => {
});
