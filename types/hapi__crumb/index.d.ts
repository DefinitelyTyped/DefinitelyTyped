// Type definitions for @hapi/crumb 7.3
// Project: https://github.com/hapijs/crumb
// Definitions by: Silas Rech <https://github.com/lenovouser>
//                 Simon Schick <https://github.com/SimonSchick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Request, Plugin, ResponseToolkit, ServerStateCookieOptions } from '@hapi/hapi';

declare module '@hapi/hapi' {
    interface PluginSpecificConfiguration {
        crumb?: boolean | {
            /**
             * The name of the cookie to store the CSRF crumb into.
             */
            key?: string;

            /**
             * Specifies how the crumb will be sent in requests.
             *
             * @default 'payload'
             */
            source?: 'payload' | 'query';

            /**
             * Override for the server's 'restful' setting
             */
            restful?: boolean;
        };
    }
}

declare namespace crumb {
    type SkipFunction = (request?: Request, h?: ResponseToolkit) => boolean;

    interface RegisterOptions {
        /**
         * The name of the cookie to store the CSRF crumb into.
         *
         * @default 'crumb'
         */
        key?: string;

        /**
         * The length of the crumb to generate.
         * See {@link https://github.com/hapijs/cryptiles cryptiles} for more information.
         *
         * @default 43
         */
        size?: number;

        /**
         * Whether to automatically generate a new crumb for requests.
         *
         * @default true
         */
        autoGenerate?: boolean;

        /**
         * Whether to automatically add the crumb to view contexts as the given key.
         *
         * @default true
         */
        addToViewContext?: boolean;

        /**
         * Storage options for the cookie containing the crumb
         *
         * @default { path: '/' }
         */
        cookieOptions?: ServerStateCookieOptions;

        /**
         * Specify the name of the custom CSRF header.
         *
         * @default 'X-CSRF-Token'
         */
        headerName?: string;

        /**
         * RESTful mode that validates crumb tokens from 'X-CSRF-Token' request header for POST, PUT, PATCH and DELETE server routes.
         * Disables payload/query crumb validation.
         *
         * @default false
         */
        restful?: boolean;

        /**
         * A function which when provided, is called for every request.
         * If the provided function returns true, validation and generation of crumb is skipped.
         *
         * @default false
         */
        skip?: boolean | SkipFunction;

        /**
         * Using enforce with false will set the CSRF header cookie but won't execute the validation.
         *
         * @default true
         */
        enforce?: boolean;

        /**
         * Whether to add to the request log with tag 'crumb' and data 'validation failed'.
         *
         * @default false
         */
        logUnauthorized?: boolean;
    }
}

declare const crumb: Plugin<crumb.RegisterOptions>;

export = crumb;
