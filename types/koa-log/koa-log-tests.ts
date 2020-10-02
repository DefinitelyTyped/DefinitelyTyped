import Koa = require('koa');
import koaLogger = require('koa-log');

koaLogger.morgan.token('request-ip', ctx => JSON.stringify(ctx.request.ip));
koaLogger.morgan.token('response-body', ctx => JSON.stringify(ctx.body));

const app = new Koa();
app.use(koaLogger(':status :method :url took :response-time ms :request-ip :response-body'));
