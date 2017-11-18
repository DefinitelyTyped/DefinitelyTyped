import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";

const app = new Koa();

app.use(bodyParser({ strict: false }));

app.use((ctx) => {
    console.log(ctx.request.body);
    console.log(ctx.request.rawBody);
})

app.listen(80);
