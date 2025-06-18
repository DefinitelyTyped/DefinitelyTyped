import { Plugin, Request, ResponseToolkit, ServerStateCookieOptions } from "hapi";

declare module "hapi" {
    interface PluginSpecificConfiguration {
        crumb?: boolean | {
            /**
             * The name of the cookie to store the CSRF crumb into.
             */
            key?: string | undefined;

            /**
             * Specifies how the crumb will be sent in requests.
             *
             * @default 'payload'
             */
            source?: "payload" | "query" | undefined;

            /**
             * Override for the server's 'restful' setting
             */
            restful?: boolean | undefined;
        } | undefined;
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
        key?: string | undefined;

        /**
         * The length of the crumb to generate.
         * See {@link https://github.com/hapijs/cryptiles cryptiles} for more information.
         *
         * @default 43
         */
        size?: number | undefined;

        /**
         * Whether to automatically generate a new crumb for requests.
         *
         * @default true
         */
        autoGenerate?: boolean | undefined;

        /**
         * Whether to automatically add the crumb to view contexts as the given key.
         *
         * @default true
         */
        addToViewContext?: boolean | undefined;

        /**
         * Storage options for the cookie containing the crumb
         *
         * @default { path: '/' }
         */
        cookieOptions?: ServerStateCookieOptions | undefined;

        /**
         * Specify the name of the custom CSRF header.
         *
         * @default 'X-CSRF-Token'
         */
        headerName?: string | undefined;

        /**
         * RESTful mode that validates crumb tokens from 'X-CSRF-Token' request header for POST, PUT, PATCH and DELETE server routes.
         * Disables payload/query crumb validation.
         *
         * @default false
         */
        restful?: boolean | undefined;

        /**
         * A function which when provided, is called for every request.
         * If the provided function returns true, validation and generation of crumb is skipped.
         *
         * @default false
         */
        skip?: boolean | SkipFunction | undefined;

        /**
         * Using enforce with false will set the CSRF header cookie but won't execute the validation.
         *
         * @default true
         */
        enforce?: boolean | undefined;

        /**
         * Whether to add to the request log with tag 'crumb' and data 'validation failed'.
         *
         * @default false
         */
        logUnauthorized?: boolean | undefined;
    }
}

declare const crumb: Plugin<crumb.RegisterOptions>;

export = crumb;
