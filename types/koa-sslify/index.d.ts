// Type definitions for koa-sslify 4.0
// Project: https://github.com/turboMaCk/koa-sslify#readme
// Definitions by: Matthew Bull <https://github.com/wingsbob>
//                 Mihkel Sokk <https://github.com/msokk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import koa = require('koa');

export interface Options {
    /**
     * Function used to test if request is secure
     */
    resolver?: ((ctx: koa.Context) => boolean) | undefined;
    /**
     * Hostname for redirect (uses request host if not set)
     */
    hostname?: string | undefined;
    /**
     * Port of HTTPS server
     */
    port?: number | undefined;
    /**
     * Avoid :443 port in redirect url
     */
    skipDefaultPort?: boolean | undefined;
    /**
     * Ignore url path (redirect to domain)
     */
    ignoreUrl?: boolean | undefined;
    /**
     * Temporary mode (use 307 Temporary Redirect)
     */
    temporary?: boolean | undefined;
    /**
     * Whitelist methods that should be redirected
     */
    redirectMethods?: string[] | undefined;
    /**
     * Status returned for disallowed methods
     */
    disallowStatus?: number | undefined;
}

/**
 * Default HTTPS resolver
 * This works when using node.js TLS support
 */
export function httpsResolver(ctx: koa.Context): boolean;

/**
 * x-forwarded-proto header resolver
 * common for heroku gcp (ingress) etc
 */
export function xForwardedProtoResolver(ctx: koa.Context): boolean;

/**
 * Azure resolver
 * Azure is using `x-att-ssl` header
 */
export function azureResolver(ctx: koa.Context): boolean;

/**
 * Custom proto header factory
 */
export function customProtoHeaderResolver(header: string): (ctx: koa.Context) => boolean;

/**
 * Resolver for `Forwarded` header
 * see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Forwarded
 */
export function forwardedResolver(ctx: koa.Context): boolean;

export default function factory(options?: Options): koa.Middleware;
