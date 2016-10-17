import * as Koa from "koa";
import * as Router from "koa-router";

const app = new Koa();

const router = new Router({
    prefix: "/users"
});

router
  .param('id', function(id, ctx, next) {
    next();
  })
  .get('/', function (ctx, next) {
    ctx.body = 'Hello World!';
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

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
