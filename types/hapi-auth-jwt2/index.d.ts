// Type definitions for hapi-auth-jwt2 7.0
// Project: https://github.com/dwyl/hapi-auth-jwt2
// Definitions by: Warren Seymour <https://github.com/warrenseymour>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Request, Response, PluginFunction } from 'hapi';

declare namespace hapiAuthJwt2 {
    /**
     * A key lookup function
     *
     * @param decoded the *decoded* but *unverified* JWT received from client
     * @param callback the key lookup callback
     */
    type KeyLookup = (decoded: any, callback: KeyLookupCallback) => void;

    /**
     * Called when key lookup function has completed
     *
     * @param err an internal error
     * @param key the secret key
     * @param extraInfo any additional information that you would like
     * to use in `validateFunc` which can be accessed via
     * `request.plugins['hapi-auth-jwt2'].extraInfo`
     */
    type KeyLookupCallback = (err: any, key: string, extraInfo?: any) => void;

    /**
     * Called when Validation has completed
     *
     * @param err an internal error
     * @param valid `true` if the JWT was valid, otherwise `false`
     * @param credentials alternative credentials to be set instead of `decoded`
     */
    type ValidateCallback = (err: any, valid: boolean, credentials?: any) => void;

    /**
     * Options passed to `hapi.auth.strategy` when this plugin is used
     */
    interface Options {
        /**
         * The secret key used to check the signature of the token *or* a *key lookup function*
         */
        key?: string | KeyLookup;

        /**
         * The function which is run once the Token has been decoded
         *
         * @param decoded the *decoded* and *verified* JWT received from the client in *request.headers.authorization*
         * @param request the original *request* received from the client
         * @param callback the validation callback
         */
        validateFunc(decoded: {}, request: Request, callback: ValidateCallback): void;

        /**
         * Settings to define how tokens are verified by the jsonwebtoken library
         */
        verifyOptions?: {
            /**
             * Ignore expired tokens
             */
            ignoreExpiration?: boolean;

            /**
             * Do not enforce token audience
             */
            audience?: boolean;

            /**
             * Do not require the issuer to be valid
             */
            issuer?: boolean;

            /**
             * List of allowed algorithms
             */
            algorithms?: string[];
        };

        /**
         * function called to decorate the response with authentication headers
         * before the response headers or payload is written
         *
         * @param request the Request object
         * @param reply is called if an error occurred
         */
        responseFunc?(request: Request, reply: (err: any, response: Response) => void): void;

        /**
         * If you prefer to pass your token via url, simply add a token url
         * parameter to your request or use a custom parameter by setting `urlKey.
         * To disable the url parameter set urlKey to `false` or ''.
         * @default 'token'
         */
        urlKey?: string | boolean;

        /**
         * If you prefer to set your own cookie key or your project has a cookie
         * called 'token' for another purpose, you can set a custom key for your
         * cookie by setting `options.cookieKey='yourkeyhere'`. To disable cookies
         * set cookieKey to `false` or ''.
         * @default 'token'
         */
        cookieKey?: string | boolean;

        /**
         * If you want to set a custom key for your header token use the
         * `headerKey` option. To disable header token set headerKey to `false` or
         * ''.
         * @default 'authorization'
         */
        headerKey?: string | boolean;

        /**
         * Allow custom token type, e.g. `Authorization: <tokenType> 12345678`
         */
        tokenType?: string;

        /**
         * Set to `true` to receive the complete token (`decoded.header`,
         * `decoded.payload` and `decoded.signature`) as decoded argument to key
         * lookup and `verifyFunc` callbacks (*not `validateFunc`*)
         * @default false
         */
        complete?: boolean;
    }
}

declare var hapiAuthJwt2: PluginFunction<{}>;

export = hapiAuthJwt2;
