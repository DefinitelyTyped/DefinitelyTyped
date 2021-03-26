import Koa = require("koa");
import bodyParser = require("koa-bodyparser");

const app = new Koa();

app.use(bodyParser({ strict: false }));

app.use((ctx) => {
    ctx.request.body;
    ctx.request.body.a;
    ctx.request.body.a.b;
    ctx.request.body.a.b.c;
});

app.listen(80);
