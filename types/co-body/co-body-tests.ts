import koa = require('koa');
import parse = require('co-body');

var app = new koa();

app.use(async function (ctx: koa.Context, next: Function): Promise<void> {
  var body: any;

  // application/json
  body = await parse.json(ctx.req);

  // explicit limit
  body = await parse.json(ctx.req, { limit: '10kb' });

  // application/x-www-form-urlencoded
  body = await parse.form(ctx.req);

  // text/plain
  body = await parse.text(ctx.req);

  // either
  body = await parse(ctx.req);

  // custom type
  body = await parse(ctx.req, { textTypes: ['text', 'html'] });

  // This lib also supports ctx.req in Koa (or other libraries), so that you may simply use this instead of this.req.

  // application/json
  body = await parse.json(ctx);

  // application/x-www-form-urlencoded
  body = await parse.form(ctx);

  // text/plain
  body = await parse.text(ctx);

  // either
  body = await parse(ctx);
});

