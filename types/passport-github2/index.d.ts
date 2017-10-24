// Type definitions for passport-github 1.1
// Project: https://github.com/jaredhanson/passport-github
// Definitions by: Yasunori Ohoka <https://github.com/yasupeke>
//                 Maarten Mulders <https://github.com/mthmulders>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import passport = require('passport');
import express = require('express');

export interface Profile extends passport.Profile {
    profileUrl: string;
}

export interface StrategyOption {
    clientID: string;
    clientSecret: string;
    callbackURL: string;

    scope?: string[];
    userAgent?: string;
    state?: boolean;

    authorizationURL?: string;
    tokenURL?: string;
    scopeSeparator?: string;
    customHeaders?: string;
    userProfileURL?: string;
}

export class Strategy implements passport.Strategy {
    constructor(options: StrategyOption, verify: (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void) => void);
    userProfile: (accessToken: string, done?: (error: any, profile: Profile) => void) => void;

    name: string;
    authenticate: (req: express.Request, options?: passport.AuthenticateOptions) => void;
}
