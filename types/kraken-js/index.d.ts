// Type definitions for krakenjs 2.2
// Project: http://krakenjs.com
// Definitions by: Timur Manyanov <https://github.com/darkwebdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Express } from 'express';
import { EventEmitter } from 'events';

declare function k(options?: k.Options | string): Express;

declare namespace k {
    interface Kraken extends Express, EventEmitter {
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
