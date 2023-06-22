import ioBuilder = require('socket.io');
const io = ioBuilder();
import middlewareBuilder = require('socketio-wildcard');
const middleware = middlewareBuilder();

io.use(middleware);

io.on('connection', (socket) => {
  socket.on('*', (packet) => {
    packet.data[0] === 'foo';
    packet.data[1] === 'bar';
    packet.data[2] === 'baz';
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
