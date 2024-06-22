import * as express from "express";
import * as passport from "passport";
import * as oauth2 from "passport-oauth2";

export type OAuth2StrategyOptionsWithoutRequiredURLs = Pick<
    oauth2._StrategyOptionsBase,
    Exclude<keyof oauth2._StrategyOptionsBase, "authorizationURL" | "tokenURL" | "clientID" | "clientSecret">
>;

export interface _StrategyOptionsBase extends OAuth2StrategyOptionsWithoutRequiredURLs {
    authorizationURL?: string | undefined;
    callbackURL?: string | undefined;
    channelID: string;
    channelSecret: string;
    /**
     * Scopes (permissions) you might need to request to access certain user details,
     * depending on the level of access you need.
     *
     * One or many of these [LINE
     * Scopes](https://developers.line.biz/en/docs/line-login/integrate-line-login/#scopes)
     *
     * For a basic auth scenario, this is typically `profile%20email` which
     * provides you with basic profile details as well as email.
     */
    scope?: string | undefined;
    tokenURL?: string | undefined;
    userProfileURL?: string | undefined;
}

export interface StrategyOptions extends _StrategyOptionsBase {
    passReqToCallback?: false | undefined;
}

export interface StrategyOptionsWithRequest extends _StrategyOptionsBase {
    passReqToCallback: true;
}

export interface Profile extends passport.Profile {
    id: string;
    displayName: string;
    pictureUrl?: string;
    statusMessage?: string;
    provider: "line";
    _raw: string;
    _json: {
        userId: string;
        displayName: string;
        pictureUrl?: string;
        statusMessage?: string;
    };
}

export type VerifyCallback = oauth2.VerifyCallback;

export class Strategy extends oauth2.Strategy {
    constructor(
        options: StrategyOptions,
        verify: (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => void,
    );
    constructor(
        options: StrategyOptions,
        verify: (
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: VerifyCallback,
        ) => void,
    );
    constructor(
        options: StrategyOptionsWithRequest,
        verify: (
            req: express.Request,
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: VerifyCallback,
        ) => void,
    );
    constructor(
        options: StrategyOptionsWithRequest,
        verify: (
            req: express.Request,
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: VerifyCallback,
        ) => void,
    );
}

// Extend passport's Authenticator to include 'line' strategy
declare module "passport" {
    interface Authenticator<
        InitializeRet = express.Handler,
        AuthenticateRet = any,
        AuthorizeRet = AuthenticateRet,
        AuthorizeOptions = passport.AuthenticateOptions,
    > {
        authenticate(
            strategy: "line",
            options?: any,
            callback?: (...args: any[]) => any,
        ): AuthenticateRet;
    }
}
