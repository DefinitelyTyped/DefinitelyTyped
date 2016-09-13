// Type definitions for koa-favicon v2.x
// Project: https://github.com/koajs/favicon
// Definitions by: Jerry Chin <https://github.com/hellopao/>
// Definitions: https://github.com/hellopao/DefinitelyTyped

/* =================== USAGE ===================

    import favicon = require("koa-favicon");
    var Koa = require('koa');

    var app = new Koa();
    app.use(favicon(__dirname + '/public/favicon.ico'));

 =============================================== */

/// <reference path="../koa/koa.d.ts" />

declare module "koa-favicon" {

    import * as Koa from "koa";

    /**
     * Returns a middleware serving the favicon found on the given path.
     */
    function favicon(path: string, options?: {

        /**
         * cache-control max-age directive in ms, defaulting to 1 day.
         */
        maxage?: number;

    }): { (ctx: Koa.Context, next?: () => any): any };

    namespace favicon {}
    export = favicon;
}
