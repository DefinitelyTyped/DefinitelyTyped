import * as redis from 'redis';
import * as ioredis from 'ioredis';
import Limiter = require('ratelimiter');

declare let id: string;
declare let db: redis.RedisClient;
declare let iodb: ioredis.Redis;

const limit = new Limiter({ id, db, duration: 3_600, max: 1_000 });
const ioLimit = new Limiter({ id, db: iodb });

limit.inspect(); // $ExpectType string

limit.get((error, limit): void => {
    if (error) {
        console.error(error);
        return;
    }

    limit.total; // $ExpectType number
    limit.remaining; // $ExpectType number
    limit.reset; // $ExpectType number
    limit.resetMs; // $ExpectType number
});
