import Koa = require('koa');
import rateLimit = require('koa-ratelimit-lru');

const app = new Koa();

app.use(rateLimit({}));

app.use(async context => {
    context.body = "Hello";
});

app.listen(2000);
