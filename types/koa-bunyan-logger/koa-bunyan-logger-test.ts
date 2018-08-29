import * as Koa from 'koa';
import koaBunyanLogger from 'koa-bunyan-logger';

const app = new Koa();
app.use(koaBunyanLogger());

app.use(async (ctx, next) => {
    ctx.log.info('Got a request from %s for %s', ctx.request.ip, ctx.path);
    await next();
});

app.listen(8000);
