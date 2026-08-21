import passport = require("passport");
import express = require("express");

export interface StrategyOptions {
    tokenField?: string | undefined;
    tokenQuery?: string | undefined;
    tokenParams?: string | undefined;
    tokenHeader?: string | undefined;
    failedOnMissing?: boolean | undefined;
    passReqToCallback?: false | undefined;
}

export interface StrategyOptionsWithRequest {
    tokenField?: string | undefined;
    tokenQuery?: string | undefined;
    tokenParams?: string | undefined;
    tokenHeader?: string | undefined;
    failedOnMissing?: boolean | undefined;
    passReqToCallback: true;
}

export interface VerifyOptions {
    message: string;
}

export type VerifyFunctionWithRequest = (
    req: express.Request,
    token: string,
    done: (error: any, user?: any, options?: VerifyOptions) => void,
) => void;
export type VerifyFunction = (token: string, done: (error: any, user?: any, options?: VerifyOptions) => void) => void;

export class Strategy extends passport.Strategy {
    constructor(options: StrategyOptionsWithRequest, verify: VerifyFunctionWithRequest);
    constructor(options: StrategyOptions, verify: VerifyFunction);
    constructor(verify: VerifyFunction);

    name: string;
    authenticate(req: express.Request, options?: object): void;
}
