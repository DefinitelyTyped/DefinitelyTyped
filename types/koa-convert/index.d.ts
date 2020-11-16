// Type definitions for koa-convert 1.2
// Project: https://github.com/koajs/convert, https://github.com/gyson/koa-convert
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Context, Middleware, Next } from "koa";

declare function convert(
    mw: (context: Context, next: Next) => Generator
): Middleware;

export = convert;
