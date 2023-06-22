import Koa = require('koa');
import cors = require('@koa/cors');

const app = new Koa();
app.use(cors());

// Trying using cors() passing in a function for the origin parameter...
function testCorsFunction(ctx: Koa.Context) {
    const requestOrigin = ctx.request.origin;
    return requestOrigin;
}

app.use(cors({ origin: testCorsFunction }));

// Trying using cors() passing in a function for the origin parameter that returns a promise...
function testCorsPromiseFunction(ctx: Koa.Context) {
    const requestOrigin = ctx.request.origin;
    return Promise.resolve(requestOrigin);
}

app.use(cors({ origin: testCorsPromiseFunction }));

// Trying using cors() passing in a function for the credentials parameter...
function testCorsCredentialsFunction(ctx: Koa.Context) {
    const allowCredentialsOrigins = ['https://example.com'];
    const requestOrigin = ctx.request.origin;
    return allowCredentialsOrigins.includes(requestOrigin);
}

app.use(cors({ credentials: testCorsCredentialsFunction }));

// Trying using cors() passing in a function for the credentials parameter that returns a promise...
function testCorsCredentialsPromiseFunction(ctx: Koa.Context) {
    const allowCredentialsOrigins = ['https://example.com'];
    const requestOrigin = ctx.request.origin;
    return Promise.resolve(allowCredentialsOrigins.includes(requestOrigin));
}

app.use(cors({ credentials: testCorsCredentialsPromiseFunction }));

app.use(
    cors({
        secureContext: true,
        privateNetworkAccess: true,
    }),
);
