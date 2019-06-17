import connectRedis = require("connect-redis");
import session = require("express-session");
import ioredis = require("ioredis");

let RedisStore = connectRedis(session);
const store = new RedisStore({
    host: 'localhost',
    port: 6379,
    logErrors: error => console.warn(error),
	scanCount: 80,
	ttl: (store, sess, sessionID) => {
		return 60;
	}
});
store.client; // $ExpectType RedisClient

const store2 = new RedisStore({client: new ioredis()})
store2.client; // $ExpectType Redis
