import engine = require('engine.io');
import http = require('http');

let serverOptions: engine.ServerOptions;
let server: engine.Server;
let httpServer: http.Server;
let attachOptions: engine.AttachOptions;
let serverAttachOptions: engine.ServerAttachOptions;

serverOptions = {};
serverOptions = {
    pingTimeout: 60000,
    pingInterval: 25000,
    upgradeTimeout: 10000,
    maxHttpBufferSize: 10E7,
    transports: ['polling', 'websocket'],
    allowUpgrades: true,
    perMessageDeflate: true,
    httpCompression: true,
    cookie: 'io',
    cookiePath: '/',
    wsEngine: 'ws',
    initialPacket: new Buffer([0, 1, 2, 3, 4, 5]),
    allowRequest: (req, cb) => {
        console.log(req.url);
        cb(null, true);
    }
};
attachOptions = {
    path: '/engine.io' ,
    destroyUpgrade: true,
    destroyUpgradeTimeout: 1000,
};
attachOptions.handlePreflightRequest = true;
attachOptions.handlePreflightRequest = false;
attachOptions.handlePreflightRequest = (server, req, res) => {
    console.log(server.clientsCount);
    console.log(req.httpVersion);
    console.log(res.finished);
};
serverAttachOptions = { ...serverOptions, ...attachOptions };

console.log(engine.protocol);

httpServer = http.createServer();
httpServer.listen(8000);

server = engine(httpServer);
server.close();

server = engine(httpServer, serverOptions);
server.close();

httpServer.close();

server = engine.listen(8000);
server.httpServer!.close();
server.close();

server = engine.listen(8000, serverOptions);
server.httpServer!.close();
server.close();

server = engine.listen(8000, serverOptions, () => {});
server.httpServer!.close();
server.close();

httpServer = http.createServer();
httpServer.listen(8000);
server = engine.attach(httpServer);
server.close();
httpServer.close();

httpServer = http.createServer();
httpServer.listen(8000);
server = engine.attach(httpServer, serverOptions);
server.close();
httpServer.close();

httpServer = http.createServer();
httpServer.listen(8000);
server = engine.attach(httpServer, attachOptions);
server.close();
httpServer.close();

httpServer = http.createServer();
httpServer.listen(8000);
server = engine.attach(httpServer, serverAttachOptions);
server.close();
httpServer.close();

server = new engine.Server();
server.close();

server = new engine.Server();
server.close();

httpServer = http.createServer();
httpServer.listen(8000);
server = new engine.Server(serverOptions);
server.attach(httpServer);
server.attach(httpServer, attachOptions);
server.close();
httpServer.close();

server.generateId = (req)  =>  Math.floor(Math.random() * 100000).toString();

httpServer = http.createServer();
httpServer.listen(8000);
server = new engine.Server(serverOptions);
httpServer.on('upgrade', (req, socket, head) => {
    server.handleUpgrade(req, socket, head);
});
httpServer.on('request', (req, res) => {
    server.handleRequest(req, res);
});

console.log(server.clients);
console.log(server.clientsCount);

server.on('connection', (socket)  =>  {
    console.log(socket.id);
    console.log(socket.server.getMaxListeners());
    console.log(socket.request.headers);
    console.log(socket.upgraded);
    console.log(socket.readyState);
    console.log(server.clients[socket.id].id);

    socket.on('close', (reason, description) => {
        console.log('CLOSE', reason, description && description.message);
    });
    socket.on('message', (message) => {
        console.log('MESSAGE', message);
    });
    socket.on('error', err => {
        console.log('ERROR', err);
    });
    socket.on('flush', buffer => {
        console.log('FLUSH', buffer);
    });
    socket.on('drain', () => {
        console.log('DRAIN');
    });
    socket.on('packet', packet => {
        console.log('PACKET', packet.type, packet.data);
    });
    socket.on('packetCreate', packet => {
        console.log('PACKETCREATE', packet.type, packet.data);
    });

    socket.send('utf 8 string', {compress: false}, () => {
        console.log("SENDCALLBACK");
    });
    socket.send(new Buffer([0, 1, 2, 3, 4, 5])); // binary data
});

server.once('flush', (socket, buffer) => {
    console.log(socket.id);
    console.log(buffer[0].type);
    console.log(buffer[0].options);
    console.log(buffer[0].data);
});
server.once('drain', (socket) => {
    console.log(socket.id);
});

server.close();
httpServer.close();
