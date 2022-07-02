// Type definitions for koa-cookie 1.0
// Project: https://github.com/varunpal/koa-cookie
// Definitions by: John Hou <https://github.com/dancon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import cookie = require("koa-cookie");
    import Koa = require('koa');

    const app = new Koa();
    app.use(cookie());

 =============================================== */

import { Middleware } from 'koa';

declare module 'koa' {
    interface BaseContext {
        cookie: Record<string, any>;
    }
}

declare function cookie(): Middleware;

export = cookie;
