// Type definitions for passport-unique-token 1.0.0
// Project: https://github.com/Lughino/passport-unique-token
// Definitions by: briman0094 <https://github.com/briman0094>
// (based on passport-local definitions by Maxime LUCE <https://github.com/SomaticIT>)
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="passport"/>

import passport = require('passport');
import express = require('express');

declare namespace passport_unique_token {

    interface IStrategyOptions {
        tokenField ? : string;
        tokenQuery ? : string;
        tokenParams ? : string;
        tokenHeader ? : string;
        failedOnMissing ? : boolean;
        passReqToCallback ? : false;
    }

    interface IStrategyOptionsWithRequest {
        tokenField ? : string;
        tokenQuery ? : string;
        tokenParams ? : string;
        tokenHeader ? : string;
        failedOnMissing ? : boolean;
        passReqToCallback: true;
    }

    interface IVerifyOptions {
        message: string;
    }

    interface VerifyFunctionWithRequest {
        (req: express.Request, token: string, done: (error: any, user ? : any, options ? : IVerifyOptions) => void): void;
    }

    interface VerifyFunction {
        (token: string, done: (error: any, user ? : any, options ? : IVerifyOptions) => void): void;
    }

    export class Strategy implements passport.Strategy {
        constructor(options: IStrategyOptionsWithRequest, verify: VerifyFunctionWithRequest);
        constructor(options: IStrategyOptions, verify: VerifyFunction);
        constructor(verify: VerifyFunction);

        name: string;
        authenticate: (req: express.Request, options ? : Object) => void;
    }
}
