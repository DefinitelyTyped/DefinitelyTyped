
import * as Koa from "koa";

const app = new Koa();

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
  ctx.body = "Hello World";
});

app.listen(3000);

const server = app.listen();
