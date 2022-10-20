import koaCash = require('koa-cash');
import Koa = require('koa');

const app = new Koa();
app.use(koaCash());

app.use(async ctx => {
    // this response is already cashed if `true` is returned,
    // so this middleware will automatically serve this response from cache
    if (await ctx.cashed()) return ctx.cashClear('/');

    // set the response body here,
    // and the upstream middleware will automatically cache it
    ctx.body = 'hello world!';
});
