// Type definitions for koa-mount 3.0
// Project: https://github.com/koajs/mount
// Definitions by: AmirSaber Sharifi <https://github.com/amirsaber>
//                 Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Koa = require("koa");

declare function mount(app: Koa.Middleware | Koa): Koa.Middleware;

declare function mount(prefix: string, app: Koa.Middleware | Koa): Koa.Middleware;

declare namespace mount { }

export = mount;
