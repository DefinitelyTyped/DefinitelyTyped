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
        login(user: any, options?: any): Promise<void>;
        logIn: Context["login"];

        logout(): void;
        logOut: Context["logout"];

        isAuthenticated(): boolean;
        isUnauthenticated(): boolean;
    }
}

declare namespace KoaPassport {
    class KoaPassport {
        use(strategy: passport.Strategy): this;
        use(name: string, strategy: passport.Strategy): this;
        unuse(name: string): this;
        framework(fw: passport.Framework): this;
        initialize(options?: { userProperty: string; }): Middleware;
        session(options?: { pauseStream: boolean; }): Middleware;

        authenticate(strategy: string | string[], callback?: (...args: any[]) => any): Middleware;
        authenticate(strategy: string | string[], options: passport.AuthenticateOptions, callback?: (...args: any[]) => any): Middleware;
        authorize(strategy: string | string[], callback?: (...args: any[]) => any): Middleware;
        authorize(strategy: string | string[], options: any, callback?: (...args: any[]) => any): Middleware;

        serializeUser: passport.PassportStatic["serializeUser"];
        deserializeUser: passport.PassportStatic["deserializeUser"];
        transformAuthInfo: passport.PassportStatic["transformAuthInfo"];
    }

    interface Static extends KoaPassport {
        KoaPassport: typeof KoaPassport;
        Passport: typeof passport.Passport;
        Authenticator: Static["Passport"];
    }
}

declare const koaPassport: KoaPassport.Static;

export = koaPassport;
