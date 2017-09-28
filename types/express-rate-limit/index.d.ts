// Type definitions for express-rate-limit 2.8
// Project: https://github.com/nfriedly/express-rate-limit
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import express = require("express");

declare namespace RateLimit {
    type StoreIncrementCallback = (err?: {}, hits?: number) => void;

    interface Store {
        incr(key: string, cb: StoreIncrementCallback): void;
        resetAll(): void;
        resetKey(key: string): void;
    }

    interface Options {
        delayAfter?: number;
        delayMs?: number;
        handlers?(req?: express.Request, res?: express.Response, next?: express.NextFunction): any;
        headers?: boolean;
        keyGenerator?(req?: express.Request, res?: express.Response): string;
        max?: number;
        message?: string;
        skip?(req?: express.Request, res?: express.Response): boolean;
        statusCode?: number;
        store?: Store;
        onLimitReached?(req?: express.Request, res?: express.Response, optionsUsed?: Options): void;
        windowMs?: number;
    }
}

declare var RateLimit: new (options: RateLimit.Options) => express.RequestHandler;
export = RateLimit;
