import * as express from "express";
import { OutgoingHttpHeaders } from "http";
import * as passport from "passport";
import * as oauth2 from "passport-oauth2";

export interface Profile extends passport.Profile {
    id: string;
    displayName: string;
    gender?: string | undefined;
    ageRange?:
        | {
            min: number;
            max?: number | undefined;
        }
        | undefined;
    profileUrl?: string | undefined;
    username?: string | undefined;
    birthday: string;

    _raw: string;
    _json: any;
}

export interface AuthenticateOptions extends passport.AuthenticateOptions {
    authType?: string | undefined;
}

export interface StrategyOptions {
    passReqToCallback?: false | undefined;
    clientID: string;
    clientSecret: string;
    callbackURL: string;

    customHeaders?: OutgoingHttpHeaders | undefined;
    scope?: string | string[] | undefined;
    scopeSeparator?: string | undefined;
    sessionKey?: string | undefined;
    store?: oauth2.StateStore | undefined;
    state?: any;
    skipUserProfile?: any;
    pkce?: boolean | undefined;
    proxy?: any;
    enableProof?: boolean | undefined;
    profileFields?: string[] | undefined;

    authorizationURL?: string | undefined;
    tokenURL?: string | undefined;
    profileURL?: string | undefined;
    graphAPIVersion?: string | undefined;
}

export interface AuthorizationParamsOptions {
    display?: "page" | "popup" | "touch" | undefined;
    authType?: "reauthenticate" | undefined;
    authNonce?: string | undefined;
}

export interface StrategyOptionsWithRequest extends Omit<StrategyOptions, "passReqToCallback"> {
    passReqToCallback: true;
}

export type VerifyFunction = (
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void,
) => void;

export type VerifyFunctionWithRequest = (
    req: express.Request,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void,
) => void;

export class Strategy extends oauth2.Strategy {
    constructor(options: StrategyOptions, verify: VerifyFunction);
    constructor(options: StrategyOptionsWithRequest, verify: VerifyFunctionWithRequest);

    name: string;
    authenticate(req: express.Request, options?: object): void;
    authorizationParams(options: AuthorizationParamsOptions): object;
}
