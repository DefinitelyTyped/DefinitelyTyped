import Koa = require('koa');

async function logger(context: Koa.Context, next: Koa.Next) {
    await next();
}

const app = new Koa();
import skip = require('koa-ignore');
app.use(skip(logger, logger).if(ctx => ctx.secure));
app.use(skip(logger).unless(() => 1073741824 < 1023));
