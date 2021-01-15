// Type definitions for riderize__passport-strava-oauth2 1.1
// Project: https://github.com/Riderize/passport-strava-oauth2
// Definitions by: SEdilson <https://github.com/SEdilson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import passport = require('passport');
import express = require('express');

export interface Profile extends passport.Profile {
    id: string;
    fullName: string;
    name: {
        familyName: string;
        givenName: string;
    };
    photos?: Array<{
        value: string;
    }>;
    token?: string;

    _raw: string;
    _json: any;
}

export interface StrategyOption {
    clientID: string;
    clientSecret: string;
    callbackURL: string;

    authorizationURL?: string;
    tokenURL?: string;
    profileURL?: string;
}

export interface StrategyOptionWithRequest extends StrategyOption {
    passReqToCallback: true;
}

export type VerifyFunction = (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void) => void;
export type VerifyFunctionWithRequest =
    (req: express.Request, accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void) => void;

export class Strategy implements passport.Strategy {
    constructor(options: StrategyOption, verify: VerifyFunction);
    constructor(options: StrategyOptionWithRequest, verify: VerifyFunctionWithRequest);

    name: string;
    authenticate(req: express.Request, options?: object): void;
}
