// Type definitions for @hapi/cookie 10.1
// Project: https://github.com/hapijs/hapi-auth-cookie
// Definitions by: Silas Rech <https://github.com/lenovouser>
//                 Simon Schick <https://github.com/SimonSchick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Request, ResponseObject, Plugin, ResponseToolkit, AuthCredentials, ServerStateCookieOptions } from '@hapi/hapi';

declare module '@hapi/hapi' {
    interface ServerAuth {
        strategy(name: string, scheme: 'cookie', options?: hapiAuthCookie.Options): void;
    }

    interface PluginSpecificConfiguration {
        'hapi-auth-cookie'?: {
            redirectTo?: boolean | undefined;
        } | undefined;
    }

    interface Request {
        cookieAuth: {
            set(session: object): void;
            set(key: string, value: object | string): void;
            clear(key?: string): void;
            ttl(milliseconds: number): void;
        };
    }
}

declare namespace hapiAuthCookie {
    interface ValidateResponse { valid: boolean; credentials?: AuthCredentials | undefined; }
    type ValidateFunction = (request?: Request, session?: object) => Promise<ValidateResponse>;
    type RedirectToFunction = (request?: Request) => string;

    /**
     * Options passed to 'hapi.auth.strategy' when this plugin is used
     */
    interface Options {
        /**
         * Cookie options.
         *
         * @default { name: 'sid', clearInvalid: false, isSameSite: 'Strict', isSecure: true, isHttpOnly: true }
         */
        cookie?: ServerStateCookieOptions & { name: string } | undefined;

        /**
         * Automatically sets the session cookie after validation to extend the current session for a new TTL duration.
         *
         * @default false
         */
        keepAlive?: boolean | undefined;

        /**
         * Login URI or function that returns a URI to redirect unauthenticated requests to.
         * Note that it will only trigger when the authentication mode is 'required'.
         * Defaults to no redirection.
         */
        redirectTo?: string | RedirectToFunction | undefined;

        /**
         * Only works if 'redirectTo' is true
         * If set to true, a string, or an object, appends the current request path to the query component of the 'redirectTo' URI.
         */
        appendNext?: boolean | string | undefined;

        /**
         * An optional session validation function used to validate the content of the session cookie on each request.
         * Used to verify that the internal session state is still valid (e.g. user account still exists).
         */
        validateFunc?: ValidateFunction | undefined;

        /**
         * A name to use with decorating the request object.
         * Using multiple decorator names for separate authentication strategies could allow a developer to call the methods for the wrong strategy.
         * Potentially resulting in unintended authorized access.
         *
         * @default 'cookieAuth'
         */
        requestDecoratorName?: string | undefined;
    }
}

declare const hapiAuthCookie: Plugin<void>;

export = hapiAuthCookie;
