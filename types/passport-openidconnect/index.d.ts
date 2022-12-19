// Type definitions for passport-openidconnect 0.1.1
// Project: https://github.com/jaredhanson/passport-openidconnect#readme
// Definitions by: Axel Elmarsson <https://github.com/elmaxe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as passport from 'passport';
import { OAuth2 } from 'oauth';
import { OutgoingHttpHeaders } from 'http';
import { Request } from 'express';
import { Agent } from 'http';

declare class OpenIDConnectStrategy extends passport.Strategy {
    name: string;
    /**
     * NOTE: The _oauth2 property is considered "protected".  Subclasses are
     *       allowed to use it when making protected resource requests to retrieve
     *       the user profile.
     */
    protected _oauth2: OAuth2;

    constructor(options: OpenIDConnectStrategy.StrategyOptions, verify: OpenIDConnectStrategy.VerifyFunction);
    constructor(
        options: OpenIDConnectStrategy.StrategyOptionsWithRequest,
        verify: OpenIDConnectStrategy.VerifyFunctionWithRequest,
    );

    authenticate(req: Request, options?: any): any;
    authorizationParams(options: any): object;
}

declare namespace OpenIDConnectStrategy {
    type Profile = passport.Profile;

    export type VerifyCallback = (err?: Error | null, user?: Express.User, info?: any) => void;

    type VerifyFunction = (issuer: string, profile: any, done: VerifyCallback) => void;

    type VerifyFunctionWithRequest = (req: Request, issuer: string, profile: any, done: VerifyCallback) => void;

    type SessionStoreContext = {
        maxAge?: number | undefined;
        issued?: Date | undefined;
        nonce?: string;
    };
    type SessionStoreStoreCallback = (err: Error | null, handle: string) => void;
    type SessionStoreVerifyCallback = (err: Error | null, ctx: SessionStoreContext, state: any) => void;

    interface SessionStore {
        store(
            req: Request,
            ctx: SessionStoreContext,
            appState: any,
            meta: any,
            callback: SessionStoreStoreCallback,
        ): void;

        verify(req: Request, handle: string, callback: SessionStoreVerifyCallback): void;
    }

    interface _StrategyOptionsBase {
        issuer: string;
        authorizationURL: string;
        tokenURL: string;
        clientID: string;
        userInfoURL: string;
        clientSecret: string;
        callbackURL: string;
        /**
         * `openid` is automatically added.
         */
        scope?: string | string[] | undefined;
        customHeaders?: OutgoingHttpHeaders | undefined;
        responseMode?: any;
        prompt?: any;
        display?: any;
        uiLocales?: any;
        loginHint?: any;
        maxAge?: any;
        acrValues?: any;
        idTokenHint?: any;
        nonce?: any;
        claims?: any;
        sessionKey?: string | undefined;
        store?: SessionStore | undefined;
        skipUserProfile?: any;
        proxy?: any;
        agent?: boolean | Agent | undefined;
    }

    interface StrategyOptions extends _StrategyOptionsBase {
        passReqToCallback?: false | undefined;
    }

    interface StrategyOptionsWithRequest extends _StrategyOptionsBase {
        passReqToCallback: true;
    }

    type Strategy = OpenIDConnectStrategy;
    const Strategy: typeof OpenIDConnectStrategy;

    class AuthorizationError extends Error {
        constructor(message: string | undefined, code: string, uri?: string, status?: number);
        code: string;
        uri?: string | undefined;
        status: number;
    }

    class TokenError extends Error {
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

export = OpenIDConnectStrategy;
