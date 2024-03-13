import { Request } from "express";
import {
    AuthenticateOptions as PassportAuthenticateOptions,
    Profile as passportProfile,
    Strategy as passportStrategy,
} from "passport";

export interface Profile extends passportProfile {
    id: string;
    displayName: string;
    name: {
        familyName: string;
        givenName: string;
    };
    emails: [{ value: string }];
    photos: [{ value: string }];
    _raw: string;
    _json: any;
}

export interface AuthenticateOptions extends PassportAuthenticateOptions {
    authType?: string | undefined;
}

export interface StrategyOption {
    clientID: string;
    clientSecret: string;
    callbackURL: string;

    scope?: string[] | undefined;
    scopeSeparator?: string | undefined;
    enableProof?: boolean | undefined;
    profileFields?: string[] | undefined;
}

export interface StrategyOptionWithRequest extends StrategyOption {
    passReqToCallback: true;
}

export type VerifyFunction = (
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void,
) => void;

export type VerifyFunctionWithRequest = (
    req: Request,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void,
) => void;

export class Strategy extends passportStrategy {
    constructor(options: StrategyOptionWithRequest, verify: VerifyFunctionWithRequest);
    constructor(options: StrategyOption, verify: VerifyFunction);

    name: string;
    authenticate(req: Request, options?: object): void;
}
