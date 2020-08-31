// Type definitions for non-npm package Akamai EdgeWorkers JavaScript API 1.0
// Project: https://developer.akamai.com/akamai-edgeworkers-overview
// Definitions by: Evan Hughes <https://github.com/evan-hughes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace EW {
    interface ReadsHeaders {
        /**
         * Provides header values by header name
         */
        getHeader(name: string): string[] | null;
    }

    interface MutatesHeaders {
        /**
         * Sets header value(s), replacing previous one(s)
         */
        setHeader(name: string, value: string | string[]): void;

        /**
         * Add value(s) to header
         */
        addHeader(name: string, value: string | string[]): void;

        /**
         * Removes header
         */
        removeHeader(name: string): void;
    }

    interface ReadsVariables {
        /**
         * Gets the value of a metadata variable
         */
        getVariable(name: string): string | undefined;
    }

    interface MutatesVariables {
        /**
         * Sets the value of a metadata variable, throwing an error if the
         * variable name does not start with 'PMUSER_'
         */
        setVariable(name: string, value: string): void;
    }

    interface HasRespondWith {
        /**
         * Indicates that a complete response is being generated for a
         * request, rather than fetching a response from cache or the origin.
         *
         * If called multiple times within an event handler, the last
         * Response arguments passed in would be the arguments used to
         * generate a response.
         *
         * The maximum response body string length is 2K characters. If
         * validation of the passed in Response object fails it will throw
         * an exception. For example, a Response body bigger than the limit
         * will cause an exception.
         *
         * The deny_reason is an optional argument, and only used if the
         * status code is 403.
         *
         * @param status The HTTP status code
         * @param headers Properties used as key/value pairs for the response
         *  headers
         * @param body The content of the response body
         * @param deny_reason The deny reason set if the status code is a 403
         */
        respondWith(status: number, headers: object, body: string, deny_reason?: string): void;
    }

    interface HasStatus {
        /**
         * The HTTP status of a response sent to the client.
         */
        status: number;
    }

    interface HasRoute {
        /**
         * If called, indicates that the request should be routed to a pre-specified origin
         * server,or have the path or query string modified.
         *
         * @param destination Object holding properties that will control route
         */
        route(destination: Destination): void;
    }

    interface CacheKey {
        /**
         * Specifies that the entire query string should be excluded from the cache key. By
         * default, the entire query string is part of the cache key.
         */
        excludeQueryString(): void;

        /**
         * Specifies that the entire query string should be included from the cache key. This is
         * done by default, however it is provided as an API to be reverted to the default.
         */
        includeQueryString(): void;

        /**
         * Specifies that the named query argument is included in the cache key. Can be called
         * multiple times to include multiple query arguments. Calling this function will result
         * in all query arguments not explicitly included to be excluded from the cache key. By
         * default, the entire query string is part of the cache key. This would override previous
         * calls to "excludeQueryString()" or "includeQueryString()".
         *
         * @param name The name of the query arg to include in the cache key
         */
        includeQueryArgument(name: string): void;

        /**
         * Specifies that the named cookie is included in the cache key. Can be called multiple
         * times to include multiple cookies.
         *
         * @param name The name of the cookie to include in the cid
         */
        includeCookie(name: string): void;

        /**
         * Specifies that the named HTTP request header is included in the cache key. Can be
         * called multiple times to include multiple headers.
         *
         * @param name The name of the header to include in the cid
         */
        includeHeader(name: string): void;

        /**
         * Specifies that the named variable is included in the cache key. Can be called multiple
         * times to include multiple variable.
         *
         * @param name The name of the variable to include in the cid
         */
        includeVariable(name: string): void;
    }

    interface HasCacheKey {
        /**
         * An object for manipulating this requests cache key. Only present during `onClientRequest()`.
         */
        readonly cacheKey: CacheKey;
    }

    interface Request {
        /**
         * The Host header value of the incoming request.
         */
        readonly host: string;

        /**
         * The HTTP method of the incoming request.
         */
        readonly method: string;

        /**
         * The URL path of the incoming request, including the filename and
         * extension, but without any query string.
         */
        readonly path: string;

        /**
         * The scheme of the incoming request ("http" or "https").
         */
        readonly scheme: string;

        /**
         * The query string of the incoming request.
         */
        readonly query: string;

        /**
         * The relative URL of the incoming request. This includes the path as well
         * as the query string.
         */
        readonly url: string;

        /**
         * Object containing properties specifying the end user's geographic
         * location. This value of this property will be null if the contract
         * associated with the request does not have the appropriate entitlements.
         */
        readonly userLocation: UserLocation | undefined;

        /**
         * Object containing properties specifying the device characteristics. The
         * value of this property will be null if the contract associated with the
         * request does not have entitlements for EDC.
         */
        readonly device: Device | undefined;

        /**
         * The CP code used for reporting.
         */
        readonly cpCode: number;
    }

    // Legacy interfaces for backwards compatibility
    interface MutableRequest extends MutatesHeaders, ReadsHeaders, ReadsVariables, Request {
    }
    interface ImmutableRequest extends ReadsHeaders, ReadsVariables, Request {
    }
    interface Response extends HasStatus, MutatesHeaders, ReadsHeaders {
    }

    // onClientRequest
    interface IngressClientRequest extends MutatesHeaders, ReadsHeaders, ReadsVariables, Request, HasRespondWith, HasRoute, HasCacheKey, MutatesVariables {
    }

    // onOriginRequest
    interface IngressOriginRequest extends MutatesHeaders, ReadsHeaders, ReadsVariables, Request, MutatesVariables {
    }

    // onOriginResponse
    interface EgressOriginRequest extends ReadsHeaders, ReadsVariables, Request, HasRespondWith, MutatesVariables {
    }
    interface EgressOriginResponse extends MutatesHeaders, ReadsHeaders, HasStatus {
    }

    // onClientResponse
    interface EgressClientRequest extends ReadsHeaders, ReadsVariables, Request, MutatesVariables {
    }
    interface EgressClientResponse extends MutatesHeaders, ReadsHeaders, HasStatus {
    }

    interface Destination {
        /**
         * The identifier of the pre-configured origin to send the outgoing request to.
         */
        origin?: string;

        /**
         * The new path to use in the outgoing request.
         */
        path?: string;

        /**
         * The new query string to use in the outgoing request.
         */
        query?: string;
    }

    /**
     * Notes:
     * * If the IP address is in the reserved IP space (as designated by the
     *   Internet Assigned Numbers Authority), every property will have the
     *   value of ‘reserved’.
     * * If user location properties can not be supplied for any reason,
     *   undefined is returned for that property
     */
    interface UserLocation {
        /**
         * The continent value is a two-letter code for the continent that
         * the IP address maps to.
         */
        readonly continent: string | undefined;

        /**
         * The country value is an ISO-3166, two-letter code for the country
         * where the IP address maps to.
         */
        readonly country: string | undefined;

        /**
         * The region value is an ISO-3166, two-letter code for the state,
         * province, or region where the IP address maps to.
         */
        readonly region: string | undefined;

        /**
         * The city value is the city (within a 50-mile radius) that the IP
         * address maps to.
         */
        readonly city: string | undefined;

        /**
         * The zipCode value is the zipcode that the IP address maps to
         * (multiple values possible).
         *
         * Contiguous zip codes will be represented as a range of the form
         * "FirstZipInRange LastZipInRange", and multiple ranges may be
         * present (each range separated by the plus (+) character).
         *
         * For example, the following strings are all valid zipCode values:
         *
         * * 10001
         * * 10001+10003
         * * 10001-10003+10005
         * * 10001-10003+10005-10008
         *
         * For country = US and country = PR, zip refers to the 5 digit
         * zipcode.
         *
         * For country = CA, zip refers to the forward sortation area (FSA).
         * For more information on FSA, go to http://www.canadapost.ca and
         * search for FSA.
         *
         * See the EdgeScape Users Guide for more details.
         */
        readonly zipCode: string | undefined;
    }

    /**
     * Notes:
     * * If device properties can not be supplied for any reason,
     *   undefined is returned for each property
     */
    interface Device {
        /**
         * Brand name of the device.
         */
        readonly brandName: string | undefined;

        /**
         * Model name of the device.
         */
        readonly modelName: string | undefined;

        /**
         * Marketing name of the device.
         */
        readonly marketingName: string | undefined;

        /**
         * Indicates if the device is a wireless device.
         */
        readonly isWireless: boolean | undefined;

        /**
         * Indicates if the device is a tablet.
         */
        readonly isTablet: boolean | undefined;

        /**
         * The device operation system.
         */
        readonly os: string | undefined;

        /**
         * The device operating system version.
         */
        readonly osVersion: string | undefined;

        /**
         * The mobile browser name.
         */
        readonly mobileBrowser: string | undefined;

        /**
         * The mobile browser version.
         */
        readonly mobileBrowserVersion: string | undefined;

        /**
         * The screen resolution width, in pixels.
         */
        readonly resolutionWidth: number | undefined;

        /**
         * The screen resolution height, in pixels.
         */
        readonly resolutionHeight: number | undefined;

        /**
         * The physical screen height, in millimeters.
         */
        readonly physicalScreenHeight: number | undefined;

        /**
         * The physical screen width, in millimeters.
         */
        readonly physicalScreenWidth: number | undefined;

        /**
         * Indicates if the browser supports cookies.
         */
        readonly hasCookieSupport: boolean | undefined;

        /**
         * Indicates if the device supports all of the following
         * JavaScript functions: "alert confirm access form elements
         * setTimeout setInterval and document.location"
         */
        readonly hasAjaxSupport: boolean | undefined;

        /**
         * Indicates if the browser supports Flash.
         */
        readonly hasFlashSupport: boolean | undefined;

        /**
         * Indicates if the browser accepts third party cookies.
         */
        readonly acceptsThirdPartyCookie: boolean | undefined;

        /**
         * Indicates the level of support for XHTML.
         */
        readonly xhtmlSupportLevel: number | undefined;

        /**
         * Indicates if the device is a mobile device.
         */
        readonly isMobile: boolean | undefined;
    }
}

/**
 * Query, add, and remove cookies.
 */
declare module "cookies" {
    /**
     * Provides access to the Cookies header of a request, allowing the
     * addition, removal, or modification of cookie values.
     */
    class Cookies {
        /**
         * Constructor for a new "Cookies" struct to hold cookies.
         *
         * @param cookieHeader The raw Cookie header to pass to the constructor
         *      to parse. If an array is passed, the first element must be a
         *      string and that is used as the cookies string to parse. If this
         *      is not passed, an empty cookies object is returned.
         *
         * @param options Only used when parsing an existing Cookie header.
         *      Object to override the default decode of the Cookie values. This
         *      object must have a function named 'decode' on it, which should
         *      take a string and return the result of the custom decoding of
         *      that string.
         */
        constructor(header?: string | string[] | null, options?: object);

        /**
         * Returns the string representation to use when setting the Cookie
         * header, encoding values by default.
         */
        toHeader(): string;

        /**
         * Get the first instance of the cookie matching the given name.
         *
         * @param name Cookie name.
         */
        get(name: string): string | undefined;

        /**
         * Get all Instances of the cookie matching the given name.
         *
         * @param name cookie name.
         */
        getAll(name: string): string[];

        /**
         * Get all names of existing cookies held by this Cookies object.
         */
        names(): string[];

        /**
         * Adds a cookie.
         * @param name Name of the cookie
         * @param value Value of the cookie.
         */
        add(name: string, value: string): void;

        /**
         * Removes all cookies with a given name.
         *
         * @param name Cookie name.
         */
        delete(name: string): void;
    }

    /**
     * Provides access to the SetCookies header of a request.
     */
    class SetCookie {
        /**
         * Constructor for a new "SetCookie" struct to hold a specific Set-Cookie
         * header representation.
         */
        constructor(opts?: {
            name?: string;
            value?: string;
            maxAge?: number;
            domain?: string;
            path?: string;
            expires?: { toUTCString: () => string };
            httpOnly?: boolean;
            secure?: boolean;
            sameSite?: "Strict" | "Lax" | "None" | true;
        });

        /**
         * Returns the string representation to use when setting the Set-Cookie
         * header, encoding values by default.
         */
        toHeader(): string;

        name: string;
        value: string;
        maxAge: number;
        domain: string;
        path: string;
        expires: { toUTCString: () => string };
        httpOnly: boolean;
        secure: boolean;
        sameSite: "Strict" | "Lax" | "None" | true;
    }
}

/**
 * Query, add, and remove parameters from the query string.
 */
declare module "url-search-params" {
    export default class URLSearchParams {
        /**
         * Create a new URLSearchParams object.
         */
        constructor(init?: string | URLSearchParams);

        /**
         * Add a new name/value to the receiver.
         */
        append(name: string, value: string): void;

        /**
         * Remove the given name/value from the receiver.
         */
        delete(name: string): void;

        /**
         * Return the first value with the specified name.
         */
        get(name: string): string | null;

        /**
         * Check if the given name exists.
         */
        has(name: string): boolean;

        /**
         * Return *all* values association with the specified name.
         */
        getAll(name: string): string[];

        /**
         * Iterate through the name/value pairs.
         */
        entries(): IterableIterator<[string, string]>;

        /**
         * Iterate through the names.
         */
        keys(): IterableIterator<string>;

        /**
         * Iterate through the values.
         */
        values(): IterableIterator<string>;

        /**
         * Replace all instances of `name` with a single name/value pair.
         */
        set(name: string, value: string): void;

        /**
         * Return a query string suitable for use in a URL.
         */
        toString(): string;
    }
}
