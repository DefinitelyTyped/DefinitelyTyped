import Socket = require('simple-websocket');

if (Socket.WEBSOCKET_SUPPORT) {
  const socket = new Socket('ws://echo.websocket.org');
  socket.on('connect', () => {
    // socket is connected!
    socket.send('sup!');
  });

  socket.on('data', (data: string | Buffer) => {
    console.log('got message: ' + data);
    // socket.destroy(() => {
    //   console.log('socket destroyed');
    // });
  });
}

import Server = require('simple-websocket/server');

const server = new Server({ port: 8080 }); // see `ws` docs for other options

server.on('connection', (socket: Socket) => {
  socket.write('pong');
  socket.on('data', (data: string | Buffer) => {});
  socket.on('close', () => {});
  socket.on('error', (err: Error) => {});
});

server.close();
