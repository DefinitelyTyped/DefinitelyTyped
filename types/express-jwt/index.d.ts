// Type definitions for express-jwt
// Project: https://www.npmjs.org/package/express-jwt
// Definitions by:  Wonshik Kim <https://github.com/wokim>
//                  Kacper Polak <https://github.com/kacepe>
//                  Sl1MBoy <https://github.com/Sl1MBoy>
//                  Milan Mimra <https://github.com/milan-mimra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require('express');
import unless = require('express-unless');

export = jwt;

declare function jwt(options: jwt.Options): jwt.RequestHandler;
declare namespace jwt {
    export type secretType = string | Buffer
    export type ErrorCode =
        "revoked_token" |
        "invalid_token" |
        "credentials_bad_scheme" |
        "credentials_bad_format" |
        "credentials_required"

    export interface SecretCallbackLong {
        (req: express.Request, header: any, payload: any, done: (err: any, secret?: secretType) => void): void;
    }
    export interface SecretCallback {
        (req: express.Request, payload: any, done: (err: any, secret?: secretType) => void): void;
    }
    export interface IsRevokedCallback {
        (req: express.Request, payload: any, done: (err: any, revoked?: boolean) => void): void;
    }
    export interface GetTokenCallback {
        (req: express.Request): any;
    }
    export interface Options {
        secret: secretType | SecretCallback | SecretCallbackLong;
        userProperty?: string;
        credentialsRequired?: boolean;
        isRevoked?: IsRevokedCallback;
        requestProperty?: string;
        getToken?: GetTokenCallback;
        [property: string]: any;
    }
    export interface RequestHandler extends express.RequestHandler {
        unless: typeof unless;
    }

    export class UnauthorizedError extends Error  {
        status: number;
        message: string;
        name: 'UnauthorizedError';
        code: ErrorCode;
        inner: { message: string };

        constructor(code: ErrorCode, error: { message: string });
    }
}
