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
export interface RouteOptionsCors {
    /**
     * an array of allowed origin servers strings ('Access-Control-Allow-Origin'). The array can contain any combination of fully qualified origins along with origin strings containing a wildcard '*' character, or a single '*' origin string. If set to 'ignore', any incoming Origin header is ignored (present or not) and the 'Access-Control-Allow-Origin' header is set to '*'. Defaults to any origin ['*'].
     */
    origin?: string[] | '*'| 'ignore';
    /**
     * number of seconds the browser should cache the CORS response ('Access-Control-Max-Age'). The greater the value, the longer it will take before the browser checks for changes in policy. Defaults to 86400 (one day).
     */
    maxAge?: number;
    /**
     * a strings array of allowed headers ('Access-Control-Allow-Headers'). Defaults to ['Accept', 'Authorization', 'Content-Type', 'If-None-Match'].
     */
    headers?: string[];
    /**
     * a strings array of additional headers to headers. Use this to keep the default headers in place.
     */
    additionalHeaders?: string[];
    /**
     * a strings array of exposed headers ('Access-Control-Expose-Headers'). Defaults to ['WWW-Authenticate', 'Server-Authorization'].
     */
    exposedHeaders?: string[];
    /**
     * a strings array of additional headers to exposedHeaders. Use this to keep the default headers in place.
     */
    additionalExposedHeaders?: string[];
    /**
     * if true, allows user credentials to be sent ('Access-Control-Allow-Credentials'). Defaults to false.
     */
    credentials?: boolean;
}
