// Type definitions for express-rate-limit 3.3
// Project: https://github.com/nfriedly/express-rate-limit
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 makepost <https://github.com/makepost>
//                 Jeremy Forsythe <https://github.com/jdforsythe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require("express");

declare namespace RateLimit {
    type StoreIncrementCallback = (err?: {}, hits?: number) => void;

    interface Store {
        incr(key: string, cb: StoreIncrementCallback): void;
        decrement(key: string): void;
        resetKey(key: string): void;
    }

    interface Message {
        status: number;
        message: string;
        [key: string]: any;
    }

    type MaxValueFn = () => number | Promise<number>;

    interface Options {
        /**
         * The funciton to handle requests once `max` is exceeded. It receives the request and response objects.
         * The "next" param is available if you need to pass to the next middleware. The `req.rateLimit` object
         * has `limit`, `current`, and `remaining` number of requests, and if the store provides it, a `resetTime`
         * Date object.
         * Default: `(req, res, next) => res.status(options.statusCode).send(options.message)`
         */
        handler?(req: express.Request, res: express.Response, next: express.NextFunction): any;

        /**
         * Enable headers for request limit (`X-RateLimit-Limit`) and current usage (`X-RateLimit-Remaining`) on all
         * responses andtime to wait before retrying (`Retry-After`) when `max` is exceeded. Defaults to `true`.
         */
        headers?: boolean;

        /**
         * Function used to generate keys. Defaults to using `req.ip`.
         * Default: `(req, res) => req.ip`
         */
        keyGenerator?(req: express.Request, res: express.Response): string;

        /**
         * Max number of connections during `windowMs` before sending a 429 response. May be a `number` or
         * a function that returns a `number` or a `Promise<number>`. Defaults to `5`. Set to `0` to disable.
         */
        max?: number | MaxValueFn;

        /**
         * Error message sent to user when `max` is exceeded. May be a `string`, JSON object, or any other value
         * that Express's `req.send()` supports. Defaults to `'Too many requests, please try again later.'`.
         */
        message?: string | Buffer | Message;

        /**
         * Function that is called the first time `max` is exceeded. The `req.rateLimit` object has `limit`, `current`,
         * and `remaining` number of requests and, if the store provides it, a `resetTime` Date object. Default is
         * an empty function.
         * Default: `(req, res, opts) => {}`
         */
        onLimitReached?(req: express.Request, res: express.Response, optionsUsed: Options): void;

        /**
         * Function used to skip requests. Returning `true` from the function will skip limiting for that request. Defaults to
         * always `false` (count all requests).
         * Default: `(req, res) => false`
         */
        skip?(req: express.Request, res: express.Response): boolean;

        /**
         * When set to `true`, failed requests (status >= 400, request canceled or errored) won't be counted. Defaults to `false`.
         */
        skipFailedRequests?: boolean;

        /**
         * When set to `true`, successful requests (status < 400) won't be counted. Defaults to `false`.
         */
        skipSuccessfulRequests?: boolean;

        /**
         * HTTP status code returned when `max` is exceeded. Defaults to `429`.
         */
        statusCode?: number;

        /**
         * The storage to use when persisting rate limit attempts.
         */
        store?: Store;

        /**
         * How long in milliseconds to keep records of requests in memory. Defaults to `60000` (1 minute).
         */
        windowMs?: number;
    }
    interface Instance extends express.RequestHandler {
        resetKey(key: string): void;
    }
}

declare var RateLimit: {
    new (options: RateLimit.Options): RateLimit.Instance;
    (options: RateLimit.Options): RateLimit.Instance;
};
export = RateLimit;
