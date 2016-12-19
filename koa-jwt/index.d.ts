// Type definitions for koa-jwt 2.1
// Project: https://github.com/koajs/jwt
// Definitions by: Bruno Krebs <https://github.com/brunokrebs/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Koa = require("koa");

export = jwt;

declare function jwt(options: jwt.Options): (ctx: Koa.Context, next?: () => any) => any;

declare namespace jwt {
    type GetToken = (opts: jwt.Options) => string;

    export interface Options {
        secret: string | Buffer;
        key?: string;
        getToken?: GetToken;
        passthrough?: boolean;
        cookie?: string;
        debug?: boolean;
    }
}
