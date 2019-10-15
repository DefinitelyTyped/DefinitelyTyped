import connectRedis = require("connect-redis");
import session = require("express-session");
import redis = require("redis");
import IORedis = require("ioredis");

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

// clients

new RedisStore({ client: redis.createClient() });
new RedisStore({ client: new IORedis() });
