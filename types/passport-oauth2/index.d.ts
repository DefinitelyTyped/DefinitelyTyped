import { Request } from "express";
import { OutgoingHttpHeaders } from "http";
import { OAuth2 } from "oauth";
import { Strategy } from "passport";

declare class OAuth2Strategy extends Strategy {
    name: string;

    /**
     *   NOTE: The _oauth2 property is considered "protected".  Subclasses are
     *         allowed to use it when making protected resource requests to retrieve
     *         the user profile.
     */
    protected _oauth2: OAuth2;

    constructor(options: OAuth2Strategy.StrategyOptions, verify: OAuth2Strategy.VerifyFunction);
    constructor(options: OAuth2Strategy.StrategyOptionsWithRequest, verify: OAuth2Strategy.VerifyFunctionWithRequest);

    authenticate(req: Request, options?: any): void;

    userProfile(accessToken: string, done: (err?: unknown, profile?: any) => void): void;
    authorizationParams(options: any): object;
    tokenParams(options: any): object;
    parseErrorResponse(body: any, status: number): Error | null;
}

declare namespace OAuth2Strategy {
    interface Metadata {
        authorizationURL: string;
        tokenURL: string;
        clientID: string;
    }

    type StateStoreStoreCallback = (err: Error | null, state: any) => void;
    type StateStoreVerifyCallback = (err: Error, ok: boolean, state: any) => void;

    interface StateStore {
        store(req: Request, callback: StateStoreStoreCallback): void;
        store(req: Request, meta: Metadata, callback: StateStoreStoreCallback): void;

        verify(req: Request, state: string, callback: StateStoreVerifyCallback): void;
        verify(req: Request, state: string, meta: Metadata, callback: StateStoreVerifyCallback): void;
    }

    type VerifyCallback = (err?: Error | null | unknown, user?: Express.User | false, info?: object) => void;

    type VerifyFunction<TProfile = any, TResults = any> =
        | ((accessToken: string, refreshToken: string, profile: TProfile, verified: VerifyCallback) => void)
        | ((
            accessToken: string,
            refreshToken: string,
            results: TResults,
            profile: TProfile,
            verified: VerifyCallback,
        ) => void);
    type VerifyFunctionWithRequest<TProfile = any, TResults = any> =
        | ((
            req: Request,
            accessToken: string,
            refreshToken: string,
            profile: TProfile,
            verified: VerifyCallback,
        ) => void)
        | ((
            req: Request,
            accessToken: string,
            refreshToken: string,
            results: TResults,
            profile: TProfile,
            verified: VerifyCallback,
        ) => void);

    interface _StrategyOptionsBase {
        authorizationURL: string;
        tokenURL: string;
        clientID: string;
        clientSecret: string;
        callbackURL?: string | undefined;
        customHeaders?: OutgoingHttpHeaders | undefined;
        scope?: string | string[] | undefined;
        scopeSeparator?: string | undefined;
        sessionKey?: string | undefined;
        store?: StateStore | undefined;
        state?: any;
        skipUserProfile?: any;
        pkce?: boolean | undefined;
        proxy?: any;
    }
    interface StrategyOptions extends _StrategyOptionsBase {
        passReqToCallback?: false | undefined;
    }
    interface StrategyOptionsWithRequest extends _StrategyOptionsBase {
        passReqToCallback: true;
    }

    type Strategy = OAuth2Strategy;
    const Strategy: typeof OAuth2Strategy;

    class TokenError extends Error {
        constructor(message: string | undefined, code: string, uri?: string, status?: number);
        code: string;
        uri?: string | undefined;
        status: number;
    }

    class AuthorizationError extends Error {
        constructor(message: string | undefined, code: string, uri?: string, status?: number);
        code: string;
        uri?: string | undefined;
        status: number;
    }

    class InternalOAuthError extends Error {
        constructor(message: string, err: any);
        oauthError: any;
    }
}

export = OAuth2Strategy;
