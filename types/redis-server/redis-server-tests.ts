import RedisServer = require('redis-server');

(async () => {
    new RedisServer();
    new RedisServer(1000);
    new RedisServer('1000');
    new RedisServer({});

    const server = new RedisServer({
        bin: 'bin',
        conf: 'conf',
        port: 1000,
        slaveof: 'slaveof',
    });

    // $ExpectType void
    await server.open((err) => {
        err; // $ExpectType Error | null
    });
    // $ExpectType void
    await server.close((err) => {
        err; // $ExpectType Error | null
    });

    server.isOpening; // $ExpectType boolean
    server.isClosing; // $ExpectType boolean
    server.isRunning; // $ExpectType boolean
})();
