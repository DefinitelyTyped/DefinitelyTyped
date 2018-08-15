// Type definitions for koa-logger 3.1
// Project: https://github.com/koajs/logger
// Definitions by: Joshua DeVinney <https://github.com/geoffreak>
//                 Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import {
    Middleware,
} from 'koa';

declare function KoaLogger(): Middleware;
declare namespace KoaLogger { }
export = KoaLogger;
