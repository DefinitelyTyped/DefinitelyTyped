import { RedisClient } from 'redis';
import IORedis = require('ioredis');
import RedisStore from 'rate-limit-redis';
import { Store } from 'express-rate-limit';

let store: Store;

// $ExpectType Store
store = new RedisStore();

// $ExpectType Store
store = new RedisStore({
    expiry: 1000,
});

// $ExpectType Store
store = new RedisStore({
    prefix: 'types',
});

// $ExpectType Store
store = new RedisStore({
    resetExpiryOnChange: false,
});

// $ExpectType Store
store = new RedisStore({
    client: new RedisClient({}),
});

// $ExpectType Store
store = new RedisStore({
    client: new IORedis({}),
});

// $ExpectType Store
store = new RedisStore({
    redisURL: 'redis://localhost:6379',
});
