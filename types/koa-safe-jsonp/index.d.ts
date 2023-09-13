// Type definitions for koa-safe-jsonp 1.0
// Project: https://github.com/koajs/koa-safe-jsonp
// Definitions by: Qingrong Ke <https://github.com/keqingrong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as jsonpBody from "jsonp-body";
import * as Koa from "koa";

declare namespace jsonp {
    interface Options extends jsonpBody.Options {
        /** callback name, default to `callback` */
        callback?: string;
    }
}

declare function jsonp(app: Koa, options?: jsonp.Options): Koa.Middleware;

export = jsonp;
