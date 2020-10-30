// Type definitions for passport-streamlabs 1.0
// Project: https://github.com/johnRivs/passport-streamlabs
// Definitions by: Ottomated <https://github.com/ottomated>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as passport from 'passport';
import * as express from 'express';
import * as oauth2 from 'passport-oauth2';
import { OutgoingHttpHeaders } from 'http';

import streamlabs = Strategy;

declare class Strategy extends oauth2.Strategy {
    constructor(options: streamlabs.StrategyOptions, verify: (accessToken: string, refreshToken: string, profile: streamlabs.Profile, done: oauth2.VerifyCallback) => void);
    // NOTE: A union of function types prevents contextual typing of arguments.
    // tslint:disable-next-line:unified-signatures
    constructor(options: streamlabs.StrategyOptions, verify: (accessToken: string, refreshToken: string, params: any, profile: streamlabs.Profile, done: oauth2.VerifyCallback) => void);
    constructor(options: streamlabs.StrategyOptionsWithRequest,
        verify: (req: express.Request, accessToken: string, refreshToken: string, profile: streamlabs.Profile, done: oauth2.VerifyCallback) => void);
    // NOTE: A union of function types prevents contextual typing of arguments.
    // tslint:disable-next-line:unified-signatures max-line-length
    constructor(options: streamlabs.StrategyOptionsWithRequest, verify: (req: express.Request, accessToken: string, params: any, refreshToken: string, profile: streamlabs.Profile, done: oauth2.VerifyCallback) => void);
    checkScope(scope: string, accessToken: string, cb: (err?: Error | null, value?: any) => void): void;
}

declare namespace Strategy {
    // NOTE: not true for `export import` statements
    // tslint:disable-next-line:strict-export-declare-modifiers
    export import Strategy = streamlabs;

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
        state?: any;
    }

    interface StrategyOptions extends _StrategyOptionsBase {
        passReqToCallback?: false;
    }

    interface StrategyOptionsWithRequest extends _StrategyOptionsBase {
        passReqToCallback: true;
    }

    interface Profile extends passport.Profile {
        provider: "streamlabs";
        token: string;
        id: string;
        username: string;
        displayName: string;
        _raw: string;
        _json: object;
    }
}

export = Strategy;
