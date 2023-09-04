// Type definitions for cookie-parser 1.4
// Project: https://github.com/expressjs/cookie-parser
// Definitions by: Santi Albo <https://github.com/santialbo>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as express from "express";

declare global {
    namespace Express {
        // Inject additional properties on express.Request
        interface Request {
            /**
             * This request's secret.
             * Optionally set by cookie-parser if secret(s) are provided.  Can be used by other middleware.
             * [Declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) can be used to add your own properties.
             */
            secret?: string;
        }
    }
}

declare function cookieParser(
    secret?: string | string[],
    options?: cookieParser.CookieParseOptions,
): express.RequestHandler;

declare namespace cookieParser {
    interface CookieParseOptions {
        decode?(val: string): string;
    }

    function JSONCookie(jsonCookie: string): object | undefined;

    function JSONCookies<T extends { [key: string]: string }>(jsonCookies: T): { [P in keyof T]: object | undefined };

    function signedCookie(cookie: string, secret: string | string[]): string | false;

    function signedCookies<T extends { [key: string]: string }>(
        cookies: T,
        secret: string | string[],
    ): { [P in keyof T]?: string | false };
}

export = cookieParser;
