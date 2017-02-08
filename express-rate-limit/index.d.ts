// Type definitions for express-rate-limit 2.6
// Project: https://github.com/nfriedly/express-rate-limit
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import express = require("express");

declare namespace RateLimit {
    type StoreIncrementCallback = (err?: {}, hits?: number) => void;

    export interface Store {
        incr: (key: string, cb: StoreIncrementCallback) => void;
        resetAll: () => void;
        resetKey: (key: string) => void;
    }

    export interface Options {
        delayAfter?: number;
        delayMs?: number;
        handlers?: () => any;
        headers?: boolean;
        keyGenerator?: () => string;
        max?: number;
        message?: string;
        skip?: () => boolean;
        statusCode?: number;
        store?: Store;
        windowMs?: number;
    }
}

interface RateLimitStatic {
    new(options: RateLimit.Options): express.RequestHandler;
}

declare var RateLimit: RateLimitStatic;
export = RateLimit;
