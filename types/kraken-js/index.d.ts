// Type definitions for krakenjs 2.2
// Project: http://krakenjs.com
// Definitions by: Timur Manyanov <https://github.com/darkwebdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Express } from 'express';

declare function k(options?: k.Options | string): Express;

declare namespace k {
    interface Kraken extends Express {
        once(name: string, cb: (err: Error | null, result?: any) => any): void;
        kraken: Kraken;
    }

    interface Options {
        protocols?: object;
        basedir?: string;
        mountpath?: string;
        inheritViews?: boolean;
        startupHeaders?: Map<string, string>;
        onconfig?(config: object, next: (err: Error | null, config?: object) => any): any;
    }
}

export = k;
