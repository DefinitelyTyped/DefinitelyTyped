import passport = require("passport");
import express = require("express");

export interface StrategyOption {
    key?: string | undefined;
    cookie?: express.CookieOptions | undefined;
}

export type VerifyFunction = (token: any, done: (err: any, user?: any, info?: any) => void) => void;

export type IssueFunction = (user: any, done: (err: any, token?: any) => void) => void;

export type IssueFunctionWithRequest = (req: express.Request, user: any, done: (err: any, token?: any) => void) => void;

export class Strategy extends passport.Strategy {
    constructor(verify: VerifyFunction, issue: IssueFunction);
    constructor(options: StrategyOption, verify: VerifyFunction, issue: IssueFunction);

    authenticate(req: express.Request, options?: passport.AuthenticateOptions): void;
}
