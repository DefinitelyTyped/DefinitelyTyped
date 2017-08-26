import * as Koa from "koa";
import * as session from "koa-session-minimal";

const app = new Koa();

const ONE_DAY = 24 * 3600 * 1000;

app.use(session({
  key: 'SESSID',
  cookie: {
    maxAge: ONE_DAY,
    httpOnly: false,
  }
}));

app.use((ctx) => {
  if (ctx.path === '/favicon.ico') return // ignore favicon

  if (!('count' in ctx.session)) ctx.session.count = 0 // init counter

  ctx.session.count += 1
  ctx.body = ctx.session.count

  ctx.sessionHandler.regenerateId() // change session id
});

app.listen(80)

