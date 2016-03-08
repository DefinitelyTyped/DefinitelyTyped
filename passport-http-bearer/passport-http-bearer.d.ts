// Type definitions for passport-http-bearer 1.0.1
// Project: https://github.com/jaredhanson/passport-http-bearer
// Definitions by: Isman Usoh <https://github.com/isman-usoh>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../passport/passport.d.ts"/>
/// <reference path="../express/express.d.ts"/>

declare module "passport-http-bearer" {

    import passport = require("passport");
    import express = require("express");

    interface IStrategyOptions {
        scope: string | Array<string>;
        realm: string;
        passReqToCallback: boolean;
    }
    interface IVerifyOptions {
        message: string;
        scope: string | Array<string>;
    }

    interface VerifyFunction {
        (token: string, done: (error: any, user?: any, options?: IVerifyOptions | string) => void): void;
    }

    interface VerifyFunctionWithRequest {
        (req: express.Request, token: string, done: (error: any, user?: any, options?: IVerifyOptions | string) => void): void;
    }

    class Strategy implements passport.Strategy {
        constructor(verify: VerifyFunction);
        constructor(options: IStrategyOptions, verify: VerifyFunction);
        constructor(options: IStrategyOptions, verify: VerifyFunctionWithRequest);

        name: string;
        authenticate: (req: express.Request, options?: Object) => void;
    }
}
