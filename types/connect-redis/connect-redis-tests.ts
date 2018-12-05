import connectRedis = require("connect-redis");
import session = require("express-session");

let RedisStore = connectRedis(session);
const store = new RedisStore({
    host: 'localhost',
    port: 6379,
    logErrors: error => console.warn(error),
    scanCount: 80,
});
