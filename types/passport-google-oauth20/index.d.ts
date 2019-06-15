// Type definitions for passport-google-oauth 2.0
// Project: https://github.com/jaredhanson/passport-google-oauth2
// Definitions by: Yasunori Ohoka <https://github.com/yasupeke>
//                 Eduard Zintz <https://github.com/ezintz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as passport from "passport";
import * as express from "express";
import * as oauth2 from "passport-oauth2";
import { OutgoingHttpHeaders } from "http";

export type OAuth2StrategyOptionsWithoutRequiredURLs = Pick<
    oauth2._StrategyOptionsBase,
    Exclude<keyof oauth2._StrategyOptionsBase, "authorizationURL" | "tokenURL">
>;

export interface _StrategyOptionsBase extends OAuth2StrategyOptionsWithoutRequiredURLs {
    accessType?: 'offline' | 'online';
    authorizationURL?: string;
    callbackURL?: string;
    clientID: string;
    clientSecret: string;
    scope?: string | string[];
    tokenURL?: string;
    userProfileURL?: string;
}

export interface StrategyOptions extends _StrategyOptionsBase {
    passReqToCallback?: false;
}

export interface StrategyOptionsWithRequest extends _StrategyOptionsBase {
    passReqToCallback: true;
}

export interface Profile extends passport.Profile {
    profileUrl: string;
}

export class Strategy extends oauth2.Strategy {
    constructor(
        options: StrategyOptions,
        verify: (
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: oauth2.VerifyCallback
        ) => void
    );
    constructor(
        options: StrategyOptionsWithRequest,
        verify: (
            req: express.Request,
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: oauth2.VerifyCallback
        ) => void
    );
}
