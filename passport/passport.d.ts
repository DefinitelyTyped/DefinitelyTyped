// Type definitions for Passport v0.2.0
// Project: http://passportjs.org
// Definitions by: Horiuchi_H <https://github.com/horiuchi/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module 'passport' {
    import express = require('express');

    function use(strategy: Strategy): Passport;
    function use(name: string, strategy: Strategy): Passport;
    function unuse(name: string): Passport;
    function framework(fw: string): Passport;
    function initialize(options?: { userProperty: string; }): express.Handler;
    function session(options?: { pauseStream: boolean; }): express.Handler;

    function authenticate(strategy: string, options: Object, callback?: express.Handler): express.Handler;
    function authenticate(strategy: string, callback2: (err: any, user: any, info: any) => void): express.Handler;
    function authorize(strategy: string, options: Object, callback?: express.Handler): express.Handler;
    function serializeUser(fn: (user: any, done: (err: any, id: any) => void) => void): void;
    function deserializeUser(fn: (id: any, done: (err: any, user: any) => void) => void): void;
    function transformAuthInfo(fn: (info: any, done: (err: any, info: any) => void) => void): void;

    interface Passport {
        use(strategy: Strategy): Passport;
        use(name: string, strategy: Strategy): Passport;
        unuse(name: string): Passport;
        framework(fw: string): Passport;
        initialize(options?: { userProperty: string; }): express.Handler;
        session(options?: { pauseStream: boolean; }): express.Handler;

        authenticate(strategy: string, callback2: (err: any, user: any, info: any) => void): express.Handler;
        authenticate(strategy: string, options: Object, callback?: express.Handler): express.Handler;
        authorize(strategy: string, options: Object, callback?: express.Handler): express.Handler;
        serializeUser(fn: (user: any, done: (err: any, id: any) => void) => void): void;
        deserializeUser(fn: (id: any, done: (err: any, user: any) => void) => void): void;
        transformAuthInfo(fn: (info: any, done: (err: any, info: any) => void) => void): void;
    }

    interface Strategy {
        name?: string;
        authenticate(req: express.Request, options?: Object): void;
    }
}

declare module Express {
    export interface Request {

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
