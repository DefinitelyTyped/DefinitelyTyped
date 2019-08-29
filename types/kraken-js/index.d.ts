// Type definitions for krakenjs 2.2
// Project: http://krakenjs.com, https://github.com/krakenjs/kraken-js
// Definitions by: Timur Manyanov <https://github.com/darkwebdev>
//                 Satana Charuwichitratana <https://github.com/micksatana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Express } from 'express';

declare function k(options?: k.Options | string): Express;

declare namespace k {
    interface Kraken extends Express {
        kraken: Kraken;
    }

    interface Options {
        protocols?: object;
        basedir?: string;
        configdir?: string;
        mountpath?: string;
        inheritViews?: boolean;
        startupHeaders?: { [key: string]: string; };
        onconfig?(config: Map<string, any>, next: (err: Error | null, config?: object) => any): any;
        uncaughtException?(err: Error): any;
    }
}

export = k;
