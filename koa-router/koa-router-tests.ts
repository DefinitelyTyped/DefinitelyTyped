/// <reference path="../koa/koa.d.ts" />
/// <reference path="koa-router.d.ts" />

import * as Koa from "koa";
import * as Router from "koa-router";

const app = new Koa();

const router = new Router({
    prefix: "/users"
});

router
  .get('/', function (ctx, next) {
    ctx.body = 'Hello World!';
  })
  .post('/users', function (ctx, next) {
    // ...
  })
  .put('/users/:id', function (ctx, next) {
    ctx.body = ctx.params.id;
  })
  .del('/users/:id', function (ctx, next) {
    // ...
  });
  
router.get('user', '/users/:id', function (ctx, next) {
    ctx.body = "sdsd";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
