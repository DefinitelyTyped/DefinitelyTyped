// Type definitions for koa-static 4.0
// Project: https://github.com/koajs/static
// Definitions by: Jerry Chin <https://github.com/hellopao>
//                 Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import serve = require("koa-static");
    var Koa = require('koa');

    var app = new Koa();
    app.use(serve("."));

 =============================================== */

import { Middleware } from "koa";

import { SendOptions } from "koa-send";

declare function serve(root: string, opts?: serve.Options): Middleware;

declare namespace serve {
    interface Options extends SendOptions {
        /** If true, serves after return next(), allowing any downstream middleware to respond first. */
        defer?: boolean;
    }
}

export = serve;
