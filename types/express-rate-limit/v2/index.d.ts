// Type definitions for express-rate-limit 2.9
// Project: https://github.com/nfriedly/express-rate-limit
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>, makepost <https://github.com/makepost>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require('express');

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

    interface Options {
        delayAfter?: number;
        delayMs?: number;
        handler?(req: express.Request, res: express.Response, next: express.NextFunction): any;
        headers?: boolean;
        keyGenerator?(req: express.Request, res: express.Response): string;
        max?: number;
        message?: string | Buffer | Message;
        skip?(req: express.Request, res: express.Response): boolean;
        skipFailedRequests?: boolean;
        statusCode?: number;
        store?: Store;
        onLimitReached?(req: express.Request, res: express.Response, optionsUsed: Options): void;
        windowMs?: number;
    }

    interface Instance extends express.RequestHandler {
        resetKey(key: string): void;
    }
}

declare var RateLimit: new (options: RateLimit.Options) => RateLimit.Instance;
export = RateLimit;
