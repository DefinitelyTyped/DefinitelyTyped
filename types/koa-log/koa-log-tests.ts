import Koa = require('koa');
import koaLogger = require('koa-log');

koaLogger.morgan.token('request-body', (ctx: Koa.BaseContext) => JSON.stringify(ctx.request.body));
koaLogger.morgan.token('response-body', (ctx: Koa.BaseContext) => JSON.stringify(ctx.body));

const app = new Koa();
app.use(
    koaLogger(':status :method :url took :response-time ms :request-body :response-body')
);
