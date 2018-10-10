// Type definitions for koa-json v2.x
// Project: https://github.com/koajs/json
// Definitions by: Alex Friedman <https://github.com/brooklyndev>
// Definitions: https://github.com/brooklyndev/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import * as Koa from 'koa';
    import * as json from 'koa-json';

    const app = new Koa();
    app.use(json());

 =============================================== */

import * as Koa from "koa";

declare function json(opts?: {

    /**
     * default to pretty response [true]
    */
    pretty?: boolean,

    /**
     * optional query-string param for pretty responses [none]
     */
    param?: string,

    /**
     * JSON spaces [2]
     */
    spaces?: number
}): Koa.Middleware;
declare namespace json { }
export = json;
