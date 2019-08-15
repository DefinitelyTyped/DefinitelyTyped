import * as redis from 'redis';
import Limiter = require('ratelimiter');

declare let id: string;
declare let db: redis.RedisClient;
let limit = new Limiter({ id: id, db: db });

const str: string = limit.inspect();

limit.get((err, limit): void => {
	const total: number = limit.total;
	const remaining: number = limit.remaining;
	const reset: number = limit.reset;
});
