/* =================== USAGE ===================

    import cookie = require("koa-cookie");
    import Koa = require('koa');

    const app = new Koa();
    app.use(cookie());

 =============================================== */

import { Middleware } from "koa";

declare module "koa" {
    interface BaseContext {
        cookie: Record<string, any>;
    }
}

declare function cookie(): Middleware;

export = cookie;
