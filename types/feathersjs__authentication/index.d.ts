// Type definitions for @feathersjs/authentication 2.1
// Project: http://feathersjs.com/
// Definitions by: Abraao Alves <https://github.com/AbraaoAlves>, Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript

import { Hook } from '@feathersjs/feathers';

export default function feathersAuthentication(config?: FeathersAuthenticationOptions): () => void;

export const hooks: AuthHooks.Hooks;

export interface FeathersAuthenticationOptions {
    path?: string;
    header?: string;
    entity?: string;
    service?: string;
    passReqToCallback?: boolean;
    session?: boolean;
    cookie?: {
        enabled?: boolean;
        name?: string;
        httpOnly?: boolean;
        secure?: boolean;
    };
    jwt?: {
        /**
         * By default is an access token
         */
        header?: {
            [key: string]: any
        };

        /**
         * The resource server where the token is processed
         */
        audience?: string;

        /**
         * Typically the entity id associated with the JWT
         */
        subject?: string;

        /**
         * The issuing server, application or resource
         */
        issuer?: string;
        algorithm?: string;
        expiresIn?: string;
    };
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
         *
         */
        verifyToken(options?: any): Hook;

        /**
         * The populateUser hook is for populating a user based on an id.
         * It can be used on any service method as either a before or after hook.
         * It is called internally after a token is created.
         *
         */
        populateUser(options?: any): Hook;

        /**
         * The `restrictToAuthenticated` hook throws an error if there isn't a logged-in user by checking for the `hook.params.user` object.
         * It can be used on any service method and is intended to be used as a before hook.
         * It doesn't take any arguments.
         *
         */
        restrictToAuthenticated(): Hook;

        /**
         * `restrictToOwner` is meant to be used as a before hook.
         * It only allows the user to retrieve resources that are owned by them.
         * It will return a *Forbidden* error without the proper permissions.
         * It can be used on `get`, `create`, `update`, `patch` or `remove` methods.
         *
         */
        restrictToOwner(options?: RestrictOptions): Hook;

        /**
         * The `hashPassword` hook will automatically hash the data coming in on the provided passwordField.
         * It is intended to be used as a before hook on the user service for the create, update, or patch methods.
         *
         */
        hashPassword(options?: HashPassOptions): Hook;
    }
}
