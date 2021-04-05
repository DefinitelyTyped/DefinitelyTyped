import Koa = require('koa');

const app = new Koa();

interface CustomResponseBody {
    a: number;
    b: string;
}

const middleware: Koa.Middleware<Koa.DefaultState, Koa.DefaultContext, CustomResponseBody> = (ctx, next) => {
    ctx.body.a = 1;
    ctx.body.b = 'text';

    ctx.response.body = {
        a: 1,
        b: 'text',
        // $ExpectError
        c: true
    };

    return next();
};

app.use(middleware);

app.listen(3000);

const server = app.listen();
