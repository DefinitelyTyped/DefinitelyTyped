import Koa = require('koa');

declare module 'koa' {
    interface DefaultState {
        stateProperty: boolean;
    }

    interface DefaultContext {
        logger: {
            info: Function;
            log: Function;
            error: Function;
        };
    }
}

const app = new Koa();

app.context.logger = {
    info: () => {},
    log: () => {},
    error: () => {},
};

app.use((ctx, next) => {
    ctx.state.stateProperty = false;
    return next();
});

app.use<{ a: boolean }>(async (ctx, next) => {
    ctx.state.a = true;
    ctx.state.b = ''; // undeclared property
    await next();
});

app.use((ctx, next) => {
    const start: any = new Date();
    return next().then(() => {
        const end: any = new Date();
        const ms = end - start;
        ctx.logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
        ctx.user = {}; // undeclared property
        ctx.assert(true, 404, 'Yep!');
    });
});

// response
app.use(ctx => {
    ctx.body = 'Hello World';
    ctx.body = ctx.URL.toString();
    ctx.set({
        link: ["<http://example.com>", "<http://example.org>"]
    });
    ctx.attachment();
    ctx.attachment('path/to/tobi.png');
    ctx.attachment('path/to/tobi.png', {
        type: 'inline',
    });
});

app.on('error', error => {
    if (error instanceof Koa.HttpError) {
        // $ExpectType number
        error.status;
        throw error;
    }
    throw error;
});

app.listen(3000);

const server = app.listen();
