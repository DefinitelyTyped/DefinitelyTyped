import convert = require('koa-convert');
import Koa = require('koa');

const app = new Koa();

app.use(modernMiddleware);

app.use(convert(legacyMiddleware));

function * legacyMiddleware(next: any) {
  yield next;
}

function modernMiddleware(ctx: Koa.Context, next: any) {
  return next().then(() => {});
}
