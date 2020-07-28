import Redis = require('ioredis');
import { Command } from 'ioredis';

const redis = new Redis();

const cb = (err: Error | null, result: any) => {
    if (err !== null) {
        console.log(result);
    }
};
const cbNumber = (err: Error | null, result: any) => {
    if (err !== null) {
        console.log(result * 1);
    }
};

redis.set('foo', 'bar');
redis.get('foo', cb);

// Static check that returned value is always a number
redis.del('foo', 'bar').then(result => result * 1);

// Test OverloadedListCommand
redis.del(['foo', 'bar']).then(result => result * 1);
redis.del('foo', 'bar', cbNumber);
redis.del(['foo', 'bar'], cbNumber);
redis.brpop('list', 0).then(console.log);
redis.brpop('listA', 'listB', 0).then(console.log);
redis.brpop(['listA', 'listB', 0]).then(console.log);
redis.brpop('list', 0, cb);
redis.brpop('listA', 'listB', 0, cb);
redis.brpop(['listA', 'listB', 0], cb);
redis.subscribe('1', cbNumber);
redis.subscribe('1', '2', cbNumber);
redis.subscribe('1', '2', '3', cbNumber);
redis.subscribe('1', '2', '3', '4', cbNumber);
redis.subscribe('1', '2', '3', '4', '5', cbNumber);
redis.subscribe('1', '2', '3', '4', '5', '6', cbNumber);
redis.subscribe('1').then(console.log);
redis.subscribe('1', '2').then(console.log);
redis.subscribe('1', '2', '3').then(console.log);
redis.subscribe('1', '2', '3', '4').then(console.log);
redis.subscribe('1', '2', '3', '4', '5').then(console.log);
redis.subscribe('1', '2', '3', '4', '5', '6').then(console.log);
redis.unsubscribe('1', '2', '3', '4', '5', '6', cbNumber);
redis.unsubscribe('1', '2', '3', '4', '5', '6').then(console.log);
redis.unsubscribe(cbNumber);
redis.unsubscribe().then(console.log);
redis.psubscribe('1', '2', '3', '4', '5', '6', cbNumber);
redis.psubscribe('1', '2', '3', '4', '5', '6').then(console.log);
redis.punsubscribe('1', '2', '3', '4', '5', '6', cbNumber);
redis.punsubscribe('1', '2', '3', '4', '5', '6').then(console.log);
redis.punsubscribe(cbNumber);
redis.punsubscribe().then(console.log);
redis.mget('key').then(console.log);
redis.mget('key', cbNumber);
redis.mget('key', 'foo', 'bar').then(console.log);
redis.mget('key', 'foo', 'bar', cbNumber);
redis.pfcount('key').then(console.log);
redis.pfcount('key', cbNumber);
redis.pfcount('key', 'foo', 'bar').then(console.log);
redis.pfcount('key', 'foo', 'bar', cbNumber);
redis.pfmerge('key', 'foo', 'bar').then(console.log);
redis.pfmerge('key', 'foo', 'bar', cb);
redis.sinter('keya', 'keyb').then(console.log);
redis.sinter('keya', 'keyb', cb);
redis.sunion('keya', 'keyb').then(console.log);
redis.sunion('keya', 'keyb', cb);

// Test OverloadedKeyCommand
redis.hdel('foo', 'bar').then(console.log);
redis.hdel('foo', 'bar', cbNumber);
redis.hdel('foo', '1').then(console.log);
redis.hdel('foo', '1', '2').then(console.log);
redis.hdel('foo', '1', '2', '3').then(console.log);
redis.hdel('foo', '1', '2', '3', '4').then(console.log);
redis.hdel('foo', '1', '2', '3', '4', '5').then(console.log);
redis.hdel('foo', '1', '2', '3', '4', '5', '6').then(console.log);
redis.hdel('foo', '1', cbNumber);
redis.hdel('foo', '1', '2', cbNumber);
redis.hdel('foo', '1', '2', '3', cbNumber);
redis.hdel('foo', '1', '2', '3', '6', cbNumber);
redis.hdel('foo', '1', '2', '3', '4', '5', cbNumber);
redis.hdel('foo', '1', '2', '3', '4', '5', '6', cbNumber);
redis.rpush('key', 'foo').then(console.log);
redis.rpush('key', 'foo', cbNumber);
redis.rpushBuffer('key', new Buffer('foo', 'utf8')).then(console.log);
redis.rpushBuffer('key', new Buffer('foo', 'utf8'), cbNumber);
redis.lpush('key', 'foo').then(console.log);
redis.lpush('key', 'foo', cbNumber);
redis.lpushBuffer('key', new Buffer('foo', 'utf8')).then(console.log);
redis.lpushBuffer('key', new Buffer('foo', 'utf8'), cbNumber);
redis.rpushx('key', 'foo').then(console.log);
redis.rpushx('key', 'foo', cbNumber);
redis.lpushx('key', 'foo').then(console.log);
redis.lpushx('key', 'foo', cbNumber);
redis.sadd('key', '1', '2').then(console.log);
redis.sadd('key', '1', '2', cbNumber);
redis.srem('key', '1', '2').then(console.log);
redis.srem('key', '1', '2', cbNumber);
redis.sinterstore('destination', 'key1', 'key2').then(console.log);
redis.sinterstore('destination', 'key1', 'key2', cbNumber);
redis.sunionstore('destination', 'key1', 'key2').then(console.log);
redis.sunionstore('destination', 'key1', 'key2', cbNumber);
redis.zadd('myset', 1, 'member').then(console.log);
redis.zadd('myset', 1, 'member', cb);
redis.zadd('myset', 1, 'member', 2, 'member2').then(console.log);
redis.zadd('myset', 1, 'member', 2, 'member2', cb);
redis.zadd('myset', '1', 'member').then(console.log);
redis.zadd('myset', '1', 'member', cb);
redis.zadd('myset', 'NX', 1, 'member').then(console.log);
redis.zadd('myset', 'NX', 1, 'member', cb);
redis.zadd('myset', 'NX', 'CH', 1, 'member').then(console.log);
redis.zadd('myset', 'NX', 'CH', 1, 'member', cb);
redis.zadd('myset', 'NX', 'CH', 'INCR', 1, 'member').then(console.log);
redis.zadd('myset', 'NX', 'CH', 'INCR', 1, 'member', cb);
redis.zrem('myset', 'member').then(console.log);
redis.zrem('myset', 'member', cbNumber);
redis.zrem('myset', 'member', 'member2').then(console.log);
redis.zrem('myset', 'member', 'member2', cbNumber);
redis.zpopmin('myset', cb);
redis.zpopmin('myset', 1, cb);
redis.zpopmin('myset', 1).then(console.log);
redis.zpopmin('myset').then(console.log);
redis.zpopmax('myset', cb);
redis.zpopmax('myset', 1, cb);
redis.zpopmax('myset', 1).then(console.log);
redis.zpopmax('myset').then(console.log);
redis.sort('list').then(console.log);
redis.sort('list', cb);
redis.sort('list', 'LIMIT', 0, 10).then(console.log);
redis.sort('list', 'LIMIT', 0, 10, cb);
redis.zunionstore('destination', 2, 'set1', 'set2', 'WEIGHTS', 2, 3).then(console.log);
redis.zunionstore('destination', 2, 'set1', 'set2', 'WEIGHTS', 2, 3, cbNumber);
redis.zinterstore('destination', 2, 'set1', 'set2', 'WEIGHTS', 2, 3).then(console.log);
redis.zinterstore('destination', 2, 'set1', 'set2', 'WEIGHTS', 2, 3, cbNumber);
redis.sscan('key', 0, 'MATCH', '*foo*', 'COUNT', 100).then(console.log);
redis.sscan('key', 0, 'MATCH', '*foo*', 'COUNT', 100, cb);
redis.hscan('key', 0, 'MATCH', '*foo*', 'COUNT', 100).then(console.log);
redis.hscan('key', 0, 'MATCH', '*foo*', 'COUNT', 100, cb);
redis.zscan('key', 0, 'MATCH', '*foo*', 'COUNT', 100).then(console.log);
redis.zscan('key', 0, 'MATCH', '*foo*', 'COUNT', 100, cb);
redis.pfadd('key', 'a', 'b', 'c').then(console.log);
redis.pfadd('key', 'a', 'b', 'c', cbNumber);

// Test OverloadedKeyedHashCommand
redis.hmset('foo', '1', '2', '3', 4, '5', new Buffer([])).then(console.log);
redis.hmset('foo', '1', '2', '3', 4, '5', new Buffer([]), cb);
redis.hmset('foo', '1', '2', '3', 4).then(console.log);
redis.hmset('foo', '1', '2', '3', 4);
redis.hmset('foo', '1', '2').then(console.log);
redis.hmset('foo', '1', ['1', 2]);
redis.hmset('foo', { a: 'b', c: 4 }).then(console.log);
redis.hmset('foo', { a: 'b', c: 4 }, cb);
redis.hmset('foo', new Map<string, number>(), cb);

// Test OverloadedHashCommand
redis.mset('1', '2', '3', 4, '5', new Buffer([])).then(console.log);
redis.mset('1', '2', '3', 4, '5', new Buffer([]), cb);
redis.mset('1', '2', '3', 4).then(console.log);
redis.mset('1', '2', '3', 4);
redis.mset('1', '2').then(console.log);
redis.mset('1', ['1', 2]);
redis.mset({ a: 'b', c: 4 }).then(console.log);
redis.mset({ a: 'b', c: 4 }, cbNumber);
redis.mset(new Map<string, number>());
redis.msetnx('1', '2', '3', 4, '5', new Buffer([])).then(console.log);
redis.msetnx('1', '2', '3', 4, '5', new Buffer([]), cbNumber);
redis.msetnx('1', '2', '3', 4).then(console.log);
redis.msetnx('1', '2', '3', 4);
redis.msetnx('1', '2').then(console.log);
redis.msetnx('1', ['1', 2]);
redis.msetnx({ a: 'b', c: 4 }).then(console.log);
redis.msetnx({ a: 'b', c: 4 }, cbNumber);
redis.msetnx(new Map<string, number>(), cbNumber);

// Test OverloadedEvalCommand
redis.eval('script', 2, 'foo', 'bar').then(console.log);
redis.eval('script', 2, 'foo', 'bar', cb);
redis.eval('script', 2, ['foo', 'bar']).then(console.log);
redis.eval('script', 2, ['foo', 'bar'], cb);
redis.evalsha('script', 2, 'foo', 'bar').then(console.log);
redis.evalsha('script', 2, 'foo', 'bar', cb);
redis.evalsha('script', 2, ['foo', 'bar']).then(console.log);
redis.evalsha('script', 2, ['foo', 'bar'], cb);
// Test for redlock compatibility
redis.eval(['lockScript', 1, 'resource', 'value'], cb);
redis.eval(['lockScript', 1, 'resource', 'value']).then(console.log);
redis.evalsha(['lockScript', 1, 'resource', 'value'], cb);
redis.evalsha(['lockScript', 1, 'resource', 'value']).then(console.log);

// Or using a promise if the last argument isn't a function
redis.get('foo').then((result: string | null) => {
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
redis.exists('foo', (err, data) => data * 1);

// Should support usage of Buffer
redis.set(Buffer.from('key'), '100');
redis.setBuffer(Buffer.from('key'), '100', 'NX', 'EX', 10);

const listData = ['foo', 'bar', 'baz'];
listData.forEach(value => {
    redis.rpushBuffer('bufferlist', Buffer.from(value));
});
redis.lpopBuffer('bufferlist', (err, result) => {
    if (result.toString() !== listData[0]) {
        console.log(result.toString());
    }
});
redis.lrangeBuffer('bufferlist', 0, listData.length - 2, (err, results) => {
    results.forEach((value, index) => {
        if (value.toString() !== listData[index + 1]) {
            console.log(value.toString());
        }
    });
});

// Test OverloadedSubCommand
redis.cluster('INFO').then(console.log);
redis.cluster('INFO', cb);
redis.cluster('ADDSLOTS', 1, 2, 3).then(console.log);
redis.cluster('ADDSLOTS', 1, 2, 3, cb);
redis.cluster('ADDSLOTS', [1, 2, 3]).then(console.log);
redis.cluster('ADDSLOTS', [1, 2, 3], cb);
redis.cluster(['ADDSLOTS', 1, 2, 3]).then(console.log);
redis.cluster(['ADDSLOTS', 1, 2, 3], cb);
redis.client('ID').then(console.log);
redis.client('ID', cb);
redis.client('PAUSE', 100).then(console.log);
redis.client('PAUSE', [100]).then(console.log);
redis.client('PAUSE', [100], cb);
redis.client('LIST', 'TYPE', 'normal').then(console.log);
redis.client('LIST', 'TYPE', 'normal', cb);
redis.client(['LIST', 'TYPE', 'normal']).then(console.log);
redis.client(['LIST', 'TYPE', 'normal'], cb);
redis.debug('OBJECT', 'foo').then(console.log);
redis.debug('OBJECT', 'foo', cb);
redis.debug('SEGFAULT').then(console.log);
redis.debug('SEGFAULT', cb);

// Test config commands
redis.config('GET', 'dbfilename').then(console.log);
redis.config('GET', 'dbfilename', cb);
redis.config('REWRITE').then(console.log);
redis.config('REWRITE', cb);
redis.config('RESETSTAT').then(console.log);
redis.config('RESETSTAT', cb);
redis.config('SET', 'requirepass', 'hunter2').then(console.log);
redis.config('SET', 'requirepass', 'hunter2', cb);

new Redis(); // Connect to 127.0.0.1:6379
new Redis(6380); // 127.0.0.1:6380
new Redis(6379, '192.168.1.1'); // 192.168.1.1:6379
new Redis('/tmp/redis.sock');
new Redis({
    port: 6379, // Redis port
    host: '127.0.0.1', // Redis host
    family: 4, // 4 (IPv4) or 6 (IPv6)
    username: 'user',
    password: 'auth',
    db: 0,
    retryStrategy() {
        return null;
    },
    maxRetriesPerRequest: 20,
    showFriendlyErrorStack: true,
    tls: {
        servername: 'tlsservername',
    },
});

const pub = new Redis();

pub.on('message', (channel: any, message: any) => {
    // Receive message Hello world! from channel news
    // Receive message Hello again! from channel music
    console.log('Receive message %s from channel %s', message, channel);
});

// There's also an event called 'messageBuffer', which is the same as 'message' except
// it returns buffers instead of strings.
pub.on('messageBuffer', (channel: any, message: any) => {
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
redis
    .pipeline()
    .set('foo', 'bar')
    .del('cc')
    .exec((err, results) => {});

// `exec` also returns a Promise:
const promise = redis.pipeline().set('foo', 'bar').get('foo').exec();
promise.then(result => {
    // result === [[null, 'OK'], [null, 'bar']]
});

redis
    .pipeline()
    .set('foo', 'bar')
    .get('foo', (err, result) => {
        // result === 'bar'
    })
    .exec((err, result) => {
        // result[1][1] === 'bar'
    });

redis
    .pipeline([
        ['set', 'foo', 'bar'],
        ['get', 'foo'],
    ])
    .exec(() => {
        /* ... */
    });

Redis.Command.setArgumentTransformer('set', args => {
    return args;
});

Redis.Command.setReplyTransformer('get', (result: any) => {
    return result;
});

redis.scan(0, 'match', '*foo*', 'count', 20).then(([nextCursor, keys]) => {
    // nextCursor is always a string
    if (nextCursor === '0') {
        // keys is always an array of strings and it might be empty
        return keys.map(key => key.trim());
    }
});

redis.scan(0, 'match', '*foo*', 'count', 20, (err, [nextCursor, keys]) => {
    // nextCursor is always a string
    if (err !== null && nextCursor === '0') {
        // keys is always an array of strings and it might be empty
        return keys.map(key => key.trim());
    }
});

redis
    .pipeline()
    .scan(0, 'count', 20, 'match', '*foo*')
    .exec((err, result) => {
        // result = [[null, [nextCursor, keys]]]
    });

// multi
redis
    .multi()
    .set('foo', 'bar')
    .set('foo', 'baz')
    .get('foo', (err, result) => {
        // result === 'QUEUED'
    })
    .exec((err, results) => {
        // results = [[null, 'OK'], [null, 'OK'], [null, 'baz']]
    });

redis
    .multi([
        ['set', 'foo', 'bar'],
        ['get', 'foo'],
    ])
    .exec((err, results) => {
        // results = [[null, 'OK'], [null, 'bar']]
    });

const keys = ['foo', 'bar'];
redis.mget(...keys);

redis.mset(...['foo', 'bar']);
redis.mset({ foo: 'bar' });

new Redis.Cluster(['localhost']);

new Redis.Cluster([6379]);

new Redis.Cluster([
    {
        host: 'localhost',
    },
]);

new Redis.Cluster([
    {
        port: 6379,
    },
]);

new Redis.Cluster([
    {
        host: 'localhost',
        port: 6379,
    },
]);

redis.xack('streamName', 'groupName', 'id').then(console.log);
redis.xack('streamName', 'groupName', 'id', cbNumber);
redis.xadd('streamName', '*', 'field', 'name').then(console.log);
redis.xadd('streamName', '*', 'field', 'name', cb);
redis.xadd('streamName', 'MAXLEN', 100, '*', 'field', 'name');
redis.xadd('streamName', 'MAXLEN', '~', 100, '*', 'field', 'name');
redis.xclaim('streamName', 'groupName', 'consumerName', 3600000, 'id').then(console.log);
redis.xclaim('streamName', 'groupName', 'consumerName', 3600000, 'id', cb);
redis.xdel('streamName', 'id').then(console.log);
redis.xdel('streamName', 'id', cbNumber);
redis.xgroup('CREATE', 'streamName', 'groupName', '$').then(console.log);
redis.xgroup('CREATE', 'streamName', 'groupName', '$', cb);
redis.xgroup('SETUP', 'streamName', 'groupName', '$');
redis.xgroup('DESTROY', 'streamName', 'groupName');
redis.xgroup('DELCONSUMER', 'streamName', 'groupName', 'consumerName');
redis.xinfo('CONSUMERS', 'streamName', 'groupName').then(console.log);
redis.xinfo('CONSUMERS', 'streamName', 'groupName', cb);
redis.xinfo('GROUPS', 'streamName');
redis.xinfo('STREAM', 'streamName');
redis.xlen('streamName').then(console.log);
redis.xlen('streamName', cbNumber);
redis.xpending('streamName', 'groupName', '-', '+', '10', 'consumerName').then(console.log);
redis.xpending('streamName', 'groupName', '-', '+', '10', 'consumerName', cb);
redis.xrange('streamName', '-', '+', 'COUNT', 1).then(console.log);
redis.xrange('streamName', '-', '+', 'COUNT', 1, cb);
redis.xread('STREAMS', 'streamName', '0-0').then(console.log);
redis.xreadgroup('GROUP', 'groupName', 'consumerName', 'STREAMS', 'streamName', '>').then(console.log);
redis.xreadgroup('GROUP', 'groupName', 'consumerName', 'STREAMS', 'streamName', '>', cb);
redis.xrevrange('streamName', '+', '-', 'COUNT', 1).then(console.log);
redis.xrevrange('streamName', '+', '-', 'COUNT', 1, cb);
redis.xtrim('streamName', 'MAXLEN', '~', 1000).then(console.log);
redis.xtrim('streamName', 'MAXLEN', '~', 1000, cbNumber);

redis.zrangebyscore('set', 0, 100).then(console.log);
redis.zrangebyscore('set', 0, 100);
redis.zrangebyscore('set', 0, 100, 'WITHSCORES').then(console.log);
redis.zrangebyscore('set', 0, 100, 'WITHSCORES', cb);
redis.zrangebyscore('set', 0, 100, 'WITHSCORES', 'LIMIT', 0, 10).then(console.log);
redis.zrangebyscore('set', 0, 100, 'WITHSCORES', 'LIMIT', 0, 10, cb);
redis.zrangebyscore('set', 0, 100, 'LIMIT', 0, 10).then(console.log);
redis.zrangebyscore('set', 0, 100, 'LIMIT', 0, 10, cb);
redis.zrevrangebyscore('set', 0, 100).then(console.log);
redis.zrevrangebyscore('set', 0, 100);
redis.zrevrangebyscore('set', 0, 100, 'WITHSCORES').then(console.log);
redis.zrevrangebyscore('set', 0, 100, 'WITHSCORES', cb);
redis.zrevrangebyscore('set', 0, 100, 'WITHSCORES', 'LIMIT', 0, 10).then(console.log);
redis.zrevrangebyscore('set', 0, 100, 'WITHSCORES', 'LIMIT', 0, 10, cb);
redis.zrevrangebyscore('set', 0, 100, 'LIMIT', 0, 10).then(console.log);
redis.zrevrangebyscore('set', 0, 100, 'LIMIT', 0, 10, cb);

redis.zrangebylex('set', '-', '[c').then(console.log);
redis.zrangebylex('set', '-', '[c');
redis.zrangebylex('set', '-', '[c', 'LIMIT', 0, 10).then(console.log);
redis.zrangebylex('set', '-', '[c', 'LIMIT', 0, 10, cb);
redis.zrevrangebylex('set', '-', '[c').then(console.log);
redis.zrevrangebylex('set', '-', '[c');
redis.zrevrangebylex('set', '-', '[c', 'LIMIT', 0, 10).then(console.log);
redis.zrevrangebylex('set', '-', '[c', 'LIMIT', 0, 10, cb);

// ClusterRetryStrategy can return non-numbers to stop retrying
new Redis.Cluster([], {
    clusterRetryStrategy: (times: number, reason?: Error) => null,
});

new Redis.Cluster([], {
    clusterRetryStrategy: (times: number, reason?: Error) => 1,
});

// Cluster types
const clusterOptions: Redis.ClusterOptions = {};
const cluster = new Redis.Cluster(
    [
        {
            host: 'localhost',
            port: 6379,
        },
    ],
    clusterOptions,
);
cluster.on('end', () => console.log('on end'));
cluster.nodes().map(node => {
    node.pipeline()
        .flushdb()
        .exec()
        .then(result => console.log(result));
});
cluster.set('foo', 'bar');
cluster.get('foo', (err, result) => {
    if (err) {
        console.error(err);
    }
    console.log(result);
});
cluster
    .get('foo')
    .then(result => console.log(result))
    .catch(reason => console.error(reason));
cluster
    .connect()
    .then(result => console.log(result))
    .catch(reason => console.error(reason));

cluster.setBuffer('key', '100', 'NX', 'EX', 10, (err, data) => {});
cluster.getBuffer('key', (err, data) => {
    // [null, '100']
});

cluster.setnx('keynx', '100', (err, data) => {
    // [null, 'OK']
});
cluster.setnx('keynx', '200', (err, data) => {
    // [null, 'NOT OK']
});
cluster.get('keynx', (err, data) => {
    // [null, '100']
});

cluster.del('keynx');

cluster.incr('key', (err, data) => {
    // [null, '101']
});

cluster.decr('key', (err, data) => {
    // [null, '100']
});

listData.forEach(value => {
    cluster.rpush('bufferlist', Buffer.from(value));
});

listData.forEach(value => {
    cluster.lpop('bufferlist', (err, data) => {
        if (data !== value) {
            console.log(data);
        }
    });
});

listData.forEach(value => {
    cluster.rpushBuffer('bufferlist', Buffer.from(value));
});

cluster.llen('bufferlist', (err, data) => {
    if (data !== listData.length) {
        console.log(data);
    }
});

cluster.lpopBuffer('bufferlist', (err, data) => {
    if (data.toString() !== listData[0]) {
        console.log(data.toString());
    }
});

cluster.lrangeBuffer('bufferlist', 0, listData.length - 2, (err, data) => {
    data.forEach((value, index) => {
        if (value.toString() !== listData[index + 1]) {
            console.log(value.toString());
        }
    });
});

cluster.zadd('sorted', '1', 'foo');
cluster.zadd('sorted', '1', 'bar');
cluster.zrange('sorted', 0, 1, (err, data) => {
    // [null, ['foo', 'bar']]
});
cluster.zrem('sorted', 'foo');

cluster.hset('hash', 'foo', '4');
cluster.hget('hash', 'foo', (err, data) => {
    // [null, '4']
});

cluster.expire('key', 300, (err, res) => {
    // [null, 1]
});

cluster.hgetall('key').then(console.log);
cluster.hgetall('key', cb);

cluster.incrby('key', 15).then(console.log);
cluster.incrby('key', 15, cb);

cluster.disconnect();
cluster.quit(result => {
    console.log(result);
});
const getBuiltinCommandsResult = cluster.getBuiltinCommands();
console.log(getBuiltinCommandsResult);
const createBuiltinCommandResult = cluster.createBuiltinCommand('createBuiltinCommand');
console.log(createBuiltinCommandResult);
cluster.defineCommand('defineCommand', {
    numberOfKeys: 1,
    lua: 'lua',
});
cluster.sendCommand();

redis.zaddBuffer('foo', 1, Buffer.from('bar')).then(() => {
    // sorted set 'foo' now has score 'foo1' containing barBuffer
});

new Command('mget', ['key1', 'key2']);
new Command('get', ['key2'], { replyEncoding: 'utf8' });

// Test all z*bylex commands in a single pipeline
redis.pipeline()
    .zrangebylex('foo', '-', '+', (err: Error | null, res: string[]) => {
        // do something with res or err
    })
    .zrangebylex('foo', '-', '+', 'LIMIT', 10, 10, (err: Error | null, res: string[]) => {
        // do something with res or err
    })
    .zrangebylex('foo', '-', '+', 'LIMIT', 10, 10)
    .zrangebylex('foo', '-', '+')
    .zrevrangebylex('foo', '-', '+', (err: Error | null, res: string[]) => {
        // do something with res or err
    })
    .zrevrangebylex('foo', '-', '+', 'LIMIT', 10, 10, (err: Error | null, res: string[]) => {
        // do something with res or err
    })
    .zrevrangebylex('foo', '-', '+', 'LIMIT', 10, 10)
    .zrevrangebylex('foo', '-', '+')
    .zremrangebylex('foo', '-', '+')
    .zremrangebylex('foo', '-', '+', (err: Error | null, res: number) => {
        // do something with res or err
    });

redis.options.host;
redis.status;
cluster.options.maxRedirections;
cluster.status;
