// Type definitions for Passport v0.2.0
// Project: http://passportjs.org
// Definitions by: Horiuchi_H <https://github.com/horiuchi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare namespace Express {
    export interface Request {
        authInfo?: any;
        user?: any;

        // These declarations are merged into express's Request type
        login(user: any, done: (err: any) => void): void;
        login(user: any, options: Object, done: (err: any) => void): void;
        logIn(user: any, done: (err: any) => void): void;
        logIn(user: any, options: Object, done: (err: any) => void): void;

        logout(): void;
        logOut(): void;

        isAuthenticated(): boolean;
        isUnauthenticated(): boolean;
    }
}

declare module 'passport' {
    import express = require('express');

    namespace passport {
        interface Passport {
            use(strategy: passport.Strategy): Passport;
            use(name: string, strategy: passport.Strategy): Passport;
            unuse(name: string): Passport;
            framework(fw: passport.Framework): Passport;
            initialize(options?: { userProperty: string; }): express.Handler;
            session(options?: { pauseStream: boolean; }): express.Handler;

            authenticate(strategy: string, callback?: Function): express.Handler;
            authenticate(strategy: string, options: Object, callback?: Function): express.Handler;
            authenticate(strategies: string[], callback?: Function): express.Handler;
            authenticate(strategies: string[], options: Object, callback?: Function): express.Handler;
            authorize(strategy: string, callback?: Function): express.Handler;
            authorize(strategy: string, options: Object, callback?: Function): express.Handler;
            authorize(strategies: string[], callback?: Function): express.Handler;
            authorize(strategies: string[], options: Object, callback?: Function): express.Handler;
            serializeUser(fn: (user: any, done: (err: any, id: any) => void) => void): void;
            serializeUser<TUser, TID>(fn: (user: TUser, done: (err: any, id: TID) => void) => void): void;
            deserializeUser(fn: (id: any, done: (err: any, user: any) => void) => void): void;
            deserializeUser<TUser, TID>(fn: (id: TID, done: (err: any, user: TUser) => void) => void): void;
            transformAuthInfo(fn: (info: any, done: (err: any, info: any) => void) => void): void;
        }

        interface Strategy {
            name?: string;
            authenticate(req: express.Request, options?: Object): void;
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
            emails?: {
                value: string;
                type?: string;
            }[];
            photos?: {
                value: string;
            }[];
        }

        interface Framework {
            initialize(passport: Passport, options?: Object): Function;
            authenticate(passport: Passport, name: string, options?: Object, callback?: Function): Function;
            authorize?(passport: Passport, name: string, options?: Object, callback?: Function): Function;
        }
    }

    const passport: passport.Passport;
    export = passport;
}
