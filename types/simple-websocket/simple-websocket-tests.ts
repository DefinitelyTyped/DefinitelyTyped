import Socket = require("simple-websocket");

if (Socket.WEBSOCKET_SUPPORT) {
  const socket = new Socket('ws://echo.websocket.org');
  socket.on('connect', () => {
    // socket is connected!
    socket.send('sup!');
  });

  socket.on('data', (data: string | Buffer) => {
    console.log('got message: ' + data);
  });

  socket.on('error', (err: Error) => {
    socket.destroy(err);
  });
}

import Server = require("simple-websocket/server");

const server = new Server({ port: 8080 });

server.on('connection', (socket: Socket) => {
  socket.write('pong');
  socket.on('data', (data: string | Buffer) => {});
  socket.on('close', () => {});
  socket.on('error', (err: Error) => {});
});

server.close();
