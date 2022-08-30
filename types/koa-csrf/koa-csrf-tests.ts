import CSRF = require('koa-csrf');
import Koa = require('koa');
const app = new Koa();

app.use(
    new CSRF({
        errorHandler(ctx) {
            return ctx.throw(403, 'Invalid CSRF token');
        },
        excludedMethods: ['GET', 'HEAD', 'OPTIONS'],
        disableQuery: false,
        ignoredPathGlobs: [],
    }),
);
