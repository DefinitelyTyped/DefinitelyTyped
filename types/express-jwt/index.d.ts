// Type definitions for express-jwt 6.0
// Project: https://www.npmjs.org/package/express-jwt
// Definitions by:  Wonshik Kim <https://github.com/wokim>
//                 Sl1MBoy <https://github.com/Sl1MBoy>
//                 Milan Mimra <https://github.com/milan-mimra>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import express = require('express');
import unless = require('express-unless');

export = jwt;

declare function jwt(options: jwt.Options): jwt.RequestHandler;
declare namespace jwt {
    type secretType = string | Buffer;
    type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>);

    type ErrorCode = LiteralUnion<
        'revoked_token' | 'invalid_token' | 'credentials_bad_scheme' | 'credentials_bad_format' | 'credentials_required'
    >;

    interface SecretCallbackLong {
        (req: express.Request, header: any, payload: any, done: (err: any, secret?: secretType) => void): void;
    }
    interface SecretCallback {
        (req: express.Request, payload: any, done: (err: any, secret?: secretType) => void): void;
    }
    interface IsRevokedCallback {
        (req: express.Request, payload: any, done: (err: any, revoked?: boolean) => void): void;
    }
    interface GetTokenCallback {
        (req: express.Request): any;
    }
    interface Options {
        /**
         * The algorithms parameter is required to prevent potential downgrade attacks when providing third party libraries as secrets.
         * {@link https://github.com/auth0/express-jwt/blob/5fb8c88067b9448d746d04ab60ad3b1996c7e310/README.md#required-parameters}
         */
        algorithms: string[];
        secret: secretType | SecretCallback | SecretCallbackLong;
        userProperty?: string | undefined;
        credentialsRequired?: boolean | undefined;
        isRevoked?: IsRevokedCallback | undefined;
        requestProperty?: string | undefined;
        getToken?: GetTokenCallback | undefined;
        [property: string]: any;
    }
    interface RequestHandler extends express.RequestHandler {
        unless: typeof unless;
    }

    class UnauthorizedError extends Error {
        status: number;
        message: string;
        name: 'UnauthorizedError';
        code: ErrorCode;
        inner: { message: string };

        constructor(code: ErrorCode, error: { message: string });
    }
}

declare global {
    namespace Express {
        // tslint:disable-next-line:no-empty-interface
        interface User {}

        interface Request {
            user?: User | undefined;
        }
    }
}
