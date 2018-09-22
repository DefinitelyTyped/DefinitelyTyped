// Type definitions for passport-naver 0.2
// Project: https://github.com/naver/passport-naver
// Definitions by: Park9eon <https://github.com/Park9eon>
//                 ZeroCho <https://github.com/zerocho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import passport = require("passport");
import express = require("express");

export interface Profile extends passport.Profile {
    id: string;
    provider: string;

    _json: {
        email: string,
        nickname: string,
        profile_image: string,
        age: number,
        birthday: any
        id: string
    };
}

export interface StrategyOption {
    clientID: string;
    clientSecret: string;
    callbackURL: string;

    svcType?: number;
    authType?: string;

    authorizationURL?: string;
    tokenURL?: string;
    profileURL?: string;
}

export interface StrategyOptionWithRequest extends StrategyOption {
    passReqToCallback: boolean;
}

export type VerifyFunction = (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void) => void;
export type VerifyFunctionWithRequest = (req: express.Request, accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void) => void;

export class Strategy extends passport.Strategy {
    constructor(options: StrategyOption, verify: VerifyFunction);
    constructor(options: StrategyOptionWithRequest, verify: VerifyFunctionWithRequest);

    authenticate(req: express.Request, options?: any): void;
    authorizationParams: (options: any) => any;
    userProfile: (accessToken: string, done: (error: any, user?: any) => void) => void;
}
