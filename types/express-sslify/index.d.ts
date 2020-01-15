// Type definitions for express-sslify 1.2
// Project: https://github.com/florianheinemann/express-sslify
// Definitions by: Ben Grynhaus <https://github.com/bengry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { RequestHandler } from 'express';

export interface Options {
    /**
     * Heroku, nodejitsu and other hosters often use reverse proxies which offer SSL endpoints but then forward unencrypted HTTP traffic to the website.
     * This makes it difficult to detect if the original request was indeed via HTTPS.
     * Luckily, most reverse proxies set the x-forwarded-proto header flag with the original request scheme.
     * @default false
     */
    trustProtoHeader?: boolean;

    /**
     * Azure has a slightly different way of signaling encrypted connections.
     * To tell express-sslify to look out for Azure's x-arr-ssl header.
     * @default false
     */
    trustAzureHeader?: boolean;

    /**
     * If your reverse proxy sends the original host using the X-Forwarded-Host header and you need to use that instead of the Host header for the redirect.
     * @default false
     */
    trustXForwardedHostHeader?: boolean;
}

export function HTTPS(options?: Options): RequestHandler;
