import Redis = require("ioredis");
const redis = new Redis();

redis.set('foo', 'bar');
redis.get('foo', (err, result) => {
    console.log(result);
});

// Or using a promise if the last argument isn't a function
redis.get('foo').then((result: any) => {
    console.log(result);
});

// Arguments to commands are flattened, so the following are the same:
redis.sadd('set', 1, 3, 5, 7);
redis.sadd('set', [1, 3, 5, 7]);

// All arguments are passed directly to the redis server:
redis.set('key', '100');
redis.set('key', '100', 'XX');
redis.set('key', '100', 'PX', 10);
redis.set('key', '100', 'EX', 10, 'NX');
redis.set('key', '100', 'NX', 'EX', 10);
redis.set('key', '100', ['EX', 10, 'NX']);
redis.setBuffer('key', '100', 'NX', 'EX', 10);

redis.set('key', '100', (err, data) => {});
redis.set('key', '100', 'XX', (err, data) => {});
redis.set('key', '100', 'PX', 10, (err, data) => {});
redis.set('key', '100', 'EX', 10, 'NX', (err, data) => {});
redis.set('key', '100', ['EX', 10, 'NX'], (err, data) => {});
redis.setBuffer('key', '100', 'NX', 'EX', 10, (err, data) => {});

redis.exists('foo').then(result => result * 1);
redis.exists('foo', ((err, data) => data * 1));

new Redis();       // Connect to 127.0.0.1:6379
new Redis(6380);   // 127.0.0.1:6380
new Redis(6379, '192.168.1.1');       // 192.168.1.1:6379
new Redis('/tmp/redis.sock');
new Redis({
    port: 6379,          // Redis port
    host: '127.0.0.1',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: 'auth',
    db: 0,
    retryStrategy() { return false; },
    showFriendlyErrorStack: true,
    tls: {
        servername: 'tlsservername'
    }
});

const pub = new Redis();
redis.subscribe('news', 'music', (err: any, count: any) => {
    // Now we are subscribed to both the 'news' and 'music' channels.
    // `count` represents the number of channels we are currently subscribed to.

    pub.publish('news', 'Hello world!');
    pub.publish('music', 'Hello again!');
});

redis.on('message', (channel: any, message: any) => {
    // Receive message Hello world! from channel news
    // Receive message Hello again! from channel music
    console.log('Receive message %s from channel %s', message, channel);
});

// There's also an event called 'messageBuffer', which is the same as 'message' except
// it returns buffers instead of strings.
redis.on('messageBuffer', (channel: any, message: any) => {
    // Both `channel` and `message` are buffers.
});

const pipeline = redis.pipeline();
pipeline.set('foo', 'bar');
pipeline.del('cc');
pipeline.hset('hash', 'foo', 4);
pipeline.hget('hash', 'foo');
pipeline.hsetBuffer('hash', 'fooBuffer', 4);
pipeline.hgetBuffer('hash', 'fooBuffer');
pipeline.exec((err, results) => {
    // `err` is always null, and `results` is an array of responses
    // corresponding to the sequence of queued commands.
    // Each response follows the format `[err, result]`.
});

// You can even chain the commands:
redis.pipeline().set('foo', 'bar').del('cc').exec((err, results) => {
});

// `exec` also returns a Promise:
const promise = redis.pipeline().set('foo', 'bar').get('foo').exec();
promise.then((result) => {
    // result === [[null, 'OK'], [null, 'bar']]
});

redis.pipeline().set('foo', 'bar').get('foo', (err, result) => {
    // result === 'bar'
}).exec((err, result) => {
    // result[1][1] === 'bar'
});

redis.pipeline([
    ['set', 'foo', 'bar'],
    ['get', 'foo']
]).exec(() => { /* ... */ });

Redis.Command.setArgumentTransformer('set', args => {
    return args;
});

Redis.Command.setReplyTransformer('get', (result: any) => {
    return result;
});

// multi
redis.multi().set('foo', 'bar').set('foo', 'baz').get('foo', (err, result) => {
    // result === 'QUEUED'
}).exec((err, results) => {
    // results = [[null, 'OK'], [null, 'OK'], [null, 'baz']]
});

redis.multi([
    ['set', 'foo', 'bar'],
    ['get', 'foo']
]).exec((err, results) => {
    // results = [[null, 'OK'], [null, 'bar']]
});

redis.Promise.onPossiblyUnhandledRejection((error) => {
});

const keys = ['foo', 'bar'];
redis.mget(...keys);

new Redis.Cluster([
    'localhost'
]);

new Redis.Cluster([
    6379
]);

new Redis.Cluster([{
    host: 'localhost'
}]);

new Redis.Cluster([{
    port: 6379
}]);

new Redis.Cluster([{
    host: 'localhost',
    port: 6379
}]);

// ClusterRetryStrategy can return non-numbers to stop retrying
new Redis.Cluster([], {
    clusterRetryStrategy: (times: number) => null
});

new Redis.Cluster([], {
    clusterRetryStrategy: (times: number) => 1
});
