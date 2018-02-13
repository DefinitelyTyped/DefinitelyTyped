// Type definitions for passport-kakao 0.1
// Project: https://github.com/rotoshine/passport-kakao
// Definitions by: Park9eon <https://github.com/Park9eon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import passport = require("passport");
import express = require("express");

export interface Profile extends passport.Profile {
    id: string;
    provider: string;

    _raw: string;
    _json: any;
}

export interface StrategyOption {
    clientID: string;
    clientSecret: string;
    callbackURL: string;

    scopeSeparator?: string;
    customHeaders?: string;
}

export type VerifyFunction =
    (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void) => void;

export class Strategy implements passport.Strategy {
    constructor(options: StrategyOption, verify: VerifyFunction);

    authenticate: (req: express.Request, options?: any) => void;
    userProfile: (accessToken: string, done: (error: any, user?: any) => void) => void;
}
