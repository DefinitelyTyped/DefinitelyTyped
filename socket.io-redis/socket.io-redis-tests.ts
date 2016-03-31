/// <reference path="../node/node.d.ts" />
/// <reference path="../socket.io/socket.io.d.ts"/>
/// <reference path="socket.io-redis.d.ts"/>

import socketIO = require('socket.io');
import ioRedis = require('socket.io-redis');

function testUsingWithNodeHTTPServer() {
    var io = socketIO(3000);
    var adapter = ioRedis({ host: 'localhost', port: 6379 });
    io.adapter(adapter);
}

function testRestrictingYourselfToANamespace() {
    var io = socketIO.listen(80);
    var adapter = ioRedis({ host: 'localhost', port: 6379 });
    io.adapter(adapter);
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
