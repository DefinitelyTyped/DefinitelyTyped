import Koa = require('koa');
import bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser({ strict: false }));

interface RequestBody {
    a: {
        b: string;
        c: number;
    };
}

app.use<{}, { request: { body: RequestBody } }>((ctx) => {
    // $ExpectType RequestBody
    const body = ctx.request.body as RequestBody;

    // $ExpectType string
    ctx.request.body.a.b;

    // $ExpectType number
    ctx.request.body.a.c;

    // $ExpectError
    ctx.request.body.d;
});

app.listen(80);
