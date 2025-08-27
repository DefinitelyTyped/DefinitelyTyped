import { Middleware } from "koa";

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
