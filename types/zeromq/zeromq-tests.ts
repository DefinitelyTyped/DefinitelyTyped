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
    const sock = zeromq.socket(zeromq.types.pull, {
        linger: 1,
    });
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

function test7() {
    const xPubSocket = zeromq.socket('xpub');
    const xPSubSocket = zeromq.socket('xsub');

    xPubSocket.bindSync(`tcp://127.0.0.1:3000`);
    xPSubSocket.bindSync('tcp://127.0.0.1:3001');

    zeromq.proxy(xPubSocket, xPSubSocket);
}

function test8() {
    // named socket types with socket
    zeromq.socket('dealer');
    zeromq.socket('pub');
    zeromq.socket('pair');
    zeromq.socket('pull');
    zeromq.socket('push');
    zeromq.socket('rep');
    zeromq.socket('req');
    zeromq.socket('router');
    zeromq.socket('stream');
    zeromq.socket('sub');
    zeromq.socket('xpub');
    zeromq.socket('xrep');
    zeromq.socket('xsub');

    // named socket types with createSocket
    zeromq.createSocket('dealer');
    zeromq.createSocket('pub');
    zeromq.createSocket('pair');
    zeromq.createSocket('pull');
    zeromq.createSocket('push');
    zeromq.createSocket('rep');
    zeromq.createSocket('req');
    zeromq.createSocket('router');
    zeromq.createSocket('stream');
    zeromq.createSocket('sub');
    zeromq.createSocket('xpub');
    zeromq.createSocket('xrep');
    zeromq.createSocket('xsub');

    // number socket type
    let sock = zeromq.socket(1234);
    sock = zeromq.createSocket(1234);

    // test string / buffer based params
    sock.setsockopt('curve_publickey', '1234');
    sock.setsockopt('curve_publickey', Buffer.from('1234'));

    sock.setsockopt('curve_secretkey', '1234');
    sock.setsockopt('curve_secretkey', Buffer.from('1234'));

    sock.setsockopt('curve_serverkey', '1234');
    sock.setsockopt('curve_serverkey', Buffer.from('1234'));

    sock.setsockopt('zap_domain', '1234');

    sock.curve_publickey = '1234';
    sock.curve_publickey = Buffer.from('1234');

    sock.curve_secretkey = '1234';
    sock.curve_secretkey = Buffer.from('1234');

    sock.curve_serverkey = '1234';
    sock.curve_serverkey = Buffer.from('1234');

    sock.zap_domain = '1234';

    // send with callback
    sock.send('test_string', 1, (err?: Error) => { });

    // socket with options
    zeromq.socket('pub', {
        _fd: 1,
        _ioevents: 1,
        _receiveMore: 1,
        _subscribe: 1,
        _unsubscribe: 1,
        affinity: 1,
        backlog: 1,
        connect_timeout: 1,
        curve_publickey: '1',
        curve_secretkey: '1',
        curve_server: 1,
        curve_serverkey: '1',
        heartbeat_ivl: 1,
        heartbeat_timeout: 1,
        heartbeat_ttl: 1,
        hwm: 1,
        identity: 1,
        last_endpoint: 1,
        linger: 1,
        mcast_loop: 1,
        mechanism: 1,
        plain_password: '1',
        plain_server: 1,
        plain_username: '1',
        rate: 1,
        rcvbuf: 1,
        reconnect_ivl: 1,
        recovery_ivl: 1,
        sndbuf: 1,
        swap: 1,
        zap_domain: '1'
    });

    zeromq.createSocket('pub', {
        _fd: 1,
        _ioevents: 1,
        _receiveMore: 1,
        _subscribe: 1,
        _unsubscribe: 1,
        affinity: 1,
        backlog: 1,
        connect_timeout: 1,
        curve_publickey: '1',
        curve_secretkey: '1',
        curve_server: 1,
        curve_serverkey: '1',
        heartbeat_ivl: 1,
        heartbeat_timeout: 1,
        heartbeat_ttl: 1,
        hwm: 1,
        identity: 1,
        last_endpoint: 1,
        linger: 1,
        mcast_loop: 1,
        mechanism: 1,
        plain_password: '1',
        plain_server: 1,
        plain_username: '1',
        rate: 1,
        rcvbuf: 1,
        reconnect_ivl: 1,
        recovery_ivl: 1,
        sndbuf: 1,
        swap: 1,
        zap_domain: '1'
    });

    // context
    zeromq.Context.getMaxSockets().toFixed();
    zeromq.Context.getMaxThreads().toFixed();

    zeromq.Context.setMaxSockets(1);
    zeromq.Context.setMaxThreads(1);

    const ctx = new zeromq.Context();
    ctx.close();

    // Socket.closed getter
    sock.closed;
}
