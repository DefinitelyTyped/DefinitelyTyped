// Type definitions for express-rate-limit 2.6.0
// Project: https://github.com/nfriedly/express-rate-limit
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="express"/>

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
        headers?: boolean;
        keyGenerator?: Function;
        max?: number;
        message?: string;
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
