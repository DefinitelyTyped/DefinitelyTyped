import { Request } from "express";
import OAuth2Strategy = require("passport-oauth2");

declare namespace AppleStrategy {
    interface AuthenticateOptionsBase extends Partial<OAuth2Strategy._StrategyOptionsBase> {
        authorizationURL?: string | undefined;
        tokenURL?: string | undefined;
        clientID: string;
        teamID: string;
        keyID: string;
        privateKeyLocation?: string | undefined;
        privateKeyString?: string | undefined;
    }

    interface AuthenticateOptions extends AuthenticateOptionsBase {
        passReqToCallback: false;
    }

    interface AuthenticateOptionsWithRequest extends AuthenticateOptionsBase {
        passReqToCallback?: true | undefined;
    }

    type AppleAuthorizationParams = object & {
        response_mode: "form_post";
        scope: "name email";
        response_type: "code id_token";
        state: string | undefined;
    };

    interface Profile {
        [key: string]: any;
    }

    type VerifyCallback = (err?: Error | null, user?: object, info?: object) => void;

    type VerifyFunction = (
        accessToken: string,
        refreshToken: string,
        idToken: string,
        profile: Profile,
        verified: VerifyCallback,
    ) => void;

    type VerifyFunctionWithRequest = (
        req: Request,
        accessToken: string,
        refreshToken: string,
        idToken: string,
        profile: Profile,
        verified: VerifyCallback,
    ) => void;

    const Strategy: typeof AppleStrategy;
}

// @ts-ignore AppleStrategy's options type incompatible with OAuth2Strategy's options type
declare class AppleStrategy extends OAuth2Strategy {
    constructor(options: AppleStrategy.AuthenticateOptions, verify: AppleStrategy.VerifyFunction);
    constructor(options: AppleStrategy.AuthenticateOptionsWithRequest, verify: AppleStrategy.VerifyFunctionWithRequest);

    authorizationParams(options: object): AppleStrategy.AppleAuthorizationParams;
    name: "apple";
}

export = AppleStrategy;
