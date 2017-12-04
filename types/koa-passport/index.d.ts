// Type definitions for koa-passport 4.0
// Project: https://github.com/rkusa/koa-passport
// Definitions by: horiuchi <https://github.com/horiuchi>
//                 Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import * as passport from 'koa-passport';
    app.use(passport.initialize());
    app.use(passport.session());

 =============================================== */

import {
    Middleware,
} from "koa";

import * as passport from "passport";

declare module "koa" {
    interface Context {
        login(user: any): Promise<void>;
        login(user: any, options: Object): Promise<void>;
        logIn: Context["login"];

        logout(): void;
        logOut: Context["logout"];

        isAuthenticated(): boolean;
        isUnauthenticated(): boolean;
    }
}


declare namespace KoaPassport {

    interface KoaPassport {
        use(strategy: passport.Strategy): this;
        use(name: string, strategy: passport.Strategy): this;
        unuse(name: string): this;
        framework(fw: passport.Framework): this;
        initialize(options?: { userProperty: string; }): Middleware;
        session(options?: { pauseStream: boolean; }): Middleware;

        authenticate(strategy: string, callback?: Function): Middleware;
        authenticate(strategy: string, options: Object, callback?: Function): Middleware;
        authenticate(strategies: string[], callback?: Function): Middleware;
        authenticate(strategies: string[], options: Object, callback?: Function): Middleware;
        authorize(strategy: string, callback?: Function): Middleware;
        authorize(strategy: string, options: Object, callback?: Function): Middleware;
        authorize(strategies: string[], callback?: Function): Middleware;
        authorize(strategies: string[], options: Object, callback?: Function): Middleware;
        serializeUser(fn: (user: any, done: (err: any, id: any) => void) => void): void;
        deserializeUser(fn: (id: any, done: (err: any, user: any) => void) => void): void;
        transformAuthInfo(fn: (info: any, done: (err: any, info: any) => void) => void): void;
    }

    interface Static extends KoaPassport {
        KoaPassport: { new(): KoaPassport };
        Passport: { new(): passport.Passport };
        Authenticator: Static["Passport"];
    }
}

declare const koaPassport: KoaPassport.Static;

export = koaPassport;
