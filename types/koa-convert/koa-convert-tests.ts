import convert = require('koa-convert');
import Koa = require('koa');

const app = new Koa();

function *legacyMiddleware(next: any) {
  yield next;
}
app.use(convert(legacyMiddleware));
app.use(convert.back(legacyMiddleware));

function modernMiddleware(ctx: Koa.Context, next: Koa.Next) {
  return next().then(() => {});
}
app.use(convert(modernMiddleware));
app.use(convert.back(modernMiddleware));

app.use(convert.compose(legacyMiddleware, modernMiddleware));
