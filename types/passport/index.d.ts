// Type definitions for Passport 0.3
// Project: http://passportjs.org
// Definitions by: Horiuchi_H <https://github.com/horiuchi>, Eric Naeseth <https://github.com/enaeseth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace Express {
    export interface Request {
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

declare module 'passport' {
    import express = require('express');

    namespace passport {
        interface AuthenticateOptions {
            authInfo?: boolean;
            assignProperty?: string;
            failureFlash?: string|boolean|any;
            failureMessage?: boolean|string;
            failureRedirect?: string;
            failWithError?: boolean;
            session?: boolean;
            scope?: string|string[];
            successFlash?: string|boolean|any;
            successMessage?: boolean|string;
            successRedirect?: string;
            successReturnToOrRedirect?: string;
            pauseStream?: boolean;
            userProperty?: string;
        }

        interface Passport {
            use(strategy: passport.Strategy): this;
            use(name: string, strategy: passport.Strategy): this;
            unuse(name: string): this;
            framework(fw: passport.Framework): this;
            initialize(options?: { userProperty: string; }): express.Handler;
            session(options?: { pauseStream: boolean; }): express.Handler;

            authenticate(strategy: string|string[], callback?: Function): express.Handler;
            authenticate(strategy: string|string[], options: AuthenticateOptions, callback?: Function): express.Handler;
            authorize(strategy: string|string[], callback?: Function): express.Handler;
            authorize(strategy: string|string[], options: any, callback?: Function): express.Handler;
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
            initialize(passport: Passport, options?: any): Function;
            authenticate(passport: Passport, name: string, options?: any, callback?: Function): Function;
            authorize?(passport: Passport, name: string, options?: any, callback?: Function): Function;
        }
    }

    const passport: passport.PassportStatic;
    export = passport;
}

