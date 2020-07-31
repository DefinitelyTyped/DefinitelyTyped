import { RedisClient } from 'redis';
import IORedis = require('ioredis');
import RedisStore from 'rate-limit-redis';

let store: RedisStore;

// $ExpectType RedisStore
store = new RedisStore();

// $ExpectType RedisStore
store = new RedisStore({
    expiry: 1000,
});

// $ExpectType RedisStore
store = new RedisStore({
    prefix: 'types',
});

// $ExpectType RedisStore
store = new RedisStore({
    resetExpiryOnChange: false,
});

// $ExpectType RedisStore
store = new RedisStore({
    client: new RedisClient({}),
});

// $ExpectType RedisStore
store = new RedisStore({
    client: new IORedis({}),
});

// $ExpectType RedisStore
store = new RedisStore({
    redisURL: 'redis://localhost:6379',
});
