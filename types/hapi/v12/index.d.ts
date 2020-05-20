// Type definitions for hapi 12.0.1
// Project: https://github.com/spumko/hapi
// Definitions by: Jason Swearingen <https://github.com/jasonswearingen>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Note/Disclaimer:
// Copied directly from 918608a5e007d925f4f60a275881057f07c12619 which seems to
// be the last author to work on v12.0


/// <reference types="node" />

declare module "hapi" {
    import http = require("http");
    import stream = require("stream");
    import Events = require("events");

    interface IDictionary<T> {
        [key: string]: T;
    }

    interface IThenable<R> {
        then<U>(onFulfilled?: (value: R) => U | IThenable<U>, onRejected?: (error: any) => U | IThenable<U>): IThenable<U>;
        then<U>(onFulfilled?: (value: R) => U | IThenable<U>, onRejected?: (error: any) => void): IThenable<U>;
    }

    interface IPromise<R> extends IThenable<R> {
        then<U>(onFulfilled?: (value: R) => U | IThenable<U>, onRejected?: (error: any) => U | IThenable<U>): IPromise<U>;
        then<U>(onFulfilled?: (value: R) => U | IThenable<U>, onRejected?: (error: any) => void): IPromise<U>;
        catch<U>(onRejected?: (error: any) => U | IThenable<U>): IPromise<U>;
    }

    /** Boom Module for errors. https://github.com/hapijs/boom
    *  boom provides a set of utilities for returning HTTP errors. Each utility returns a Boom error response object (instance of Error) which includes the following properties:  */
    export interface IBoom extends Error {
        /**  if true, indicates this is a Boom object instance.  */
        isBoom: boolean;
        /** convenience bool indicating status code >= 500.  */
        isServer: boolean;
        /**  the error message.  */
        message: string;
        /**  the formatted response.Can be directly manipulated after object construction to return a custom error response.Allowed root keys:  */
        output: {
            /** the HTTP status code (typically 4xx or 5xx).  */
            statusCode: number;
            /** an object containing any HTTP headers where each key is a header name and value is the header content.  */
            headers: IDictionary<string>;
            /** the formatted object used as the response payload (stringified).Can be directly manipulated but any changes will be lost if reformat() is called.Any content allowed and by default includes the following content: */
            payload: {
                /** the HTTP status code, derived from error.output.statusCode.  */
                statusCode: number;
                /** the HTTP status message (e.g. 'Bad Request', 'Internal Server Error') derived from statusCode.  */
                error: string;
                /** the error message derived from error.message. */
                message: string;
            };
        };
        /**  reformat()rebuilds error.output using the other object properties.  */
        reformat(): void;

    }

    /** cache functionality via the "CatBox" module. */
    export interface ICatBoxCacheOptions {
        /**  a prototype function or catbox engine object.  */
        engine: any;
        /**   an identifier used later when provisioning or configuring caching for server methods or plugins. Each cache name must be unique. A single item may omit the name option which defines the default cache. If every cache includes a name, a default memory cache is provisions as well.  */
        name?: string;
        /**   if true, allows multiple cache users to share the same segment (e.g. multiple methods using the same cache storage container). Default to false.  */
        shared?: boolean;
    }

    /** Any connections configuration server defaults can be included to override and customize the individual connection. */
    export interface IServerConnectionOptions extends IConnectionConfigurationServerDefaults {
        /**  - the public hostname or IP address. Used only to set server.info.host and server.info.uri. If not configured, defaults to the operating system hostname and if not available, to 'localhost'.*/
        host?: string;
        /** - sets the host name or IP address the connection will listen on.If not configured, defaults to host if present, otherwise to all available network interfaces (i.e. '0.0.0.0').Set to 127.0.0.1 or localhost to restrict connection to only those coming from the same machine.*/
        address?: string;
        /** - the TCP port the connection will listen to.Defaults to an ephemeral port (0) which uses an available port when the server is started (and assigned to server.info.port).If port is a string containing a '/' character, it is used as a UNIX domain socket path and if it starts with '\.\pipe' as a Windows named pipe.*/
        port?: string | number;
        /** - the full public URI without the path (e.g. 'http://example.com:8080').If present, used as the connection info.uri otherwise constructed from the connection settings.*/
        uri?: string;
        /**  - optional node.js HTTP (or HTTPS) http.Server object or any compatible object.If the listener needs to be manually started, set autoListen to false.If the listener uses TLS, set tls to true.*/
        listener?: any;
        /**  - indicates that the connection.listener will be started manually outside the framework.Cannot be specified with a port setting.Defaults to true.*/
        autoListen?: boolean;
        /**  caching headers configuration: */
        cache?: {
            /** - an array of HTTP response status codes (e.g. 200) which are allowed to include a valid caching directive.Defaults to [200]. */
            statuses: number[];
        };
        /** - a string or string array of labels used to server.select() specific connections matching the specified labels.Defaults to an empty array [](no labels).*/
        labels?: string | string[];
        /**  - used to create an HTTPS connection.The tls object is passed unchanged as options to the node.js HTTPS server as described in the node.js HTTPS documentation.Set to true when passing a listener object that has been configured to use TLS directly. */
        tls?: boolean | { key?: string; cert?: string; pfx?: string; } | Object;

    }

    export interface IConnectionConfigurationServerDefaults {
        /**  application-specific connection configuration which can be accessed via connection.settings.app. Provides a safe place to store application configuration without potential conflicts with the framework internals. Should not be used to configure plugins which should use plugins[name]. Note the difference between connection.settings.app which is used to store configuration values and connection.app which is meant for storing run-time state.  */
        app?: any;
        /**  connection load limits configuration where:  */
        load?: {
            /**  maximum V8 heap size over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit).  */
            maxHeapUsedBytes?: number;
            /**  maximum process RSS size over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit).  */
            maxRssBytes?: number;
            /**  maximum event loop delay duration in milliseconds over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit).  */
            maxEventLoopDelay?: number;
        };
        /**  plugin-specific configuration which can later be accessed via connection.settings.plugins. Provides a place to store and pass connection-specific plugin configuration. plugins is an object where each key is a plugin name and the value is the configuration. Note the difference between connection.settings.plugins which is used to store configuration values and connection.plugins which is meant for storing run-time state. */
        plugins?: any;
        /**  controls how incoming request URIs are matched against the routing table: */
        router?: {
            /**  determines whether the paths '/example' and '/EXAMPLE' are considered different resources. Defaults to true.  */
            isCaseSensitive: boolean;
            /**  removes trailing slashes on incoming paths. Defaults to false.  */
            stripTrailingSlash: boolean;
        };
        /** a route options object used to set the default configuration for every route. */
        routes?: IRouteAdditionalConfigurationOptions;
        state?: IServerState;
    }

    /** Note that the options object is deeply cloned and cannot contain any values that are unsafe to perform deep copy on.*/
    export interface IServerOptions {
        /**  application-specific configuration which can later be accessed via server.settings.app. Note the difference between server.settings.app which is used to store static configuration values and server.app which is meant for storing run-time state. Defaults to {}.  */
        app?: any;
        /**   sets up server-side caching. Every server includes a default cache for storing application state. By default, a simple memory-based cache is created which has limited capacity and capabilities. hapi uses catbox for its cache which includes support for common storage solutions (e.g. Redis, MongoDB, Memcached, and Riak). Caching is only utilized if methods and plugins explicitly store their state in the cache. The server cache configuration only defines the storage container itself. cache can be assigned:
        a prototype function (usually obtained by calling require() on a catbox strategy such as require('catbox-redis')).
        a configuration object with the following options:
        enginea prototype function or catbox engine object.
        namean identifier used later when provisioning or configuring caching for server methods or plugins. Each cache name must be unique. A single item may omit the name option which defines the default cache. If every cache includes a name, a default memory cache is provisions as well.
        sharedif true, allows multiple cache users to share the same segment (e.g. multiple methods using the same cache storage container). Default to false.
        other options passed to the catbox strategy used.
        an array of the above object for configuring multiple cache instances, each with a unique name. When an array of objects is provided, multiple cache connections are established and each array item (except one) must include a name.  */
        cache?: string | ICatBoxCacheOptions | Array<ICatBoxCacheOptions> | any;
        /**  sets the default connections configuration which can be overridden by each connection where:  */
        connections?: IConnectionConfigurationServerDefaults;
        /** determines which logged events are sent to the console (this should only be used for development and does not affect which events are actually logged internally and recorded). Set to false to disable all console logging, or to an object*/
        debug?: boolean | {
            /** - a string array of server log tags to be displayed via console.error() when the events are logged via server.log() as well as internally generated server logs. For example, to display all errors, set the option to ['error']. To turn off all console debug messages set it to false. Defaults to uncaught errors thrown in external code (these errors are handled automatically and result in an Internal Server Error response) or runtime errors due to developer error. */
            log: string[];
            /**  - a string array of request log tags to be displayed via console.error() when the events are logged via request.log() as well as internally generated request logs. For example, to display all errors, set the option to ['error']. To turn off all console debug messages set it to false. Defaults to uncaught errors thrown in external code (these errors are handled automatically and result in an Internal Server Error response) or runtime errors due to developer error.*/
            request: string[];
        };
        /** file system related settings*/
        files?: {
            /**  sets the maximum number of file etag hash values stored in the etags cache. Defaults to 10000.*/
            etagsCacheMaxSize?: number;
        };
        /**  process load monitoring*/
        load?: {
            /**  the frequency of sampling in milliseconds. Defaults to 0 (no sampling).*/
            sampleInterval?: number;
        };

        /** options passed to the mimos module (https://github.com/hapijs/mimos) when generating the mime database used by the server and accessed via server.mime.*/
        mime?: any;
        /**  if true, does not load the inert (file and directory support), h2o2 (proxy support), and vision (views support) plugins automatically. The plugins can be loaded manually after construction. Defaults to false (plugins loaded). */
        minimal?: boolean;
        /** plugin-specific configuration which can later be accessed via server.settings.plugins. plugins is an object where each key is a plugin name and the value is the configuration. Note the difference between server.settings.plugins which is used to store static configuration values and server.plugins which is meant for storing run-time state. Defaults to {}.*/
        plugins?: IDictionary<any>;

    }

    export interface IServerViewCompile {
        (template: string, options: any): void;
        (template: string, options: any, callback: (err: any, compiled: (context: any, options: any, callback: (err: any, rendered: boolean) => void) => void) => void): void;
    }

    export interface IServerViewsAdditionalOptions {
        /**    path - the root file path used to resolve and load the templates identified when calling reply.view().Defaults to current working directory.*/
        path?: string;
        /**partialsPath - the root file path where partials are located.Partials are small segments of template code that can be nested and reused throughout other templates.Defaults to no partials support (empty path).
        */
        partialsPath?: string;
        /**helpersPath - the directory path where helpers are located.Helpers are functions used within templates to perform transformations and other data manipulations using the template context or other inputs.Each '.js' file in the helpers directory is loaded and the file name is used as the helper name.The files must export a single method with the signature function(context) and return a string.Sub - folders are not supported and are ignored.Defaults to no helpers support (empty path).Note that jade does not support loading helpers this way.*/
        helpersPath?: string;
        /**relativeTo - a base path used as prefix for path and partialsPath.No default.*/
        relativeTo?: string;

        /**layout - if set to true or a layout filename, layout support is enabled.A layout is a single template file used as the parent template for other view templates in the same engine.If true, the layout template name must be 'layout.ext' where 'ext' is the engine's extension. Otherwise, the provided filename is suffixed with the engine's extension and loaded.Disable layout when using Jade as it will handle including any layout files independently.Defaults to false.*/
        layout?: boolean;
        /**layoutPath - the root file path where layout templates are located (using the relativeTo prefix if present). Defaults to path.*/
        layoutPath?: string;
        /**layoutKeyword - the key used by the template engine to denote where primary template content should go.Defaults to 'content'.*/
        layoutKeywork?: string;
        /**encoding - the text encoding used by the templates when reading the files and outputting the result.Defaults to 'utf8'.*/
        encoding?: string;
        /**isCached - if set to false, templates will not be cached (thus will be read from file on every use).Defaults to true.*/
        isCached?: boolean;
        /**allowAbsolutePaths - if set to true, allows absolute template paths passed to reply.view().Defaults to false.*/
        allowAbsolutePaths?: boolean;
        /**allowInsecureAccess - if set to true, allows template paths passed to reply.view() to contain '../'.Defaults to false.*/
        allowInsecureAccess?: boolean;
        /**compileOptions - options object passed to the engine's compile function. Defaults to empty options {}.*/
        compileOptions?: any;
        /**runtimeOptions - options object passed to the returned function from the compile operation.Defaults to empty options {}.*/
        runtimeOptions?: any;
        /**contentType - the content type of the engine results.Defaults to 'text/html'.*/
        contentType?: string;
        /**compileMode - specify whether the engine compile() method is 'sync' or 'async'.Defaults to 'sync'.*/
        compileMode?: string;
        /**context - a global context used with all templates.The global context option can be either an object or a function that takes no arguments and returns a context object.When rendering views, the global context will be merged with any context object specified on the handler or using reply.view().When multiple context objects are used, values from the global context always have lowest precedence.*/
        context?: any;
    }

    export interface IServerViewsEnginesOptions extends IServerViewsAdditionalOptions {
        /**- the npm module used for rendering the templates.The module object must contain: "module", the rendering function. The required function signature depends on the compileMode settings.
        * If the compileMode is 'sync', the signature is compile(template, options), the return value is a function with signature function(context, options), and the method is allowed to throw errors.If the compileMode is 'async', the signature is compile(template, options, callback) where callback has the signature function(err, compiled) where compiled is a function with signature function(context, options, callback) and callback has the signature function(err, rendered).*/
        module: {
            compile?(template: any, options: any): (context: any, options: any) => void;
            compile?(template: any, options: any, callback: (err: any, compiled: (context: any, options: any, callback: (err: any, rendered: any) => void) => void) => void): void;
        };
    }

    /**Initializes the server views manager
    var Hapi = require('hapi');
    var server = new Hapi.Server();

    server.views({
    engines: {
    html: require('handlebars'),
    jade: require('jade')
    },
    path: '/static/templates'
    });
    When server.views() is called within a plugin, the views manager is only available to plugins methods.
    */
    export interface IServerViewsConfiguration extends IServerViewsAdditionalOptions {
        /** - required object where each key is a file extension (e.g. 'html', 'hbr'), mapped to the npm module used for rendering the templates.Alternatively, the extension can be mapped to an object with the following options:*/
        engines: IDictionary<any> | IServerViewsEnginesOptions;
        /**  defines the default filename extension to append to template names when multiple engines are configured and not explicit extension is provided for a given template. No default value.*/
        defaultExtension?: string;
    }

    /**  Concludes the handler activity by setting a response and returning control over to the framework where:
    erran optional error response.
    resultan optional response payload.
    Since an request can only have one response regardless if it is an error or success, the reply() method can only result in a single response value. This means that passing both an err and result will only use the err. There is no requirement for either err or result to be (or not) an Error object. The framework will simply use the first argument if present, otherwise the second. The method supports two arguments to be compatible with the common callback pattern of error first.
    FLOW CONTROL:
    When calling reply(), the framework waits until process.nextTick() to continue processing the request and transmit the response. This enables making changes to the returned response object before the response is sent. This means the framework will resume as soon as the handler method exits. To suspend this behavior, the returned response object supports the following methods: hold(), send() */
    export interface IReply {
        <T>(err: Error,
            result?: string | number | boolean | Buffer | stream.Stream | IPromise<T> | T,
            /**  Note that when used to return both an error and credentials in the authentication methods, reply() must be called with three arguments function(err, null, data) where data is the additional authentication information. */
            credentialData?: any
        ): IBoom;
        /**  Note that if result is a Stream with a statusCode property, that status code will be used as the default response code.  */
        <T>(result: string | number | boolean | Buffer | stream.Stream | IPromise<T> | T): Response;

        /** Returns control back to the framework without setting a response. If called in the handler, the response defaults to an empty payload with status code 200.
          * The data argument is only used for passing back authentication data and is ignored elsewhere. */
        continue(credentialData?: any): void;

        /** Transmits a file from the file system. The 'Content-Type' header defaults to the matching mime type based on filename extension.  The response flow control rules do not apply. */
        file(
            /**   the file path. */
            path: string,
            /**  optional settings:  */
            options?: {
                /** - an optional filename to specify if sending a 'Content-Disposition' header, defaults to the basename of path*/
                filename?: string;
                /** specifies whether to include the 'Content-Disposition' header with the response. Available values:
                false - header is not included. This is the default value.
                'attachment'
                'inline'*/
                mode?: boolean | string;
                /**   if true, looks for the same filename with the '.gz' suffix for a pre-compressed version of the file to serve if the request supports content encoding. Defaults to false.  */
                lookupCompressed: boolean;
            }): void;
        /**  Concludes the handler activity by returning control over to the router with a templatized view response.
        the response flow control rules apply. */

        view(
            /**  the template filename and path, relative to the templates path configured via the server views manager. */
            template: string,
            /**  optional object used by the template to render context-specific result. Defaults to no context {}. */
            context?: {},
            /**  optional object used to override the server's views manager configuration for this response. Cannot override isCached, partialsPath, or helpersPath which are only loaded at initialization.  */
            options?: any): Response;
        /** Concludes the handler activity by returning control over to the router and informing the router that a response has already been sent back directly via request.raw.res and that no further response action is needed
        The response flow control rules do not apply. */
        close(options?: {
            /**   if false, the router will not call request.raw.res.end()) to ensure the response was ended. Defaults to true.  */
            end?: boolean;
        }): void;
        /** Proxies the request to an upstream endpoint.
        the response flow control rules do not apply. */

        proxy(/**  an object including the same keys and restrictions defined by the route proxy handler options. */
            options: IProxyHandlerConfig): void;
        /** Redirects the client to the specified uri. Same as calling reply().redirect(uri).
        The response flow control rules apply. */
        redirect(uri: string): ResponseRedirect;
    }

    export interface ISessionHandler {
        (request: Request, reply: IReply): void;
    }
    export interface IRequestHandler<T> {
        (request: Request): T;
    }


    export interface IFailAction {
        (source: string, error: any, next: () => void): void
    }
    /**  generates a reverse proxy handler */
    export interface IProxyHandlerConfig {
        /** the upstream service host to proxy requests to. The same path on the client request will be used as the path on the host.*/
        host?: string;
        /** the upstream service port. */
        port?: number;
        /**  The protocol to use when making a request to the proxied host:
        'http'
        'https'*/
        protocol?: string;
        /**  an absolute URI used instead of the incoming host, port, protocol, path, and query. Cannot be used with host, port, protocol, or mapUri.*/
        uri?: string;
        /**  if true, forwards the headers sent from the client to the upstream service being proxied to, headers sent from the upstream service will also be forwarded to the client. Defaults to false.*/
        passThrough?: boolean;
        /** localStatePassThrough - if false, any locally defined state is removed from incoming requests before being passed upstream. This is a security feature to prevent local state (e.g. authentication cookies) from leaking upstream to other servers along with the cookies intended for those servers. This value can be overridden on a per state basis via the server.state() passThrough option. Defaults to false.*/
        localStatePassThrough?: boolean;
        /**acceptEncoding - if false, does not pass-through the 'Accept-Encoding' HTTP header which is useful when using an onResponse post-processing to avoid receiving an encoded response (e.g. gzipped). Can only be used together with passThrough. Defaults to true (passing header).*/
        acceptEncoding?: boolean;
        /** rejectUnauthorized - sets the rejectUnauthorized property on the https agent making the request. This value is only used when the proxied server uses TLS/SSL. When set it will override the node.js rejectUnauthorized property. If false then ssl errors will be ignored. When true the server certificate is verified and an 500 response will be sent when verification fails. This shouldn't be used alongside the agent setting as the agent will be used instead. Defaults to the https agent default value of true.*/
        rejectUnauthorized?: boolean;
        /**if true, sets the 'X-Forwarded-For', 'X-Forwarded-Port', 'X-Forwarded-Proto' headers when making a request to the proxied upstream endpoint. Defaults to false.*/
        xforward?: boolean;
        /** the maximum number of HTTP redirections allowed, to be followed automatically by the handler. Set to false or 0 to disable all redirections (the response will contain the redirection received from the upstream service). If redirections are enabled, no redirections (301, 302, 307, 308) will be passed along to the client, and reaching the maximum allowed redirections will return an error response. Defaults to false.*/
        redirects?: boolean | number;
        /**number of milliseconds before aborting the upstream request. Defaults to 180000 (3 minutes).*/
        timeout?: number;
        /** a function used to map the request URI to the proxied URI. Cannot be used together with host, port, protocol, or uri. The function signature is function(request, callback) where:
        request - is the incoming request object.
        callback - is function(err, uri, headers) where:
        err - internal error condition.
        uri - the absolute proxy URI.
        headers - optional object where each key is an HTTP request header and the value is the header content.*/
        mapUri?: (request: Request, callback: (err: any, uri: string, headers?: { [key: string]: string }) => void) => void;
        /**  a custom function for processing the response from the upstream service before sending to the client. Useful for custom error handling of responses from the proxied endpoint or other payload manipulation. Function signature is function(err, res, request, reply, settings, ttl) where: - err - internal or upstream error returned from attempting to contact the upstream proxy. - res - the node response object received from the upstream service. res is a readable stream (use the wreck module read method to easily convert it to a Buffer or string). - request - is the incoming request object. - reply - the reply interface function. - settings - the proxy handler configuration. - ttl - the upstream TTL in milliseconds if proxy.ttl it set to 'upstream' and the upstream response included a valid 'Cache-Control' header with 'max-age'.*/
        onResponse?: (
            err: any,
            res: http.ServerResponse,
            req: Request,
            reply: IReply,
            settings: IProxyHandlerConfig,
            ttl: number
        ) => void;
        /** if set to 'upstream', applies the upstream response caching policy to the response using the response.ttl() method (or passed as an argument to the onResponse method if provided).*/
        ttl?: number;
        /** - a node http(s) agent to be used for connections to upstream server.  see https://nodejs.org/api/http.html#http_class_http_agent */
        agent?: http.Agent;
        /** sets the maximum number of sockets available per outgoing proxy host connection. false means use the wreck module default value (Infinity). Does not affect non-proxy outgoing client connections. Defaults to Infinity.*/
        maxSockets?: boolean | number;
    }
    /**  TODO: fill in joi definition  */
    export interface IJoi {

    }
    /**  a validation function using the signature function(value, options, next) */
    export interface IValidationFunction {

        (/**   the object containing the path parameters. */
            value: any,
            /**  the server validation options. */
            options: any,
            /**   the callback function called when validation is completed.  */
            next: (err: any, value: any) => void): void;
    }
    /**  a custom error handler function with the signature 'function(request, reply, source, error)` */
    export interface IRouteFailFunction {
        /**  a custom error handler function with the signature 'function(request, reply, source, error)` */
        (
            /** - the [request object]. */
            request: Request,
            /**   the continuation reply interface. */
            reply: IReply,
            /**  the source of the invalid field (e.g. 'path', 'query', 'payload'). */
            source: string,
            /**  the error object prepared for the client response (including the validation function error under error.data). */
            error: any): void;
    }

    /**  Each route can be customize to change the default behavior of the request lifecycle using the following options:  */
    export interface IRouteAdditionalConfigurationOptions {
        /**  application specific configuration.Should not be used by plugins which should use plugins[name] instead. */
        app?: any;
        /** authentication configuration.Value can be: false to disable authentication if a default strategy is set.
        a string with the name of an authentication strategy registered with server.auth.strategy().
        an object  */
        auth?: boolean | string |
        {
            /**  the authentication mode.Defaults to 'required' if a server authentication strategy is configured, otherwise defaults to no authentication.Available values:
            'required'authentication is required.
            'optional'authentication is optional (must be valid if present).
            'try'same as 'optional' but allows for invalid authentication. */
            mode?: string;
            /**  a string array of strategy names in order they should be attempted.If only one strategy is used, strategy can be used instead with the single string value.Defaults to the default authentication strategy which is available only when a single strategy is configured.  */
            strategies?: string | Array<string>;
            /**  if set, the payload (in requests other than 'GET' and 'HEAD') is authenticated after it is processed.Requires a strategy with payload authentication support (e.g.Hawk).Cannot be set to a value other than 'required' when the scheme sets the options.payload to true.Available values:
            falseno payload authentication.This is the default value.
            'required'payload authentication required.This is the default value when the scheme sets options.payload to true.
            'optional'payload authentication performed only when the client includes payload authentication information (e.g.hash attribute in Hawk). */
            payload?: string;
            /**  the application scope required to access the route.Value can be a scope string or an array of scope strings.The authenticated credentials object scope property must contain at least one of the scopes defined to access the route.Set to false to remove scope requirements.Defaults to no scope required.  */
            scope?: string | Array<string> | boolean;
            /** the required authenticated entity type.If set, must match the entity value of the authentication credentials.Available values:
            anythe authentication can be on behalf of a user or application.This is the default value.
            userthe authentication must be on behalf of a user.
            appthe authentication must be on behalf of an application. */
            entity?: string;
            /**
            * an object or array of objects specifying the route access rules. Each rule is evaluated against an incoming
            * request and access is granted if at least one rule matches. Each rule object must include at least one of:
            */
            access?: IRouteAdditionalConfigurationAuthAccess | IRouteAdditionalConfigurationAuthAccess[];
        };
        /** an object passed back to the provided handler (via this) when called. */
        bind?: any;
        /** if the route method is 'GET', the route can be configured to include caching directives in the response using the following options */
        cache?: {
            /**  mines the privacy flag included in clientside caching using the 'Cache-Control' header.Values are:
            fault'no privacy flag.This is the default setting.
            'public'mark the response as suitable for public caching.
            'private'mark the response as suitable only for private caching.  */
            privacy: string;
            /**  relative expiration expressed in the number of milliseconds since the item was saved in the cache.Cannot be used together with expiresAt. */
            expiresIn: number;
            /**  time of day expressed in 24h notation using the 'HH:MM' format, at which point all cache records for the route expire.Cannot be used together with expiresIn.  */
            expiresAt: string;
        };
        /** the Cross- Origin Resource Sharing protocol allows browsers to make cross- origin API calls.CORS is required by web applications running inside a browser which are loaded from a different domain than the API server.CORS headers are disabled by default. To enable, set cors to true, or to an object with the following options: */
        cors?: {
            /** a strings array of allowed origin servers ('Access-Control-Allow-Origin').The array can contain any combination of fully qualified origins along with origin strings containing a wildcard '' character, or a single `''origin string. Defaults to any origin['*']`. */
            origin?: Array<string>;
            /** if true, matches the value of the incoming 'Origin' header to the list of origin values ('*' matches anything) and if a match is found, uses that as the value of the 'Access-Control-Allow-Origin' response header.When false, the origin config is returned as- is.Defaults to true.  */
            matchOrigin?: boolean;
            /** if false, prevents the connection from returning the full list of non- wildcard origin values if the incoming origin header does not match any of the values.Has no impact if matchOrigin is set to false.Defaults to true. */
            isOriginExposed?: boolean;
            /**  number of seconds the browser should cache the CORS response ('Access-Control-Max-Age').The greater the value, the longer it will take before the browser checks for changes in policy.Defaults to 86400 (one day). */
            maxAge?: number;
            /**  a strings array of allowed headers ('Access-Control-Allow-Headers').Defaults to ['Authorization', 'Content-Type', 'If-None-Match']. */
            headers?: string[];
            /**  a strings array of additional headers to headers.Use this to keep the default headers in place. */
            additionalHeaders?: string[];
            /**  a strings array of allowed HTTP methods ('Access-Control-Allow-Methods').Defaults to ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS']. */
            methods?: string[];
            /**  a strings array of additional methods to methods.Use this to keep the default methods in place. */
            additionalMethods?: string[];
            /**  a strings array of exposed headers ('Access-Control-Expose-Headers').Defaults to ['WWW-Authenticate', 'Server-Authorization']. */
            exposedHeaders?: string[];
            /**  a strings array of additional headers to exposedHeaders.Use this to keep the default headers in place. */
            additionalExposedHeaders?: string[];
            /**  if true, allows user credentials to be sent ('Access-Control-Allow-Credentials').Defaults to false. */
            credentials?: boolean;
            /** if false, preserves existing CORS headers set manually before the response is sent.Defaults to true. */
            override?: boolean;
        };
        /**   defines the behavior for serving static resources using the built-in route handlers for files and directories: */
        files?: {/** determines the folder relative paths are resolved against when using the file and directory handlers. */
            relativeTo: string;
        };

        /**  an alternative location for the route handler option. */
        handler?: ISessionHandler | string | IRouteHandlerConfig;
        /** an optional unique identifier used to look up the route using server.lookup(). */
        id?: number;
        /** optional arguments passed to JSON.stringify() when converting an object or error response to a string payload.Supports the following: */
        json?: {
            /** the replacer function or array.Defaults to no action. */
            replacer?: Function | string[];
            /**  number of spaces to indent nested object keys.Defaults to no indentation. */
            space?: number | string;
            /** string suffix added after conversion to JSON string.Defaults to no suffix. */
            suffix?: string;
        };
        /** enables JSONP support by setting the value to the query parameter name containing the function name used to wrap the response payload.For example, if the value is 'callback', a request comes in with 'callback=me', and the JSON response is '{ "a":"b" }', the payload will be 'me({ "a":"b" });'.Does not work with stream responses. */
        jsonp?: string;
        /** determines how the request payload is processed: */
        payload?: {
            /**  the type of payload representation requested. The value must be one of:
            'data'the incoming payload is read fully into memory.If parse is true, the payload is parsed (JSON, formdecoded, multipart) based on the 'Content- Type' header.If parse is false, the raw Buffer is returned.This is the default value except when a proxy handler is used.
            'stream'the incoming payload is made available via a Stream.Readable interface.If the payload is 'multipart/form-data' and parse is true, fields values are presented as text while files are provided as streams.File streams from a 'multipart/form-data' upload will also have a property hapi containing filename and headers properties.
            'file'the incoming payload in written to temporary file in the directory specified by the server's payload.uploads settings. If the payload is 'multipart/ formdata' and parse is true, fields values are presented as text while files are saved. Note that it is the sole responsibility of the application to clean up the files generated by the framework. This can be done by keeping track of which files are used (e.g. using the request.app object), and listening to the server 'response' event to perform any needed cleaup. */
            output?: string;
            /**  can be true, false, or gunzip; determines if the incoming payload is processed or presented raw. true and gunzip includes gunzipping when the appropriate 'Content-Encoding' is specified on the received request. If parsing is enabled and the 'Content-Type' is known (for the whole payload as well as parts), the payload is converted into an object when possible. If the format is unknown, a Bad Request (400) error response is sent. Defaults to true, except when a proxy handler is used. The supported mime types are:
            'application/json'
            'application/x-www-form-urlencoded'
            'application/octet-stream'
            'text/ *'
            'multipart/form-data' */
            parse?: string | boolean;
            /** a string or an array of strings with the allowed mime types for the endpoint.Defaults to any of the supported mime types listed above.Note that allowing other mime types not listed will not enable them to be parsed, and that if parsing mode is 'parse', the request will result in an error response. */
            allow?: string | string[];
            /** a mime type string overriding the 'Content-Type' header value received.Defaults to no override. */
            override?: string;
            /**  limits the size of incoming payloads to the specified byte count.Allowing very large payloads may cause the server to run out of memory.Defaults to 1048576 (1MB).  */
            maxBytes?: number;
            /** payload reception timeout in milliseconds.Sets the maximum time allowed for the client to transmit the request payload (body) before giving up and responding with a Request Timeout (408) error response.Set to false to disable.Defaults to 10000 (10 seconds). */
            timeout?: number;
            /**  the directory used for writing file uploads.Defaults to os.tmpDir(). */
            uploads?: string;
            /**  determines how to handle payload parsing errors. Allowed values are:
            'error'return a Bad Request (400) error response. This is the default value.
            'log'report the error but continue processing the request.
            'ignore'take no action and continue processing the request. */
            failAction?: string;
        };
        /** pluginspecific configuration.plugins is an object where each key is a plugin name and the value is the plugin configuration.  */
        plugins?: IDictionary<any>;
        /** an array with [route prerequisites] methods which are executed in serial or in parallel before the handler is called.  */
        pre?: any[];
        /** validation rules for the outgoing response payload (response body).Can only validate object response: */
        response?: {
            /** the default HTTP status code when the payload is empty. Value can be 200 or 204.
            Note that a 200 status code is converted to a 204 only at the time or response transmission
            (the response status code will remain 200 throughout the request lifecycle unless manually set). Defaults to 200. */
            emptyStatusCode?: number;
            /**   the default response object validation rules (for all non-error responses) expressed as one of:
            true - any payload allowed (no validation performed). This is the default.
            false - no payload allowed.
            a Joi validation object.
            a validation function using the signature function(value, options, next) where:
            value - the object containing the response object.
            options - the server validation options.
            next(err) - the callback function called when validation is completed.  */
            schema?: boolean | any;
            /** HTTP status- codespecific validation rules.The status key is set to an object where each key is a 3 digit HTTP status code and the value has the same definition as schema.If a response status code is not present in the status object, the schema definition is used, expect for errors which are not validated by default.  */
            status?: { [statusCode: number] : boolean | any };
            /** the percent of responses validated (0100).Set to 0 to disable all validation.Defaults to 100 (all responses). */
            sample?: number;
            /**  defines what to do when a response fails validation.Options are:
            errorreturn an Internal Server Error (500) error response.This is the default value.
            loglog the error but send the response.  */
            failAction?: string;
            /** if true, applies the validation rule changes to the response.Defaults to false. */
            modify?: boolean;
            /** options to pass to Joi.Useful to set global options such as stripUnknown or abortEarly (the complete list is available here: https://github.com/hapijs/joi#validatevalue-schema-options-callback ).Defaults to no options.  */
            options?: any;
        };
        /** sets common security headers (disabled by default).To enable set security to true or to an object with the following options */
        security?: boolean | {
            /** controls the 'Strict-Transport-Security' header.If set to true the header will be set to max- age=15768000, if specified as a number the maxAge parameter will be set to that number.Defaults to true.You may also specify an object with the following fields: */
            hsts?: boolean | number | {
                /** the max- age portion of the header, as a number.Default is 15768000. */
                maxAge?: number;
                /**  a boolean specifying whether to add the includeSubdomains flag to the header. */
                includeSubdomains?: boolean;
                /** a boolean specifying whether to add the 'preload' flag (used to submit domains inclusion in Chrome's HTTP Strict Transport Security (HSTS) preload list) to the header. */
                preload?: boolean;
            };
            /** controls the 'X-Frame-Options' header.When set to true the header will be set to DENY, you may also specify a string value of 'deny' or 'sameorigin'.To use the 'allow-from' rule, you must set this to an object with the following fields: */
            xframe?: {
                /** either 'deny', 'sameorigin', or 'allow-from' */
                rule: string;
                /** when rule is 'allow-from' this is used to form the rest of the header, otherwise this field is ignored.If rule is 'allow-from' but source is unset, the rule will be automatically changed to 'sameorigin'. */
                source: string;
            };
            /** boolean that controls the 'X-XSS-PROTECTION' header for IE.Defaults to true which sets the header to equal '1; mode=block'.NOTE: This setting can create a security vulnerability in versions of IE below 8, as well as unpatched versions of IE8.See here and here for more information.If you actively support old versions of IE, it may be wise to explicitly set this flag to false. */
            xss?: boolean;
            /**  boolean controlling the 'X-Download-Options' header for IE, preventing downloads from executing in your context.Defaults to true setting the header to 'noopen'. */
            noOpen?: boolean;
            /** boolean controlling the 'X-Content-Type-Options' header.Defaults to true setting the header to its only and default option, 'nosniff'. */
            noSniff?: boolean;
        };
        /** HTTP state management (cookies) allows the server to store information on the client which is sent back to the server with every request (as defined in RFC 6265).state supports the following options: */
        state?: {
            /** determines if incoming 'Cookie' headers are parsed and stored in the request.state object.Defaults to true. */
            parse: boolean;
            /** determines how to handle cookie parsing errors.Allowed values are:
            'error'return a Bad Request (400) error response.This is the default value.
            'log'report the error but continue processing the request.
            'ignore'take no action. */
            failAction: string;
        };
        /**  request input validation rules for various request components.When using a Joi validation object, the values of the other inputs (i.e.headers, query, params, payload, and auth) are made available under the validation context (accessible in rules as Joi.ref('$query.key')).Note that validation is performed in order(i.e.headers, params, query, payload) and if type casting is used (converting a string to number), the value of inputs not yet validated will reflect the raw, unvalidated and unmodified values.The validate object supports: */
        validate?: {
            /** validation rules for incoming request headers.Values allowed:
            * trueany headers allowed (no validation performed).This is the default.
            falseno headers allowed (this will cause all valid HTTP requests to fail).
            a Joi validation object.
            a validation function using the signature function(value, options, next) where:
            valuethe object containing the request headers.
            optionsthe server validation options.
            next(err, value)the callback function called when validation is completed.
            */
            headers?: boolean | IJoi | IValidationFunction;


            /** validation rules for incoming request path parameters, after matching the path against the route and extracting any parameters then stored in request.params.Values allowed:
            trueany path parameters allowed (no validation performed).This is the default.
            falseno path variables allowed.
            a Joi validation object.
            a validation function using the signature function(value, options, next) where:
            valuethe object containing the path parameters.
            optionsthe server validation options.
            next(err, value)the callback function called when validation is completed. */
            params?: boolean | IJoi | IValidationFunction;
            /** validation rules for an incoming request URI query component (the key- value part of the URI between '?' and '#').The query is parsed into its individual key- value pairs (using the qs module) and stored in request.query prior to validation.Values allowed:
            trueany query parameters allowed (no validation performed).This is the default.
            falseno query parameters allowed.
            a Joi validation object.
            a validation function using the signature function(value, options, next) where:
            valuethe object containing the query parameters.
            optionsthe server validation options.
            next(err, value)the callback function called when validation is completed. */
            query?: boolean | IJoi | IValidationFunction;
            /**  validation rules for an incoming request payload (request body).Values allowed:
            trueany payload allowed (no validation performed).This is the default.
            falseno payload allowed.
            a Joi validation object.
            a validation function using the signature function(value, options, next) where:
            valuethe object containing the payload object.
            optionsthe server validation options.
            next(err, value)the callback function called when validation is completed.  */
            payload?: boolean | IJoi | IValidationFunction;
            /** an optional object with error fields copied into every validation error response. */
            errorFields?: any;
            /** determines how to handle invalid requests.Allowed values are:
            'error'return a Bad Request (400) error response.This is the default value.
            'log'log the error but continue processing the request.
            'ignore'take no action.
            OR a custom error handler function with the signature 'function(request, reply, source, error)` where:
            requestthe request object.
            replythe continuation reply interface.
            sourcethe source of the invalid field (e.g. 'path', 'query', 'payload').
            errorthe error object prepared for the client response (including the validation function error under error.data). */
            failAction?: string | IRouteFailFunction;
            /** options to pass to Joi.Useful to set global options such as stripUnknown or abortEarly (the complete list is available here: https://github.com/hapijs/joi#validatevalue-schema-options-callback ).Defaults to no options. */
            options?: any;
        };
        /** define timeouts for processing durations: */
        timeout?: {
            /** response timeout in milliseconds.Sets the maximum time allowed for the server to respond to an incoming client request before giving up and responding with a Service Unavailable (503) error response.Disabled by default (false). */
            server: boolean | number;
            /** by default, node sockets automatically timeout after 2 minutes.Use this option to override this behavior.Defaults to undefined which leaves the node default unchanged.Set to false to disable socket timeouts. */
            socket: boolean | number;
        };

        /**  ONLY WHEN ADDING NEW ROUTES (not when setting defaults).
        *route description used for generating documentation (string).
        */
        description?: string;
        /**  ONLY WHEN ADDING NEW ROUTES (not when setting defaults).
        *route notes used for generating documentation (string or array of strings).
        */
        notes?: string | string[];
        /**  ONLY WHEN ADDING NEW ROUTES (not when setting defaults).
        *route tags used for generating documentation (array of strings).
        */
        tags?: string[]
    }

    /**
    * specifying the route access rules. Each rule is evaluated against an incoming request and access is granted if at least one rule matches
    */
    export interface IRouteAdditionalConfigurationAuthAccess {
        /**
        * the application scope required to access the route. Value can be a scope string or an array of scope strings.
        * The authenticated credentials object scope property must contain at least one of the scopes defined to access the route.
        * If a scope string begins with a + character, that scope is required. If a scope string begins with a ! character,
        * that scope is forbidden. For example, the scope ['!a', '+b', 'c', 'd'] means the incoming request credentials'
        * scope must not include 'a', must include 'b', and must include on of 'c' or 'd'. You may also access properties
        * on the request object (query and params} to populate a dynamic scope by using {} characters around the property name,
        * such as 'user-{params.id}'. Defaults to false (no scope requirements).
        */
        scope?: string | Array<string> | boolean;
        /** the required authenticated entity type. If set, must match the entity value of the authentication credentials. Available values:
        * any - the authentication can be on behalf of a user or application. This is the default value.
        * user - the authentication must be on behalf of a user which is identified by the presence of a user attribute in the credentials object returned by the authentication strategy.
        * app - the authentication must be on behalf of an application which is identified by the lack of presence of a user attribute in the credentials object returned by the authentication strategy.
        */
        entity?: string;
    }

    /** server.realm http://hapijs.com/api#serverrealm
    The realm object contains server-wide or plugin-specific state that can be shared across various methods. For example, when calling server.bind(),
    the active realm settings.bind property is set which is then used by routes and extensions added at the same level (server root or plugin).
    Realms are a limited version of a sandbox where plugins can maintain state used by the framework when adding routes, extensions, and other properties.
    The server.realm object should be considered read-only and must not be changed directly except for the plugins property can be directly manipulated by the plugins (each setting its own under plugins[name]).
    exports.register = function (server, options, next) {
    console.log(server.realm.modifiers.route.prefix);
    return next();
    };
    */
    export interface IServerRealm {
        /** when the server object is provided as an argument to the plugin register() method, modifiers provides the registration preferences passed the server.register() method */
        modifiers: {
            /** routes preferences: */
            route: {
                /** - the route path prefix used by any calls to server.route() from the server. */
                prefix: string;
                /**  the route virtual host settings used by any calls to server.route() from the server. */
                vhost: string;
            };

        };
        /** the active plugin name (empty string if at the server root). */
        plugin: string;
        /** plugin-specific state to be shared only among activities sharing the same active state. plugins is an object where each key is a plugin name and the value is the plugin state. */
        plugins: IDictionary<any>;
        /**  settings overrides */
        settings: {
            files: {
                relativeTo: any;
            };
            bind: any;
        }
    }
    /** server.state(name, [options]) http://hapijs.com/api#serverstatename-options
    HTTP state management uses client cookies to persist a state across multiple requests. Registers a cookie definitions where:*/
    export interface IServerState {
/**  - the cookie name string. */name: string;

/** - are the optional cookie settings: */options: {
/**  - time - to - live in milliseconds.Defaults to null (session time- life - cookies are deleted when the browser is closed).*/ttl: number;
/**  - sets the 'Secure' flag.Defaults to false.*/isSecure: boolean;
/**  - sets the 'HttpOnly' flag.Defaults to false.*/isHttpOnly: boolean
/**  - the path scope.Defaults to null (no path).*/path: any;
/**  - the domain scope.Defaults to null (no domain). */domain: any;
            /**  if present and the cookie was not received from the client or explicitly set by the route handler, the cookie is automatically added to the response with the provided value. The value can be a function with signature function(request, next) where:
            request - the request object.
            next - the continuation function using the function(err, value) signature.*/
            autoValue: (request: Request, next: (err: any, value: any) => void) => void;
            /**  - encoding performs on the provided value before serialization. Options are:
            'none' - no encoding. When used, the cookie value must be a string. This is the default value.
            'base64' - string value is encoded using Base64.
            'base64json' - object value is JSON-stringified than encoded using Base64.
            'form' - object value is encoded using the x-www-form-urlencoded method.
            'iron' - Encrypts and sign the value using iron.*/
            encoding: string;
/**  - an object used to calculate an HMAC for cookie integrity validation.This does not provide privacy, only a mean to verify that the cookie value was generated by the server.Redundant when 'iron' encoding is used.Options are:*/sign: {
/** - algorithm options.Defaults to require('iron').defaults.integrity.*/integrity: any;
/** - password used for HMAC key generation.*/password: string;
            };
/**  - password used for 'iron' encoding.*/password: string;
/** - options for 'iron' encoding.Defaults to require('iron').defaults.*/iron: any;
/** - if false, errors are ignored and treated as missing cookies.*/ignoreErrors: boolean;
/**  - if true, automatically instruct the client to remove invalid cookies.Defaults to false.*/clearInvalid: boolean;
/**  - if false, allows any cookie value including values in violation of RFC 6265. Defaults to true.*/strictHeader: boolean;
/**  - overrides the default proxy localStatePassThrough setting.*/passThrough: any;
        };
    }

    export interface IFileHandlerConfig {
        /**  a path string or function as described above.*/
        path: string;
        /** an optional filename to specify if sending a 'Content-Disposition' header, defaults to the basename of path*/
        filename?: string;
        /**- specifies whether to include the 'Content-Disposition' header with the response. Available values:
        false - header is not included. This is the default value.
        'attachment'
        'inline'*/
        mode?: boolean | string;
        /** if true, looks for the same filename with the '.gz' suffix for a pre-compressed version of the file to serve if the request supports content encoding. Defaults to false.*/
        lookupCompressed: boolean;
    }

    /**http://hapijs.com/api#route-handler
    Built-in handlers

    The framework comes with a few built-in handler types available by setting the route handler config to an object containing one of these keys.*/
    export interface IRouteHandlerConfig {
        /** generates a static file endpoint for serving a single file. file can be set to:
                    a relative or absolute file path string (relative paths are resolved based on the route files configuration).
        a function with the signature function(request) which returns the relative or absolute file path.
        an object with the following options */
        file?: string | IRequestHandler<void> | IFileHandlerConfig;
        /** directory - generates a directory endpoint for serving static content from a directory. Routes using the directory handler must include a path parameter at the end of the path string (e.g. /path/to/somewhere/{param} where the parameter name does not matter). The path parameter can use any of the parameter options (e.g. {param} for one level files only, {param?} for one level files or the directory root, {param*} for any level, or {param*3} for a specific level). If additional path parameters are present, they are ignored for the purpose of selecting the file system resource. The directory handler is an object with the following options:
                    path - (required) the directory root path (relative paths are resolved based on the route files configuration). Value can be:
        a single path string used as the prefix for any resources requested by appending the request path parameter to the provided string.
        an array of path strings. Each path will be attempted in order until a match is found (by following the same process as the single path string).
        a function with the signature function(request) which returns the path string or an array of path strings. If the function returns an error, the error is passed back to the client in the response.
        index - optional boolean|string|string[], determines if an index file will be served if found in the folder when requesting a directory. The given string or strings specify the name(s) of the index file to look for. If true, looks for 'index.html'. Any falsy value disables index file lookup. Defaults to true.
        listing - optional boolean, determines if directory listing is generated when a directory is requested without an index document. Defaults to false.
        showHidden - optional boolean, determines if hidden files will be shown and served. Defaults to false.
        redirectToSlash - optional boolean, determines if requests for a directory without a trailing slash are redirected to the same path with the missing slash. Useful for ensuring relative links inside the response are resolved correctly. Disabled when the server config router.stripTrailingSlash is true.Defaults to false.
        lookupCompressed - optional boolean, instructs the file processor to look for the same filename with the '.gz' suffix for a pre-compressed version of the file to serve if the request supports content encoding. Defaults to false.
        defaultExtension - optional string, appended to file requests if the requested file is not found. Defaults to no extension.*/
        directory?: {
            path: string | Array<string> | IRequestHandler<string> | IRequestHandler<Array<string>>;
            index?: boolean | string | string[];
            listing?: boolean;
            showHidden?: boolean;
            redirectToSlash?: boolean;
            lookupCompressed?: boolean;
            defaultExtension?: string;
        };
        proxy?: IProxyHandlerConfig;
        view?: string | {
            template: string;
            context: {
                payload: any;
                params: any;
                query: any;
                pre: any;
            }
        };
        config?: {
            handler: any;
            bind: any;
            app: any;
            plugins: {
                [name: string]: any;
            };
            pre: Array<() => void>;
            validate: {
                headers: any;
                params: any;
                query: any;
                payload: any;
                errorFields?: any;
                failAction?: string | IFailAction;
            };
            payload: {
                output: {
                    data: any;
                    stream: any;
                    file: any;
                };
                parse?: any;
                allow?: string | Array<string>;
                override?: string;
                maxBytes?: number;
                uploads?: number;
                failAction?: string;
            };
            response: {
                schema: any;
                sample: number;
                failAction: string;
            };
            cache: {
                privacy: string;
                expiresIn: number;
                expiresAt: number;
            };
            auth: string | boolean | {
                mode: string;
                strategies: Array<string>;
                payload?: boolean | string;
                tos?: boolean | string;
                scope?: string | Array<string>;
                entity: string;
            };
            cors?: boolean;
            jsonp?: string;
            description?: string;
            notes?: string | Array<string>;
            tags?: Array<string>;
        };
    }
    /** Route configuration
    The route configuration object*/
    export interface IRouteConfiguration {
        /**  - (required) the absolute path used to match incoming requests (must begin with '/'). Incoming requests are compared to the configured paths based on the connection router configuration option.The path can include named parameters enclosed in {} which will be matched against literal values in the request as described in Path parameters.*/
        path: string;
        /** - (required) the HTTP method.Typically one of 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', or 'OPTIONS'.Any HTTP method is allowed, except for 'HEAD'.Use '*' to match against any HTTP method (only when an exact match was not found, and any match with a specific method will be given a higher priority over a wildcard match).
        * Can be assigned an array of methods which has the same result as adding the same route with different methods manually.*/
        method: string | string[];
        /**  - an optional domain string or an array of domain strings for limiting the route to only requests with a matching host header field.Matching is done against the hostname part of the header only (excluding the port).Defaults to all hosts.*/
        vhost?: string;
        /**  - (required) the function called to generate the response after successful authentication and validation.The handler function is described in Route handler.If set to a string, the value is parsed the same way a prerequisite server method string shortcut is processed.Alternatively, handler can be assigned an object with a single key using the name of a registered handler type and value with the options passed to the registered handler.*/
        handler: ISessionHandler | string | IRouteHandlerConfig;
        /** - additional route options.*/
        config?: IRouteAdditionalConfigurationOptions;
    }
    /** Route public interface When route information is returned or made available as a property.  http://hapijs.com/api#route-public-interface */
    export interface IRoute {


        /** the route HTTP method. */
        method: string;
        /** the route path. */
        path: string;
        /** the route vhost option if configured. */
        vhost?: string | Array<string>;
        /** the [active realm] associated with the route.*/
        realm: IServerRealm;
        /** the [route options]  object with all defaults applied. */
        settings: IRouteAdditionalConfigurationOptions;
    }

    export interface IServerAuthScheme {
        /** authenticate(request, reply) - required function called on each incoming request configured with the authentication scheme where:
        request - the request object.
        reply - the reply interface the authentication method must call when done authenticating the request where:
        reply(err, response, result) - is called if authentication failed where:
        err - any authentication error.
        response - any authentication response action such as redirection. Ignored if err is present, otherwise required.
        result - an object containing:
        credentials - the authenticated credentials.
        artifacts - optional authentication artifacts.
        reply.continue(result) - is called if authentication succeeded where:
        result - same object as result above.
        When the scheme authenticate() method implementation calls reply() with an error condition, the specifics of the error affect whether additional authentication strategies will be attempted if configured for the route.
        .If the err returned by the reply() method includes a message, no additional strategies will be attempted.
        If the err does not include a message but does include a scheme name (e.g. Boom.unauthorized(null, 'Custom')), additional strategies will be attempted in order of preference.
        var server = new Hapi.Server();
        server.connection({ port: 80 });
        var scheme = function (server, options) {
        return {
        authenticate: function (request, reply) {
        var req = request.raw.req;
        var authorization = req.headers.authorization;
        if (!authorization) {
        return reply(Boom.unauthorized(null, 'Custom'));
        }
        return reply(null, { credentials: { user: 'john' } });
        }
        };
        };
        server.auth.scheme('custom', scheme);*/
        authenticate(request: Request, reply: IReply): void;
        /** payload(request, reply) - optional function called to authenticate the request payload where:
        request - the request object.
        reply(err, response) - is called if authentication failed where:
        err - any authentication error.
        response - any authentication response action such as redirection. Ignored if err is present, otherwise required.
        reply.continue() - is called if payload authentication succeeded.
        When the scheme payload() method returns an error with a message, it means payload validation failed due to bad payload. If the error has no message but includes a scheme name (e.g. Boom.unauthorized(null, 'Custom')), authentication may still be successful if the route auth.payload configuration is set to 'optional'.*/
        payload?(request: Request, reply: IReply): void;
        /** response(request, reply) - optional function called to decorate the response with authentication headers before the response headers or payload is written where:
        request - the request object.
        reply(err, response) - is called if an error occurred where:
        err - any authentication error.
        response - any authentication response to send instead of the current response. Ignored if err is present, otherwise required.
        reply.continue() - is called if the operation succeeded.*/
        response?(request: Request, reply: IReply): void;
        /** an optional object  */
        options?: {
            /**  if true, requires payload validation as part of the scheme and forbids routes from disabling payload auth validation. Defaults to false.*/
            payload: boolean;
        }
    }



    export interface IServerInject {
        (options: string | {
            /**  the request HTTP method (e.g. 'POST'). Defaults to 'GET'.*/
            method: string;
            /** the request URL. If the URI includes an authority (e.g. 'example.com:8080'), it is used to automatically set an HTTP 'Host' header, unless one was specified in headers.*/
            url: string;
            /** an object with optional request headers where each key is the header name and the value is the header content. Defaults to no additions to the default Shot headers.*/
            headers?: IDictionary<string>;
            /** n optional string, buffer or object containing the request payload. In case of an object it will be converted to a string for you. Defaults to no payload. Note that payload processing defaults to 'application/json' if no 'Content-Type' header provided.*/
            payload?: string | {} | Buffer;
            /** an optional credentials object containing authentication information. The credentials are used to bypass the default authentication strategies, and are validated directly as if they were received via an authentication scheme. Defaults to no credentials.*/
            credentials?: any;
            /** an optional artifacts object containing authentication artifact information. The artifacts are used to bypass the default authentication strategies, and are validated directly as if they were received via an authentication scheme. Ignored if set without credentials. Defaults to no artifacts.*/
            artifacts?: any;
            /** sets the initial value of request.app*/
            app?: any;
            /** sets the initial value of request.plugins*/
            plugins?: any;
            /** allows access to routes with config.isInternal set to true. Defaults to false.*/
            allowInternals?: boolean;
            /** sets the remote address for the incoming connection.*/
            remoteAddress?: boolean;
            /**object with options used to simulate client request stream conditions for testing:
            error - if true, emits an 'error' event after payload transmission (if any). Defaults to false.
            close - if true, emits a 'close' event after payload transmission (if any). Defaults to false.
            end - if false, does not end the stream. Defaults to true.*/
            simulate?: {
                error: boolean;
                close: boolean;
                end: boolean;
            };
        },
            callback: (
                /**the response object where:
                statusCode - the HTTP status code.
                headers - an object containing the headers set.
                payload - the response payload string.
                rawPayload - the raw response payload buffer.
                raw - an object with the injection request and response objects:
                req - the simulated node request object.
                res - the simulated node response object.
                result - the raw handler response (e.g. when not a stream or a view) before it is serialized for transmission. If not available, the value is set to payload. Useful for inspection and reuse of the internal objects returned (instead of parsing the response string).
                request - the request object.*/
                res: { statusCode: number; headers: IDictionary<string>; payload: string; rawPayload: Buffer; raw: { req: http.ClientRequest; res: http.ServerResponse }; result: string; request: Request }) => void
        ): void;

    }


    /** host - optional host to filter routes matching a specific virtual host. Defaults to all virtual hosts.
    The return value is an array where each item is an object containing:
    info - the connection.info the connection the table was generated for.
    labels - the connection labels.
    table - an array of routes where each route contains:
    settings - the route config with defaults applied.
    method - the HTTP method in lower case.
    path - the route path.*/
    export interface IConnectionTable {
        info: any;
        labels: any;
        table: IRoute[];
    }

    export interface ICookieSettings {
        /** - time - to - live in milliseconds.Defaults to null (session time- life - cookies are deleted when the browser is closed).*/
        ttl?: number;
        /** - sets the 'Secure' flag.Defaults to false.*/
        isSecure?: boolean;
        /** - sets the 'HttpOnly' flag.Defaults to false.*/
        isHttpOnly?: boolean;
        /** - the path scope.Defaults to null (no path).*/
        path?: string;
        /** - the domain scope.Defaults to null (no domain).*/
        domain?: any;
        /** - if present and the cookie was not received from the client or explicitly set by the route handler, the cookie is automatically added to the response with the provided value.The value can be a function with signature function(request, next) where:
        request - the request object.
        next - the continuation function using the function(err, value) signature.*/
        autoValue?: (request: Request, next: (err: any, value: any) => void) => void;
        /** - encoding performs on the provided value before serialization.Options are:
        'none' - no encoding.When used, the cookie value must be a string.This is the default value.
        'base64' - string value is encoded using Base64.
        'base64json' - object value is JSON- stringified than encoded using Base64.
        'form' - object value is encoded using the x- www - form - urlencoded method. */
        encoding?: string;
        /**  - an object used to calculate an HMAC for cookie integrity validation.This does not provide privacy, only a mean to verify that the cookie value was generated by the server.Redundant when 'iron' encoding is used.Options are:
        integrity - algorithm options.Defaults to require('iron').defaults.integrity.
        password - password used for HMAC key generation. */
        sign?: { integrity: any; password: string; }
        password?: string;
        iron?: any;
        ignoreErrors?: boolean;
        clearInvalid?: boolean;
        strictHeader?: boolean;
        passThrough?: any;
    }

    /** method - the method function with the signature is one of:
    function(arg1, arg2, ..., argn, next) where:
    arg1, arg2, etc. - the method function arguments.
    next - the function called when the method is done with the signature function(err, result, ttl) where:
    err - error response if the method failed.
    result - the return value.
    ttl - 0 if result is valid but cannot be cached. Defaults to cache policy.
    function(arg1, arg2, ..., argn) where:
    arg1, arg2, etc. - the method function arguments.
    the callback option is set to false.
    the method must returns a value (result, Error, or a promise) or throw an Error.*/
    export interface IServerMethod {
        //(): void;
        //(next: (err: any, result: any, ttl: number) => void): void;
        //(arg1: any): void;
        //(arg1: any, arg2: any, next: (err: any, result: any, ttl: number) => void): void;
        //(arg1: any, arg2: any): void;
        (...args: any[]): void;

    }
    /** options - optional configuration:
    bind - a context object passed back to the method function (via this) when called. Defaults to active context (set via server.bind() when the method is registered.
    cache - the same cache configuration used in server.cache().
    callback - if false, expects the method to be a synchronous function. Note that using a synchronous function with caching will convert the method interface to require a callback as an additional argument with the signature function(err, result, cached, report) since the cache interface cannot return values synchronously. Defaults to true.
    generateKey - a function used to generate a unique key (for caching) from the arguments passed to the method function (the callback argument is not passed as input). The server will automatically generate a unique key if the function's arguments are all of types 'string', 'number', or 'boolean'. However if the method uses other types of arguments, a key generation function must be provided which takes the same arguments as the function and returns a unique string (or null if no key can be generated).*/
    export interface IServerMethodOptions {
        bind?: any;
        cache?: ICatBoxCacheOptions;
        callback?: boolean;
        generateKey?(args: any[]): string;
    }
    /** Request object

    The request object is created internally for each incoming request. It is different from the node.js request object received from the HTTP server callback (which is available in request.raw.req). The request object methods and properties change throughout the request lifecycle.
    Request events

    The request object supports the following events:

    'peek' - emitted for each chunk of payload data read from the client connection. The event method signature is function(chunk, encoding).
    'finish' - emitted when the request payload finished reading. The event method signature is function ().
    'disconnect' - emitted when a request errors or aborts unexpectedly.
    var Crypto = require('crypto');
    var Hapi = require('hapi');
    var server = new Hapi.Server();
    server.connection({ port: 80 });

    server.ext('onRequest', function (request, reply) {

    var hash = Crypto.createHash('sha1');
    request.on('peek', function (chunk) {

    hash.update(chunk);
    });

    request.once('finish', function () {

    console.log(hash.digest('hex'));
    });

    request.once('disconnect', function () {

    console.error('request aborted');
    });

    return reply.continue();
    });*/
    export class Request extends Events.EventEmitter {
        /** application-specific state. Provides a safe place to store application data without potential conflicts with the framework. Should not be used by plugins which should use plugins[name].*/
        app: any;
        /**  authentication information*/
        auth: {
            /** true is the request has been successfully authenticated, otherwise false.*/
            isAuthenticated: boolean;
            /**  the credential object received during the authentication process. The presence of an object does not mean successful authentication.  can be set in the validate function's callback.*/
            credentials: any;
            /**  an artifact object received from the authentication strategy and used in authentication-related actions.*/
            artifacts: any;
            /**  the route authentication mode.*/
            mode: any;
            /** the authentication error is failed and mode set to 'try'.*/
            error: any;
            /** an object used by the ['cookie' authentication scheme]  https://github.com/hapijs/hapi-auth-cookie */
            session: any
        };
        /** the connection used by this request*/
        connection: ServerConnection;
        /**  the node domain object used to protect against exceptions thrown in extensions, handlers and route prerequisites. Can be used to manually bind callback functions otherwise bound to other domains.*/
        domain: any;
        /** the raw request headers (references request.raw.headers).*/
        headers: IDictionary<string>;
        /** a unique request identifier (using the format '{now}:{connection.info.id}:{5 digits counter}').*/
        id: number;
        /**  request information */
        info: {
            /**  request reception timestamp. */
            received: number;
            /**  request response timestamp (0 is not responded yet). */
            responded: number;
            /** remote client IP address. */

            remoteAddress: string;
            /**  remote client port. */
            remotePort: number;
            /**  content of the HTTP 'Referrer' (or 'Referer') header. */
            referrer: string;
            /**  content of the HTTP 'Host' header (e.g. 'example.com:8080'). */
            host: string;
            /**  the hostname part of the 'Host' header (e.g. 'example.com').*/
            hostname: string;
        };
        /**  the request method in lower case (e.g. 'get', 'post'). */
        method: string;
        /**  the parsed content-type header. Only available when payload parsing enabled and no payload error occurred. */
        mime: string;
        /**  an object containing the values of params, query, and payload before any validation modifications made. Only set when input validation is performed.*/
        orig: {
            params: any;
            query: any;
            payload: any;
        };
        /**  an object where each key is a path parameter name with matching value as described in Path parameters.*/
        params: IDictionary<string>;
        /** an array containing all the path params values in the order they appeared in the path.*/
        paramsArray: string[];
        /**  the request URI's path component. */
        path: string;
        /** the request payload based on the route payload.output and payload.parse settings.*/
        payload: stream.Readable | Buffer | any;
        /**  plugin-specific state. Provides a place to store and pass request-level plugin data. The plugins is an object where each key is a plugin name and the value is the state.*/
        plugins: any;
        /** an object where each key is the name assigned by a route prerequisites function. The values are the raw values provided to the continuation function as argument. For the wrapped response object, use responses.*/
        pre: IDictionary<any>;
        /** the response object when set. The object can be modified but must not be assigned another object. To replace the response with another from within an extension point, use reply(response) to override with a different response. Contains null when no response has been set (e.g. when a request terminates prematurely when the client disconnects).*/
        response: Response;
        /**preResponses - same as pre but represented as the response object created by the pre method.*/
        preResponses: any;
        /**an object containing the query parameters.*/
        query: any;
        /**  an object containing the Node HTTP server objects. Direct interaction with these raw objects is not recommended.*/
        raw: {
            req: http.ClientRequest;
            res: http.ServerResponse;
        };
        /** the route public interface.*/
        route: IRoute;
        /** the server object. */
        server: Server;
        /** Special key reserved for plugins implementing session support. Plugins utilizing this key must check for null value to ensure there is no conflict with another similar server. */
        session: any;
        /** an object containing parsed HTTP state information (cookies) where each key is the cookie name and value is the matching cookie content after processing using any registered cookie definition. */
        state: any;
        /** complex object contining details on the url */
        url: {
            /** null when i tested */
            auth: any;
            /** null when i tested */
            hash: any;
            /** null when i tested */
            host: any;
            /** null when i tested */
            hostname: any;
            href: string;
            path: string;
            /** path without search*/
            pathname: string;
            /** null when i tested */
            port: any;
            /** null when i tested */
            protocol: any;
            /** querystring parameters*/
            query: IDictionary<string>;
            /** querystring parameters as a string*/
            search: string;
            /** null when i tested */
            slashes: any;
        };
        /** request.setUrl(url)

        Available only in 'onRequest' extension methods.

        Changes the request URI before the router begins processing the request where:

        url - the new request path value.
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80 });

        server.ext('onRequest', function (request, reply) {

        // Change all requests to '/test'
        request.setUrl('/test');
        return reply.continue();
        });*/
        setUrl(url: string): void;
        /** request.setMethod(method)

        Available only in 'onRequest' extension methods.

        Changes the request method before the router begins processing the request where:

        method - is the request HTTP method (e.g. 'GET').
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80 });

        server.ext('onRequest', function (request, reply) {

        // Change all requests to 'GET'
        request.setMethod('GET');
        return reply.continue();
        });*/
        setMethod(method: string): void;
        /** request.log(tags, [data, [timestamp]])

        Always available.

        Logs request-specific events. When called, the server emits a 'request' event which can be used by other listeners or plugins. The arguments are:

        data - an optional message string or object with the application data being logged.
        timestamp - an optional timestamp expressed in milliseconds. Defaults to Date.now() (now).
        Any logs generated by the server internally will be emitted only on the 'request-internal' channel and will include the event.internal flag set to true.

        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80 });

        server.on('request', function (request, event, tags) {

        if (tags.error) {
        console.log(event);
        }
        });

        var handler = function (request, reply) {

        request.log(['test', 'error'], 'Test event');
        return reply();
        };
        */
        log(
            /** a string or an array of strings (e.g. ['error', 'database', 'read']) used to identify the event. Tags are used instead of log levels and provide a much more expressive mechanism for describing and filtering events.*/
            tags: string | string[],
            /** an optional message string or object with the application data being logged.*/
            data?: string,
            /**  an optional timestamp expressed in milliseconds. Defaults to Date.now() (now).*/
            timestamp?: number): void;
        /** request.getLog([tags], [internal])

        Always available.

        Returns an array containing the events matching any of the tags specified (logical OR)
        request.getLog();
        request.getLog('error');
        request.getLog(['error', 'auth']);
        request.getLog(['error'], true);
        request.getLog(false);*/

        getLog(
            /** is a single tag string or array of tag strings. If no tags specified, returns all events.*/
            tags?: string,
            /**  filters the events to only those with a matching event.internal value. If true, only internal logs are included. If false, only user event are included. Defaults to all events (undefined).*/
            internal?: boolean): string[];

        /** request.tail([name])

        Available until immediately after the 'response' event is emitted.

        Adds a request tail which has to complete before the request lifecycle is complete where:

        name - an optional tail name used for logging purposes.
        Returns a tail function which must be called when the tail activity is completed.

        Tails are actions performed throughout the request lifecycle, but which may end after a response is sent back to the client. For example, a request may trigger a database update which should not delay sending back a response. However, it is still desirable to associate the activity with the request when logging it (or an error associated with it).

        When all tails completed, the server emits a 'tail' event.

        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80 });

        var get = function (request, reply) {

        var dbTail = request.tail('write to database');

        db.save('key', 'value', function () {

        dbTail();
        });

        return reply('Success!');
        };

        server.route({ method: 'GET', path: '/', handler: get });

        server.on('tail', function (request) {

        console.log('Request completed including db activity');
        });*/
        tail(
            /** an optional tail name used for logging purposes.*/
            name?: string): Function;
    }
    /** Response events

    The response object supports the following events:

    'peek' - emitted for each chunk of data written back to the client connection. The event method signature is function(chunk, encoding).
    'finish' - emitted when the response finished writing but before the client response connection is ended. The event method signature is function ().
    var Crypto = require('crypto');
    var Hapi = require('hapi');
    var server = new Hapi.Server();
    server.connection({ port: 80 });

    server.ext('onPreResponse', function (request, reply) {

    var response = request.response;
    if (response.isBoom) {
    return reply();
    }

    var hash = Crypto.createHash('sha1');
    response.on('peek', function (chunk) {

    hash.update(chunk);
    });

    response.once('finish', function () {

    console.log(hash.digest('hex'));
    });

    return reply.continue();
    });*/
    export class Response extends Events.EventEmitter {
        isBoom: boolean;
        /**  the HTTP response status code. Defaults to 200 (except for errors).*/
        statusCode: number;
        /** an object containing the response headers where each key is a header field name. Note that this is an incomplete list of headers to be included with the response. Additional headers will be added once the response is prepare for transmission.*/
        headers: IDictionary<string>;
        /** the value provided using the reply interface.*/
        source: any;
        /** a string indicating the type of source with available values:
        'plain' - a plain response such as string, number, null, or simple object (e.g. not a Stream, Buffer, or view).
        'buffer' - a Buffer.
        'view' - a view generated with reply.view().
        'file' - a file generated with reply.file() of via the directory handler.
        'stream' - a Stream.
        'promise' - a Promise object. */
        variety: string;
        /** application-specific state. Provides a safe place to store application data without potential conflicts with the framework. Should not be used by plugins which should use plugins[name].*/
        app: any;
        /** plugin-specific state. Provides a place to store and pass request-level plugin data. The plugins is an object where each key is a plugin name and the value is the state. */
        plugins: any;
        /** settings - response handling flags:
        charset - the 'Content-Type' HTTP header 'charset' property. Defaults to 'utf-8'.
        encoding - the string encoding scheme used to serial data into the HTTP payload when source is a string or marshals into a string. Defaults to 'utf8'.
        passThrough - if true and source is a Stream, copies the statusCode and headers of the stream to the outbound response. Defaults to true.
        stringify - options used for source value requiring stringification. Defaults to no replacer and no space padding.
        ttl - if set, overrides the route cache expiration milliseconds value set in the route config. Defaults to no override.
        varyEtag - if true, a suffix will be automatically added to the 'ETag' header at transmission time (separated by a '-' character) when the HTTP 'Vary' header is present.*/
        settings: {
            charset: string;
            encoding: string;
            passThrough: boolean;
            stringify: any;
            ttl: number;
            varyEtag: boolean;
        }

        /**  sets the HTTP 'Content-Length' header (to avoid chunked transfer encoding) where:
        length - the header value. Must match the actual payload size.*/
        bytes(length: number): Response;
        /**  sets the 'Content-Type' HTTP header 'charset' property where: charset - the charset property value.*/
        charset(charset: string): Response;

        /**  sets the HTTP status code where:
        statusCode - the HTTP status code.*/
        code(statusCode: number): Response;
        /** sets the HTTP status code to Created (201) and the HTTP 'Location' header where: uri - an absolute or relative URI used as the 'Location' header value.*/
        created(uri: string): Response;


        /** encoding(encoding) - sets the string encoding scheme used to serial data into the HTTP payload where: encoding - the encoding property value (see node Buffer encoding).*/
        encoding(encoding: string): Response;

        /** etag(tag, options) - sets the representation entity tag where:
        tag - the entity tag string without the double-quote.
        options - optional settings where:
        weak - if true, the tag will be prefixed with the 'W/' weak signifier. Weak tags will fail to match identical tags for the purpose of determining 304 response status. Defaults to false.
        vary - if true and content encoding is set or applied to the response (e.g 'gzip' or 'deflate'), the encoding name will be automatically added to the tag at transmission time (separated by a '-' character). Ignored when weak is true. Defaults to true.*/
        etag(tag: string, options: {
            weak: boolean; vary: boolean;
        }): Response;

        /**header(name, value, options) - sets an HTTP header where:
        name - the header name.
        value - the header value.
        options - optional settings where:
        append - if true, the value is appended to any existing header value using separator. Defaults to false.
        separator - string used as separator when appending to an exiting value. Defaults to ','.
        override - if false, the header value is not set if an existing value present. Defaults to true.*/
        header(name: string, value: string, options?: {
            append: boolean;
            separator: string;
            override: boolean;
        }): Response;

        /** location(uri) - sets the HTTP 'Location' header where:
        uri - an absolute or relative URI used as the 'Location' header value.*/
        location(uri: string): Response;

        /** redirect(uri) - sets an HTTP redirection response (302) and decorates the response with additional methods listed below, where:
        uri - an absolute or relative URI used to redirect the client to another resource. */
        redirect(uri: string): Response;

        /** replacer(method) - sets the JSON.stringify() replacer argument where:
        method - the replacer function or array. Defaults to none.*/
        replacer(method: Function | Array<Function>): Response;

        /** spaces(count) - sets the JSON.stringify() space argument where:
        count - the number of spaces to indent nested object keys. Defaults to no indentation. */
        spaces(count: number): Response;
        /**state(name, value, [options]) - sets an HTTP cookie where:
        name - the cookie name.
        value - the cookie value. If no encoding is defined, must be a string.
        options - optional configuration. If the state was previously registered with the server using server.state(), the specified keys in options override those same keys in the server definition (but not others).*/
        state(name: string, value: string, options?: any): Response;

        /** sets a string suffix when the response is process via JSON.stringify().*/
        suffix(suffix: string): void;
        /** overrides the default route cache expiration rule for this response instance where:
msec - the time-to-live value in milliseconds.*/
        ttl(msec: number): void;
        /** type(mimeType) - sets the HTTP 'Content-Type' header where:
        mimeType - is the mime type. Should only be used to override the built-in default for each response type. */
        type(mimeType: string): Response;
        /** clears the HTTP cookie by setting an expired value where:
name - the cookie name.
options - optional configuration for expiring cookie. If the state was previously registered with the server using server.state(), the specified keys in options override those same keys in the server definition (but not others).*/
        unstate(name: string, options?: { [key: string]: string }): void;
        /** adds the provided header to the list of inputs affected the response generation via the HTTP 'Vary' header where:
header - the HTTP request header name.*/
        vary(header: string): void;
    }
    /** When using the redirect() method, the response object provides these additional methods */
    export class ResponseRedirect extends Response {
        /** sets the status code to 302 or 307 (based on the rewritable() setting) where:
isTemporary - if false, sets status to permanent. Defaults to true.*/
        temporary(isTemporary: boolean): void;
        /** sets the status code to 301 or 308 (based on the rewritable() setting) where:
isPermanent - if true, sets status to temporary. Defaults to false. */
        permanent(isPermanent: boolean): void;
        /** sets the status code to 301/302 for rewritable (allows changing the request method from 'POST' to 'GET') or 307/308 for non-rewritable (does not allow changing the request method from 'POST' to 'GET'). Exact code based on the temporary() or permanent() setting. Arguments:
isRewritable - if false, sets to non-rewritable. Defaults to true.
Permanent    Temporary
Rewritable    301    302(1)
Non-rewritable    308(2)    307
Notes: 1. Default value. 2. Proposed code, not supported by all clients. */
        rewritable(isRewritable: boolean): void;
    }
    /** info about a server connection */
    export interface IServerConnectionInfo {
        /**  - a unique connection identifier (using the format '{hostname}:{pid}:{now base36}').*/
        id: string;
        /**  - the connection creation timestamp.*/
        created: number;
        /**  - the connection start timestamp (0 when stopped).*/
        started: number;
        /**  the connection port based on the following rules:
        the configured port value before the server has been started.
        the actual port assigned when no port is configured or set to 0 after the server has been started.*/
        port: number;

        /** - the host name the connection was configured to. Defaults to the operating system hostname when available, otherwise 'localhost'.*/
        host: string;
        /** - the active IP address the connection was bound to after starting.Set to undefined until the server has been started or when using a non TCP port (e.g. UNIX domain socket).*/
        address: string;
        /**  - the protocol used:
        'http' - HTTP.
        'https' - HTTPS.
        'socket' - UNIX domain socket or Windows named pipe.*/
        protocol: string;
        /** a string representing the connection (e.g. 'http://example.com:8080' or 'socket:/unix/domain/socket/path'). Contains the uri setting if provided, otherwise constructed from the available settings. If no port is available or set to 0, the uri will not include a port component.*/
        uri: string;
    }
    /**
     *  undocumented.   The connection object constructed after calling server.connection();
     * can be accessed via server.connections; or request.connection;
     */
    export class ServerConnection extends Events.EventEmitter {
        domain: any;
        _events: { route: Function, domain: Function, _events: Function, _eventsCount: Function, _maxListeners: Function };
        _eventsCount: number;
        settings: IServerConnectionOptions;
        server: Server;
        /** ex: "tcp" */
        type: string;
        _started: boolean;
        /** dictionary of sockets */
        _connections: { [ip_port: string]: any };
        _onConnection: Function;
        registrations: any;
        _extensions: any;
        _requestCounter: { value: number; min: number; max: number };
        _load: any;
        states: {
            settings: any; cookies: any; names: any[]
        };
        auth: { connection: ServerConnection; _schemes: any; _strategies: any; settings: any; };
        _router: any;
        MSPluginsCollection: any;
        applicationCache: any;
        addEventListener: any;
        info: IServerConnectionInfo;
    }

    /** Server http://hapijs.com/api#server
    rver object is the main application container. The server manages all incoming connections along with all the facilities provided by the framework. A server can contain more than one connection (e.g. listen to port 80 and 8080).
    Server events
    The server object inherits from Events.EventEmitter and emits the following events:
    'log' - events logged with server.log() and server events generated internally by the framework.
    'start' - emitted when the server is started using server.start().
    'stop' - emitted when the server is stopped using server.stop().
    'request' - events generated by request.log(). Does not include any internally generated events.
    'request-internal' - request events generated internally by the framework (multiple events per request).
    'request-error' - emitted whenever an Internal Server Error (500) error response is sent. Single event per request.
    'response' - emitted after the response is sent back to the client (or when the client connection closed and no response sent, in which case request.response is null). Single event per request.
    'tail' - emitted when a request finished processing, including any registered tails. Single event per request.
    Note that the server object should not be used to emit application events as its internal implementation is designed to fan events out to the various plugin selections and not for application events.
    MORE EVENTS HERE: http://hapijs.com/api#server-events*/
    export class Server extends Events.EventEmitter {

        constructor(options?: IServerOptions);
        /** Provides a safe place to store server-specific run-time application data without potential conflicts with the framework internals. The data can be accessed whenever the server is accessible. Initialized with an empty object.
        var Hapi = require('hapi');
        server = new Hapi.Server();
        server.app.key = 'value';
        var handler = function (request, reply) {
        return reply(request.server.app.key);
        }; */
        app: any;
        /** An array containing the server's connections. When the server object is returned from server.select(), the connections array only includes the connections matching the selection criteria.
        var server = new Hapi.Server();
        server.connection({ port: 80, labels: 'a' });
        server.connection({ port: 8080, labels: 'b' });
        // server.connections.length === 2
        var a = server.select('a');
        // a.connections.length === 1*/
        connections: Array<ServerConnection>;
        /** When the server contains exactly one connection, info is an object containing information about the sole connection.
        * When the server contains more than one connection, each server.connections array member provides its own connection.info.
        var server = new Hapi.Server();
        server.connection({ port: 80 });
        // server.info.port === 80
        server.connection({ port: 8080 });
        // server.info === null
        // server.connections[1].info.port === 8080
        */
        info: IServerConnectionInfo;
        /** An object containing the process load metrics (when load.sampleInterval is enabled):
        rss - RSS memory usage.
        var Hapi = require('hapi');
        var server = new Hapi.Server({ load: { sampleInterval: 1000 } });
        console.log(server.load.rss);*/
        load: {
            /** - event loop delay milliseconds.*/
            eventLoopDelay: number;
            /**  - V8 heap usage.*/
            heapUsed: number;
        };
        /** When the server contains exactly one connection, listener is the node HTTP server object of the sole connection.
        When the server contains more than one connection, each server.connections array member provides its own connection.listener.
        var Hapi = require('hapi');
        var SocketIO = require('socket.io');
        var server = new Hapi.Server();
        server.connection({ port: 80 });
        var io = SocketIO.listen(server.listener);
        io.sockets.on('connection', function(socket) {
        socket.emit({ msg: 'welcome' });
        });*/
        listener: http.Server;

        /** server.methods
        An object providing access to the server methods where each server method name is an object property.
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.method('add', function (a, b, next) {
        return next(null, a + b);
        });
        server.methods.add(1, 2, function (err, result) {
        // result === 3
        });*/
        methods: IDictionary<Function>;

        /** server.mime
        Provides access to the server MIME database used for setting content-type information. The object must not be modified directly but only through the mime server setting.
        var Hapi = require('hapi');
        var options = {
        mime: {
        override: {
        'node/module': {
        source: 'steve',
        compressible: false,
        extensions: ['node', 'module', 'npm'],
        type: 'node/module'
        }
        }
        }
        };
        var server = new Hapi.Server(options);
        // server.mime.path('code.js').type === 'application/javascript'
        // server.mime.path('file.npm').type === 'node/module'*/
        mime: any;
        /**server.plugins
        An object containing the values exposed by each plugin registered where each key is a plugin name and the values are the exposed properties by each plugin using server.expose(). Plugins may set the value of the server.plugins[name] object directly or via the server.expose() method.
        exports.register = function (server, options, next) {
        server.expose('key', 'value');
        // server.plugins.example.key === 'value'
        return next();
        };
        exports.register.attributes = {
        name: 'example'
        };*/
        plugins: IDictionary<any>;
        /** server.realm
        The realm object contains server-wide or plugin-specific state that can be shared across various methods. For example, when calling server.bind(), the active realm settings.bind property is set which is then used by routes and extensions added at the same level (server root or plugin). Realms are a limited version of a sandbox where plugins can maintain state used by the framework when adding routes, extensions, and other properties.
        modifiers - when the server object is provided as an argument to the plugin register() method, modifiers provides the registration preferences passed the server.register() method and includes:
        route - routes preferences:
        prefix - the route path prefix used by any calls to server.route() from the server.
        vhost - the route virtual host settings used by any calls to server.route() from the server.
        plugin - the active plugin name (empty string if at the server root).
        plugins - plugin-specific state to be shared only among activities sharing the same active state. plugins is an object where each key is a plugin name and the value is the plugin state.
        settings - settings overrides:
        files.relativeTo
        bind
        The server.realm object should be considered read-only and must not be changed directly except for the plugins property can be directly manipulated by the plugins (each setting its own under plugins[name]).
        exports.register = function (server, options, next) {
        console.log(server.realm.modifiers.route.prefix);
        return next();
        };*/
        realm: IServerRealm;

        /** server.root
        The root server object containing all the connections and the root server methods (e.g. start(), stop(), connection()).*/
        root: Server;
        /** server.settings
        The server configuration object after defaults applied.
        var Hapi = require('hapi');
        var server = new Hapi.Server({
        app: {
        key: 'value'
        }
        });
        // server.settings.app === { key: 'value' }*/
        settings: IServerOptions;

        /** server.version
        The hapi module version number.
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        // server.version === '8.0.0'*/
        version: string;

        /** server.after(method, [dependencies])
        Adds a method to be called after all the plugin dependencies have been registered and before the server starts (only called if the server is started) where:
        after - the method with signature function(plugin, next) where:
        server - server object the after() method was called on.
        next - the callback function the method must call to return control over to the application and complete the registration process. The function signature is function(err) where:
        err - internal error which is returned back via the server.start() callback.
        dependencies - a string or array of string with the plugin names to call this method after their after() methods. There is no requirement for the other plugins to be registered. Setting dependencies only arranges the after methods in the specified order.
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80 });
        server.after(function () {
        // Perform some pre-start logic
        });
        server.start(function (err) {
        // After method already executed
        });
        server.auth.default(options)*/
        after(method: (plugin: any, next: (err: any) => void) => void, dependencies: string | string[]): void;

        auth: {
            /** server.auth.default(options)
            Sets a default strategy which is applied to every route where:
            options - a string with the default strategy name or an object with a specified strategy or strategies using the same format as the route auth handler options.
            The default does not apply when the route config specifies auth as false, or has an authentication strategy configured. Otherwise, the route authentication config is applied to the defaults. Note that the default only applies at time of route configuration, not at runtime. Calling default() after adding a route will have no impact on routes added prior.
            The default auth strategy configuration can be accessed via connection.auth.settings.default.
            var server = new Hapi.Server();
            server.connection({ port: 80 });
            server.auth.scheme('custom', scheme);
            server.auth.strategy('default', 'custom');
            server.auth.default('default');
            server.route({
            method: 'GET',
            path: '/',
            handler: function (request, reply) {
            return reply(request.auth.credentials.user);
            }
            });*/
            default(options: string): void;
            /** server.auth.scheme(name, scheme)
            Registers an authentication scheme where:
            name - the scheme name.
            scheme - the method implementing the scheme with signature function(server, options) where:
            server - a reference to the server object the scheme is added to.
            options - optional scheme settings used to instantiate a strategy.*/
            scheme(name: string,
                /** When the scheme authenticate() method implementation calls reply() with an error condition, the specifics of the error affect whether additional authentication strategies will be attempted if configured for the route. If the err returned by the reply() method includes a message, no additional strategies will be attempted. If the err does not include a message but does include a scheme name (e.g. Boom.unauthorized(null, 'Custom')), additional strategies will be attempted in order of preference.
                n the scheme payload() method returns an error with a message, it means payload validation failed due to bad payload. If the error has no message but includes a scheme name (e.g. Boom.unauthorized(null, 'Custom')), authentication may still be successful if the route auth.payload configuration is set to 'optional'.
                server = new Hapi.Server();
                server.connection({ port: 80 });
                scheme = function (server, options) {
                urn {
                authenticate: function (request, reply) {
                req = request.raw.req;
                var authorization = req.headers.authorization;
                if (!authorization) {
                return reply(Boom.unauthorized(null, 'Custom'));
                }
                urn reply(null, { credentials: { user: 'john' } });
                }
                };
                };
                */
                scheme: (server: Server, options: any) => IServerAuthScheme): void;

            /** server.auth.strategy(name, scheme, [mode], [options])
            Registers an authentication strategy where:
            name - the strategy name.
            scheme - the scheme name (must be previously registered using server.auth.scheme()).
            mode - if true, the scheme is automatically assigned as a required strategy to any route without an auth config. Can only be assigned to a single server strategy. Value must be true (which is the same as 'required') or a valid authentication mode ('required', 'optional', 'try'). Defaults to false.
            options - scheme options based on the scheme requirements.
            var server = new Hapi.Server();
            server.connection({ port: 80 });
            server.auth.scheme('custom', scheme);
            server.auth.strategy('default', 'custom');
            server.route({
            method: 'GET',
            path: '/',
            config: {
            auth: 'default',
            handler: function (request, reply) {
            return reply(request.auth.credentials.user);
            }
            }
            });*/
            strategy(name: string, scheme: any, mode?: boolean | string, options?: any): void;

            /** server.auth.test(strategy, request, next)
            Tests a request against an authentication strategy where:
            strategy - the strategy name registered with server.auth.strategy().
            request - the request object.
            next - the callback function with signature function(err, credentials) where:
            err - the error if authentication failed.
            credentials - the authentication credentials object if authentication was successful.
            Note that the test() method does not take into account the route authentication configuration. It also does not perform payload authentication. It is limited to the basic strategy authentication execution. It does not include verifying scope, entity, or other route properties.
            var server = new Hapi.Server();
            server.connection({ port: 80 });
            server.auth.scheme('custom', scheme);
            server.auth.strategy('default', 'custom');
            server.route({
            method: 'GET',
            path: '/',
            handler: function (request, reply) {
            request.server.auth.test('default', request, function (err, credentials) {
            if (err) {
            return reply({ status: false });
            }
            return reply({ status: true, user: credentials.name });
            });
            }
            });*/
            test(strategy: string, request: Request, next: (err: any, credentials: any) => void): void;
        };
        /** server.bind(context)
        Sets a global context used as the default bind object when adding a route or an extension where:
        context - the object used to bind this in handler and extension methods.
        When setting context inside a plugin, the context is applied only to methods set up by the plugin. Note that the context applies only to routes and extensions added after it has been set.
        var handler = function (request, reply) {
        return reply(this.message);
        };
        exports.register = function (server, options, next) {
        var bind = {
        message: 'hello'
        };
        server.bind(bind);
        server.route({ method: 'GET', path: '/', handler: handler });
        return next();
        };*/
        bind(context: any): void;


        /** server.cache(options)
        Provisions a cache segment within the server cache facility where:
        options - catbox policy configuration where:
        expiresIn - relative expiration expressed in the number of milliseconds since the item was saved in the cache. Cannot be used together with expiresAt.
        expiresAt - time of day expressed in 24h notation using the 'HH:MM' format, at which point all cache records expire. Uses local time. Cannot be used together with expiresIn.
        generateFunc - a function used to generate a new cache item if one is not found in the cache when calling get(). The method's signature is function(id, next) where: - id - the id string or object provided to the get() method. - next - the method called when the new item is returned with the signature function(err, value, ttl) where: - err - an error condition. - value - the new value generated. - ttl - the cache ttl value in milliseconds. Set to 0 to skip storing in the cache. Defaults to the cache global policy.
        staleIn - number of milliseconds to mark an item stored in cache as stale and attempt to regenerate it when generateFunc is provided. Must be less than expiresIn.
        staleTimeout - number of milliseconds to wait before checking if an item is stale.
        generateTimeout - number of milliseconds to wait before returning a timeout error when the generateFunc function takes too long to return a value. When the value is eventually returned, it is stored in the cache for future requests.
        cache - the cache name configured in 'server.cache`. Defaults to the default cache.
        segment - string segment name, used to isolate cached items within the cache partition. When called within a plugin, defaults to '!name' where 'name' is the plugin name. Required when called outside of a plugin.
        shared - if true, allows multiple cache provisions to share the same segment. Default to false.
        var server = new Hapi.Server();
        server.connection({ port: 80 });
        var cache = server.cache({ segment: 'countries', expiresIn: 60 * 60 * 1000 });
        cache.set('norway', { capital: 'oslo' }, null, function (err) {
        cache.get('norway', function (err, value, cached, log) {
        // value === { capital: 'oslo' };
        });
        });*/
        cache(options: ICatBoxCacheOptions): void;

        /** server.connection([options])
        Adds an incoming server connection
        Returns a server object with the new connection selected.
        Must be called before any other server method that modifies connections is called for it to apply to the new connection (e.g. server.state()).
        Note that the options object is deeply cloned (with the exception of listener which is shallowly copied) and cannot contain any values that are unsafe to perform deep copy on.
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        var web = server.connection({ port: 8000, host: 'example.com', labels: ['web'] });
        var admin = server.connection({ port: 8001, host: 'example.com', labels: ['admin'] });
        // server.connections.length === 2
        // web.connections.length === 1
        // admin.connections.length === 1 */
        connection(options: IServerConnectionOptions): Server;
        /** server.decorate(type, property, method)
        Extends various framework interfaces with custom methods where:
        type - the interface being decorated. Supported types:
        'reply' - adds methods to the reply interface.
        'server' - adds methods to the Server object.
        property - the object decoration key name.
        method - the extension function.
        Note that decorations apply to the entire server and all its connections regardless of current selection.
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80 });
        server.decorate('reply', 'success', function () {
        return this.response({ status: 'ok' });
        });
        server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
        return reply.success();
        }
        });*/
        decorate(type: string, property: string, method: Function): void;

        /** server.dependency(dependencies, [after])
        Used within a plugin to declares a required dependency on other plugins where:
        dependencies - a single string or array of plugin name strings which must be registered in order for this plugin to operate. Plugins listed must be registered before the server is started. Does not provide version dependency which should be implemented using npm peer dependencies.
        after - an optional function called after all the specified dependencies have been registered and before the server starts. The function is only called if the server is started. If a circular dependency is detected, an exception is thrown (e.g. two plugins each has an after function to be called after the other). The function signature is function(server, next) where:
        server - the server the dependency() method was called on.
        next - the callback function the method must call to return control over to the application and complete the registration process. The function signature is function(err) where:
        err - internal error condition, which is returned back via the server.start() callback.
        exports.register = function (server, options, next) {
        server.dependency('yar', after);
        return next();
        };
        var after = function (server, next) {
        // Additional plugin registration logic
        return next();
        };*/
        dependency(dependencies: string | string[], after?: (server: Server, next: (err: any) => void) => void): void;


        /** server.expose(key, value)
        Used within a plugin to expose a property via server.plugins[name] where:
        key - the key assigned (server.plugins[name][key]).
        value - the value assigned.
        exports.register = function (server, options, next) {
        server.expose('util', function () { console.log('something'); });
        return next();
        };*/
        expose(key: string, value: any): void;

        /** server.expose(obj)
        Merges a deep copy of an object into to the existing content of server.plugins[name] where:
        obj - the object merged into the exposed properties container.
        exports.register = function (server, options, next) {
        server.expose({ util: function () { console.log('something'); } });
        return next();
        };*/
        expose(obj: any): void;

        /** server.ext(event, method, [options])
        Registers an extension function in one of the available extension points where:
        event - the event name.
        method - a function or an array of functions to be executed at a specified point during request processing. The required extension function signature is function(request, reply) where:
        request - the request object. NOTE: Access the Response via request.response
        reply - the reply interface which is used to return control back to the framework. To continue normal execution of the request lifecycle, reply.continue() must be called. To abort processing and return a response to the client, call reply(value) where value is an error or any other valid response.
        this - the object provided via options.bind or the current active context set with server.bind().
        options - an optional object with the following:
        before - a string or array of strings of plugin names this method must execute before (on the same event). Otherwise, extension methods are executed in the order added.
        after - a string or array of strings of plugin names this method must execute after (on the same event). Otherwise, extension methods are executed in the order added.
        bind - a context object passed back to the provided method (via this) when called.
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80 });
        server.ext('onRequest', function (request, reply) {
        // Change all requests to '/test'
        request.setUrl('/test');
        return reply.continue();
        });
        var handler = function (request, reply) {
        return reply({ status: 'ok' });
        };
        server.route({ method: 'GET', path: '/test', handler: handler });
        server.start();
        // All requests will get routed to '/test'*/
        ext(event: string, method: (request: Request, reply: IReply, bind?: any) => void, options?: { before: string | string[]; after: string | string[]; bind?: any }): void;

        /** server.handler(name, method)
        Registers a new handler type to be used in routes where:
        name - string name for the handler being registered. Cannot override the built-in handler types (directory, file, proxy, and view) or any previously registered type.
        method - the function used to generate the route handler using the signature function(route, options) where:
        route - the route public interface object.
        options - the configuration object provided in the handler config.
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ host: 'localhost', port: 8000 });
        // Defines new handler for routes on this server
        server.handler('test', function (route, options) {
        return function (request, reply) {
        return reply('new handler: ' + options.msg);
        }
        });
        server.route({
        method: 'GET',
        path: '/',
        handler: { test: { msg: 'test' } }
        });
        server.start();
        The method function can have a defaults object or function property. If the property is set to an object, that object is used as the default route config for routes using this handler. If the property is set to a function, the function uses the signature function(method) and returns the route default configuration.
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ host: 'localhost', port: 8000 });
        var handler = function (route, options) {
        return function (request, reply) {
        return reply('new handler: ' + options.msg);
        }
        };
        // Change the default payload processing for this handler
        handler.defaults = {
        payload: {
        output: 'stream',
        parse: false
        }
        };
        server.handler('test', handler);*/
        handler<THandlerConfig>(name: string, method: (route: IRoute, options: THandlerConfig) => ISessionHandler): void;
        /** When the server contains exactly one connection, injects a request into the sole connection simulating an incoming HTTP request without making an actual socket connection.
        Injection is useful for testing purposes as well as for invoking routing logic internally without the overhead or limitations of the network stack.
        Utilizes the [shot module | https://github.com/hapijs/shot ] for performing injections, with some additional options and response properties
        * When the server contains more than one connection, each server.connections array member provides its own connection.inject().
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80 });
        var handler = function (request, reply) {
        return reply('Success!');
        };
        server.route({ method: 'GET', path: '/', handler: handler });
        server.inject('/', function (res) {
        console.log(res.result);
        });
        */
        inject: IServerInject;

        /** server.log(tags, [data, [timestamp]])
        Logs server events that cannot be associated with a specific request. When called the server emits a 'log' event which can be used by other listeners or plugins to record the information or output to the console. The arguments are:
        tags - a string or an array of strings (e.g. ['error', 'database', 'read']) used to identify the event. Tags are used instead of log levels and provide a much more expressive mechanism for describing and filtering events. Any logs generated by the server internally include the 'hapi' tag along with event-specific information.
        data - an optional message string or object with the application data being logged.
        timestamp - an optional timestamp expressed in milliseconds. Defaults to Date.now() (now).
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80 });
        server.on('log', function (event, tags) {
        if (tags.error) {
        console.log(event);
        }
        });
        server.log(['test', 'error'], 'Test event');*/
        log(tags: string | string[], data?: string | any, timestamp?: number): void;
        /**server.lookup(id)
        When the server contains exactly one connection, looks up a route configuration where:
        id - the route identifier as set in the route options.
        returns the route public interface object if found, otherwise null.
        var server = new Hapi.Server();
        server.connection();
        server.route({
        method: 'GET',
        path: '/',
        config: {
        handler: function (request, reply) { return reply(); },
        id: 'root'
        }
        });
        var route = server.lookup('root');
        When the server contains more than one connection, each server.connections array member provides its own connection.lookup() method.*/
        lookup(id: string): IRoute;
        /** server.match(method, path, [host])
        When the server contains exactly one connection, looks up a route configuration where:
        method - the HTTP method (e.g. 'GET', 'POST').
        path - the requested path (must begin with '/').
        host - optional hostname (to match against routes with vhost).
        returns the route public interface object if found, otherwise null.
        var server = new Hapi.Server();
        server.connection();
        server.route({
        method: 'GET',
        path: '/',
        config: {
        handler: function (request, reply) { return reply(); },
        id: 'root'
        }
        });
        var route = server.match('get', '/');
        When the server contains more than one connection, each server.connections array member provides its own connection.match() method.*/
        match(method: string, path: string, host?: string): IRoute;




        /** server.method(name, method, [options])
        Registers a server method. Server methods are functions registered with the server and used throughout the application as a common utility. Their advantage is in the ability to configure them to use the built-in cache and share across multiple request handlers without having to create a common module.
        Methods are registered via server.method(name, method, [options])
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80 });
        // Simple arguments
        var add = function (a, b, next) {
        return next(null, a + b);
        };
        server.method('sum', add, { cache: { expiresIn: 2000 } });
        server.methods.sum(4, 5, function (err, result) {
        console.log(result);
        });
        // Object argument
        var addArray = function (array, next) {
        var sum = 0;
        array.forEach(function (item) {
        sum += item;
        });
        return next(null, sum);
        };
        server.method('sumObj', addArray, {
        cache: { expiresIn: 2000 },
        generateKey: function (array) {
        return array.join(',');
        }
        });
        server.methods.sumObj([5, 6], function (err, result) {
        console.log(result);
        });
        // Synchronous method with cache
        var addSync = function (a, b) {
        return a + b;
        };
        server.method('sumSync', addSync, { cache: { expiresIn: 2000 }, callback: false });
        server.methods.sumSync(4, 5, function (err, result) {
        console.log(result);
        }); */
        method(
            /**  a unique method name used to invoke the method via server.methods[name]. When configured with caching enabled, server.methods[name].cache.drop(arg1, arg2, ..., argn, callback) can be used to clear the cache for a given key. Supports using nested names such as utils.users.get which will automatically create the missing path under server.methods and can be accessed for the previous example via server.methods.utils.users.get.*/
            name: string,
            method: IServerMethod,
            options?: IServerMethodOptions): void;


        /**server.method(methods)
        Registers a server method function as described in server.method() using a configuration object where:
        methods - an object or an array of objects where each one contains:
        name - the method name.
        method - the method function.
        options - optional settings.
        var add = function (a, b, next) {
        next(null, a + b);
        };
        server.method({
        name: 'sum',
        method: add,
        options: {
        cache: {
        expiresIn: 2000
        }
        }
        });*/
        method(methods: {
            name: string; method: IServerMethod; options?: IServerMethodOptions
        } | Array<{
            name: string; method: IServerMethod; options?: IServerMethodOptions
        }>): void;
        /**server.path(relativeTo)
        Sets the path prefix used to locate static resources (files and view templates) when relative paths are used where:
        relativeTo - the path prefix added to any relative file path starting with '.'.
        Note that setting a path within a plugin only applies to resources accessed by plugin methods. If no path is set, the connection files.relativeTo configuration is used. The path only applies to routes added after it has been set.
        exports.register = function (server, options, next) {
        server.path(__dirname + '../static');
        server.route({ path: '/file', method: 'GET', handler: { file: './test.html' } });
        next();
        };*/
        path(relativeTo: string): void;
        /**server.register(plugins, [options], callback)
        Registers a plugin where:
        plugins - an object or array of objects where each one is either:
        a plugin registration function.
        an object with the following:
        register - the plugin registration function.
        options - optional options passed to the registration function when called.
        options - optional registration options (different from the options passed to the registration function):
        select - a string or array of string labels used to pre-select connections for plugin registration.
        routes - modifiers applied to each route added by the plugin:
        prefix - string added as prefix to any route path (must begin with '/'). If a plugin registers a child plugin the prefix is passed on to the child or is added in front of the child-specific prefix.
        vhost - virtual host string (or array of strings) applied to every route. The outer-most vhost overrides the any nested configuration.
        callback - the callback function with signature function(err) where:
        err - an error returned from the registration function. Note that exceptions thrown by the registration function are not handled by the framework.
        server.register({
        register: require('plugin_name'),
        options: {
        message: 'hello'
        }
        }, function (err) {
        if (err) {
        console.log('Failed loading plugin');
        }
        });*/
        register(plugins: any | any[], options: {
            select: string | string[];
            routes: {
                prefix: string; vhost?: string | string[]
            };
        }
            , callback: (err: any) => void): void;

        register(plugins: any | any[], callback: (err: any) => void): void;

        /**server.render(template, context, [options], callback)
        Utilizes the server views manager to render a template where:
        template - the template filename and path, relative to the views manager templates path (path or relativeTo).
        context - optional object used by the template to render context-specific result. Defaults to no context ({}).
        options - optional object used to override the views manager configuration.
        callback - the callback function with signature function (err, rendered, config) where:
        err - the rendering error if any.
        rendered - the result view string.
        config - the configuration used to render the template.
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80 });
        server.views({
        engines: { html: require('handlebars') },
        path: __dirname + '/templates'
        });
        var context = {
        title: 'Views Example',
        message: 'Hello, World'
        };
        server.render('hello', context, function (err, rendered, config) {
        console.log(rendered);
        });*/
        render(template: string, context: any, options: any, callback: (err: any, rendered: any, config: any) => void): void;
        /** server.route(options)
        Adds a connection route where:
        options - a route configuration object or an array of configuration objects.
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80 });
        server.route({ method: 'GET', path: '/', handler: function (request, reply) { return reply('ok'); } });
        server.route([
        { method: 'GET', path: '/1', handler: function (request, reply) { return reply('ok'); } },
        { method: 'GET', path: '/2', handler: function (request, reply) { return reply('ok'); } }
        ]);*/
        route(options: IRouteConfiguration): void;
        route(options: IRouteConfiguration[]): void;
        /**server.select(labels)
        Selects a subset of the server's connections where:
        labels - a single string or array of strings of labels used as a logical OR statement to select all the connections with matching labels in their configuration.
        Returns a server object with connections set to the requested subset. Selecting again on a selection operates as a logic AND statement between the individual selections.
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80, labels: ['a'] });
        server.connection({ port: 8080, labels: ['b'] });
        server.connection({ port: 8081, labels: ['c'] });
        server.connection({ port: 8082, labels: ['c','d'] });
        var a = server.select('a');          // The server with port 80
        var ab = server.select(['a','b']);   // A list of servers containing the server with port 80 and the server with port 8080
        var c = server.select('c');          // A list of servers containing the server with port 8081 and the server with port 8082 */
        select(labels: string | string[]): Server | Server[];
        /** server.start([callback])
        Starts the server connections by listening for incoming requests on the configured port of each listener (unless the connection was configured with autoListen set to false), where:
        callback - optional callback when server startup is completed or failed with the signature function(err) where:
        err - any startup error condition.
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80 });
        server.start(function (err) {
        console.log('Server started at: ' + server.info.uri);
        });*/
        start(callback?: (err: any) => void): void;
        /** server.state(name, [options])
        HTTP state management uses client cookies to persist a state across multiple requests. Registers a cookie definitions
        State defaults can be modified via the server connections.routes.state configuration option.
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80 });
        // Set cookie definition
        server.state('session', {
        ttl: 24 * 60 * 60 * 1000,     // One day
        isSecure: true,
        path: '/',
        encoding: 'base64json'
        });
        // Set state in route handler
        var handler = function (request, reply) {
        var session = request.state.session;
        if (!session) {
        session = { user: 'joe' };
        }
        session.last = Date.now();
        return reply('Success').state('session', session);
        };
        Registered cookies are automatically parsed when received. Parsing rules depends on the route state.parse configuration. If an incoming registered cookie fails parsing, it is not included in request.state, regardless of the state.failAction setting. When state.failAction is set to 'log' and an invalid cookie value is received, the server will emit a 'request-internal' event. To capture these errors subscribe to the 'request-internal' events and filter on 'error' and 'state' tags:
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80 });
        server.on('request-internal', function (request, event, tags) {
        if (tags.error && tags.state) {
        console.error(event);
        }
        });    */
        state(name: string, options?: ICookieSettings): void;

        /** server.stop([options], [callback])
        Stops the server's connections by refusing to accept any new connections or requests (existing connections will continue until closed or timeout), where:
        options - optional object with:
        timeout - overrides the timeout in millisecond before forcefully terminating a connection. Defaults to 5000 (5 seconds).
        callback - optional callback method with signature function() which is called once all the connections have ended and it is safe to exit the process.
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80 });
        server.stop({ timeout: 60 * 1000 }, function () {
        console.log('Server stopped');
        });*/
        stop(options?: { timeout: number }, callback?: () => void): void;
        /**server.table([host])
        Returns a copy of the routing table where:
        host - optional host to filter routes matching a specific virtual host. Defaults to all virtual hosts.
        The return value is an array where each item is an object containing:
        info - the connection.info the connection the table was generated for.
        labels - the connection labels.
        table - an array of routes where each route contains:
        settings - the route config with defaults applied.
        method - the HTTP method in lower case.
        path - the route path.
        Note that if the server has not been started and multiple connections use port 0, the table items will override each other and will produce an incomplete result.
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80, host: 'example.com' });
        server.route({ method: 'GET', path: '/example', handler: function (request, reply) { return reply(); } });
        var table = server.table();
        When calling connection.table() directly on each connection, the return value is the same as the array table item value of an individual connection:
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.connection({ port: 80, host: 'example.com' });
        server.route({ method: 'GET', path: '/example', handler: function (request, reply) { return reply(); } });
        var table = server.connections[0].table();
        //[
        //    {
        //        method: 'get',
        //        path: '/example',
        //        settings: { ... }
        //    }
        //]
        */
        table(host?: any): IConnectionTable;

        /**server.views(options)
        Initializes the server views manager
        var Hapi = require('hapi');
        var server = new Hapi.Server();
        server.views({
        engines: {
        html: require('handlebars'),
        jade: require('jade')
        },
        path: '/static/templates'
        });
        When server.views() is called within a plugin, the views manager is only available to plugins methods.*/
        views(options: IServerViewsConfiguration): void;

    }
}
