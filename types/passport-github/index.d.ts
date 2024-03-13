import * as express from "express";
import { OutgoingHttpHeaders } from "http";
import * as passport from "passport";
import * as oauth2 from "passport-oauth2";

import github = Strategy;

declare class Strategy extends oauth2.Strategy {
    constructor(
        options: github.StrategyOptions,
        verify: (
            accessToken: string,
            refreshToken: string,
            profile: github.Profile,
            done: oauth2.VerifyCallback,
        ) => void,
    );
    constructor(
        options: github.StrategyOptions,
        // NOTE: A union of function types prevents contextual typing of arguments.
        // tslint:disable-next-line:unified-signatures
        verify: (
            accessToken: string,
            refreshToken: string,
            params: any,
            profile: github.Profile,
            done: oauth2.VerifyCallback,
        ) => void,
    );
    constructor(
        options: github.StrategyOptionsWithRequest,
        verify: (
            req: express.Request,
            accessToken: string,
            refreshToken: string,
            profile: github.Profile,
            done: oauth2.VerifyCallback,
        ) => void,
    );
    constructor(
        options: github.StrategyOptionsWithRequest,
        // NOTE: A union of function types prevents contextual typing of arguments.
        // tslint:disable-next-line:unified-signatures
        verify: (
            req: express.Request,
            accessToken: string,
            params: any,
            refreshToken: string,
            profile: github.Profile,
            done: oauth2.VerifyCallback,
        ) => void,
    );
}

declare namespace Strategy {
    // NOTE: not true for `export import` statements
    // eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
    export import Strategy = github;

    interface _StrategyOptionsBase {
        authorizationURL?: string | undefined;
        tokenURL?: string | undefined;
        clientID: string;
        clientSecret: string;
        callbackURL?: string | undefined;
        customHeaders?: OutgoingHttpHeaders | undefined;
        scope?: string | string[] | undefined;
        scopeSeparator?: string | undefined;
        sessionKey?: string | undefined;
        store?: oauth2.StateStore | undefined;
        state?: string | undefined;
        userAgent?: string | undefined;
        userProfileURL?: string | undefined;
    }

    interface StrategyOptions extends _StrategyOptionsBase {
        passReqToCallback?: false | undefined;
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
        Exclude<keyof oauth2._StrategyOptionsBase, "authorizationURL" | "tokenURL">
    >;
}

export = Strategy;
