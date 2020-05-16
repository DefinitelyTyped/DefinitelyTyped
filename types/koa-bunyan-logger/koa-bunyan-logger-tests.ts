import Koa = require('koa');
import koaBunyanLogger = require('koa-bunyan-logger');

const app = new Koa();
app.use(koaBunyanLogger());
app.use(koaBunyanLogger.requestIdContext());
app.use(koaBunyanLogger.requestLogger());
app.use(koaBunyanLogger.requestLogger({ ignorePath: ['/ping'] }));
app.use(koaBunyanLogger.timeContext());
app.use(
    koaBunyanLogger.timeContext({
        logLevel: 'warn',
        updateLogFields(fields) {
            return {
                request_trace: {
                    name: fields.label,
                    time: fields.duration,
                },
            };
        },
    }),
);

app.use(async (ctx, next) => {
    ctx.log.info('Got a request from %s for %s', ctx.request.ip, ctx.path);
    await next();
});

app.listen(8000);
