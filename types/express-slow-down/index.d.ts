// Type definitions for express-slow-down 1.3
// Project: https://github.com/nfriedly/express-slow-down
// Definitions by: Jeremy Forsythe <https://github.com/jdforsythe>
//                 Josh Henderson <https://github.com/joshhendo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require('express');

declare namespace SlowDown {
    type StoreIncrementCallback = (err?: {}, hits?: number) => void;

    interface SlowDownRequestAugmentation {
        /**
         * The `options.delayAfter` value
         */
        limit: number;

        /**
         * The number of requests in the current window
         */
        current: number;

        /**
         * the number of requests remaining before rate-limiting begins
         */
        remaining: number;

        /**
         * When the window will reset, `current` will return to `0`, and `remaining` will return
         * to limit. Represents milliseconds since epoch (compare to `Date.now()`). This field
         * depends on store support. It will be `undefined` if the store does not provide the value.
         */
        resetTime?: number;

        /**
         * Amount of delay imposed on current request in milliseconds
         */
        delay: number;
    }

    /**
     * Express Request with the added `slowDown` property
     */
    interface RequestWithSlowDown extends express.Request {
        slowDown: SlowDownRequestAugmentation;
    }

    interface Store {
        incr(key: string, cb: StoreIncrementCallback): void;
        decrement(key: string): void;
        resetKey(key: string): void;
    }

    /**
     * express-slow-down options
     */
    interface Options {
        /**
         * How long to keep records of requests in memory. Defaults to `60000` (1 minute)
         */
        windowMs?: number;

        /**
         * Max number of connections during `windowMs` before starting to delay responses.
         * Defaults to `1`. Set to `0` to disable delaying.
         */
        delayAfter?: number;

        /**
         * How long to delay the response, multiplied by `(number recent hits - delayAfter)`.
         * Defaults to `1000` (1 second). Set to `0` to disable delaying.
         */
        delayMs?: number;

        /**
         * Maximum value for `delayMs` after many consecutive attempts, that is, after the n-th request,
         * the delay will be always `maxDelayMs`. Important when your application is running behind a
         * load balancer or reverse proxy that has a request timeout. Defaults to Infinity.
         */
        maxDelayMs?: number;

        /**
         * When `true` failed requests (response status >= 400) won't be counted. Defaults to `false`.
         */
        skipFailedRequests?: boolean;

        /**
         * When `true` successful requests (response status < 400) won't be counted. Defaults to `false`.
         */
        skipSuccessfulRequests?: boolean;

        /**
         * Function used to generate keys. By default user IP address (`req.ip`) is used.
         * Default: `(req, res) => req.ip`
         */
        keyGenerator?(req: express.Request, res: express.Response): string;

        /**
         * Function used to skip requests. Returning `true` from the function will skip delaying for that request.
         * Default: `(req, res) => false`
         */
        skip?(req: express.Request, res: express.Response): boolean;

        /**
         * Function to execute the first time the limit is reached within `windowMs`.
         * Default: `(req, res, opts) => {}`
         */
        onLimitReached?(req: RequestWithSlowDown, res: express.Response, optionsUsed: Options): void;

        /**
         * The storage to use when persisting request attempts. By default, the MemoryStore is used.
         */
        store?: Store;
    }
}

declare function SlowDown(options: SlowDown.Options): express.RequestHandler;
export = SlowDown;
