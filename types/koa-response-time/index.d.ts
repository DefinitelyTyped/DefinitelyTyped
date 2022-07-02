// Type definitions for koa-response-time 2.1
// Project: https://github.com/koajs/response-time#readme
// Definitions by: Steven McDowall <https://github.com/sjmcdowall>
//                 Dwscdv3 <https://github.com/Dwscdv3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Middleware } from 'koa';

interface KoaResponseTimeOptions {
    hrtime?: boolean | undefined;
}

/**
 * Add X-Response-Time header field.
 * @param options options dictionary. { hrtime }
 *
 *        hrtime: boolean.
 *          `true` to use time in nanoseconds.
 *          `false` to use time in milliseconds.
 *          Default is `false` to keep back compatible.
 * @api public
 */
declare function koa_response_time(options?: KoaResponseTimeOptions): Middleware;

export = koa_response_time;
