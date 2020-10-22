import Koa = require('koa');

declare module 'koa' {
    interface ExtendableContext {
        errors?: Error[];
    }
}

interface DbBaseContext {
    db(): void;
}

interface UserContext {
    user: {};
}

const app = new Koa<{}, DbBaseContext>();

app.context.db = () => {};

app.use(async ctx => {
    if (ctx.errors) {
        ctx.throw(ctx.errors[0], 400);
    }
});

app.use(async (ctx, next) => {
    try {
        return await next();
    } catch (ex) {
        ctx.errors = [ex];
    }
});

app.use<{}, UserContext>(async ctx => {
    console.log(ctx.db);
    ctx.user = {};
});

app.use((ctx, next) => {
    const start: any = new Date();
    return next().then(() => {
        const end: any = new Date();
        const ms = end - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
        ctx.assert(true, 404, 'Yep!');
    });
});

// response
app.use(ctx => {
    ctx.body = 'Hello World';
    ctx.body = ctx.URL.toString();
});

app.listen(3000);

const server = app.listen();
