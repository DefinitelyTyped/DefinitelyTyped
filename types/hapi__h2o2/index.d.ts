/// <reference types="node" />

import { Boom } from "@hapi/boom";
import { Agent, IncomingMessage } from "http";
import Wreck = require("@hapi/wreck");
import { Lifecycle, Plugin, Request, ResponseObject, ResponseToolkit, RouteOptions } from "@hapi/hapi";

declare namespace h2o2 {
    /**
     * `mapURI` return value
     */
    interface ProxyTarget {
        /**
         * The URI to request
         */
        uri: string;

        /**
         * The headers with which to request `uri`
         */
        headers?: { [key: string]: string } | undefined;
    }

    /**
     * Proxy handler options
     */
    interface ProxyHandlerOptions {
        /**
         * upstream service host to proxy requests to. It will have the same
         * path as the client request.
         */
        host?: string | undefined;
        /**
         * upstream service port.
         */
        port?: number | string | undefined;
        /**
         * protocol to use when making the request to the proxied host:
         */
        protocol?: "http" | "https" | undefined;
        /**
         * absolute URI used instead of host, port, protocol, path, and query.
         * Cannot be used with host, port, protocol, or mapUri.
         */
        uri?: string | undefined;
        /**
         * an http client that abides by the Wreck interface.
         *
         * @default wreck
         */
        httpClient?: Partial<typeof Wreck> | undefined;
        /**
         * if set to true, it forwards the headers from the client to the
         * upstream service, headers sent from the upstream service will also be
         * forwarded to the client.
         *
         * @default false
         */
        passThrough?: boolean | undefined;
        /**
         * if set tofalse, any locally defined state is removed from incoming
         * requests before being sent to the upstream service. This value can be
         * overridden on a per state basis via the server.state()``passThrough
         * option.
         *
         * @default false
         */
        localStatePassThrough?: boolean | undefined;
        /**
         * if set to false, does not pass-through the 'Accept-Encoding' HTTP
         * header which is useful for the onResponse post-processing to avoid
         * receiving an encoded response. Can only be used together with
         * passThrough.
         *
         * @default true (passing header).
         */
        acceptEncoding?: boolean | undefined;
        /**
         * sets the rejectUnauthorized property on the https agent making the
         * request. This value is only used when the proxied server uses
         * TLS/SSL. If set it will override the node.js rejectUnauthorized
         * property. If false then ssl errors will be ignored. When true the
         * server certificate is verified and an 500 response will be sent when
         * verification fails. This shouldn't be used alongside the agent
         * setting as the agent will be used instead.
         *
         * @default true
         */
        rejectUnauthorized?: boolean | undefined;
        /**
         * if set to true, sets the 'X-Forwarded-For', 'X-Forwarded-Port',
         * 'X-Forwarded-Proto', 'X-Forwarded-Host' headers when making a request
         * to the proxied upstream endpoint.
         *
         * @default false
         */
        xforward?: boolean | undefined;
        /**
         * the maximum number of HTTP redirections allowed to be followed
         * automatically by the handler. Set to false or 0 to disable all
         * redirections (the response will contain the redirection received from
         * the upstream service). If redirections are enabled, no redirections
         * (301, 302, 307, 308) will be passed along to the client, and reaching
         * the maximum allowed redirections will return an error response.
         *
         * @default false
         */
        redirects?: number | false | undefined;
        /**
         * number of milliseconds before aborting the upstream request. Defaults
         * to 180000 (3 minutes).
         */
        timeout?: number | undefined;
        /**
         * a function used to map the request URI to the target `uri` and
         * optional `headers` with which to make that request. Cannot be used
         * together with `host`, `port`, `protocol`, or `uri`.
         * @param request - is the incoming request object.
         */
        mapUri?: ((this: ProxyHandlerOptions, request: Request) => Promise<ProxyTarget>) | undefined;
        /**
         * a custom function which is passed the upstream request.
         * @param req - the [wreck] (https://github.com/hapijs/wreck) request to the upstream server.
         */
        onRequest?: ((req: typeof Wreck) => Promise<IncomingMessage>) | undefined;
        /**
         * a custom function for processing the response from the upstream
         * service before sending to the client. Useful for custom error
         * handling of responses from the proxied endpoint or other payload
         * manipulation.
         * @param err - internal or upstream error returned from attempting to
         * contact the upstream proxy.  TODO: check this is of type BoomError or
         * just Error.
         * @param res - the node response object received from the upstream
         * service. res is a readable stream (use the wreck module read method
         * to easily convert it to a Buffer or string).
         * @param request - is the incoming request object.
         * @param h - Hapi's response toolkit.
         * @param settings - the proxy handler configuration.
         * @param ttl - the upstream TTL in milliseconds if proxy.ttl it set to
         * 'upstream' and the upstream response included a valid 'Cache-Control'
         * header with 'max-age'.
         */
        onResponse?:
            | ((
                this: RouteOptions,
                err: null | Boom,
                res: IncomingMessage,
                req: Request,
                h: ResponseToolkit,
                settings: ProxyHandlerOptions,
                ttl: number,
            ) => Lifecycle.ReturnValue)
            | undefined;
        /**
         * if set to 'upstream', applies the upstream response caching policy to
         * the response using the response.ttl() method (or passed as an
         * argument to the onResponse method if provided).
         */
        ttl?: "upstream" | undefined;
        /**
         * a node http(s) agent to be used for connections to upstream server.
         * @see {@link https://nodejs.org/api/http.html#http_class_http_agent}
         */
        agent?: Agent | undefined;
        /**
         * sets the maximum number of sockets available per outgoing proxy host
         * connection. false means use the wreck module default value
         * (Infinity). Does not affect non-proxy outgoing client connections.
         *
         * @default Infinity
         */
        maxSockets?: false | number | undefined;
        /**
         * TLS flag indicating the SSL method to use, e.g. SSLv3_method to force
         * SSL version 3. The possible values depend on your installation of
         * OpenSSL. Read the official OpenSSL docs for possible SSL_METHODS.
         */
        secureProtocol?: string | undefined;
        /**
         * TLS list of TLS ciphers to override node's default. The possible
         * values depend on your installation of OpenSSL. Read the official
         * OpenSSL docs for possible TLS_CIPHERS.
         */
        ciphers?: string | undefined;
        /**
         * logs the time spent processing the downstream request using
         * process.hrtime.
         *
         * @default false
         */
        downstreamResponseTime?: number[] | false | undefined;
    }
}

declare module "@hapi/hapi" {
    interface HandlerDecorations {
        /**
         * Proxies the request to an upstream endpoint.
         */
        proxy?: h2o2.ProxyHandlerOptions | undefined;
    }

    interface ResponseToolkit {
        /**
         * Proxies the request to an upstream endpoint. `async`, so you'll need
         * to `await` the `ResponseObject` to work on it before returning it.
         */
        proxy(options: h2o2.ProxyHandlerOptions): Promise<ResponseObject>;
    }
}

declare const h2o2: {
    plugin: Plugin<any>;
};

export = h2o2;
