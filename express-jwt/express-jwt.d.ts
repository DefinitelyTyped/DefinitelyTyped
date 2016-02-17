// Type definitions for express-jwt
// Project: https://www.npmjs.org/package/express-jwt
// Definitions by: Wonshik Kim <https://github.com/wokim/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />
/// <reference path="../express-unless/express-unless.d.ts" />

declare module "express-jwt" {
    import express = require('express');
    import unless = require('express-unless');

    function jwt(options: jwt.Options): jwt.RequestHandler;

    interface IDoneCallback<T> {
        (err: Error, result: T): void;
    }

    type ICallback = <T>(req: express.Request, payload: T, done: IDoneCallback<boolean>) => void;

    module jwt {
        export interface Options {
            secret: string|ICallback;
            userProperty?: string;
            skip?: string[];
            credentialsRequired?: boolean;
            isRevoked?: boolean;
            requestProperty?: string;
            getToken?: ICallback;
            [property: string]: any;
        }
        export interface RequestHandler extends express.RequestHandler {
            unless?: typeof unless;
        }
    }
    export = jwt;
}
