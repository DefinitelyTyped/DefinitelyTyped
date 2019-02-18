// Type definitions for Passport 1.0
// Project: http://passportjs.org
// Definitions by: Horiuchi_H <https://github.com/horiuchi>
//                 Eric Naeseth <https://github.com/enaeseth>
//                 Igor Belagorudsky <https://github.com/theigor>
//                 Tomek Łaziuk <https://github.com/tlaziuk>
//                 Daniel Perez Alvarez <https://github.com/danielpa9708>
//                 Kevin Stiehl <https://github.com/kstiehl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare global {
    namespace Express {
        interface Request {
            authInfo?: any;
            user?: any;

            // These declarations are merged into express's Request type
            login(user: any, done: (err: any) => void): void;
            login(user: any, options: any, done: (err: any) => void): void;
            logIn(user: any, done: (err: any) => void): void;
            logIn(user: any, options: any, done: (err: any) => void): void;

            logout(): void;
            logOut(): void;

            isAuthenticated(): boolean;
            isUnauthenticated(): boolean;
        }
    }
}

import express = require('express');

declare namespace passport {
    interface AuthenticateOptions {
        authInfo?: boolean;
        assignProperty?: string;
        failureFlash?: string | boolean;
        failureMessage?: boolean | string;
        failureRedirect?: string;
        failWithError?: boolean;
        session?: boolean;
        scope?: string | string[];
        successFlash?: string | boolean;
        successMessage?: boolean | string;
        successRedirect?: string;
        successReturnToOrRedirect?: string;
        state?: string;
        pauseStream?: boolean;
        userProperty?: string;
        passReqToCallback?: boolean;
        prompt?: string;
    }

    interface Authenticator<InitializeRet = express.Handler, AuthenticateRet = any, AuthorizeRet = AuthenticateRet, AuthorizeOptions = AuthenticateOptions> {
        use(strategy: Strategy): this;
        use(name: string, strategy: Strategy): this;
        unuse(name: string): this;
        framework<X, Y, Z>(fw: Framework<X, Y, Z>): Authenticator<X, Y, Z>;
        initialize(options?: { userProperty: string; }): InitializeRet;
        session(options?: { pauseStream: boolean; }): AuthenticateRet;

        authenticate(strategy: string | string[], callback?: (...args: any[]) => any): AuthenticateRet;
        authenticate(strategy: string | string[], options: AuthenticateOptions, callback?: (...args: any[]) => any): AuthenticateRet;
        authorize(strategy: string | string[], callback?: (...args: any[]) => any): AuthorizeRet;
        authorize(strategy: string | string[], options: AuthorizeOptions, callback?: (...args: any[]) => any): AuthorizeRet;
        serializeUser<TUser, TID>(fn: (user: TUser, done: (err: any, id?: TID) => void) => void): void;
        deserializeUser<TUser, TID>(fn: (id: TID, done: (err: any, user?: TUser) => void) => void): void;
        transformAuthInfo(fn: (info: any, done: (err: any, info: any) => void) => void): void;
    }

    interface PassportStatic extends Authenticator {
        Authenticator: { new(): Authenticator };
        Passport: PassportStatic["Authenticator"];
        Strategy: { new(): Strategy & StrategyCreatedStatic };
    }

    interface Strategy {
        name?: string;
        authenticate(this: StrategyCreated<this>, req: express.Request, options?: any): any;
    }

    interface StrategyCreatedStatic {
        /**
         * Authenticate `user`, with optional `info`.
         *
         * Strategies should call this function to successfully authenticate a
         * user.  `user` should be an object supplied by the application after it
         * has been given an opportunity to verify credentials.  `info` is an
         * optional argument containing additional user information.  This is
         * useful for third-party authentication strategies to pass profile
         * details.
         */
        success(user: object, info?: object): void;
        /**
         * Fail authentication, with optional `challenge` and `status`, defaulting
         * to 401.
         *
         * Strategies should call this function to fail an authentication attempt.
         */
        fail(challenge?: string | number, status?: number): void;
        /**
         * Redirect to `url` with optional `status`, defaulting to 302.
         *
         * Strategies should call this function to redirect the user (via their
         * user agent) to a third-party website for authentication.
         */
        redirect(url: string, status?: number): void;
        /**
         * Pass without making a success or fail decision.
         *
         * Under most circumstances, Strategies should not need to call this
         * function.  It exists primarily to allow previous authentication state
         * to be restored, for example from an HTTP session.
         */
        pass(): void;
        /**
         * Internal error while performing authentication.
         *
         * Strategies should call this function when an internal error occurs
         * during the process of performing authentication; for example, if the
         * user directory is not available.
         */
        error(err: any): void;
    }

    type StrategyCreated<T, O = T & StrategyCreatedStatic> = {
        [P in keyof O]: O[P];
    };

    interface Profile {
        provider: string;
        id: string;
        displayName: string;
        username?: string;
        name?: {
            familyName: string;
            givenName: string;
            middleName?: string;
        };
        emails?: Array<{
            value: string;
            type?: string;
        }>;
        photos?: Array<{
            value: string;
        }>;
    }

    interface Framework<InitializeRet = any, AuthenticateRet = any, AuthorizeRet = AuthenticateRet> {
        initialize(passport: Authenticator<InitializeRet, AuthenticateRet, AuthorizeRet>, options?: any): (...args: any[]) => InitializeRet;
        authenticate(passport: Authenticator<InitializeRet, AuthenticateRet, AuthorizeRet>, name: string, options?: any, callback?: (...args: any[]) => any): (...args: any[]) => AuthenticateRet;
        authorize?(passport: Authenticator<InitializeRet, AuthenticateRet, AuthorizeRet>, name: string, options?: any, callback?: (...args: any[]) => any): (...args: any[]) => AuthorizeRet;
    }
}

declare const passport: passport.PassportStatic;
export = passport;
