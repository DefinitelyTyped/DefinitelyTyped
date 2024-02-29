/* =================== USAGE ===================

    import serve = require("koa-static");
    var Koa = require('koa');

    var app = new Koa();
    app.use(serve("."));

 =============================================== */

import { Middleware } from "koa";

import { SendOptions } from "koa-send";

declare function serve(root: string, opts?: serve.Options): Middleware<{}>;

declare namespace serve {
    interface Options extends SendOptions {
        /** If true, serves after return next(), allowing any downstream middleware to respond first. */
        defer?: boolean | undefined;
    }
}

export = serve;
