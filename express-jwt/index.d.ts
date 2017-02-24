// Type definitions for express-jwt
// Project: https://www.npmjs.org/package/express-jwt
// Definitions by: Wonshik Kim <https://github.com/wokim/>, Kacper Polak <https://github.com/kacepe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import express = require('express');
import unless = require('express-unless');

export = jwt;

declare function jwt(options: jwt.Options): jwt.RequestHandler;
declare namespace jwt {
    export type secretType = string | Buffer
    export interface SecretCallback {
        (req: express.Request, header: any, payload: any, done: (err: any, secret?: boolean) => void): void;
        (req: express.Request, payload: any, done: (err: any, secret?: secretType) => void): void;
    }

    export interface IsRevokedCallback {
        (req: express.Request, payload: any, done: (err: any, revoked?: boolean) => void): void;
    }

    export interface GetTokenCallback {
        (req: express.Request): any;
    }
    export interface Options {
        secret: secretType | SecretCallback;
        userProperty?: string;
        skip?: string[];
        credentialsRequired?: boolean;
        isRevoked?: IsRevokedCallback;
        requestProperty?: string;
        getToken?: GetTokenCallback;
        [property: string]: any;
    }
    export interface RequestHandler extends express.RequestHandler {
        unless?: typeof unless;
    }
}
declare global {
    namespace Express {
        export interface Request {
            user?: any
        }
    }
}
