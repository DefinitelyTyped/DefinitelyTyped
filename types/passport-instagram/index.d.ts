// Type definitions for passport-instagram 1.0
// Project: https://github.com/jaredhanson/passport-instagram
// Definitions by: Sagar Jain <https://github.com/sagar7993>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.3

import passport = require('passport');
import express = require('express');

export interface Profile extends passport.Profile {
    gender: string;
    username: string;

    _raw: string;
    _json: any;
    _accessLevel: string;
}

export interface StrategyOptionBase {
    consumerKey: string;
    consumerSecret: string;
    callbackURL: string;

    includeEmail?: true;

    reguestTokenURL?: string;
    accessTokenURL?: string;
    userAuthorizationURL?: string;
    sessionKey?: string;

    userProfileURL?: string;
    skipExtendedUserProfile?: boolean;
}

export interface StrategyOption extends StrategyOptionBase {
    passReqToCallback?: false;
}

export interface StrategyOptionWithRequest extends StrategyOptionBase {
    passReqToCallback: true;
}

export class Strategy extends passport.Strategy {
    constructor(options: StrategyOption,
        verify: (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void) => void);
    constructor(options: StrategyOptionWithRequest,
        verify: (req: express.Request, accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void) => void);

    name: string;
    authenticate(req: express.Request, options?: object): void;
}
