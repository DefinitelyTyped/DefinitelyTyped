/// <reference path="../redis/redis.d.ts" />
/// <reference path="./ratelimiter.d.ts" />

import redis = require('redis');
import Limiter = require('ratelimiter');

let id: string;
let db: redis.RedisClient;
let limit = new Limiter({ id: id, db: db });

const str: string = limit.inspect();

limit.get((err, limit): void => {
	const total: number = limit.total;
	const remaining: number = limit.remaining;
	const reset: number = limit.reset;
});
