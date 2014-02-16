import io = require('socket.io-client');

var socket = io('http://localhost:80');

socket.on('connect', function () {
    console.log('Connected!');
    socket.send('some test data', function () {
        console.log('Sent some data.');
    });
});
