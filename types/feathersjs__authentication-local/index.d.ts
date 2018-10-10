// Type definitions for @feathersjs/authentication-local 1.0
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript
// TypeScript Version: 2.3

import {
    Application,
    Hook,
    Paginated
} from '@feathersjs/feathers';
import { Request } from 'express';
import * as self from '@feathersjs/authentication-local';

declare const feathersAuthenticationLocal: ((options?: Partial<FeathersAuthenticationLocalOptions>) => () => void) & typeof self;
export default feathersAuthenticationLocal;

export interface FeathersAuthenticationLocalOptions {
    /**
     * the name to use when invoking the authentication Strategy
     */
    name: string;
    /**
     * the entity that you're comparing username/password against
     */
    entity: string;
    /**
     * the service to look up the entity
     */
    service: string;
    /**
     * key name of username field on the request
     */
    usernameField: string;
    /**
     * key name of password field on the request
     */
    passwordField: string;
    /**
     * key name of the username field on the entity (defaults to `usernameField`)
     */
    entityUsernameField: string;
    /**
     * key name of the password on the entity (defaults to `passwordField`)
     */
    entityPasswordField: string;
    /**
     * whether the request object should be passed to `verify`
     */
    passReqToCallback: boolean;
    /**
     * whether to use sessions,
     */
    session: boolean;
    /**
     * A Verifier class. Defaults to the built-in one but can be a custom one. See below for details.
     */
    Verifier: LocalVerifier;
}

export class LocalVerifier {
    constructor(app: Application, options: any);

    _comparePassword<T>(entity: T, password: string): Promise<T>; // compares password using bcrypt
    _normalizeResult<T>(results: T[] | Paginated<T>): Promise<T>; // normalizes result from service to account for pagination
    verify(req: Request, username: string, password: string, done: (error: any, user?: any, options?: { message: string }) => void): void;
}

export namespace hooks {
    function hashPassword(options?: any): Hook; // todo: properly type options
    function protect(...fields: string[]): Hook;
}

export const defaults: {
    name: string;
    usernameField: string;
    passwordField: string;
};
