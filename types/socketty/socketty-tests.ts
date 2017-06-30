import socketty = require("socketty");

/* Server */

var httpServer = {}; // Assume it's a real HTTP server object

var webSocketServer = socketty.createServer(httpServer);

webSocketServer.connection((socket: socketty.SockettySocket) => {
    console.log('Client connected');
    socket.on('msg', (message?: any) => {
        console.log('Client said' + message);
    });
    socket.disconnect(() => {
        console.log('Goodbye, client!');
    });
});

/* Client */

socketty.connect('ws://localhost:8080', (socket: socketty.SockettySocket) => {
    console.log('Connected !');
    socket.send('msg', 'Hello server!');
});
