import passport = require("passport");
import express = require("express");

export interface Profile extends passport.Profile {
    id: string;
    provider: string;

    _json: {
        email: string;
        nickname: string;
        profile_image: string;
        age: number;
        birthday: any;
        id: string;
    };
}

export interface StrategyOption {
    clientID: string;
    clientSecret?: string;
    callbackURL: string;

    svcType?: number | undefined;
    authType?: string | undefined;

    authorizationURL?: string | undefined;
    tokenURL?: string | undefined;
    profileURL?: string | undefined;
}

export interface StrategyOptionWithRequest extends StrategyOption {
    passReqToCallback: true;
}

export type VerifyFunction = (
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void,
) => void;
export type VerifyFunctionWithRequest = (
    req: express.Request,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void,
) => void;

export class Strategy extends passport.Strategy {
    constructor(options: StrategyOption, verify: VerifyFunction);
    constructor(options: StrategyOptionWithRequest, verify: VerifyFunctionWithRequest);

    authenticate(req: express.Request, options?: any): void;
    authorizationParams: (options: any) => any;
    userProfile: (accessToken: string, done: (error: any, user?: any) => void) => void;
}
