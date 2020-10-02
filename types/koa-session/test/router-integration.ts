import Koa = require('koa');
import session = require('koa-session');
import Router = require('koa-router');

const app = new Koa();

app.use(session({}, app));

const router = new Router();

router.get('/', (ctx: Koa.Context) => {
    ctx.session!.hello = true;
});

app.use(router.routes());
