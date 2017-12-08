// Type definitions for Passport 0.4
// Project: http://passportjs.org
// Definitions by: Horiuchi_H <https://github.com/horiuchi>
//                 Eric Naeseth <https://github.com/enaeseth>
//                 Igor Belagorudsky <https://github.com/theigor>
//                 Tomek Łaziuk <https://github.com/tlaziuk>
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
        pauseStream?: boolean;
        userProperty?: string;
        passReqToCallback?: boolean;
    }

    interface Authenticator<InitializeRet = express.Handler, AuthenticateRet = any, AuthorizeRet = AuthenticateRet> {
        use(strategy: Strategy): this;
        use(name: string, strategy: Strategy): this;
        unuse(name: string): this;
        framework<X, Y, Z>(fw: Framework<X, Y, Z>): Authenticator<X, Y, Z>;
        initialize(options?: { userProperty: string; }): InitializeRet;
        session(options?: { pauseStream: boolean; }): AuthenticateRet;

        authenticate(strategy: string | string[], callback?: (...args: any[]) => any): AuthenticateRet;
        authenticate(strategy: string | string[], options: AuthenticateOptions, callback?: (...args: any[]) => any): AuthenticateRet;
        authorize(strategy: string | string[], callback?: (...args: any[]) => any): AuthorizeRet;
        authorize(strategy: string | string[], options: any, callback?: (...args: any[]) => any): AuthorizeRet;
        serializeUser<TUser, TID>(fn: (user: TUser, done: (err: any, id?: TID) => void) => void): void;
        deserializeUser<TUser, TID>(fn: (id: TID, done: (err: any, user?: TUser) => void) => void): void;
        transformAuthInfo(fn: (info: any, done: (err: any, info: any) => void) => void): void;
    }

    interface PassportStatic extends Authenticator {
        Authenticator: { new(): Authenticator };
        Passport: PassportStatic["Authenticator"];
    }

    interface Strategy {
        name?: string;
        authenticate(this: StrategyCreated<this>, req: express.Request, options?: any): any;
    }

    interface StrategyCreatedStatic {
        success(user: object, info?: object): void;
        fail(challenge: string, status?: number): void;
        redirect(url: string, status?: number): void;
        pass(): void;
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
