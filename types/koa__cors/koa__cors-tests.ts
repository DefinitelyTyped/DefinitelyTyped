import Koa = require('koa');
import cors = require('@koa/cors');

const app = new Koa();
app.use(cors());

// Trying using cors() passing in a function...
function testCorsFunction(ctx: Koa.Context) {
    const requestOrigin = ctx.request.origin;
    return requestOrigin;
}

app.use(cors({ origin: testCorsFunction }));

// Trying using cors() passing in a function that returns a promise...
function testCorsPromiseFunction(ctx: Koa.Context) {
    const requestOrigin = ctx.request.origin;
    return Promise.resolve(requestOrigin);
}

app.use(cors({ origin: testCorsPromiseFunction }));
