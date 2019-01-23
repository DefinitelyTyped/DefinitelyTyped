// Type definitions for passport-github 1.1
// Project: https://github.com/jaredhanson/passport-github
// Definitions by:  Yasunori Ohoka <https://github.com/yasupeke>
//                  Manuel Ruck <https://github.com/reggaepanda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import passport = require('passport');
import express = require('express');
import OAuth2 = require('passport-oauth2');
import { OutgoingHttpHeaders } from 'http';

export interface Profile extends passport.Profile {
    profileUrl: string;
}

export interface StrategyOptionBase {
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
}

export type OAuth2StrategyOptionsWithoutRequiredURLs = Pick<
    OAuth2._StrategyOptionsBase,
    Exclude<keyof OAuth2._StrategyOptionsBase, 'authorizationURL' | 'tokenURL'>
>;

export interface StrategyOption extends StrategyOptionBase {
    passReqToCallback?: false;
}
export interface StrategyOptionWithRequest extends StrategyOptionBase {
    passReqToCallback: true;
}

export class Strategy extends passport.Strategy {
    constructor(options: StrategyOption, verify: (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void) => void);
    constructor(options: StrategyOptionWithRequest, verify: (req: express.Request, accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void) => void);
    userProfile: (accessToken: string, done?: (error: any, profile: Profile) => void) => void;

    name: string;
    authenticate(req: express.Request, options?: passport.AuthenticateOptions): void;
}
