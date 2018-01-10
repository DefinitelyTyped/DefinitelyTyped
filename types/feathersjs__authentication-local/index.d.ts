// Type definitions for @feathersjs/authentication-local 1.0
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript
// TypeScript Version: 2.2

import {
    Application,
    Hook,
    Paginated
} from '@feathersjs/feathers';
import { Request } from 'express';

export default function feathersAuthenticationLocal(options?: FeathersAuthenticationLocalOptions): () => void;

export interface FeathersAuthenticationLocalOptions {
    name: string; // the name to use when invoking the authentication Strategy
    entity: string; // the entity that you're comparing username/password against
    service: string; // the service to look up the entity
    usernameField: string; // key name of username field on the request
    passwordField: string; // key name of password field on the request
    entityUsernameField: string; // key name of the username field on the entity (defaults to `usernameField`)
    entityPasswordField: string; // key name of the password on the entity (defaults to `passwordField`)
    passReqToCallback: boolean; // whether the request object should be passed to `verify`
    session: boolean; // whether to use sessions,
    Verifier: LocalVerifier; // A Verifier class. Defaults to the built-in one but can be a custom one. See below for details.
}

export class LocalVerifier {
    constructor(app: Application<any>, options: any);

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
