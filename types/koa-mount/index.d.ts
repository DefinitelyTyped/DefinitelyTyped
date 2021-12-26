// Type definitions for koa-mount 4.0
// Project: https://github.com/koajs/mount
// Definitions by: AmirSaber Sharifi <https://github.com/amirsaber>
//                 Tomek Łaziuk <https://github.com/tlaziuk>
//                 Vladislav Polyakov <https://github.com/polrk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Koa = require("koa");

declare function mount<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext>(
  app: Koa.Middleware<StateT, ContextT> | Koa<StateT, ContextT>
): Koa.Middleware<StateT, ContextT>;

declare function mount<StateT = Koa.DefaultState, ContextT = Koa.DefaultContext>(
  prefix: string,
  app: Koa.Middleware<StateT, ContextT> | Koa<StateT, ContextT>
): Koa.Middleware<StateT, ContextT>;

declare namespace mount { }

export = mount;
