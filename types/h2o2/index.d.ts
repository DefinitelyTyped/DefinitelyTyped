// Type definitions for h2o2 8.1
// Project: https://github.com/hapijs/h2o2
// Definitions by: Jason Swearingen <https://github.com/jasonswearingen>, AJP <https://github.com/AJamesPhillips>, Garth Kidd <https://github.com/garthk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import http = require('http');
import Boom = require('boom');

import {
    Plugin,
    Request,
    ResponseObject,
    ResponseToolkit,
    Lifecycle,
    RouteOptions,
} from 'hapi';

declare namespace h2o2 {
    /** `mapURI` return value */
    export interface ProxyTarget {
        /** The URI to request */
        uri: string;

        /** The headers with which to request `uri` */
        headers?: { [key: string]: string };
    }

    /** Proxy handler options */
    export interface ProxyHandlerOptions {
        /** host - upstream service host to proxy requests to. It will have the same path as the client request. */
        host?: string;
        /** port - upstream service port. */
        port?: number | string;
        /** protocol - protocol to use when making the request to the proxied host: */
        protocol?: 'http' | 'https';
        /** uri - absolute URI used instead of host, port, protocol, path, and query. Cannot be used with host, port, protocol, or mapUri. */
        uri?: string;
        /** passThrough - if set to true, it forwards the headers from the client to the upstream service, headers sent from the upstream service will also be forwarded to the client. Defaults to false. */
        passThrough?: boolean;
        /** localStatePassThrough - if set tofalse, any locally defined state is removed from incoming requests before being sent to the upstream service. This value can be overridden on a per state basis via the server.state()``passThrough option. Defaults to false */
        localStatePassThrough?: boolean;
        /** acceptEncoding - if set to false, does not pass-through the 'Accept-Encoding' HTTP header which is useful for the onResponse post-processing to avoid receiving an encoded response. Can only be used together with passThrough. Defaults to true (passing header). */
        acceptEncoding?: boolean;
        /** rejectUnauthorized - sets the rejectUnauthorized property on the https agent making the request. This value is only used when the proxied server uses TLS/SSL. If set it will override the node.js rejectUnauthorized property. If false then ssl errors will be ignored. When true the server certificate is verified and an 500 response will be sent when verification fails. This shouldn't be used alongside the agent setting as the agent will be used instead. Defaults to the https agent default value of true. */
        rejectUnauthorized?: boolean;
        /** xforward - if set to true, sets the 'X-Forwarded-For', 'X-Forwarded-Port', 'X-Forwarded-Proto', 'X-Forwarded-Host' headers when making a request to the proxied upstream endpoint. Defaults to false. */
        xforward?: boolean;
        /** redirects - the maximum number of HTTP redirections allowed to be followed automatically by the handler. Set to false or 0 to disable all redirections (the response will contain the redirection received from the upstream service). If redirections are enabled, no redirections (301, 302, 307, 308) will be passed along to the client, and reaching the maximum allowed redirections will return an error response. Defaults to false. */
        redirects?: number | false;
        /** timeout - number of milliseconds before aborting the upstream request. Defaults to 180000 (3 minutes). */
        timeout?: number;
        /** mapUri - a function used to map the request URI to the target `uri` and optional `headers` with which to make that request. Cannot be used together with `host`, `port`, `protocol`, or `uri`.
         * @param request - is the incoming request object.
        */
        mapUri?: (this: ProxyHandlerOptions, request: Request) => Promise<ProxyTarget>;
        /**
         * onResponse - a custom function for processing the response from the upstream service before sending to the client. Useful for custom error handling of responses from the proxied endpoint or other payload manipulation.
         * @param err - internal or upstream error returned from attempting to contact the upstream proxy.  TODO: check this is of type BoomError or just Error.
         * @param res - the node response object received from the upstream service. res is a readable stream (use the wreck module read method to easily convert it to a Buffer or string).
         * @param request - is the incoming request object.
         * @param h - Hapi's response toolkit.
         * @param settings - the proxy handler configuration.
         * @param ttl - the upstream TTL in milliseconds if proxy.ttl it set to 'upstream' and the upstream response included a valid 'Cache-Control' header with 'max-age'.
         */
        onResponse?: (this: RouteOptions,
            err: null | Boom,
            res: http.IncomingMessage,
            req: Request,
            h: ResponseToolkit,
            settings: ProxyHandlerOptions,
            ttl: number) => Lifecycle.ReturnValue;
        /** ttl - if set to 'upstream', applies the upstream response caching policy to the response using the response.ttl() method (or passed as an argument to the onResponse method if provided). */
        ttl?: 'upstream';
        /** agent - a node http(s) agent to be used for connections to upstream server. @see {@link https://nodejs.org/api/http.html#http_class_http_agent} */
        agent?: http.Agent;
        /** maxSockets - sets the maximum number of sockets available per outgoing proxy host connection. false means use the wreck module default value (Infinity). Does not affect non-proxy outgoing client connections. Defaults to Infinity. */
        maxSockets?: false | number;
    }
}

declare module 'hapi' {
    interface HandlerDecorations {
        /**
         * Proxies the request to an upstream endpoint.
         */
        proxy?: h2o2.ProxyHandlerOptions;
    }

    interface ResponseToolkit {
        /**
         * Proxies the request to an upstream endpoint. `async`, so you'll need to `await` the `ResponseObject` to work on it before returning it.
         */
        proxy(options: h2o2.ProxyHandlerOptions): Promise<ResponseObject>;
    }
}

declare const h2o2: Plugin<{}>;

export = h2o2;
