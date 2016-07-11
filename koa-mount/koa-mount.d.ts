// Type definitions for koa-mount v2.0.0
// Project: https://github.com/koajs/mount
// Definitions by: AmirSaber Sharifi <https://github.com/amirsaber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../koa/koa.d.ts" />

declare module "koa-mount" {

    import * as Koa from "koa";

    interface Function { (ctx: Koa.Context, next?: () => any): any }

    function mount(app: Function): Function;

    function mount(app: Koa): Function;

    function mount(prefix: string, app: Function): Function;

    function mount(prefix: string, app: Koa): Function;

    namespace mount {}

    export = mount;
}
