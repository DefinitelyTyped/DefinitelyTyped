// Type definitions for koa-jwt 3.2
// Project: https://github.com/koajs/jwt
// Definitions by: Bruno Krebs <https://github.com/brunokrebs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Koa = require("koa");

export = jwt;

declare function jwt(options: jwt.Options): jwt.Middleware;

declare namespace jwt {
    interface Options {
        secret: string | Buffer | SecretProvider;
        key?: string;
        getToken?(opts: Options): string;
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
        unless(options?: UnlessOptions): any;
    };

    type SecretProvider = (header: TokenHeader) => Promise<string>;

    interface TokenHeader {
      alg: string;
      kid: string;
      typ: string;
    }
}
