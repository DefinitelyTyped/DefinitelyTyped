import * as Redis from "ioredis";
import Koa = require("koa");
import rateLimit = require("koa-ratelimit");

const app = new Koa();

const redisClient = new Redis({
    host: "localhost",
});

app.use(rateLimit({
    driver: "redis",
    db: redisClient,
}));

app.use(rateLimit({
    driver: "redis",
    db: redisClient,
    namespace: "limit:middleware1",
}));

app.use(rateLimit({
    driver: "memory",
    db: new Map(),
}));

app.use(rateLimit({
    driver: "memory",
    db: new Map(),
    namespace: "limit:middleware2",
    blacklist: async (context) => Promise.resolve(true),
    whitelist: (context) => false,
}));

app.use(async context => {
    context.body = "Hello";
});

app.listen(2000);
