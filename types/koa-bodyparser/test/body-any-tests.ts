import Koa = require('koa');
import bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser({ strict: false }));

app.use((ctx) => {
    // $ExpectType any
    const body = ctx.request.body as any;

    // $ExpectType any
    body.a;
});

app.listen(80);
