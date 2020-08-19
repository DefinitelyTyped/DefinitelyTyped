import * as io from 'socket.io-client';

function testUsingWithNodeHTTPServer() {
    const socket = io('http://localhost');
    socket.on('news', (data: any) => {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });
}

function testUsingWithExpress() {
    const socket = io.connect('http://localhost');
    socket.on('news', (data: any) => {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });
}

function testUsingWithTheExpressFramework() {
    const socket = io.connect('http://localhost');
    socket.on('news', (data: any) => {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });
}

function testRestrictingYourselfToANamespace() {
    const chat = io.connect('http://localhost/chat');
    const news = io.connect('http://localhost/news');

    chat.on('connect', () => {
        chat.emit('hi!');
    });

    news.on('news', () => {
        news.emit('woot');
    });
}

function testSendingAndGettingData() {
    const socket = io('http://localhost/');
    socket.on('connect', () => {
        socket.emit('ferret', 'tobi', (data: any) => {
            console.log(data);
        });
    });
}

function testUsingItJustAsACrossBrowserWebSocket() {
    const socket = io('http://localhost/', {
        transports: ['websocket'],
    });
    socket.on('connect', () => {
        socket.emit('hi');

        socket.on('message', (msg: any) => {});
    });
}

function testSettingReconnectionAttempts() {
    const manager = new io.Manager('http://localhost', {
        reconnection: true,
        timeout: 0,
        reconnectionAttempts: 2,
        reconnectionDelay: 10,
    });
}

function testCreateSocket() {
    const manager = new io.Manager('http://localhost', {
        reconnection: true,
        timeout: 0,
        reconnectionAttempts: 2,
        reconnectionDelay: 10,
    });
    const socket = new io.Socket(manager, '/');
}
