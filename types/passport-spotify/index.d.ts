import { Request } from "express";

export interface Profile {
    provider: string;
    id: string;
    username: string;
    displayName: string;
    profileUrl: string | null;
    photos: [string] | null;
    country: string;
    followers: number | null;
    product: string | null;
    emails?: [{ value: string; type: null }] | undefined;
    _raw: string;
    _json: any;
}

export interface _StrategyOptionsBase {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    scope?: string[] | undefined;
    authorizationURL?: string | undefined;
    tokenURL?: string | undefined;
    scopeSeparator?: string | undefined;
    userProfileURL?: string | undefined;
    showDialog?: boolean | undefined;
}

export interface StrategyOptions extends _StrategyOptionsBase {
    passReqToCallback?: false | null | undefined;
}

export interface StrategyOptionsWithRequest extends _StrategyOptionsBase {
    passReqToCallback: true;
}

export type VerifyCallback = (error?: Error | null, user?: object, info?: object) => void;

export type VerifyFunction = (
    accessToken: string,
    refreshToken: string,
    expires_in: number,
    profile: Profile,
    done: VerifyCallback,
) => void;

export type VerifyFunctionWithRequest = (
    req: Request,
    accessToken: string,
    refreshToken: string,
    expires_in: number,
    profile: Profile,
    done: VerifyCallback,
) => void;

export class Strategy {
    constructor(options: StrategyOptionsWithRequest, verify: VerifyFunctionWithRequest);
    constructor(options: StrategyOptions, verify: VerifyFunction);

    name: string;
    authenticate(req: Request, options?: object): void;
}
