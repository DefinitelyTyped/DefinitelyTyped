import Koa = require('koa');

const app = new Koa();

interface CustomResponseBody {
    a: number;
    b: string;
}

interface CustomState {
    c: number;
}

interface CustomContext {
    d: boolean;
}

const controllerFullyTyped: Koa.Controller<CustomResponseBody, CustomState, CustomContext> = (ctx) => {
    ctx.body.a = 1;
    ctx.body.b = 'text';

    ctx.state.c = 99;

    ctx.response.body = {
        a: 1,
        b: 'text'
    };

    ctx.d = true;
};

app.use(controllerFullyTyped);

const controllerWithStateTyped: Koa.Controller<CustomResponseBody, CustomState> = (ctx) => {
    ctx.body.a = 1;
    ctx.body.b = 'text';

    ctx.state.c = 99;

    ctx.response.body = {
        a: 1,
        b: 'text'
    };
};

app.use(controllerWithStateTyped);

const controllerWithResponseBodyTyped: Koa.Controller<CustomResponseBody> = (ctx) => {
    ctx.body.a = 1;
    ctx.body.b = 'text';

    ctx.response.body = {
        a: 1,
        b: 'text'
    };
};

app.use(controllerWithResponseBodyTyped);

app.listen(3000);

const server = app.listen();
