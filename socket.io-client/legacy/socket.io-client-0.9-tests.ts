/// <reference path="socket.io-client-0.9.d.ts"/>

var socket = io.connect('http://localhost:80');

socket.on('connect', function () {
    console.log('Connected!');
    socket.emit('event', 'some test data', function () {
        console.log('Sent some data.');
    });
});
