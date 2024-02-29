import * as express from "express";
import { OutgoingHttpHeaders } from "http";
import * as passport from "passport";
import * as oauth2 from "passport-oauth2";

import twitch = Strategy;

declare class Strategy extends oauth2.Strategy {
    constructor(
        options: twitch.StrategyOptions,
        verify: (
            accessToken: string,
            refreshToken: string,
            profile: twitch.Profile,
            done: oauth2.VerifyCallback,
        ) => void,
    );
    constructor(
        options: twitch.StrategyOptions,
        // NOTE: A union of function types prevents contextual typing of arguments.
        // tslint:disable-next-line:unified-signatures
        verify: (
            accessToken: string,
            refreshToken: string,
            params: any,
            profile: twitch.Profile,
            done: oauth2.VerifyCallback,
        ) => void,
    );
    constructor(
        options: twitch.StrategyOptionsWithRequest,
        verify: (
            req: express.Request,
            accessToken: string,
            refreshToken: string,
            profile: twitch.Profile,
            done: oauth2.VerifyCallback,
        ) => void,
    );
    constructor(
        options: twitch.StrategyOptionsWithRequest,
        // NOTE: A union of function types prevents contextual typing of arguments.
        // tslint:disable-next-line:unified-signatures
        verify: (
            req: express.Request,
            accessToken: string,
            params: any,
            refreshToken: string,
            profile: twitch.Profile,
            done: oauth2.VerifyCallback,
        ) => void,
    );
    checkScope(scope: string, accessToken: string, cb: (err?: Error | null, value?: any) => void): void;
}

declare namespace Strategy {
    // NOTE: not true for `export import` statements
    // eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
    export import Strategy = twitch;

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
        state?: any;
    }

    interface StrategyOptions extends _StrategyOptionsBase {
        passReqToCallback?: false | undefined;
    }

    interface StrategyOptionsWithRequest extends _StrategyOptionsBase {
        passReqToCallback: true;
    }

    interface Profile extends passport.Profile {
        provider: "twitch";
        id: string;
        userName: string;
        displayName: string;
        profileImageUrl: string;
        viewCount: number;
        _raw: string;
        _json: object;
    }
}

export = Strategy;
