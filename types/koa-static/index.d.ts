// Type definitions for koa-static 4.0
// Project: https://github.com/koajs/static
// Definitions by: Jerry Chin <https://github.com/hellopao>
// Definitions: https://github.com/hellopao/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import serve = require("koa-static");
    var Koa = require('koa');

    var app = new Koa();
    app.use(serve("."));

 =============================================== */

import { Context, Middleware } from "koa";
import { Stats } from "fs";

declare function serve(root: string, opts?: serve.ServeOptions): Middleware;
declare namespace serve {
    type SetHeaders = (res: Context["res"], path: string, stats: Stats) => any;

    interface ServeOptions {
        /**
         * Default file name, defaults to 'index.html'
         */
        index?: boolean | string;

        /**
         * If true, serves after return next(),allowing any downstream middleware to respond first.
         */
        defer?: boolean;

        /**
         * Browser cache max-age in milliseconds. defaults to 0
         */
        maxage?: number;

        /**
         * Allow transfer of hidden files. defaults to false
         */
        hidden?: boolean;

        /**
         * Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested file with .gz extension exists. defaults to true.
         */
        gzip?: boolean;

        /**
         * Try to match extensions from passed array to search for file when no extension is sufficed in URL. First found is served. (defaults to `false`)
         */
        extensions?: string[];

        /**
         * Function to set custom headers on response.
         */
        setHeaders?: SetHeaders;
    }
}
export = serve;
