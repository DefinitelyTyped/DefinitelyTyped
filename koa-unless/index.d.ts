// Type definitions for koa-unless 1.0
// Project: https://github.com/Foxandxss/koa-unless
// Definitions by: Bruno Krebs <https://github.com/brunokrebs/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Koa = require("koa");

export = unless;

declare function unless(options: unless.Options | Function): unless.unlessWrapper;

declare namespace unless {
    export type unlessWrapper = (options: unless.Options | Function) => Koa.Middleware;

    export interface Options {
        custom?: () => boolean;
        useOriginalUrl?: boolean;
        path?: string | string[];
        ext?: string | string[];
        method?: string | string[];
    }

    export type Middleware = Koa.Middleware & { unless?: unlessWrapper };
}
