// Type definitions for express-rate-limit 2.6
// Project: https://github.com/nfriedly/express-rate-limit
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import express = require("express");

declare namespace RateLimit {
    type StoreIncrementCallback = (err?: {}, hits?: number) => void;

    interface Store {
        incr: (key: string, cb: StoreIncrementCallback) => void;
        resetAll: () => void;
        resetKey: (key: string) => void;
    }

    interface Options {
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

declare var RateLimit: new (options: RateLimit.Options) => express.RequestHandler;
export = RateLimit;
