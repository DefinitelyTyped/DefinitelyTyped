// Type definitions for koa-requestid 2.0
// Project: https://github.com/seegno/koa-requestid/
// Definitions by: Steven McDowall <https://github.com/sjmcdowall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Middleware } from 'koa';

export = requestId;

declare function requestId(options?: {
    expose?: string;
    header?: string;
    query?: string;
}): Middleware;
