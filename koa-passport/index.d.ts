// Type definitions for koa-passport 2.x
// Project: https://github.com/rkusa/koa-passport
// Definitions by: horiuchi <https://github.com/horiuchi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

    import * as passport from 'koa-passport';
    app.use(passport.initialize());
    app.use(passport.session());

 =============================================== */
/// <reference path="../koa/koa.d.ts"/>
/// <reference path="../passport/passport.d.ts"/>

declare module "koa-passport" {

    import * as Koa from "koa";
    module "koa" {
        interface Request {
            authInfo?: any;
            user?: any;

            login(user: any): Promise<void>;
            login(user: any, options: Object): Promise<void>;
            logIn(user: any): Promise<void>;
            logIn(user: any, options: Object): Promise<void>;

            logout(): void;
            logOut(): void;

            isAuthenticated(): boolean;
            isUnauthenticated(): boolean;
        }
    }

    import * as passport from "passport";

    interface Middleware { (ctx: Koa.Context, next: () => Promise<any>): any; }
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
    const koaPassport: KoaPassport;

    namespace KoaPassport {
        interface Profile extends passport.Profile { }
        interface Framework extends passport.Framework { }
    }

    export = koaPassport;
}
