/// <reference types="passport"/>
/// <reference types="express"/>

import * as express from "express";
import * as passport from "passport";

interface StrategyOptionsWithRequestInterface {
    passReqToCallback: boolean;
}

interface VerifyFunctionWithRequest {
    (
        req: express.Request,
        clientId: string,
        clientSecret: string,
        done: (error: any, client?: any, info?: any) => void,
    ): void;
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
