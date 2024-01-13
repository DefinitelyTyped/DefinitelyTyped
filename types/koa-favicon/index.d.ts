/* =================== USAGE ===================

    import favicon = require("koa-favicon");
    var Koa = require('koa');

    var app = new Koa();
    app.use(favicon(__dirname + '/public/favicon.ico'));

 =============================================== */

import * as Koa from "koa";

/**
 * Returns a middleware serving the favicon found on the given path.
 */
declare function favicon(path: string, options?: {
    /**
     * cache-control max-age directive in ms, defaulting to 1 day.
     */
    maxage?: number | undefined;
    /**
     * MIME type of the file at path, defaulting to image/x-icon.
     */
    mime?: string | undefined;
}): Koa.Middleware;

declare namespace favicon {}
export = favicon;
