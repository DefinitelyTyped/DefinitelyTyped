// Type definitions for passport-github2 1.2
// Project: https://github.com/cfsghost/passport-github
// Definitions by: Yasunori Ohoka <https://github.com/yasupeke>
//                 Maarten Mulders <https://github.com/mthmulders>
//                 Christoph Werner <https://github.com/codepunkt>
//                 Ivan Fernandes <https://github.com/ivan94>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import passport = require('passport');
import oauth2 = require('passport-oauth2');
import express = require('express');
import { OutgoingHttpHeaders } from 'http';

export interface Profile extends passport.Profile {
    profileUrl: string;
}

export interface StrategyOption extends passport.AuthenticateOptions {
    clientID: string;
    clientSecret: string;
    callbackURL: string;

    scope?: string[];
    userAgent?: string;

    authorizationURL?: string;
    tokenURL?: string;
    scopeSeparator?: string;
    customHeaders?: OutgoingHttpHeaders;
    userProfileURL?: string;
    userEmailURL?: string;
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
    state?: string;

    authorizationURL?: string;
    tokenURL?: string;
    scopeSeparator?: string;
    customHeaders?: OutgoingHttpHeaders;
    userProfileURL?: string;
    userEmailURL?: string;
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
