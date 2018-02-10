/**
 * Request information:
 * * acceptEncoding - the request preferred encoding.
 * * cors - if CORS is enabled for the route, contains the following:
 * * isOriginMatch - true if the request 'Origin' header matches the configured CORS restrictions. Set to false if no 'Origin' header is found or if it does not match. Note that this is only available after the 'onRequest' extension point as CORS is configured per-route and no routing decisions are made at that point in the request lifecycle.
 * * host - content of the HTTP 'Host' header (e.g. 'example.com:8080').
 * * hostname - the hostname part of the 'Host' header (e.g. 'example.com').
 * * id - a unique request identifier (using the format '{now}:{connection.info.id}:{5 digits counter}').
 * * received - request reception timestamp.
 * * referrer - content of the HTTP 'Referrer' (or 'Referer') header.
 * * remoteAddress - remote client IP address.
 * * remotePort - remote client port.
 * * responded - request response timestamp (0 is not responded yet).
 * Note that the request.info object is not meant to be modified.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestinfo)
 */
export interface RequestInfo {
    /** the request preferred encoding. */
    acceptEncoding: string;
    /** if CORS is enabled for the route, contains the following: */
    cors: {
        /**
         * true if the request 'Origin' header matches the configured CORS restrictions. Set to false if no 'Origin' header is found or if it does not match. Note that this is only available after the 'onRequest' extension point as CORS is configured per-route and no routing decisions are made at that point in the request lifecycle.
         */
        isOriginMatch?: boolean;
    };
    /** content of the HTTP 'Host' header (e.g. 'example.com:8080'). */
    host: string;
    /** the hostname part of the 'Host' header (e.g. 'example.com'). */
    hostname: string;
    /** request reception timestamp. */
    received: number;
    /** content of the HTTP 'Referrer' (or 'Referer') header. */
    referrer: string;
    /** remote client IP address. */
    remoteAddress: string;
    /** remote client port. */
    remotePort: string;
    /** request response timestamp (0 is not responded yet). */
    responded: number;
}
