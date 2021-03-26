import Koa = require("koa");
import bodyParser = require("koa-bodyparser");

const app = new Koa();

app.use(bodyParser({ strict: false }));

app.use((ctx) => {
    ctx.request.body;

    // $ExpectType any
    ctx.request.body.a;

    // $ExpectType any
    ctx.request.body.a.b;

    // $ExpectType any
    ctx.request.body.a.b.c;
});

app.listen(80);
