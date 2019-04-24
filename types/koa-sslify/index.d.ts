// Type definitions for koa-sslify 4.0
// Project: https://github.com/turboMaCk/koa-sslify#readme
// Definitions by: Matthew Bull <https://github.com/wingsbob>
//                 Mihkel Sokk <https://github.com/msokk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as koa from "koa";

declare namespace sslify {
    interface Options {
        /**
         * Function used to test if request is secure
         */
        resolver?: (ctx: koa.Context) => boolean;
        /**
         * Hostname for redirect (uses request host if not set)
         */
        hostname?: string;
        /**
         * Port of HTTPS server
         */
        port?: number;
        /**
         * Avoid :443 port in redirect url
         */
        skipDefaultPort?: boolean;
        /**
         * Ignore url path (redirect to domain)
         */
        ignoreUrl?: boolean;
        /**
         * Temporary mode (use 307 Temporary Redirect)
         */
        temporary?: boolean;
        /**
         * Whitelist methods that should be redirected
         */
        redirectMethods?: string[];
        /**
         * Status returned for disallowed methods
         */
        disallowStatus?: number;
    }

    /**
     * Default HTTPS resolver
     * This works when using node.js TLS support
     */
    function httpsResolver(ctx: koa.Context): boolean;

    /**
     * x-forwarded-proto header resolver
     * common for heroku gcp (ingress) etc
     */
    function xForwardedProtoResolver(ctx: koa.Context): boolean;

    /**
     * Azure resolver
     * Azure is using `x-att-ssl` header
     */
    function azureResolver(ctx: koa.Context): boolean;

    /**
     * Custom proto header factory
     */
    function customProtoHeaderResolver(
        header: string
    ): (ctx: koa.Context) => boolean;

    /**
     * Resolver for `Forwarded` header
     * see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Forwarded
     */
    function forwardedResolver(ctx: koa.Context): boolean;
}

declare function sslify(options?: sslify.Options): koa.Middleware;

export = sslify;
