import {Lifecycle, RouteOptions, Server, Util} from "hapi";

export interface ServerRouteConfig {
}

/**
 * A route configuration object or an array of configuration objects where each object contains:
 * * path - (required) the absolute path used to match incoming requests (must begin with '/'). Incoming requests are compared to the configured paths based on the server's router configuration. The path can include named parameters enclosed in {} which will be matched against literal values in the request as described in Path parameters.
 * * method - (required) the HTTP method. Typically one of 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', or 'OPTIONS'. Any HTTP method is allowed, except for 'HEAD'. Use '*' to match against any HTTP method (only when an exact match was not found, and any match with a specific method will be given a higher priority over a wildcard match). Can be assigned an array of methods which has the same result as adding the same route with different methods manually.
 * * vhost - (optional) a domain string or an array of domain strings for limiting the route to only requests with a matching host header field. Matching is done against the hostname part of the header only (excluding the port). Defaults to all hosts.
 * * handler - (required when handler is not set) the route handler function called to generate the response after successful authentication and validation.
 * * options - additional route options. The options value can be an object or a function that returns an object using the signature function(server) where server is the server the route is being added to and this is bound to the current realm's bind option.
 * * rules - route custom rules object. The object is passed to each rules processor registered with server.rules(). Cannot be used if route.options.rules is defined.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverrouteroute)
 */
export interface ServerRoute {

    /**
     * (required) the absolute path used to match incoming requests (must begin with '/'). Incoming requests are compared to the configured paths based on the server's router configuration. The path can include named parameters enclosed in {} which will be matched against literal values in the request as described in Path parameters.
     * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverrouteroute)
     * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#path-parameters)
     */
    path: string;

    /**
     * (required) the HTTP method. Typically one of 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', or 'OPTIONS'. Any HTTP method is allowed, except for 'HEAD'. Use '*' to match against any HTTP method (only when an exact match was not found, and any match with a specific method will be given a higher priority over a wildcard match). Can be assigned an array of methods which has the same result as adding the same route with different methods manually.
     */
    method: Util.HTTP_METHODS_PARTIAL | Util.HTTP_METHODS_PARTIAL[] | string | string[];

    /**
     * (optional) a domain string or an array of domain strings for limiting the route to only requests with a matching host header field. Matching is done against the hostname part of the header only (excluding the port). Defaults to all hosts.
     */
    vhost?: string | string[];

    /**
     * (required when handler is not set) the route handler function called to generate the response after successful authentication and validation.
     */
    handler?: Lifecycle.Method | object;

    /**
     * additional route options. The options value can be an object or a function that returns an object using the signature function(server) where server is the server the route is being added to and this is bound to the current realm's bind option.
     */
    options?: RouteOptions | ((server: Server) => RouteOptions);

    /**
     * route custom rules object. The object is passed to each rules processor registered with server.rules(). Cannot be used if route.options.rules is defined.
     */
    rules?: object;

    /**
     * Missing documentation. Exist only in examples and test files.
     */
    config?: ServerRouteConfig;

}
