// Type definitions for multy 0.1
// Project: https://github.com/eduardorfs/multy
// Definitions by: Jan Dolezel <https://github.com/dolezel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Koa from 'koa';
import { BusboyConfig } from 'busboy';

declare module 'koa' {
    interface Request {
        body: any;
    }
}

declare function multy(opts?: BusboyConfig): Koa.Middleware;

export = multy;
