/// <reference path='zmq.d.ts' />

import zmq = require('zmq');

function test1() {
    var sock = zmq.socket('push');
    sock.bindSync('tcp://127.0.0.1:3000');
    sock.send("some work");
}

function test2() {
    var sock = zmq.socket('push');
    sock.bindSync('tcp://127.0.0.1:3000');
    sock.send(new Buffer(1000));
}

function test3() {
    var sock = zmq.socket('push');
    sock.bindSync('tcp://127.0.0.1:3000');
    sock.send(['hello', 'world']);
    sock.on('message', function (buffer: Buffer) {
        //
    });
}

function test4() {
    var sock = zmq.socket(zmq.types.pull);
    sock.bind('tcp://127.0.0.1', err => {
        sock.send("some work");
    });
}

function test5() {
    var sock = zmq.socket(zmq.types.pull, zmq.options.linger);
    sock.bind('tcp://127.0.0.1', err => {
        sock.send("some work");
    });
    sock.monitor();
    sock.monitor(10);
}
