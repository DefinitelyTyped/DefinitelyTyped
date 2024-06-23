import express = require("express");

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
        resetTime?: number | undefined;

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
        windowMs?: number | undefined;

        /**
         * Max number of connections during `windowMs` before starting to delay responses.
         * Defaults to `1`. Set to `0` to disable delaying.
         */
        delayAfter?: number | undefined;

        /**
         * How long to delay the response, multiplied by `(number recent hits - delayAfter)`.
         * Defaults to `1000` (1 second). Set to `0` to disable delaying.
         */
        delayMs?: number | undefined;

        /**
         * Maximum value for `delayMs` after many consecutive attempts, that is, after the n-th request,
         * the delay will be always `maxDelayMs`. Important when your application is running behind a
         * load balancer or reverse proxy that has a request timeout. Defaults to Infinity.
         */
        maxDelayMs?: number | undefined;

        /**
         * When `true` failed requests (response status >= 400) won't be counted. Defaults to `false`.
         */
        skipFailedRequests?: boolean | undefined;

        /**
         * When `true` successful requests (response status < 400) won't be counted. Defaults to `false`.
         */
        skipSuccessfulRequests?: boolean | undefined;

        /**
         * Add `X-SlowDown-Limit`, `X-SlowDown-Remaining`, and if the store supports it,
         * `X-SlowDown-Reset` headers to all responses.
         */
        headers?: boolean;

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
        store?: Store | undefined;
    }
}

declare function SlowDown(options: SlowDown.Options): express.RequestHandler;
export = SlowDown;
