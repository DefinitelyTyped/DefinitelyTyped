// Type definitions for passport-twitter 1.0.4
// Project: https://github.com/jaredhanson/passport-twitter
// Definitions by: James Roland Cabresos <https://github.com/staticfunction>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="passport"/>



import passport = require('passport');
import express = require('express');

interface Profile extends passport.Profile {
    gender: string;
    username: string;

    _raw: string;
    _json: any;
    _accessLevel: string;
}

interface IStrategyOptionBase {
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

interface IStrategyOption extends IStrategyOptionBase {
    passReqToCallback?: false;
}

interface IStrategyOptionWithRequest  extends IStrategyOptionBase {
    passReqToCallback: true;
}

declare class Strategy implements passport.Strategy {
    constructor(options: IStrategyOption,
        verify: (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void) => void);
    constructor(options: IStrategyOptionWithRequest,
        verify: (req: express.Request, accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void) => void);

    name: string;
    authenticate: (req: express.Request, options?: Object) => void;
}
