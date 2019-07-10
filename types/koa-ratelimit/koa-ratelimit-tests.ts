import { RedisClient } from "redis";
import Koa = require("koa");
import rateLimit = require("koa-ratelimit");

const app = new Koa();

const redisClient = new RedisClient({
    host: "localhost"
});

app.use(rateLimit({
    db: redisClient
}));

app.use(async context => {
    context.body = "Hello";
});

app.listen(2000);
