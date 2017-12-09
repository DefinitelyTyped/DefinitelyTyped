import {
    Json,
    Lifecycle,
    PluginSpecificConfiguration,
    RouteOptionsAccess,
    RouteOptionsCache,
    RouteOptionsCors,
    RouteOptionsPayload,
    RouteOptionsPreArray,
    RouteOptionsResponse,
    RouteOptionsSecure,
    RouteOptionsValidate,
    Util
} from "hapi";

/**
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionscompression)
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverencoderencoding-encoder)
 */
export type RouteCompressionEncoderSettings = object;

/**
 * Each route can be customized to change the default behavior of the request lifecycle.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#route-options)
 */
export interface RouteOptions {

    /**
     * Application-specific route configuration state. Should not be used by plugins which should use options.plugins[name] instead.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsapp)
     */
    app?: any;

    /**
     * Route authentication configuration. Value can be:
     * false to disable authentication if a default strategy is set.
     * a string with the name of an authentication strategy registered with server.auth.strategy(). The strategy will be set to 'required' mode.
     * an authentication configuration object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsapp)
     */
    auth?: false | string | RouteOptionsAccess;

    /**
     * Default value: null.
     * An object passed back to the provided handler (via this) when called. Ignored if the method is an arrow function.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsbind)
     */
    bind?: object;

    /**
     * Default value: { privacy: 'default', statuses: [200], otherwise: 'no-cache' }.
     * If the route method is 'GET', the route can be configured to include HTTP caching directives in the response. Caching can be customized using an object with the following options:
     * privacy - determines the privacy flag included in client-side caching using the 'Cache-Control' header. Values are:
     * * * 'default' - no privacy flag.
     * * * 'public' - mark the response as suitable for public caching.
     * * * 'private' - mark the response as suitable only for private caching.
     * * expiresIn - relative expiration expressed in the number of milliseconds since the item was saved in the cache. Cannot be used together with expiresAt.
     * * expiresAt - time of day expressed in 24h notation using the 'HH:MM' format, at which point all cache records for the route expire. Cannot be used together with expiresIn.
     * * statuses - an array of HTTP response status code numbers (e.g. 200) which are allowed to include a valid caching directive.
     * * otherwise - a string with the value of the 'Cache-Control' header when caching is disabled.
     * The default Cache-Control: no-cache header can be disabled by setting cache to false.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionscache)
     */
    cache?: false | RouteOptionsCache;

    /**
     * An object where each key is a content-encoding name and each value is an object with the desired encoder settings. Note that decoder settings are set in compression.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionscompression)
     */
    compression?: Util.Dictionary<RouteCompressionEncoderSettings>;

    /**
     * Default value: false (no CORS headers).
     * The Cross-Origin Resource Sharing protocol allows browsers to make cross-origin API calls. CORS is required by web applications running inside a browser which are loaded from a different domain than the API server. To enable, set cors to true, or to an object with the following options:
     * * origin - an array of allowed origin servers strings ('Access-Control-Allow-Origin'). The array can contain any combination of fully qualified origins along with origin strings containing a wildcard '*' character, or a single '*' origin string. If set to 'ignore', any incoming Origin header is ignored (present or not) and the 'Access-Control-Allow-Origin' header is set to '*'. Defaults to any origin ['*'].
     * * maxAge - number of seconds the browser should cache the CORS response ('Access-Control-Max-Age'). The greater the value, the longer it will take before the browser checks for changes in policy. Defaults to 86400 (one day).
     * * headers - a strings array of allowed headers ('Access-Control-Allow-Headers'). Defaults to ['Accept', 'Authorization', 'Content-Type', 'If-None-Match'].
     * * additionalHeaders - a strings array of additional headers to headers. Use this to keep the default headers in place.
     * * exposedHeaders - a strings array of exposed headers ('Access-Control-Expose-Headers'). Defaults to ['WWW-Authenticate', 'Server-Authorization'].
     * * additionalExposedHeaders - a strings array of additional headers to exposedHeaders. Use this to keep the default headers in place.
     * * credentials - if true, allows user credentials to be sent ('Access-Control-Allow-Credentials'). Defaults to false.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionscors)
     */
    cors?: false | RouteOptionsCors;

    /**
     * Default value: none.
     * Route description used for generating documentation (string).
     * This setting is not available when setting server route defaults using server.options.routes.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsdescription)
     */
    description?: string;

    /**
     * Default value: none.
     * Route-level request extension points by setting the option to an object with a key for each of the desired extension points ('onRequest' is not allowed), and the value is the same as the server.ext(events) event argument.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsext)
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#request-lifecycle)
     */
    ext?: object;

    /**
     * Default value: { relativeTo: '.' }.
     * Defines the behavior for accessing files:
     * * relativeTo - determines the folder relative paths are resolved against.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsfiles)
     */
    files?: {
        relativeTo: string;
    }

    /**
     * Default value: none.
     * The route handler function performs the main business logic of the route and sets the response. handler can be assigned:
     * * a lifecycle method.
     * * an object with a single property using the name of a handler type registred with the server.handler() method. The matching property value is passed as options to the registered handler generator.
     * Note: handlers using a fat arrow style function cannot be bound to any bind property. Instead, the bound context is available under h.context.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionshandler)
     */
    handler?: Lifecycle.Method | object;

    /**
     * Default value: none.
     * An optional unique identifier used to look up the route using server.lookup(). Cannot be assigned to routes added with an array of methods.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsid)
     */
    id?: string;

    /**
     * Default value: false.
     * If true, the route cannot be accessed through the HTTP listener but only through the server.inject() interface with the allowInternals option set to true. Used for internal routes that should not be accessible to the outside world.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsisinternal)
     */
    isInternal?: boolean;

    /**
     * Default value: none.
     * Optional arguments passed to JSON.stringify() when converting an object or error response to a string payload or escaping it after stringification. Supports the following:
     * * replacer - the replacer function or array. Defaults to no action.
     * * space - number of spaces to indent nested object keys. Defaults to no indentation.
     * * suffix - string suffix added after conversion to JSON string. Defaults to no suffix.
     * * escape - calls Hoek.jsonEscape() after conversion to JSON string. Defaults to false.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsjson)
     */
    json?: Json.StringifyArguments;

    /**
     * Default value: none.
     * Enables JSONP support by setting the value to the query parameter name containing the function name used to wrap the response payload.
     * For example, if the value is 'callback', a request comes in with 'callback=me', and the JSON response is '{ "a":"b" }', the payload will be 'me({ "a":"b" });'. Cannot be used with stream responses.
     * The 'Content-Type' response header is set to 'text/javascript' and the 'X-Content-Type-Options' response header is set to 'nosniff', and will override those headers even if explicitly set by response.type().
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsjsonp)
     */
    jsonp?: string;

    /**
     * Default value: { collect: false }.
     * Request logging options:
     * collect - if true, request-level logs (both internal and application) are collected and accessible via request.logs.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionslog)
     */
    log?: {
        collect: boolean;
    }

    /**
     * Default value: none.
     * Route notes used for generating documentation (string or array of strings).
     * This setting is not available when setting server route defaults using server.options.routes.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsnotes)
     */
    notes?: string | string[];

    /**
     * Determines how the request payload is processed.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayload)
     */
    payload?: RouteOptionsPayload;

    /**
     * Default value: {}.
     * Plugin-specific configuration. plugins is an object where each key is a plugin name and the value is the plugin configuration.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsplugins)
     */
    plugins?: Util.Dictionary<PluginSpecificConfiguration>;

    /**
     * Default value: none.
     * The pre option allows defining methods for performing actions before the handler is called. These methods allow breaking the handler logic into smaller, reusable components that can be shared ascross routes, as well as provide a cleaner error handling of prerequisite operations (e.g. load required reference data from a database).
     * pre is assigned an ordered array of methods which are called serially in order. If the pre array contains another array of methods as one of its elements, those methods are called in parallel. Note that during parallel execution, if any of the methods error, return a takeover response, or abort signal, the other parallel methods will continue to execute but will be ignored once completed.
     * pre can be assigned a mixed array of:
     * * an array containing the elements listed below, which are executed in parallel.
     * * an object with:
     * * * method - a lifecycle method.
     * * * assign - key name used to assign the response of the method to in request.pre and request.preResponses.
     * * * failAction - A failAction value which determine what to do when a pre-handler method throws an error. If assign is specified and the failAction setting is not 'error', the error will be assigned.
     * * a method function - same as including an object with a single method key.
     * Note that pre-handler methods do not behave the same way other lifecycle methods do when a value is returned. Instead of the return value becoming the new response payload, the value is used to assign the corresponding request.pre and request.preResponses properties. Otherwise, the handling of errors, takeover response response, or abort signal behave the same as any other lifecycle methods.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspre)
     */
    pre?: RouteOptionsPreArray;

    /**
     * Processing rules for the outgoing response.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponse)
     */
    response?: RouteOptionsResponse;

    /**
     * Default value: false (security headers disabled).
     * Sets common security headers. To enable, set security to true or to an object with the following options:
     * * hsts - controls the 'Strict-Transport-Security' header, where:
     * * * true - the header will be set to max-age=15768000. This is the default value.
     * * * a number - the maxAge parameter will be set to the provided value.
     * * * an object with the following fields:
     * * * * maxAge - the max-age portion of the header, as a number. Default is 15768000.
     * * * * includeSubDomains - a boolean specifying whether to add the includeSubDomains flag to the header.
     * * * * preload - a boolean specifying whether to add the 'preload' flag (used to submit domains inclusion in Chrome's HTTP Strict Transport Security (HSTS) preload list) to the header.
     * * xframe - controls the 'X-Frame-Options' header, where:
     * * * true - the header will be set to 'DENY'. This is the default value.
     * * * 'deny' - the headers will be set to 'DENY'.
     * * * 'sameorigin' - the headers will be set to 'SAMEORIGIN'.
     * * * an object for specifying the 'allow-from' rule, where:
     * * * * rule - one of:
     * * * * * 'deny'
     * * * * * 'sameorigin'
     * * * * * 'allow-from'
     * * * * source - when rule is 'allow-from' this is used to form the rest of the header, otherwise this field is ignored. If rule is 'allow-from' but source is unset, the rule will be automatically changed to 'sameorigin'.
     * * xss - boolean that controls the 'X-XSS-PROTECTION' header for Internet Explorer. Defaults to true which sets the header to equal '1; mode=block'.
     *       Note: this setting can create a security vulnerability in versions of Internet Exploere below 8, as well as unpatched versions of IE8. See here and here for more information. If you actively support old versions of IE, it may be wise to explicitly set this flag to false.
     * * noOpen - boolean controlling the 'X-Download-Options' header for Internet Explorer, preventing downloads from executing in your context. Defaults to true setting the header to 'noopen'.
     * * noSniff - boolean controlling the 'X-Content-Type-Options' header. Defaults to true setting the header to its only and default option, 'nosniff'.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionssecurity)
     */
    security?: RouteOptionsSecure;

    /**
     * Default value: { parse: true, failAction: 'error' }.
     * HTTP state management (cookies) allows the server to store information on the client which is sent back to the server with every request (as defined in RFC 6265). state supports the following options:
     * parse - determines if incoming 'Cookie' headers are parsed and stored in the request.state object.
     * failAction - A failAction value which determines how to handle cookie parsing errors. Defaults to 'error' (return a Bad Request (400) error response).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsstate)
     */
    state?: {
        parse?: boolean;
        failAction?: Lifecycle.FailAction;
    }

    /**
     * Default value: none.
     * Route tags used for generating documentation (array of strings).
     * This setting is not available when setting server route defaults using server.options.routes.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionstags)
     */
    tags?: string[];

    /**
     * Default value: { server: false }.
     * Timeouts for processing durations.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionstimeout)
     */
    timeout?: {

        /**
         * Response timeout in milliseconds. Sets the maximum time allowed for the server to respond to an incoming request before giving up and responding with a Service Unavailable (503) error response.
         */
        server?: boolean | number;

        /**
         * Default value: none (use node default of 2 minutes).
         * By default, node sockets automatically timeout after 2 minutes. Use this option to override this behavior. Set to false to disable socket timeouts.
         */
        socket?: boolean | number;

    };

    /**
     * Default value: { headers: true, params: true, query: true, payload: true, failAction: 'error' }.
     * Request input validation rules for various request components.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidate)
     */
    validate?: RouteOptionsValidate;

}
