import zeromq = require('zeromq');

function test1() {
    const sock = zeromq.socket('push');
    sock.bindSync('tcp://127.0.0.1:3000');
    sock.unbindSync('tcp://127.0.0.1:3000');
    sock.send("some work");
}

function test2() {
    const sock = zeromq.socket('push');
    sock.bindSync('tcp://127.0.0.1:3000');
    sock.send(new Buffer(1000));
}

function test3() {
    const sock = zeromq.socket('push');
    sock.bindSync('tcp://127.0.0.1:3000');
    sock.send(['hello', 'world']);
    sock.on('message', (buffer1: Buffer, buffer2: Buffer) => { });
}

function test4() {
    const sock = zeromq.socket(zeromq.types.pull);
    sock.bind('tcp://127.0.0.1', err => {
        sock.send("some work");
    });
    sock.unbind('tcp://127.0.0.1', err => {
        //
    });
}

function test5() {
    const sock = zeromq.socket(zeromq.types.pull, zeromq.options.linger);
    sock.bind('tcp://127.0.0.1', err => {
        sock.send("some work");
    });
    sock.monitor();
    sock.monitor(10);
    sock.monitor(10, 2);
}

function test6() {
    const sock = zeromq.socket(zeromq.types.dealer);
    sock.bind('tcp://127.0.0.1', err => {
        sock.send("some work");
    });
    sock.pause();
    sock.resume();
}
