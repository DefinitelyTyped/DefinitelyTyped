import Koa = require("koa");
import { Context } from "koa";
import compose = require("koa-compose");
import etag = require("koa-etag");
import Router = require("@koa/router");

interface MyState {foo: string; }
interface MyContext {bar: string; }

const app = new Koa<{}, {}>();

const router = new Router<MyState, MyContext>({
    prefix: "/users"
});

router
    .param('id', (id, ctx, next) => {
        next();
    })
    .get('/', (ctx, next) => {
        ctx.body = 'Hello World!';
    })
    .get('user', '/users/:id', (ctx, next) => {
        ctx.body = {
          test1: ctx.router.url('user-accounts', { id: ctx.params.id }),
          test2: ctx.router.url('user-accounts', ctx.params.id),
          test3: ctx.router.url('user-accounts', [ctx.params.id]),
          test4: ctx.router.url('users'),
        };
    })
    .get('user-accounts', '/users/:id/accounts', (ctx, next) => {
        ctx.body = {
          test1: ctx.router.url('user', { id: 3 }, { query: { limit: 1 } }),
          test2: ctx.router.url('user', { id: 3 }, { query: "limit=1" }),
          test3: ctx.router.url('user', 3, { query: { limit: 1 } }),
          test4: ctx.router.url('user', [3], { query: "limit=1" }),
          test5: ctx.router.url('user', ["3"], { query: { limit: "1" } }),
        };
    })
    .post('/users', (ctx, next) => {
        ctx.state.foo = 'foo';
    })
    .put('/users/:id', (ctx, next) => {
        ctx.bar = 'bar';
        ctx.body = ctx.params.id;
    })
    .del('/users/:id', () => {
        // ...
    });

router.get('user', '/users/:id', (ctx) => {
    ctx.body = "sdsd";
});

const match = router.match('/users/:id', 'GET');

const mw: Router.Middleware = (ctx: Koa.ParameterizedContext<any, Router.RouterParamContext>, next: () => Promise<any>) => {
  ctx.body = "Ok";
};

const mw2: Router.Middleware = (ctx: Router.RouterContext, next: () => Promise<any>) => {
  ctx.body = "Ok";
};

app.use(async (ctx: Koa.ParameterizedContext<MyState, MyContext>, next) => {
        ctx.state.foo = 'foo';
        await next();
    })
    .use(router.routes())
    .use(router.allowedMethods())
    .use(async (ctx, next) => {
        ctx.state.foo = '3';
        await next();
    })
    .listen(3000);

const router3 = new Router();
router3.get('/', (ctx) => {
    ctx.state.foo = 'bar';
    console.log(ctx.router.params);
    ctx.body = "Hello World!";
});
router3.get('/foo', (ctx: Router.RouterContext) => {
    ctx.body = "Yup";
});
new Koa()
    .use(async (ctx, next) => next())
    .use(router3.routes())
    .use(router.allowedMethods())
    .listen(3001);

// It's from https://github.com/DefinitelyTyped/DefinitelyTyped/pull/31704#issuecomment-451075919,
// to make sure we don't break it again

declare module "koa" {
    interface Context {
        name: string;
    }
}

const app2 = new Koa();

const conditional = async (ctx: Context, next: any) => {
    await next();
    if (ctx.fresh) {
        ctx.status = 304;
        ctx.body = null;
    }
};

const router2 = compose([conditional, etag()]);

app2.use(router2);

app2.use(async (ctx: Context, next: any) => {
    ctx.name = "hello world";
    await next();
});

app2.use((ctx: Context, next: any) => {
    console.log(ctx.name);
    ctx.body = ctx.name;
});

app2.listen(8000);

// Prepending middlewares tests

interface BlahInterface { blah: string; }
interface WoohInterface { wooh: string; }

const router4 = new Router<MyState, MyContext>({prefix: "/users"});

router4.get('/',
    (ctx: Koa.ParameterizedContext<BlahInterface & WoohInterface>, next) => {
        ctx.state.blah = "blah";
        ctx.state.wooh = "wooh";
        return next();
    },
    (ctx, next) => {
        console.log(ctx.state.blah);
        console.log(ctx.state.wooh);
        console.log(ctx.state.foo);
        ctx.body = 'Hello World!';
        return next();
    });

const middleware1: Koa.Middleware<BlahInterface> = (ctx, next) => {
    ctx.state.blah = "blah";
};

const middleware2: Koa.Middleware<WoohInterface> = (ctx, next) => {
    ctx.state.wooh = "blah";
};

const emptyMiddleware: Koa.Middleware<{}> = (ctx, next) => {
};

function routeHandler1(ctx: Koa.ParameterizedContext<WoohInterface>): void {
    ctx.body = "234";
}

function routeHandler2(ctx: Koa.ParameterizedContext<BlahInterface>): void {
    ctx.body = "234";
}

function routeHandler3(ctx: Koa.ParameterizedContext<{}>): void {
    ctx.body = "234";
}

function routeHandler4(ctx: Router.RouterContext<MyState, MyContext>): void {
    ctx.body = "234";
}

const middleware3 = compose([middleware1, middleware2]);

router4.get('/foo', middleware3, routeHandler1);
router4.post('/foo', middleware1, routeHandler2);
router4.put('/foo', middleware2, routeHandler3);

router4.patch("foo", '/foo', middleware3, routeHandler1);
router4.delete('/foo', middleware1, routeHandler2);
router4.head('/foo', middleware2, routeHandler3);

router4.post('/foo', emptyMiddleware, emptyMiddleware, routeHandler4);
router4.post('/foo', emptyMiddleware, emptyMiddleware, emptyMiddleware, routeHandler4);
router4.get('name', '/foo', emptyMiddleware, emptyMiddleware, routeHandler4);
router4.get('name', '/foo', emptyMiddleware, emptyMiddleware, emptyMiddleware, routeHandler4);

const router5 = new Router();
router5.register('/foo', ['GET'], middleware1, {
    name: 'foo',
});
router5.register('/bar', ['GET', 'DELETE'], [middleware1, middleware2]);
