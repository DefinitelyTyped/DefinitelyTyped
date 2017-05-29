import socketIO = require('socket.io');
import ioRedis = require('socket.io-redis');
import redis = require('redis');

function testUsingWithNodeHTTPServer() {
    var io = socketIO(3000);
    var adapter = ioRedis("http://localhost");
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
}

function testErrorHandling() {
    var io = socketIO.listen(80);
    var adapter = ioRedis("http://localhost");
    adapter.pubClient.on('error', function () {
        console.log('pubClient error');
    });
    adapter.subClient.on('error', function() {
        console.log('subClient error');
    });
    io.adapter(adapter);
}

function testCustomClientAuth() {
    var io = socketIO.listen(80);
    var pub: redis.RedisClient = redis.createClient(8080, 'localhost', { auth_pass: 'pwd' });
    var sub: redis.RedisClient = redis.createClient(8081, 'localhost', { return_buffers: true, auth_pass: 'pwd' });
    var adapter = ioRedis({ pubClient: pub, subClient: sub });
    io.adapter(adapter);
}
