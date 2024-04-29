import redis = require("redis");
import ExpressBrute = require("express-brute");
import RedisStore = require("express-brute-redis");

const store = new RedisStore({
    host: "localhost",
    port: 6379,
    db: "0",
});
new ExpressBrute(store);

const clientStore = new RedisStore({ client: redis.createClient(), prefix: "brute:" });
new ExpressBrute(clientStore);
