import * as passport from "passport";
import { Request } from "express";
import { IBaseStrategyOption, VerifyCallback } from "./common";

export interface IOIDCStrategyOption extends IBaseStrategyOption {
    responseType: "code" | "code id_token" | "id_token code" | "id_token";
    responseMode: "query" | "form_post";
    redirectUrl: string;
    allowHttpForRedirectUrl?: boolean;
    clientSecret?: string;
    thumbprint?: string;
    privatePEMKey?: string;
    useCookieInsteadOfSession?: boolean;
    cookieEncryptionKeys?: {key: string, iv: string}[];
    nonceLifetime?: number;
    nonceMaxAmount?: number;
    scope?: string | string[];
}

export interface IOIDCStrategyOptionWithRequest extends IOIDCStrategyOption {
    passReqToCallback: true;
}

export interface IProfile {
    sub?: string;
    oid?: string;
    upn?: string;
    displayName?: string;
    name?: {
        familyName?: string;
        givenName?: string;
        middleName?: string;
    };
    emails?: any;
    _raw?: string;
    _json?: any;
}

export type VerifyOIDCFunction =
    ((profile: IProfile, done: VerifyCallback) => void) | 
    ((iss: string, sub: string, done: VerifyCallback) => void) |
    ((iss: string, sub: string, profile: IProfile, done: VerifyCallback) => void) |
    ((iss: string, sub: string, profile: IProfile, access_token: string, refresh_token: string, done: VerifyCallback) => void) |
    ((iss: string, sub: string, profile: IProfile, access_token: string, refresh_token: string, params: any, done: VerifyCallback) => void) |
    ((iss: string, sub: string, profile: IProfile, jwtClaims: any, access_token: string, refresh_token: string, params: any, done: VerifyCallback) => void);

export type VerifyOIDCFunctionWithReq =
    ((req: Request, profile: IProfile, done: VerifyCallback) => void) | 
    ((req: Request, iss: string, sub: string, done: VerifyCallback) => void) |
    ((req: Request, iss: string, sub: string, profile: IProfile, done: VerifyCallback) => void) |
    ((req: Request, iss: string, sub: string, profile: IProfile, access_token: string, refresh_token: string, done: VerifyCallback) => void) |
    ((req: Request, iss: string, sub: string, profile: IProfile, access_token: string, refresh_token: string, params: any, done: VerifyCallback) => void) |
    ((req: Request, iss: string, sub: string, profile: IProfile, jwtClaims: any, access_token: string, refresh_token: string, params: any, done: VerifyCallback) => void);

export class OIDCStrategy extends passport.Strategy {
    constructor(
        options: IOIDCStrategyOptionWithRequest,
        verify: VerifyOIDCFunction
    );
    constructor(options: IOIDCStrategyOption, verify: VerifyOIDCFunctionWithReq);

    name: string;

    authenticate(req: Request, options?: object): void;
}