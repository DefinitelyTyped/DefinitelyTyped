// Type definitions for stubby 4.1
// Project: https://github.com/mrak/stubby4node
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as http from 'http';
import * as tls from 'tls';

export type StubbyMethod = 'GET' | 'PUT' | 'POST' | 'HEAD' | 'PATCH' | 'TRACE' | 'DELETE' | 'CONNECT' | 'OPTIONS';

export interface StubbyRequest {
    /**
     * - is a full-fledged **regular expression**
     * - This is the only required property of an endpoint.
     * - signify the url after the base host and port (i.e. after
     *   `localhost:8882`).
     * - any query parameters are stripped (so don't include them, that's what
     *   `query` is for).
     *   - `/url?some=value&another=value` becomes `/url`
     * - no checking is done for URI-encoding compliance.
     *   - If it's invalid, it won't ever trigger a match.
     */
    url: string;
    /**
     * - defaults to `GET`.
     * - case-insensitive.
     * - can be any of the following:
     *   - HEAD
     *   - GET
     *   - POST
     *   - PUT
     *   - DELETE
     *   - etc.
     * - it can also be an array of values.
     */
    method?: StubbyMethod | StubbyMethod[];
    /**
     * - values are full-fledged **regular expressions**
     * - if omitted, stubby ignores query parameters for the given url.
     * - a yaml hashmap of variable/value pairs.
     * - allows the query parameters to appear in any order in a uri
     * - The following will match either of these:
     *   - /with/parameters?search=search+terms&filter=month
     *   - /with/parameters?filter=month&search=search+terms
     *
     * **NOTE**: repeated querystring keys (often array representations) will
     * have their values converted to a comma-separated list.
     */
    query?: { [key: string]: string };
    /**
     * - is a full-fledged **regular expression**
     * - if omitted, any post data is ignored.
     * - the body contents of the server request, such as form data.
     */
    post?: string;
    /**
     * - if supplied, replaces `post` with the contents of the locally given
     *   file.
     *   - paths are relative from where the `--data` file is located
     * - if the file is not found when the request is made, falls back to `post`
     *   for matching.
     * - allows you to split up stubby data across multiple files
     */
    file?: string;
    /**
     * - not used if `post` or `file` are present.
     * - will be parsed into a JavaScript object.
     * - allows you to specify a JSON string that will be deeply compared with a
     *   JSON request
     */
    json?: string;
    /**
     * - values are full-fledged **regular expressions**
     * - if omitted, stubby ignores headers for the given url.
     * - case-insensitive matching of header names.
     * - a hashmap of header/value pairs similar to `query`.
     */
    headers?: { [key: string]: string };
}

export interface StubbyResponse {
    /**
     * - the HTTP status code of the response.
     * - integer or integer-like string.
     * - defaults to `200`.
     */
    status?: number | string;
    /**
     * - contents of the response body
     * - defaults to an empty content body
     */
    body?: string;
    /**
     * - similar to `request.file`, but the contents of the file are used as the
     *   `body`.
     */
    file?: string;
    /**
     * - similar to `request.headers` except that these are sent back to the
     *   client.
     */
    headers?: { [key: string]: string };
    /**
     * - time to wait, in milliseconds, before sending back the response
     * - good for testing timeouts, or slow connections
     */
    latency?: number;
}

export interface StubbyData {
    /**
     * This object is used to match an incoming request to stubby against the
     * available endpoints that have been configured.
     */
    request: StubbyRequest;
    /**
     * Assuming a match has been made against the given `request` object, data from
     * `response` is used to build the stubbed response back to the client.
     *
     * **ALSO**: The `response` property can also be a yaml sequence of responses
     * that cycle as each request is made.
     *
     * **ALSO**: The `response` property can also be a url (string) or sequence
     * of object/urls. The url will be used to record a response object to be
     * used in calls to stubby. When used this way, data from the `request`
     * portion of the endpoint will be used to assemble a request to the url
     * given as the `response`.
     */
    response?: string | StubbyResponse | Array<string | StubbyResponse>;
}

export interface StubbyCommonOptions {
    /** port number to run the stubs portal */
    stubs?: number;
    /** port number to run the admin portal */
    admin?: number;
    /** port number to run the stubs portal over https */
    tls?: number;
    /** JavaScript Object/Array containing endpoint data */
    data?: StubbyData | StubbyData[];
    /** address/hostname at which to run stubby */
    location?: string;
    /** filename to monitor and load as stubby's data when changes occur */
    watch?: string;
    /** defaults to `true`. Pass in `false` to have console output (if available) */
    quiet?: boolean;
    /** additional options to pass to the underlying tls server */
    _httpsOptions?: tls.TlsOptions;
    datadir?: string;
}

export interface StubbyWithKeyCertOptions extends StubbyCommonOptions {
    /** keyfile contents (in PEM format) */
    key: string | Buffer | Array<Buffer | Object>; // tslint:disable-line:ban-types
    /** certificate file contents (in PEM format) */
    cert: string | Buffer | Array<string | Buffer>;
}

export interface StubbyWithPfxOptions extends StubbyCommonOptions {
    /** pfx file contents (mutually exclusive with key/cert options) */
    pfx?: string | Buffer | Array<string | Buffer | Object>; // tslint:disable-line:ban-types
}

export type StubbyOptions = StubbyWithKeyCertOptions | StubbyWithPfxOptions;

export {};

declare class Endpoint {
    constructor(endpoint: StubbyData, datadir: string);
    matches(request: StubbyRequest): StubbyRequest | null;
}

declare class Endpoints {
    constructor(
        endpoint: StubbyData | StubbyData[],
        callback: (err: Error | undefined, datadir: string) => void,
        datadir: string
    );
    create(
        endpoint: StubbyData | StubbyData[],
        callback: (err: Error | undefined, endpoint: Endpoint) => void,
        datadir: string
    ): void;
    retrieve(id: string, callback: (err: Error | undefined, endpoint: Endpoint) => void): void;
    update(id: string, data: StubbyData, callback: (err?: Error) => void): void;
    delete(id: string, callback: (err?: Error) => void): void;
    gather(callback: (err: Error | undefined, endpoints: Endpoint[]) => void): void;
}

export class Stubby {
    endpoints: Endpoints;

    tlsPortal: tls.Server;
    stubsPortal: http.Server;
    adminPortal: http.Server;

    /** Starts stubby's stubs and admin portals. Executes `callback` afterward. */
    start(callback?: (err?: Error) => void): void;
    start(options: StubbyOptions, callback?: (err?: Error) => void): void;
    /** Closes the connections and ports being used by stubby's stubs and admin portals. Executes callback afterward. */
    stop(callback?: (err?: Error) => void): void;
    /** Simulates a GET request to the admin portal, with the callback receiving the resultant data. */
    get(callback: (err: Error | undefined, endpoints: Endpoints) => void): void;
    get(id: string, callback: (err: Error | undefined, endpoint: Endpoint) => void): void;
    /** Simulates a POST request to the admin portal, with the callback receiving the resultant data. */
    post(data: Endpoint, callback: (err: Error | undefined, endpoint: Endpoint) => void): void;
    /** Simulates a PUT request to the admin portal, with the callback receiving the resultant data. */
    put(id: string, data: Endpoint, callback: (err?: Error) => void): void;
    /** Simulates a DELETE request to the admin portal, with the callback receiving the resultant data. */
    delete(id: string, callback: (err?: Error) => void): void;
}
