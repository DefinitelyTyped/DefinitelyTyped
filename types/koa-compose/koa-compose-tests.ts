import compose = require('koa-compose');
import * as Koa from "koa";

const fn1: compose.Middleware<any> = (context: any, next: () => Promise<void>): Promise<any> =>
    Promise
        .resolve(console.log('in fn1'))
        .then(next);

const fn2: compose.Middleware<any> = (context: any, next: () => Promise<void>): Promise<any> =>
    Promise
        .resolve(console.log('in fn2'))
        .then(next);

const fn = compose([fn1, fn2]);

interface FooCtx {
    foo: string;
}

const fooMiddleware: Koa.Middleware<FooCtx> = async (ctx, next) => {
    ctx.state.foo = "foo";
    await next();
};

interface BarCtx {
    bar: string;
}

const barMiddleware: Koa.Middleware<BarCtx> = async (ctx, next) => {
    ctx.state.bar = "bar";
    await next();
};

interface WooCtx {
    woo: string;
}

const wooMiddleware: Koa.Middleware<WooCtx> = async (ctx, next) => {
    ctx.state.woo = "woo";
    await next();
};

new Koa<{}, {}>()
    .use(compose([compose([fooMiddleware, barMiddleware]), wooMiddleware]))
    .use(async (ctx, next) => {
        ctx.state.foo;
        ctx.state.bar;
        ctx.state.woo;
        ctx.body = "Something";
        await next();
    });

new Koa<{}, {}>()
    .use(compose([fooMiddleware, barMiddleware, wooMiddleware]))
    .use(async (ctx, next) => {
        ctx.state.foo;
        ctx.state.bar;
        ctx.state.woo;
        ctx.body = "Something";
        await next();
    });
