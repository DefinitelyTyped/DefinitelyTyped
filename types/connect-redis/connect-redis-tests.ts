import connectRedis = require("connect-redis");
import session = require("express-session");
import IORedisClient = require("ioredis");

const RedisStore = connectRedis(session);
const store = new RedisStore({
    host: 'localhost',
    port: 6379,
    logErrors: error => console.warn(error),
    scanCount: 80,
});

const ioRedisClient = new IORedisClient();
const anotherStore = new RedisStore({
    client: ioRedisClient
});
