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

app.use((ctx) => {
    // $ExpectType RequestBody
    const body = ctx.request.body as RequestBody;

    // $ExpectType string
    body.a.b;

    // $ExpectType number
    body.a.c;

    // $ExpectError
    body.d;
});

app.listen(80);
