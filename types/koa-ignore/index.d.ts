// Type definitions for koa-ignore 1.0
// Project: https://github.com/smcmurray/koa-ignore#readme
// Definitions by: fer22f <https://github.com/fer22f>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Middleware, Context } from 'koa';

declare function koaIgnore(
    ...middleware: Middleware[]
): {
    if(condition: (context: Context) => boolean): Middleware;
    unless(condition: (context: Context) => boolean): Middleware;
};

export = koaIgnore;
