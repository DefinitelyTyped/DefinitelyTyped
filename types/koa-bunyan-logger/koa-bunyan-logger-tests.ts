import Koa = require('koa');
import koaBunyanLogger = require('koa-bunyan-logger');

const app = new Koa();
app.use(koaBunyanLogger());
app.use(koaBunyanLogger.requestIdContext());
app.use(koaBunyanLogger.requestLogger());
app.use(koaBunyanLogger.requestLogger({ ignorePath: ['/ping'] }));

app.use(async (ctx, next) => {
    ctx.log.info('Got a request from %s for %s', ctx.request.ip, ctx.path);
    await next();
});

app.listen(8000);
