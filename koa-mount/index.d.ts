// Type definitions for koa-mount v2.0.0
// Project: https://github.com/koajs/mount
// Definitions by: AmirSaber Sharifi <https://github.com/amirsaber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


import * as Koa from "koa";

interface Function { (ctx: Koa.Context, next?: () => any): any }

declare function mount(app: Function): Function;

declare function mount(app: Koa): Function;

declare function mount(prefix: string, app: Function): Function;

declare function mount(prefix: string, app: Koa): Function;

declare namespace mount { }

export = mount;
