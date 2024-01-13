import Koa = require("koa");

declare module "koa" {
    interface ExtendableContext {
        errors?: Error[] | undefined;
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

app.use((ctx: Koa.Context, next) => {
    const start: any = new Date();
    return next().then(() => {
        const end: any = new Date();
        const ms = end - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
        ctx.assert(true, 404, "Yep!");
    });
});

app.use(ctx => {
    ctx.accepts(); // $ExpectType string[]
    ctx.accepts(""); // $ExpectType string | false
    ctx.accepts([""]); // $ExpectType string | false
    ctx.acceptsEncodings(); // $ExpectType string[]
    ctx.acceptsEncodings(""); // $ExpectType string | false
    ctx.acceptsEncodings([""]); // $ExpectType string | false
    ctx.acceptsCharsets(); // $ExpectType string[]
    ctx.acceptsCharsets(""); // $ExpectType string | false
    ctx.acceptsCharsets([""]); // $ExpectType string | false
    ctx.acceptsLanguages(); // $ExpectType string[]
    ctx.acceptsLanguages(""); // $ExpectType string | false
    ctx.acceptsLanguages([""]); // $ExpectType string | false
    ctx.is(""); // $ExpectType string | false | null
    ctx.is([""]); // $ExpectType string | false | null

    ctx.vary("Origin"); // $ExpectType void
    ctx.vary(["Origin", "User-Agent"]); // $ExpectType void
});

// response
app.use(ctx => {
    ctx.body = "Hello World";
    ctx.body = ctx.URL.toString();
});

app.listen(3000);

app.currentContext;

const server = app.listen();
