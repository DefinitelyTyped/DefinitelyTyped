import * as Koa from "koa";

const app = new Koa();

app.context.db = () => {};

app.use(async ctx => {
    console.log(ctx.db);
});

app.use((ctx, next) => {
    const start: any = new Date();
    return next().then(() => {
        const end: any = new Date();
        const ms = end - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
        ctx.assert(true, 404, "Yep!");
    });
});

// response
app.use(ctx => {
    ctx.body = "Hello World";
    ctx.body = ctx.URL.toString();
});

app.listen(3000);

const server = app.listen();
