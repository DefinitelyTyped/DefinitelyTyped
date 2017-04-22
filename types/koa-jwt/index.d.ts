// Type definitions for koa-jwt 2.1
// Project: https://github.com/koajs/jwt
// Definitions by: Bruno Krebs <https://github.com/brunokrebs/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Koa = require("koa");

export = jwt;

declare function jwt(options: jwt.Options): jwt.Middleware;

declare namespace jwt {
    interface Options {
        secret: string | Buffer;
        key?: string;
        getToken?(opts: jwt.Options): string;
        passthrough?: boolean;
        cookie?: string;
        debug?: boolean;
    }

    interface UnlessOptions {
        method?: string | string[];
        path?: string | string[] | RegExp | RegExp[];
        ext?: string| string[];
        custom?(ctx?: Koa.Context): boolean;
        useOriginalUrl?: boolean;
    }

    type Middleware = Koa.Middleware & {
        unless(options?: jwt.UnlessOptions): any;
    };
}
