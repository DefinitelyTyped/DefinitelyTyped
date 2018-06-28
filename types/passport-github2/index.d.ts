// Type definitions for passport-github2 1.2
// Project: https://github.com/jaredhanson/passport-github
// Definitions by: Yasunori Ohoka <https://github.com/yasupeke>
//                 Maarten Mulders <https://github.com/mthmulders>
//                 Christoph Werner <https://github.com/codepunkt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import passport = require('passport');
import oauth2 = require('passport-oauth2');
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

export type OAuth2StrategyOptionsWithoutRequiredURLs = Pick<
    oauth2._StrategyOptionsBase,
    Exclude<keyof oauth2._StrategyOptionsBase , 'authorizationURL' | 'tokenURL'>
>;

export interface _StrategyOptionsBase extends OAuth2StrategyOptionsWithoutRequiredURLs {
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

export interface StrategyOptions extends _StrategyOptionsBase {
    passReqToCallback?: false;
}
export interface StrategyOptionsWithRequest extends _StrategyOptionsBase {
    passReqToCallback: true;
}

export class Strategy extends oauth2.Strategy {
    constructor(options: StrategyOptions, verify: oauth2.VerifyFunction);
    constructor(options: StrategyOptionsWithRequest, verify: oauth2.VerifyFunctionWithRequest);
    userProfile(accessToken: string, done: (err?: Error | null, profile?: any) => void): void;

    name: string;
    authenticate(req: express.Request, options?: passport.AuthenticateOptions): void;
}
