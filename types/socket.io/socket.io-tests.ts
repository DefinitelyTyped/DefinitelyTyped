import socketIO = require('socket.io');

function testUsingWithNodeHTTPServer() {
    var app = require('http').createServer(handler);
    var io = socketIO(app);
    var fs = require('fs');

    app.listen(80);

    function handler(req: any, res: any) {
        fs.readFile(__dirname + '/index.html',
            function (err: any, data: any) {
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
    var chat = io
        .of('/chat')
        .on('connection', function (socket) {
            socket.emit('a message', {
                that: 'only'
                , '/chat': 'will get'
            });
            chat.emit('a message', {
                everyone: 'in'
                , '/chat': 'will get'
            });
        });

    var news = io
        .of('/news')
        .on('connection', function (socket) {
            socket.emit('item', { news: 'item' });
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

		socket.on('packet', function(message :string, ping :string){
			console.log(message, ping);
		});;
    });
}

function testClosingServerWithCallback() {
    var io = socketIO.listen(80);
    io.close(function() {
    });
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
