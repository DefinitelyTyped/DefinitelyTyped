// Type definitions for Passport 0.4
// Project: http://passportjs.org
// Definitions by: Horiuchi_H <https://github.com/horiuchi>, Eric Naeseth <https://github.com/enaeseth>, Igor Belagorudsky <https://github.com/theigor>
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
        failureFlash?: string|boolean;
        failureMessage?: boolean|string;
        failureRedirect?: string;
        failWithError?: boolean;
        session?: boolean;
        scope?: string|string[];
        successFlash?: string|boolean;
        successMessage?: boolean|string;
        successRedirect?: string;
        successReturnToOrRedirect?: string;
        pauseStream?: boolean;
        userProperty?: string;
        passReqToCallback?: boolean;
    }

    interface Passport {
        use(strategy: Strategy): this;
        use(name: string, strategy: Strategy): this;
        unuse(name: string): this;
        framework(fw: Framework): this;
        initialize(options?: { userProperty: string; }): express.Handler;
        session(options?: { pauseStream: boolean; }): express.Handler;

        authenticate(strategy: string|string[], callback?: (...args: any[]) => any): express.Handler;
        authenticate(strategy: string|string[], options: AuthenticateOptions, callback?: (...args: any[]) => any): express.Handler;
        authorize(strategy: string|string[], callback?: (...args: any[]) => any): express.Handler;
        authorize(strategy: string|string[], options: any, callback?: (...args: any[]) => any): express.Handler;
        serializeUser<TUser, TID>(fn: (user: TUser, done: (err: any, id?: TID) => void) => void): void;
        deserializeUser<TUser, TID>(fn: (id: TID, done: (err: any, user?: TUser) => void) => void): void;
        transformAuthInfo(fn: (info: any, done: (err: any, info: any) => void) => void): void;
    }

    interface PassportStatic extends Passport {
        Passport: {new(): Passport};
        Authenticator: {new(): Passport};
    }

    interface Strategy {
        name?: string;
        authenticate(req: express.Request, options?: any): void;
    }

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

    interface Framework {
        initialize(passport: Passport, options?: any): (...args: any[]) => any;
        authenticate(passport: Passport, name: string, options?: any, callback?: (...args: any[]) => any): (...args: any[]) => any;
        authorize?(passport: Passport, name: string, options?: any, callback?: (...args: any[]) => any): (...args: any[]) => any;
    }
}

declare const passport: passport.PassportStatic;
export = passport;
