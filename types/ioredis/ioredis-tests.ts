import * as Redis from "ioredis";
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
redis.set('key', '100', 'EX', 10);

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
    showFriendlyErrorStack: true
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

const keys = [ 'foo', 'bar' ];
redis.mget(...keys);
