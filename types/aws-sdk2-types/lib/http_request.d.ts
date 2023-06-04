import {Endpoint} from './endpoint';
/**
 * The low level HTTP request object, encapsulating all HTTP header and body data sent by a service request.
 */
export class HttpRequest {
    /**
     * Constructs HttpRequest object with provided endpoint and region
     */
    constructor(endpoint: Endpoint, region: string);
    /**
     * The part of the path excluding the query string.
     */
    pathname(): string;
    /**
     * The query string portion of the path.
     */
    search: string;
    /**
     * The request body payload.
     */
    body: string | Buffer;
    /**
     * The endpoint for the request.
     */
    endpoint: Endpoint;
    /**
     * A map of header keys and their respective values.
     */
    headers: {
        [key: string]: string;
    }
    /**
     * The HTTP method of the request.
     */
    method: string;
    /**
     * The path portion of the URI, e.g., "/list/?start=5&num=10".
     */
    path: string;
}
