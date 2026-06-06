/* =================== USAGE ===================
import * as CSRF from "koa-csrf";
import * as Koa from "koa";
const app = new Koa();

app.use(new CSRF({
    errorHandler(ctx) {
        return ctx.throw(403, 'Invalid CSRF token');
    },
    excludedMethods: ['GET', 'HEAD', 'OPTIONS'],
    disableQuery: false,
    ignoredPathGlobs: []
}));
 =============================================== */

export = CSRF;

import { Context, Middleware } from "koa";

declare module "koa" {
    interface DefaultState {
        _csrf: string;
    }
}

declare const CSRF: {
    new(opts?: {
        errorHandler?: (ctx: Context) => never;
        excludedMethods?: string[];
        disableQuery?: boolean;
        ignoredPathGlobs?: string[];
    }): Middleware;
};
