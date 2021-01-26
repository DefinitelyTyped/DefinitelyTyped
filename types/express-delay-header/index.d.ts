// Type definitions for express-delay-header 1.0
// Project: https://github.com/guisehn/express-delay-header#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { NextFunction } from 'express-serve-static-core';

/**
 * Simulates latency on express requests when header is provided
 */
declare function delay(options?: delay.Options): NextFunction;

declare namespace delay {
    interface Options {
        /**
         * @default 'delay'
         */
        headerName?: string;
        /**
         * @default 'development'
         */
        nodeEnv?: string | string[];
        /**
         * @default setTimeout
         */
        timeoutFunction?: (next: () => void, ms: number) => void;
        /**
         * @default process.env.NODE_ENV
         */
        currentEnv?: string;
    }
}

export = delay;
