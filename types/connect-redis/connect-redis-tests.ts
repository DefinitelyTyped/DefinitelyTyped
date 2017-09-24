import * as connectRedis from "connect-redis";
import * as session from "express-session";

let RedisStore = connectRedis(session);
const store = new RedisStore({
    host: 'localhost',
    port: 6379,
    logErrors: error => console.warn(error),
    scanCount: 80,
});
