// Type definitions for hapi-auth-cookie 9.1
// Project: https://github.com/hapijs/hapi-auth-cookie
// Definitions by: Silas Rech <https://github.com/lenovouser>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Matt Erickson <https://github.com/Mutmatt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Request, ResponseObject, Plugin, ResponseToolkit, AuthCredentials, ServerStateCookieOptions } from 'hapi';

declare module 'hapi' {
    interface ServerAuth {
        strategy(name: string, scheme: 'cookie', options?: hapiAuthCookie.Options): void;
    }

    interface PluginSpecificConfiguration {
        'hapi-auth-cookie'?: {
            redirectTo?: boolean;
        };
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
    interface ValidateResponse { valid: boolean; credentials?: AuthCredentials; }
    type ValidateFunction = (request?: Request, session?: object) => Promise<ValidateResponse>;
    type RedirectToFunction = (request?: Request) => void;

    /**
     * Options passed to 'hapi.auth.strategy' when this plugin is used
     */
    interface Options {
        /**
         * The cookie name.
         *
         * @default 'sid'
         */
        cookie?: string;

        /**
         * Used for Iron cookie encoding.
         * Should be at least 32 characters long.
         */
        password: string;

        /**
         * Sets the cookie expires time in milliseconds.
         * Required when 'keepAlive' is true.
         * Defaults to single browser session (ends when browser closes).
         */
        ttl?: number;

        /**
         * Sets the cookie Domain value.
         * Defaults to none.
         */
        domain?: string;

        /**
         * Sets the cookie path value.
         *
         * @default '/'
         */
        path?: string;

        /**
         * Any authentication cookie that fails validation will be marked as expired in the response and cleared.
         *
         * @default false
         */
        clearInvalid?: boolean;

        /**
         * Automatically sets the session cookie after validation to extend the current session for a new TTL duration.
         *
         * @default false
         */
        keepAlive?: boolean;

        /**
         * If false omitted.
         * Other options Strict or Lax.
         *
         * @default 'Strict'
         */
        isSameSite?: ServerStateCookieOptions['isSameSite'];

        /**
         * If false, the cookie is allowed to be transmitted over insecure connections which exposes it to attacks.
         *
         * @default true
         */
        isSecure?: boolean;

        /**
         * If false, the cookie will not include the 'HttpOnly' flag.
         *
         * @default true
         */
        isHttpOnly?: boolean;

        /**
         * Login URI or function that returns a URI to redirect unauthenticated requests to.
         * Note that it will only trigger when the authentication mode is 'required'.
         * Defaults to no redirection.
         */
        redirectTo?: string | RedirectToFunction;

        /**
         * Only works if 'redirectTo' is true
         * If set to true, a string, or an object, appends the current request path to the query component of the 'redirectTo' URI.
         */
        appendNext?: boolean | string;

        /**
         * An optional session validation function used to validate the content of the session cookie on each request.
         * Used to verify that the internal session state is still valid (e.g. user account still exists).
         */
        validateFunc?: ValidateFunction;

        /**
         * A name to use with decorating the request object.
         * Using multiple decorator names for separate authentication strategies could allow a developer to call the methods for the wrong strategy.
         * Potentially resulting in unintended authorized access.
         *
         * @default 'cookieAuth'
         */
        requestDecoratorName?: string;
    }
}

declare const hapiAuthCookie: Plugin<void>;

export = hapiAuthCookie;
