// Type definitions for passport-github 1.1
// Project: https://github.com/jaredhanson/passport-github
// Definitions by: Yasunori Ohoka <https://github.com/yasupeke>
//                 Maarten Mulders <https://github.com/mthmulders>
//                 Christoph Werner <https://github.com/codepunkt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import passport = require('passport');
import express = require('express');

export interface Profile extends passport.Profile {
    profileUrl: string;
}

export interface StrategyOption extends passport.AuthenticateOptions {
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

export type CompletionCallback = (error: any, user?: any) => void;

export type DefaultVerificationCallback = (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: CompletionCallback
) => void;

export type ExtendedVerificationCallback = (
  request: express.Request,
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: CompletionCallback
) => void;

export type VerificationCallback = DefaultVerificationCallback | ExtendedVerificationCallback;

export class Strategy extends passport.Strategy {
    constructor(options: StrategyOption, verify: VerificationCallback);
    userProfile: (accessToken: string, done?: (error: any, profile: Profile) => void) => void;

    name: string;
    authenticate(req: express.Request, options?: passport.AuthenticateOptions): void;
}
