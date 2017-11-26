import {RouteOptionsAccess} from "./route-options-access";
import {RouteOptionsCache} from "./route-options-cache";
import {Dictionary} from "../util/util";
import {RouteOptionsCors} from "./route-options-cors";
import {RouteOptionsResponse} from "./route-options-response";
import {RouteOptionsPayload} from "./route-options-payload";
import {RouteOptionsSecure} from "./route-options-secure";
import {FailAction} from "../util/fail-action";
import {RouteOptionsValidate} from "./route-options-validate";
import {PluginSpecificConfiguration} from "../plugin/plugin";

/**
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionscompression)
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverencoderencoding-encoder)
 */
export type RouteCompressionEncoderSettings = any;

/** Each route can be customized to change the default behavior of the request lifecycle. */
export interface RouteOptions {

    /** Application-specific route configuration state. Should not be used by plugins which should use options.plugins[name] instead.*/
    app?: any;

    /**
     Route authentication configuration. Value can be:
     false to disable authentication if a default strategy is set.
     a string with the name of an authentication strategy registered with server.auth.strategy(). The strategy will be set to 'required' mode.
     an authentication configuration object.
     */
    auth?: false | string | RouteOptionsAccess;

    /**
     Default value: null.
     An object passed back to the provided handler (via this) when called. Ignored if the method is an arrow function.
     */
    bind?: any;

    /**
     Default value: { privacy: 'default', statuses: [200], otherwise: 'no-cache' }.
     */
    cache?: false | RouteOptionsCache;

    /**
     An object where each key is a content-encoding name and each value is an object with the desired encoder settings. Note that decoder settings are set in compression.
     */
    compression?: Dictionary<RouteCompressionEncoderSettings>;

    /**
     Default value: false (no CORS headers).
     */
    cors?: false | RouteOptionsCors;

    /**
     Default value: none.
     Route description used for generating documentation (string).
     This setting is not available when setting server route defaults using server.options.routes.
     */
    description?: string;

    /**
     Default value: none.
     Route-level request extension points by setting the option to an object with a key for each of the desired extension points ('onRequest' is not allowed), and the value is the same as the server.ext(events) event argument.
     */
    ext?: any; //TODO need to review and rewrite this definition

    /**
     Default value: { relativeTo: '.' }.
     Defines the behavior for accessing files:
     relativeTo - determines the folder relative paths are resolved against.
     */
    files?: {
        relativeTo: string;
    }

    /**
     Default value: none.
     The route handler function performs the main business logic of the route and sets the respons. handler can be assigned:
     a lifecycle method.
     an object with a single property using the name of a handler type registred with the server.handler() method. The matching property value is passed as options to the registered handler generator.
            const handler = function (request, h) {
                return 'success';
            };
     Note: handlers using a fat arrow style function cannot be bound to any bind property. Instead, the bound context is available under h.context.
     */
    handler?: any; //TODO need to review and rewrite this definition

    /**
     Default value: none.
     An optional unique identifier used to look up the route using server.lookup(). Cannot be assigned to routes added with an array of methods.
     */
    id?: string;

    /**
     Default value: false.
     If true, the route cannot be accessed through the HTTP listener but only through the server.inject() interface with the allowInternals option set to true. Used for internal routes that should not be accessible to the outside world.
     */
    isInternal?: boolean;

    /**
     Default value: none.
     Optional arguments passed to JSON.stringify() when converting an object or error response to a string payload or escaping it after stringification. Supports the following:
     replacer - the replacer function or array. Defaults to no action.
     space - number of spaces to indent nested object keys. Defaults to no indentation.
     suffix - string suffix added after conversion to JSON string. Defaults to no suffix.
     escape - calls Hoek.jsonEscape() after conversion to JSON string. Defaults to false.

     TODO this definition in v16 is a bit confuse for me. Need review and maybe rewrite.
     */
    json?: {
        replaces?: any | any[];
        space?: number | string;
        suffix?: string;
        escape?: boolean; // TODO boolean only?
    };

    /**
     Default value: none.
     Enables JSONP support by setting the value to the query parameter name containing the function name used to wrap the response payload.
     For example, if the value is 'callback', a request comes in with 'callback=me', and the JSON response is '{ "a":"b" }', the payload will be 'me({ "a":"b" });'. Cannot be used with stream responses.
     The 'Content-Type' response header is set to 'text/javascript' and the 'X-Content-Type-Options' response header is set to 'nosniff', and will override those headers even if explicitly set by response.type().
     */
    jsonp?: string;

    /**
     Default value: { collect: false }.
     Request logging options:
     collect - if true, request-level logs (both internal and application) are collected and accessible via request.logs.
     */
    log?: boolean;

    /**
     Default value: none.
     Route notes used for generating documentation (string or array of strings).
     This setting is not available when setting server route defaults using server.options.routes.
     */
    notes?: string | string[];

    /** Determines how the request payload is processed. */
    payload?: RouteOptionsPayload;

    /**
     Default value: {}.
     Plugin-specific configuration. plugins is an object where each key is a plugin name and the value is the plugin configuration.
     */
    plugins?: PluginSpecificConfiguration;

    /**
     Default value: none.
     The pre option allows defining methods for performing actions before the handler is called. These methods allow breaking the handler logic into smaller, reusable components that can be shared ascross routes, as well as provide a cleaner error handling of prerequisite operations (e.g. load required reference data from a database).
     pre is assigned an ordered array of methods which are called serially in order. If the pre array contains another array of methods as one of its elements, those methods are called in parallel. Note that during parallel execution, if any of the methods error, return a takeover response, or abort signal, the other parallel methods will continue to execute but will be ignored once completed.
     pre can be assigned a mixed array of:
     an array containing the elements listed below, which are executed in parallel.
     an object with:
     method - a lifecycle method.
     assign - key name used to assign the response of the method to in request.pre and request.preResponses.
     failAction - A failAction value which determine what to do when a pre-handler method throws an error. If assign is specified and the failAction setting is not 'error', the error will be assigned.
     a method function - same as including an object with a single method key.
     Note that pre-handler methods do not behave the same way other lifecycle methods do when a value is returned. Instead of the return value becoming the new response payload, the value is used to assign the corresponding request.pre and request.preResponses properties. Otherwise, the handling of errors, takeover response response, or abort signal behave the same as any other lifecycle methods.
     */
    pre?: any; // TODO is necessary come back here. In v16 we can see the definition but in this moment we don't have all the definitions for make this one.

    /**
     * Processing rules for the outgoing response.
     */
    response?: RouteOptionsResponse;

    /**
     Default value: false (security headers disabled).
     Sets common security headers. To enable, set security to true or to an object with the following options:
     hsts - controls the 'Strict-Transport-Security' header, where:
            true - the header will be set to max-age=15768000. This is the default value.
            a number - the maxAge parameter will be set to the provided value.
            an object with the following fields:
                maxAge - the max-age portion of the header, as a number. Default is 15768000.
                includeSubDomains - a boolean specifying whether to add the includeSubDomains flag to the header.
                preload - a boolean specifying whether to add the 'preload' flag (used to submit domains inclusion in Chrome's HTTP Strict Transport Security (HSTS) preload list) to the header.
     xframe - controls the 'X-Frame-Options' header, where:
            true - the header will be set to 'DENY'. This is the default value.
            'deny' - the headers will be set to 'DENY'.
            'sameorigin' - the headers will be set to 'SAMEORIGIN'.
            an object for specifying the 'allow-from' rule, where:
            rule - one of:
                'deny'
                'sameorigin'
                'allow-from'
            source - when rule is 'allow-from' this is used to form the rest of the header, otherwise this field is ignored. If rule is 'allow-from' but source is unset, the rule will be automatically changed to 'sameorigin'.
     xss - boolean that controls the 'X-XSS-PROTECTION' header for Internet Explorer. Defaults to true which sets the header to equal '1; mode=block'.
            Note: this setting can create a security vulnerability in versions of Internet Exploere below 8, as well as unpatched versions of IE8. See here and here for more information. If you actively support old versions of IE, it may be wise to explicitly set this flag to false.
     noOpen - boolean controlling the 'X-Download-Options' header for Internet Explorer, preventing downloads from executing in your context. Defaults to true setting the header to 'noopen'.
     noSniff - boolean controlling the 'X-Content-Type-Options' header. Defaults to true setting the header to its only and default option, 'nosniff'.
     */
    security?: RouteOptionsSecure;

    /**
     Default value: { parse: true, failAction: 'error' }.
     HTTP state management (cookies) allows the server to store information on the client which is sent back to the server with every request (as defined in RFC 6265). state supports the following options:
     parse - determines if incoming 'Cookie' headers are parsed and stored in the request.state object.
     failAction - A failAction value which determines how to handle cookie parsing errors. Defaults to 'error' (return a Bad Request (400) error response).
     */
    state?: {
        parse?: boolean;
        failAction?: FailAction;
    }

    /**
     Default value: none.
     Route tags used for generating documentation (array of strings).
     This setting is not available when setting server route defaults using server.options.routes.
     */
    tags?: string[];

    /**
     Default value: { server: false }.
     Timeouts for processing durations.
     */
    timeout?: {
        /** response timeout in milliseconds. Sets the maximum time allowed for the server to respond to an incoming client request before giving up and responding with a Service Unavailable (503) error response. Disabled by default (false). */
        server?: boolean | number;
        /** by default, node sockets automatically timeout after 2 minutes. Use this option to override this behavior. Defaults to undefined which leaves the node default unchanged. Set to false to disable socket timeouts. */
        socket?: boolean | number;
    };

    /**
     Default value: { headers: true, params: true, query: true, payload: true, failAction: 'error' }.
     Request input validation rules for various request components.
     */
    validate?: RouteOptionsValidate;


}
