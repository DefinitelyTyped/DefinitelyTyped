// Type definitions for roads 5.0
// Project: https://github.com/Dashron/roads
// Definitions by: Francisco Jesus <https://github.com/dancespiele>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6
/// <reference types="node" />

/**
 * Roads module
 */
export type Keys = string;
export type Option = {[k in Keys]: any};

/**
 * @param validOrigins An array of origin urls that can send requests to this API
 * @param supportsCredentials A boolean, true if you want this endpoint to receive cookies
 * @param responseHeaders An array of valid HTTP response headers
 * @param requestHeaders An array of valid HTTP request headers
 * @param validMethods An array of valid HTTP methods
 * @param cacheMaxAge The maximum age to cache the cors information
 */
export interface Cors {
    validOrigins: string[];
    supportsCredentials?: boolean;
    responseHeaders?: string[];
    requestHeaders?: string[];
    validMethods?: string[];
    cacheMaxAge?: number;
}

/**
 * @param method The HTTP method that was provided to the request
 * @param url The URL that was provided to the request
 * @param body The body that was provided to the request, after it was properly parsed into an object
 * @param headers The headers that were provided to the request
 * @param next The next step of the handler chain
 */
export interface Router {
    method: string;
    path: string;
    fn: () => void;
}

/**
 * @param babelify A set of options that can influence the build process. See all fields below
 * @param envify An object to pass to envify. This allows you to change values between your server and client scripts
 * @param exclude An array of files that should not be included in the build process
 * @param use_sourcemaps Whether or not the build process should include source maps
 */
export interface Options {
    babelify?: Option;
    envify?: Option;
    exclude?: string[];
    external?: any;
    use_sourcemaps?: boolean;
}

/**
 * A Road is a container that holds an array of functions
 * @see <a href="https://github.com/dancespiele/roads#roadsroad" target="_blank">new Road()</a>
 */
export class Road {
    /**
     * Add a custom function that will be executed before every request
     * @param fn Will be called any time a request is made on the object.
     * @see <a href="https://github.com/dancespiele/roads#roadusefunction-fn" target="_blank">Road.use(Function fn)</a>
     */
    use(fn: (method: string, url: any, body: any, headers: Headers, next: () => any) => any): any;

    /**
     * Locate and execute the resource method associated with the request parameters
     * @param method The request HTTP method
     * @param url The request Url
     * @param body the request body
     * @param headers The request headers
     * @see <a href="https://github.com/Dashron/roads#roadrequeststring-method-string-url-dynamic-body-object-headers"
     * target="_blank">Road.request(string method, string url, dynamic body, Object headers)</a>
     */
    request(method: string, url: string, body?: any, headers?: Headers): any;
}

/**
 * The response object contains all of the information you want to send to the client
 * @param body The body of the response
 * @param status The HTTP Status code
 * @param headers Key value pairs of http headers
 * @see <a href="https://github.com/Dashron/roads#roadsresponse" target="_blank">Road.Response</a>
 */
export class Response {
    constructor(body: any, status: number, headers?: Option);

    /**
     * Add a cookie method to the response object. Allows you to set cookies
     * @param name The name of the cookie
     * @param value The value name
     * @param options Cookie options
     */
    setCookie(name: string, value: string, options?: any): void;

    /**
     * Get all the cookies
     */
    getCookies(): any;
}

/**
 * A helper error, that contains information relevant to common HTTP errors
 * @param message A message describing the HTTP error
 * @param code An official http status code
 * @see <a href="https://github.com/Dashron/roads#roadshttperror" target="_blank">Roads.HttpError</a>
 */
export class HttpError {
    invalid_request: number;
    unauthorized: number;
    forbidden: number;
    not_found: number;
    method_not_allowed: number;
    not_acceptable: number;
    conflict: number;
    gone: number;
    unprocessable_entity: number;
    too_many_requests: number;
    internal_server_error: number;
    constructor(message: string, code: number);
}

/**
 * Middleware object
 */
export namespace middleware {
    /**
     * Very simple middleware to apply a single value to the request context
     * @param key The key that should store the value on the request context
     * @param val val The value to apply to the request context
     */
    function applyToContext(key: string, val: any): () => any;

    /**
     * Middleware to kill the trailing slash on http requests
     * @see <a href="https://github.com/Dashron/roads#killslash" target="_blank">killSlash()</a>
     */
    function killSlash(): any;

    /**
     * Middleware to Apply proper cors headers
     * @param options Cors options
     */
    function cors(options: Cors): any;

    /**
     * Translate the request body into a usable value
     * @param body request body
     * @param content_type media type of the body
     */
    function parseBody(body: any, content_type: string): object | string;

    /**
     * Adds two simple functions to get and set a page title on the request context. This is very helpful for isomorphic js, since on the client, page titles aren't part of the rendered view data.
     */
    function setTitle(): any;

    /**
     * Applies a method to the request context that allows you to make requests into another roads object
     * @param key The name of the key in the request context that will store the roads request
     * @param road road The roads object that you will interact with
     */
    function reroute(key: string, road: Road): () => any;

    /**
     *  Middleware to Apply proper cors headers
     */
    class SimpleRouter {
        /**
         * It have all the routers configured
         */
        routers: Router[];

        /**
         * @param road The road for the routers
         */
        constructor(road?: Road);

        /**
         * @param road apply manualy the router middleware
         */
        applyMiddleware(road: Road): void;

        /**
         * Add a route to receive the request
         * @param method Methot to receive the request
         * @param path Paht to receive the request
         * @param fn Handle the request received
         */
        addRoute(method: string, path: string, fn: (url: any, body: any, headers: Headers, next: () => any) => any): any;

        /**
         * Receive file request
         * @param file_path path of the file to receive
         * @param prefix prefix of the path file
         */
        addRouteFile(file_path: string, prefix?: string): any;
    }
}

/**
 * To integrate to differents HTTP server
 */
export namespace integrations {
    /**
     * Integration to express
     * @param road The Road object that contains all routing information for this integration
     */
    function express(road: Road): () => any;

    /**
     * Integration to koa
     * @param road The Road object that contains all routing information for this integration
     */
    function koa(road: Road): () => any;
}

/**
 * A helper object to easily enable PJAX on your website using roads
 */
export class PJAX {
    /**
     * @param road The road that will turn your pjax requests into HTML
     * @param container_element The element that will be filled with your roads output
     * @param window The pages window object to help set page title and other items
     */
    constructor(road: Road, container_element?: Element | null, window?: Window | null);

    /**
     * Adds middleware to the assigned road whcih will adds setTitle to the request context. This allows you to easily update the page title
     */
    addTitleMiddleware(): this;

    /**
     * Assigns the cookie middlware to the road to properly handle cookies
     * @param document The pages document object to properly parse and set cookies
     */
    addCookieMiddleware(document: Document): any;

    /**
     * Hooks up the PJAX functionality to the information provided via the constructor
     */
    register(): any;

    /**
     * @param response_object The response from the roads request
     */
    render(response_object: object): any;
}

/**
 * Browserify function to convert your script to run in the browser
 * @param input_file The source file that will be converted to use in the browser
 * @param output_file The output file that will be accessible by your browser
 * @param options A set of options that can influence the build process. See all fields below
 */
export function build(input_file: string, output_file: string, options?: Options): any;
