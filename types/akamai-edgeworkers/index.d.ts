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
         * Get's the value of a request variable
         */
        getVariable(name: string): string | undefined;
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
         * The Relative URL of the incoming request. This includes the path as well
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
         * Object containing properties specifying the device characteristics. This
         * value of this property will be null if the contract associated with the
         * request does not have entitlements for EDC.
         */
        readonly device: Device | undefined;

        /**
         * The cpcode used for reporting.
         */
        readonly cpCode: number;
    }

    interface MutableRequest extends MutatesHeaders, ReadsHeaders, ReadsVariables, Request {
    }

    interface ImmutableRequest extends ReadsHeaders, ReadsVariables, Request {
    }

    interface Response extends HasStatus, MutatesHeaders, ReadsHeaders {
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
        continent: string | undefined;

        /**
         * The country value is an ISO-3166, two-letter code for the country
         * where the IP address maps to.
         */
        country: string | undefined;

        /**
         * The region value is an ISO-3166, two-letter code for the state,
         * province, or region where the IP address maps to.
         */
        region: string | undefined;

        /**
         * The city value is the city (within a 50-mile radius) that the IP
         * address maps to.
         */
        city: string | undefined;

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
        zipCode: string | undefined;
    }

    /**
     * Notes:
     * * If device properties can not be supplied for any reason,
     *   undefined is returned for each property
     */
    class Device {
        /**
         * Brand name of the device.
         */
        brandName: string | undefined;

        /**
         * Model name of the device.
         */
        modelName: string | undefined;

        /**
         * Marketing name of the device.
         */
        marketingName: string | undefined;

        /**
         * Indicates if the device is a wireless device.
         */
        isWireless: boolean | undefined;

        /**
         * Indicates if the device is a tablet.
         */
        isTablet: boolean | undefined;

        /**
         * The device operation system.
         */
        os: string | undefined;

        /**
         * The device operating system version.
         */
        osVersion: string | undefined;

        /**
         * The mobile browser name.
         */
        mobileBrowser: string | undefined;

        /**
         * The mobile browser version.
         */
        mobileBrowserVersion: string | undefined;

        /**
         * The screen resolution width, in pixels.
         */
        resolutionWidth: number | undefined;

        /**
         * The screen resolution height, in pixels.
         */
        resolutionHeight: number | undefined;

        /**
         * The physical screen height, in millimeters.
         */
        physicalScreenHeight: number | undefined;

        /**
         * The physical screen width, in millimeters.
         */
        physicalScreenWidth: number | undefined;

        /**
         * Indicates if the browser supports cookies.
         */
        hasCookieSupport: boolean | undefined;

        /**
         * Indicates if the device supports all of the following
         * JavaScript functions: "alert confirm access form elements
         * setTimeout setInterval and document.location"
         */
        hasAjaxSupport: boolean | undefined;

        /**
         * Indicates if the browser supports Flash.
         */
        hasFlashSupport: boolean | undefined;

        /**
         * Indicates if the browser accepts third party cookies.
         */
        acceptsThirdPartyCookie: boolean | undefined;

        /**
         * Indicates the level of support for XHTML.
         */
        xhtmlSupportLevel: number | undefined;

        /**
         * Indicates if the device is a mobile device.
         */
        isMobile: boolean | undefined;
    }
}
