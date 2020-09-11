import socketIO = require('socket.io');

function testUsingWithClassConstructor() {
    var Server = socketIO;
    var io: socketIO.Server = new Server();
}

function testUsingWithClassConstructorAndNodeHTTPServer() {
    var app = require('http').createServer();
    var Server = socketIO;
    var io: socketIO.Server = new Server(app);
}

function testUsingWithWithClassConstructorAndOptions() {
    var app = require('express')();
    var httpServer = require('http').Server(app);
    var Server = socketIO;
    var io = new Server(httpServer, { wsEngine: 'ws' });
}

function testUsingWithNodeHTTPServer() {
    var app = require('http').createServer(handler);
    var io: socketIO.Server = socketIO(app);
    var fs = require('fs');

    app.listen(80);

    function handler(req: any, res: any) {
        fs.readFile(__dirname + '/index.html', function (err: any, data: any) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
    }

    io.on('connection', function (socket) {
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data: any) {
            console.log(data);
        });
    });
}

function testUsingWithExpress() {
    var app = require('express')();
    var server = require('http').Server(app);
    var io = socketIO(server);

    server.listen(80);

    app.get('/', function (req: any, res: any) {
        res.sendfile(__dirname + '/index.html');
    });

    io.on('connection', function (socket) {
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data: any) {
            console.log(data);
        });
    });
}

function testUsingWithOptions() {
    var app = require('express')();
    var server = require('http').Server(app);
    var io = socketIO(server, { wsEngine: 'ws' });
}

function testUsingWithTheExpressFramework() {
    var app = require('express').createServer();
    var io = socketIO(app);

    app.listen(80);

    app.get('/', function (req: any, res: any) {
        res.sendfile(__dirname + '/index.html');
    });

    io.on('connection', function (socket) {
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data: any) {
            console.log(data);
        });
    });
}

function testSendingAndReceivingEvents() {
    var io = socketIO(80);

    io.on('connection', function (socket) {
        io.emit('this', { will: 'be received by everyone' });

        socket.on('private message', function (from: any, msg: any) {
            console.log('I received a private message by ', from, ' saying ', msg);
        });

        socket.on('disconnect', function () {
            io.sockets.emit('user disconnected');
        });
    });
}

function testRestrictingYourselfToANamespace() {
    var io = socketIO.listen(80);
    var chat = io.of('/chat').on('connection', function (socket) {
        socket.emit('a message', {
            that: 'only',
            '/chat': 'will get',
        });
        chat.emit('a message', {
            everyone: 'in',
            '/chat': 'will get',
        });
    });

    var news = io.of('/news').on('connection', function (socket) {
        socket.emit('item', { news: 'item' });
    });
}

function testDynamicNamespace() {
    var io = socketIO.listen(80);
    var dynamic = io.of(/^\/dynamic-\d+$/).on('connection', function (socket) {
        socket.emit('item', { dynamic: 'item' });
    });
}

function testSendingVolatileMessages() {
    var io = socketIO.listen(80);

    io.sockets.on('connection', function (socket) {
        var tweets = setInterval(function () {
            socket.volatile.emit('bieber tweet', {});
        }, 100);

        socket.on('disconnect', function () {
            clearInterval(tweets);
        });
    });
}

function testSendingAndGettingData() {
    var io = socketIO.listen(80);

    io.sockets.on('connection', function (socket) {
        socket.on('ferret', function (name: any, fn: any) {
            fn('woot');
        });
    });
}

function testBroadcastingMessages() {
    var io = socketIO.listen(80);

    io.sockets.on('connection', function (socket) {
        socket.broadcast.emit('user connected');
    });
}

function testUsingItJustAsACrossBrowserWebSocket() {
    var io = socketIO.listen(80);

    io.sockets.on('connection', function (socket) {
        socket.on('message', function () { });
        socket.on('disconnect', function () { });
    });
}

function testSocketConnection() {
    var io = socketIO.listen(80);

    io.sockets.on('connection', function (socket) {
        console.log(socket.client.conn === socket.conn);
        console.log(socket.client.request.httpVersion);
        console.log(socket.conn.id);
        console.log(socket.conn.upgraded);
        console.log(socket.conn.readyState);

        socket.on('packet', function (message: string, ping: string) {
            console.log(message, ping);
        });
    });
}

function testClosingServerWithCallback() {
    var io = socketIO.listen(80);
    io.close(function () { });
}

function testClosingServerWithoutCallback() {
    var io = socketIO.listen(80);
    io.close();
}

function testLocalServerMessages() {
    var io = socketIO.listen(80);
    io.local.emit('local', 'Local data');
}

function testVolatileServerMessages() {
    var io = socketIO.listen(80);
    io.volatile.emit('volatile', 'Lost data');
}

function testSocketUse() {
    var io = socketIO.listen(80);
    io.on('connection', socket => {
        socket.use((packet, next) => {
            console.log(packet);
        });
    });
}

function testServerEventEmitter() {
    var io = socketIO.listen(80);
    const fn = () => { };
    io.addListener('event', fn);
    io.emit('event', 'payload');
    io.eventNames();
    io.getMaxListeners();
    io.listenerCount('event');
    io.listeners('event');
    io.off('event', fn);
    io.on('event', fn);
    io.once('event', fn);
    io.prependListener('event', fn);
    io.prependOnceListener('event', fn);
    io.removeAllListeners('event');
    io.removeAllListeners();
    io.removeListener('event', fn);
    io.setMaxListeners(50);
    io.rawListeners('event');
}

function testOverwriteGenerateId() {
    var io = socketIO.listen(80);
    var hash = new Date().toLocaleString();
    io.use((socket, next) => {
        io.engine.generateId = () => {
            return hash;
        }
        next();
    })
    .on('connection', (socket) => {
        console.log(socket.id);
        if (socket.id !== hash) {
            throw new Error("GenerateId has not been overwritten");
        }
    });
}
