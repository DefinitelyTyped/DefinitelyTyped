// Type definitions for koa-mount 3.0
// Project: https://github.com/koajs/mount
// Definitions by: AmirSaber Sharifi <https://github.com/amirsaber>
//                 Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Koa from "koa";

declare function mount(app: Koa.Middleware): Koa.Middleware;

declare function mount(app: Koa): Koa.Middleware;

declare function mount(prefix: string, app: Koa.Middleware): Koa.Middleware;

declare function mount(prefix: string, app: Koa): Koa.Middleware;

declare namespace mount { }

export = mount;
