// Type definitions for passport-github 1.1.0
// Project: https://github.com/jaredhanson/passport-github
// Definitions by: Yasunori Ohoka <https://github.com/yasupeke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="passport"/>



import passport = require('passport');
import express = require('express');

interface Profile extends passport.Profile {
    profileUrl: string;
}

interface IStrategyOption {
    clientID: string;
    clientSecret: string;
    callbackURL: string;

    scope?: string[];
    userAgent?: string;

    authorizationURL?: string;
    tokenURL?: string;
    scopeSeparator?: string;
    customHeaders?: string;
    userProfileURL?: string;
}

declare class Strategy implements passport.Strategy {
    constructor(options: IStrategyOption, verify: (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void) => void);
    userProfile: (accessToken: string, done?: (error: any, profile: Profile) => void) => void;

    name: string;
    authenticate: (req: express.Request, options?: Object) => void;
}