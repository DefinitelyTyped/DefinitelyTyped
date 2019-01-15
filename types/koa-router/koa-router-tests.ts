import Koa = require("koa");
import Router = require("koa-router");

const app = new Koa<{}, {}>();

const router = new Router({
    prefix: "/users"
});

router
    .param('id', function (id, ctx, next) {
        next();
    })
    .get('/', function (ctx, next) {
        ctx.body = 'Hello World!';
    })
    .get('user', '/users/:id', function (ctx, next) {
        ctx.body = {
          test1: ctx.router.url('user-accounts', { id: ctx.params.id }),
          test2: ctx.router.url('user-accounts', ctx.params.id),
          test3: ctx.router.url('user-accounts', [ctx.params.id]),
        }
    })
    .get('user-accounts', '/users/:id/accounts', function (ctx, next) {
        ctx.body = {
          test1: ctx.router.url('user', { id: 3 }, { query: { limit: 1 } }),
          test2: ctx.router.url('user', { id: 3 }, { query: "limit=1" }),
          test3: ctx.router.url('user', 3, { query: { limit: 1 } }),
          test4: ctx.router.url('user', [3], { query: "limit=1" }),
          test5: ctx.router.url('user', ["3"], { query: { limit: "1" } }),
        }
    })
    .post('/users', function (ctx, next) {
        // ...
    })
    .put('/users/:id', function (ctx, next) {
        ctx.body = ctx.params.id;
    })
    .del('/users/:id', function () {
        // ...
    });

router.get('user', '/users/:id', function (ctx) {
    ctx.body = "sdsd";
});

const match = router.match('/users/:id', 'GET');

let layer: Router.Layer
let layerOptions: Router.ILayerOptions

const mw: Router.IMiddleware = (ctx: Router.IRouterContext, next: () => Promise<any>) => {
  ctx.body = "Ok";
};

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
