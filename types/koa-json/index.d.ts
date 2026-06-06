/* =================== USAGE ===================

    import * as Koa from 'koa';
    import * as json from 'koa-json';

    const app = new Koa();
    app.use(json());

 =============================================== */

import Koa = require("koa");

declare function json(opts?: {
    /**
     * default to pretty response [true]
     */
    pretty?: boolean | undefined;

    /**
     * optional query-string param for pretty responses [none]
     */
    param?: string | undefined;

    /**
     * JSON spaces [2]
     */
    spaces?: number | undefined;
}): Koa.Middleware;
declare namespace json {}
export = json;
