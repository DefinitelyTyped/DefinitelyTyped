import connectRedis = require("connect-redis");
import session = require("express-session");
import Redis = require("ioredis");

let RedisStore = connectRedis(session);
const store = new RedisStore({
    client: new Redis.Cluster([]),
    host: "localhost",
    port: 6379,
    logErrors: error => console.warn(error),
    scanCount: 80,
    disableTouch: true,
    ttl: (store, sess, sessionID) => {
        return 60;
    },
});
