// Type definitions for passport-oauth1 1.1
// Project: https://github.com/jaredhanson/passport-oauth1#readme
// Definitions by: Michael Randolph <https://github.com/mrand01>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Request } from 'express';
import { Strategy } from 'passport';

declare class OAuthStrategy implements Strategy {
    name: string;

    constructor(options: OAuthStrategy.StrategyOptions, verify: OAuthStrategy.VerifyFunction);
    constructor(options: OAuthStrategy.StrategyOptionsWithRequest, verify: OAuthStrategy.VerifyFunctionWithRequest);

    authenticate(req: Request, options?: any): void;
    userProfile(accessToken: string, tokenSecret: string, params: any, done: (err?: Error | null, profile?: any) => void): void;
    requestTokenParams(options: any): object;
    userAuthorizationParams(options: any): object;
    parseErrorResponse(body: any, status: number): Error | null;
}

declare namespace OAuthStrategy {
    type VerifyCallback = (err?: Error | null, user?: object, info?: object) => void;

    type VerifyFunction =
        ((accessToken: string, tokenSecret: string, profile: any, callback: VerifyCallback) => void) |
        ((accessToken: string, tokenSecret: string, params: any, profile: any, callback: VerifyCallback) => void);

    type VerifyFunctionWithRequest =
        ((req: Request, accessToken: string, tokenSecret: string, profile: any, callback: VerifyCallback) => void) |
        ((req: Request, accessToken: string, tokenSecret: string, params: any, profile: any, callback: VerifyCallback) => void);

    interface _StrategyOptionsBase {
        requestTokenURL: string;
        accessTokenURL: string;
        userAuthorizationURL: string;
        consumerKey: string;
        consumerSecret: string;
        signatureMethod?: string;
        callbackURL: string;
    }

    interface StrategyOptions extends _StrategyOptionsBase {
        passReqToCallback: false;
    }

    interface StrategyOptionsWithRequest extends _StrategyOptionsBase {
        passReqToCallback: true;
    }

    type Strategy = OAuthStrategy;
    const Strategy: typeof OAuthStrategy;

    class InternalOAuthError extends Error {
        constructor(message: string, err: any);
        oauthError: any;
    }
}

export = OAuthStrategy;
