import Koa = require("koa");
import bodyParser = require("koa-bodyparser");

const app = new Koa();

app.use(bodyParser({ strict: false }));

app.use((ctx) => {
    console.log(ctx.request.body);
    console.log(ctx.request.rawBody);
});

app.listen(80);
