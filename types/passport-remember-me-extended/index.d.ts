// Type definitions for passport-remember-me-extended 0.0
// Project: https://github.com/dereklakin/passport-remember-me
// Definitions by: AylaJK <https://github.com/AylaJK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import passport = require('passport');
import express = require('express');

export interface StrategyOption {
    key?: string;
    cookie?: express.CookieOptions;
}

export interface StrategyOptionWithRequest extends StrategyOption {
    passReqToCallback: true;
}

export type VerifyFunction =
    (token: any, done: (err: any, user?: any, info?: any) => void) => void;

export type VerifyFunctionWithRequest =
    (req: express.Request, token: any, done: (err: any, user?: any, info?: any) => void) => void;

export type IssueFunction =
    (user: any, done: (err: any, token?: any) => void) => void;

export type IssueFunctionWithRequest =
    (req: express.Request, user: any, done: (err: any, token?: any) => void) => void;

export class Strategy extends passport.Strategy {
    constructor(verify: VerifyFunction, issue: IssueFunction);
    constructor(options: StrategyOptionWithRequest, verify: VerifyFunctionWithRequest, issue: IssueFunctionWithRequest);
    constructor(options: StrategyOption, verify: VerifyFunction, issue: IssueFunction);

    authenticate(req: express.Request, options?: passport.AuthenticateOptions): void;
}
