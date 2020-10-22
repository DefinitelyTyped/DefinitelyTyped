// Type definitions for passport-github 1.1
// Project: https://github.com/jaredhanson/passport-github
// Definitions by:  Yasunori Ohoka <https://github.com/yasupeke>
//                  Manuel Ruck <https://github.com/reggaepanda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as passport from 'passport';
import * as express from 'express';
import * as oauth2 from 'passport-oauth2';
import { OutgoingHttpHeaders } from 'http';

import github = Strategy;

declare class Strategy extends oauth2.Strategy {
    constructor(options: github.StrategyOptions, verify: (accessToken: string, refreshToken: string, profile: github.Profile, done: oauth2.VerifyCallback) => void);
    // NOTE: A union of function types prevents contextual typing of arguments.
    // tslint:disable-next-line:unified-signatures
    constructor(options: github.StrategyOptions, verify: (accessToken: string, refreshToken: string, params: any, profile: github.Profile, done: oauth2.VerifyCallback) => void);
    constructor(options: github.StrategyOptionsWithRequest, verify: (req: express.Request, accessToken: string, refreshToken: string, profile: github.Profile, done: oauth2.VerifyCallback) => void);
    // NOTE: A union of function types prevents contextual typing of arguments.
    // tslint:disable-next-line:unified-signatures max-line-length
    constructor(options: github.StrategyOptionsWithRequest, verify: (req: express.Request, accessToken: string, params: any, refreshToken: string, profile: github.Profile, done: oauth2.VerifyCallback) => void);
}

declare namespace Strategy {
    // NOTE: not true for `export import` statements
    // tslint:disable-next-line:strict-export-declare-modifiers
    export import Strategy = github;

    interface _StrategyOptionsBase {
        authorizationURL?: string;
        tokenURL?: string;
        clientID: string;
        clientSecret: string;
        callbackURL?: string;
        customHeaders?: OutgoingHttpHeaders;
        scope?: string | string[];
        scopeSeparator?: string;
        sessionKey?: string;
        store?: oauth2.StateStore;
        state?: string;
        userAgent?: string;
        userProfileURL?: string;
    }

    interface StrategyOptions extends _StrategyOptionsBase {
        passReqToCallback?: false;
    }

    interface StrategyOptionsWithRequest extends _StrategyOptionsBase {
        passReqToCallback: true;
    }

    interface Profile extends passport.Profile {
        provider: "github";
        profileUrl: string;
        _raw: string;
        _json: object;
    }

    /** @deprecated Types renamed for consistency with 'passport-oauth2'. Use `_StrategyOptionsBase` instead. */
    type StrategyOptionBase = _StrategyOptionsBase;

    /** @deprecated Types renamed for consistency with 'passport-oauth2'. Use `StrategyOptions` instead. */
    type StrategyOption = StrategyOptions;

    /** @deprecated Types renamed for consistency with 'passport-oauth2'. Use `StrategyOptionsWithRequest` instead. */
    type StrategyOptionWithRequest = StrategyOptionsWithRequest;

    type OAuth2StrategyOptionsWithoutRequiredURLs = Pick<
        oauth2._StrategyOptionsBase,
        Exclude<keyof oauth2._StrategyOptionsBase, 'authorizationURL' | 'tokenURL'>
    >;
}

export = Strategy;
