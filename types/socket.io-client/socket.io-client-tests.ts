import * as io from 'socket.io-client';

function testUsingWithNodeHTTPServer() {
    var socket = io('http://localhost');
    socket.on('news', function (data: any) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });
}

function testUsingWithExpress() {
    var socket = io.connect('http://localhost');
    socket.on('news', function (data: any) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });
}

function testUsingWithTheExpressFramework() {
    var socket = io.connect('http://localhost');
    socket.on('news', function (data: any) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });
}

function testRestrictingYourselfToANamespace() {
    var chat = io.connect('http://localhost/chat'),
        news = io.connect('http://localhost/news');

    chat.on('connect', function () {
        chat.emit('hi!');
    });

    news.on('news', function () {
        news.emit('woot');
    });
}

function testSendingAndGettingData() {
    var socket = io('http://localhost/');
    socket.on('connect', function () {
        socket.emit('ferret', 'tobi', function (data: any) {
            console.log(data);
        });
    });
}

function testUsingItJustAsACrossBrowserWebSocket() {
    var socket = io('http://localhost/', {
        transports: ['websocket']
    });
    socket.on('connect', function () {
        socket.emit('hi');

        socket.on('message', function (msg: any) {});
    });
}

function testSettingReconnectionAttempts() {
    var manager = new io.Manager('http://localhost', {
        reconnection: true,
        timeout: 0,
        reconnectionAttempts: 2,
        reconnectionDelay: 10,
    });
}


function testCreateSocket() {
    var manager = new io.Manager('http://localhost', {
        reconnection: true,
        timeout: 0,
        reconnectionAttempts: 2,
        reconnectionDelay: 10,
    });
    var socket = new io.Socket(manager, '/');
}
