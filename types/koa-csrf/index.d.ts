// Type definitions for koa-csrf 3.0
// Project: https://github.com/koajs/csrf
// Definitions by: Haskaalo <https://github.com/haskaalo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================
import * as koaCsrf from 'koa-csrf';
import * as Koa from "koa";
const app = new Koa();

app.use(new koaCsrf({
    invalidSessionSecretMessage: 'Invalid session secret',
    invalidSessionSecretStatusCode: 403,
    invalidTokenMessage: 'Invalid CSRF token',
    invalidTokenStatusCode: 403,
    excludedMethods: [ 'GET', 'HEAD', 'OPTIONS' ],
    disableQuery: false
}));
 =============================================== */

export = koaCsrf;

import { Middleware } from 'koa';

declare module "koa" {
    interface Request {
        csrf: string;
    }
}

declare const koaCsrf: {
    new (opts?: {
        invalidSessionSecretMessage?: string;
        invalidSessionSecretStatusCode?: number;
        invalidTokenMessage?: string;
        invalidTokenStatusCode?: number;
        excludedMethods?: string[];
        disableQuery?: boolean;
    }): Middleware;
};
