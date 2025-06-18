import { Hook, Params } from "@feathersjs/feathers";
// eslint-disable-next-line @definitelytyped/no-self-import
import * as self from "@feathersjs/authentication";
import { create } from "domain";
import { Application, RequestHandler } from "express";

declare const feathersAuthentication: ((config?: FeathersAuthenticationOptions) => () => void) & typeof self;
export default feathersAuthentication;

export const hooks: AuthHooks.Hooks;

export interface FeathersAuthenticationOptions {
    path?: string | undefined;
    header?: string | undefined;
    entity?: string | undefined;
    service?: string | undefined;
    passReqToCallback?: boolean | undefined;
    session?: boolean | undefined;
    cookie?: {
        enabled?: boolean | undefined;
        name?: string | undefined;
        httpOnly?: boolean | undefined;
        secure?: boolean | undefined;
    } | undefined;
    jwt?: {
        /**
         * By default is an access token
         */
        header?: {
            [key: string]: any;
        } | undefined;

        /**
         * The resource server where the token is processed
         */
        audience?: string | undefined;

        /**
         * Typically the entity id associated with the JWT
         */
        subject?: string | undefined;

        /**
         * The issuing server, application or resource
         */
        issuer?: string | undefined;
        algorithm?: string | undefined;
        expiresIn?: string | undefined;
    } | undefined;
}

export namespace express {
    function exposeHeaders(): RequestHandler;
    function exposeCookies(): RequestHandler;
    function authenticate(strategy: string | string[], options?: FeathersAuthenticationOptions): RequestHandler;
    function setCookie(options?: FeathersAuthenticationOptions): RequestHandler;
    function successRedirect(): RequestHandler;
    function failureRedirect(options?: FeathersAuthenticationOptions): RequestHandler;
    function emitEvents(): RequestHandler;
}

export function service(options: FeathersAuthenticationOptions): (app?: Application) => void;

export namespace service {
    class Service<T = any> {
        constructor(app: Application);
        create(data: Partial<T>, params: Params): Promise<{ accessToken: string }>;
        remove(id: null | string, params: Params): Promise<{ accessToken: string }>;
    }
}

export namespace AuthHooks {
    interface HashPassOptions {
        passwordField: string;
    }

    interface RestrictOptions {
        ownerField: string;
        idField: string;
    }

    interface Hooks {
        authenticate(strategies: string[] | string): Hook;

        /**
         * The `verifyToken` hook will attempt to verify a token.
         * If the token is missing or is invalid it returns an error.
         * If the token is valid it adds the decrypted payload to hook.params.payload which contains the user id.
         * It is intended to be used as a before hook on any of the service methods.
         */
        verifyToken(options?: any): Hook;

        /**
         * The populateUser hook is for populating a user based on an id.
         * It can be used on any service method as either a before or after hook.
         * It is called internally after a token is created.
         */
        populateUser(options?: any): Hook;

        /**
         * The `restrictToAuthenticated` hook throws an error if there isn't a logged-in user by checking for the `hook.params.user` object.
         * It can be used on any service method and is intended to be used as a before hook.
         * It doesn't take any arguments.
         */
        restrictToAuthenticated(): Hook;

        /**
         * `restrictToOwner` is meant to be used as a before hook.
         * It only allows the user to retrieve resources that are owned by them.
         * It will return a *Forbidden* error without the proper permissions.
         * It can be used on `get`, `create`, `update`, `patch` or `remove` methods.
         */
        restrictToOwner(options?: RestrictOptions): Hook;

        /**
         * The `hashPassword` hook will automatically hash the data coming in on the provided passwordField.
         * It is intended to be used as a before hook on the user service for the create, update, or patch methods.
         */
        hashPassword(options?: HashPassOptions): Hook;
    }
}
