// Type definitions for passport-oauth2-client-password 0.1.2
// Project: https://github.com/jaredhanson/passport-oauth2-client-password
// Definitions by: Ivan Zubok <https://github.com/akaNightmare>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="passport"/>
/// <reference types="express"/>

import * as passport from 'passport';
import * as express from  'express';

interface StrategyOptionsWithRequestInterface {
    passReqToCallback: boolean;
}

interface VerifyFunctionWithRequest {
    (req: express.Request, clientId: string, clientSecret: string, done: (error: any, client?: any, info?: any) => void): void;
}

interface VerifyFunction {
    (clientId: string, clientSecret: string, done: (error: any, client?: any, info?: any) => void): void;
}

declare class Strategy extends passport.Strategy {
    constructor(options: StrategyOptionsWithRequestInterface, verify: VerifyFunctionWithRequest);
    constructor(verify: VerifyFunction);

    name: string;
    authenticate(req: express.Request, options?: {}): void;
}
