// Type definitions for koa-convert 1.2
// Project: https://github.com/koajs/convert
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Context, Middleware } from "koa";

declare function convert(
    mw: (context: Context, next: () => Promise<any>) => Generator
): Middleware;

export = convert;
