import Koa = require('koa');
import bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser({ strict: false }));

app.use((ctx) => {
    // $ExpectType string | Record<string, unknown>
    ctx.request.body;
});

app.listen(80);
