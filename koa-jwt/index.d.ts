// Type definitions for koa-jwt v2.1.0
// Project: https://github.com/koajs/jwt
// Definitions by: Bruno Krebs <https://github.com/brunokrebs/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import express = require('express');
import unless = require('express-unless');

export = jwt;

declare function jwt(options: jwt.Options): jwt.RequestHandler;

declare namespace jwt {
    export interface GetToken {
        (opts: jwt.Options): string;
    }

    export interface Options {
        secret: string | Buffer;
        key?: string;
        getToken?: GetToken;
        passthrough?: boolean;
        cookie?: string;
        debug?: boolean;
    }
}
