// Type definitions for koa-mount 4.0
// Project: https://github.com/koajs/mount
// Definitions by: AmirSaber Sharifi <https://github.com/amirsaber>
//                 Tomek Łaziuk <https://github.com/tlaziuk>
//                 Vladislav Polyakov <https://github.com/polrk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Koa = require("koa");

declare function mount<StateT = any, CustomT = {}>(
  app: Koa.Middleware<StateT, CustomT> | Koa<StateT, CustomT>
): Koa.Middleware<StateT, CustomT>;

declare function mount<StateT = any, CustomT = {}>(
  prefix: string,
  app: Koa.Middleware<StateT, CustomT> | Koa<StateT, CustomT>
): Koa.Middleware<StateT, CustomT>;

declare namespace mount { }

export = mount;
