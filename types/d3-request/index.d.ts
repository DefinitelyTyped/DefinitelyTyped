// Last module patch version validated against: 1.0.6

import { DSVParsedArray, DSVRowString } from "d3-dsv";

export interface Request {
    /**
     * Aborts this request, if it is currently in-flight, and returns this request instance.
     * See XMLHttpRequest’s abort.
     */
    abort(): this;

    /**
     * Equivalent to `request.send` with the GET method: `request.send("GET")`.
     */
    get(): this;
    /**
     * Equivalent to `request.send` with the GET method: `request.send("GET", data)`.
     */
    get<RequestData>(data: RequestData): this;
    /**
     * Equivalent to `request.send` with the GET method: `request.send("GET", callback)`.
     */
    get<ResponseData>(callback: (error: any, d: ResponseData) => void): this;
    /**
     * Equivalent to `request.send` with the GET method: `request.send("GET", data, callback)`.
     */
    get<RequestData, ResponseData>(data: RequestData, callback: (error: any, d: ResponseData) => void): this;

    /**
     * Returns the current value of the request header with the specified name.
     * Header names are case-insensitive.
     */
    header(name: string): string;
    /**
     * Sets the request header with the specified name to the specified value and returns this request instance.
     * If value is null, removes the request header with the specified name instead.
     * Header names are case-insensitive.
     *
     * Request headers can only be modified before the request is sent.
     * Therefore, you cannot pass a callback to the request constructor if you wish to specify a header;
     * use `request.get` or similar instead.
     */
    header(name: string, value: string | null): this;

    /**
     * Returns the current mime type, which defaults to null.
     */
    mimeType(): string | null;
    /**
     * Sets the request mime type to the specified value and returns this request instance.
     * If type is null, clears the current mime type (if any) instead.
     *
     * The mime type is used to both set the "Accept" request header and for `overrideMimeType`, where supported.
     *
     * The request mime type can only be modified before the request is sent.
     * Therefore, you cannot pass a callback to the request constructor if you wish to override the mime type;
     * use `request.get` or similar instead.
     */
    mimeType(value: string | null): this;

    /**
     * Returns the currently-assigned listener for the "beforesend" type, if any.
     */
    on(type: "beforesend"): ((this: this, xhr: XMLHttpRequest) => void) | undefined;
    /**
     * Returns the currently-assigned listener for the "progress" type, if any.
     */
    on(type: "progress"): ((this: this, progressEvent: ProgressEvent) => void) | undefined;
    /**
     * Returns the currently-assigned listener for the "error" type, if any.
     */
    on(type: "error"): ((this: this, error: any) => void) | undefined;
    /**
     * Returns the currently-assigned listener for the "load" type, if any.
     */
    on<ResponseData>(type: "load"): ((this: this, data: ResponseData) => void) | undefined;
    /**
     * Returns the currently-assigned listener for the specified type, if any.
     */
    on(type: string): ((this: this, data: any) => void) | undefined;

    /**
     * Removes the current event listener for the specified type, if any.
     */
    on(type: string, listener: null): this;

    /**
     * Sets the event listener for the "beforesend" type,
     * to allow custom headers and the like to be set before the request is sent,
     * and returns this request instance.
     *
     * If an event listener was already registered for the same type, the existing listener is removed before the new listener is added.
     * To register multiple listeners for the same type, the type may be followed by an optional name, such as `beforesend.foo`. See d3-dispatch for details.
     */
    on(type: "beforesend", listener: (this: this, xhr: XMLHttpRequest) => void): this;
    /**
     * Sets the event listener for the "progress" type,
     * to monitor the progress of the request,
     * and returns this request instance.
     *
     * If an event listener was already registered for the same type, the existing listener is removed before the new listener is added.
     * To register multiple listeners for the same type, the type may be followed by an optional name, such as `progress.foo`. See d3-dispatch for details.
     */
    on(type: "progress", listener: (this: this, progressEvent: ProgressEvent) => void): this;
    /**
     * Sets the event listener for the "error" type,
     * when the request completes unsuccessfully; this includes 4xx and 5xx response codes,
     * and returns this request instance.
     *
     * If an event listener was already registered for the same type, the existing listener is removed before the new listener is added.
     * To register multiple listeners for the same type, the type may be followed by an optional name, such as `error.foo`. See d3-dispatch for details.
     */
    on(type: "error", listener: (this: this, error: any) => void): this;
    /**
     * Sets the event listener for the "load" type,
     * when the request completes successfully,
     * and returns this request instance.
     *
     * If an event listener was already registered for the same type, the existing listener is removed before the new listener is added.
     * To register multiple listeners for the same type, the type may be followed by an optional name, such as `load.foo`. See d3-dispatch for details.
     */
    on<ResponseData>(type: "load", listener: (this: this, data: ResponseData) => void): this;
    /**
     * Sets the event listener for the specified type,
     * and returns this request instance.
     *
     * The type must be one of the following: "beforesend", "progress", "load", "error".
     *
     * If an event listener was already registered for the same type, the existing listener is removed before the new listener is added.
     * To register multiple listeners for the same type, the type may be followed by an optional name, such as `load.foo`. See d3-dispatch for details.
     */
    on(type: string, listener: (this: this, data: any) => void): this;

    /**
     * Returns the current password, which defaults to null.
     */
    password(): string | null;
    /**
     * Sets the password for authentication to the specified string and returns this request instance.
     */
    password(value: string | null): this;

    /**
     * Equivalent to `request.send` with the POST method: `request.send("POST")`.
     */
    post(): this;
    /**
     * Equivalent to `request.send` with the POST method: `request.send("POST", data)`.
     */
    post<RequestData>(data: RequestData): this;
    /**
     * Equivalent to `request.send` with the POST method: `request.send("POST", callback)`.
     */
    post<ResponseData>(callback: (this: this, error: any, d: ResponseData) => void): this;
    /**
     * Equivalent to `request.send` with the POST method: `request.send("POST", data, callback)`.
     */
    post<RequestData, ResponseData>(
        data: RequestData,
        callback: (this: this, error: any, d: ResponseData) => void,
    ): this;

    /**
     * Sets the response value function to the specified function and returns this request instance.
     * The response value function is used to map the response XMLHttpRequest object to a useful data value.
     * See the convenience methods `json` and `text` for examples.
     */
    response<ResponseData>(callback: (this: this, response: XMLHttpRequest) => ResponseData): this;

    /**
     * Returns the current response type, which defaults to `` (the empty string).
     */
    responseType(): XMLHttpRequestResponseType | undefined;
    /**
     * Sets the response type attribute of the request and returns this request instance. Typical values are: `` (the empty string), `arraybuffer`, `blob`, `document`, and `text`.
     */
    responseType(value: XMLHttpRequestResponseType): this;

    /**
     * Issues this request using the specified method (such as GET or POST).
     *
     * The listeners "load" and "error" should be registered via `request.on`.
     */
    send(method: string): this;
    /**
     * Issues this request using the specified method (such as GET or POST), posting the specified data in the request body, and returns this request instance.
     *
     * The listeners "load" and "error" should be registered via `request.on`.
     */
    send<RequestData>(method: string, data: RequestData): this;
    /**
     * Issues this request using the specified method (such as GET or POST) and returns this request instance.
     * The callback will be invoked asynchronously when the request succeeds or fails.
     * The callback is invoked with two arguments: the error, if any, and the response value.
     * The response value is undefined if an error occurs.
     */
    send<ResponseData>(method: string, callback: (this: this, error: any | null, d: ResponseData | null) => void): this;
    /**
     * Issues this request using the specified method (such as GET or POST), posting the specified data in the request body, and returns this request instance.
     * The callback will be invoked asynchronously when the request succeeds or fails.
     * The callback is invoked with two arguments: the error, if any, and the response value.
     * The response value is undefined if an error occurs.
     */
    send<RequestData, ResponseData>(
        method: string,
        data: RequestData,
        callback: (this: this, error: any | null, d: ResponseData | null) => void,
    ): this;

    /**
     * Returns the current response timeout, which defaults to 0.
     */
    timeout(): number;
    /**
     * Sets the timeout attribute of the request to the specified number of milliseconds and returns this request instance.
     */
    timeout(value: number): this;

    /**
     * Returns the current user name, which defaults to null.
     */
    user(): string | null;
    /**
     * Sets the user name for authentication to the specified string and returns this request instance.
     */
    user(value: string | null): this;
}

export interface DsvRequest extends Request {
    row<ParsedRow extends object>(
        value: (rawRow: DSVRowString, index: number, columns: string[]) => ParsedRow,
    ): DsvRequest;
}

/**
 * Returns a new request for the CSV file at the specified url with the default mime type `text/csv`.
 */
export function csv(url: string): DsvRequest;
/**
 * Returns a new request for the CSV file at the specified url with the default mime type `text/csv`.
 * And send a GET request.
 */
export function csv(
    url: string,
    callback: (this: DsvRequest, error: any, d: DSVParsedArray<DSVRowString>) => void,
): DsvRequest;
/**
 * Returns a new request for the CSV file at the specified url with the default mime type `text/csv`.
 * And send a GET request.
 * Use a row conversion function to map and filter row objects to a more-specific representation; see `dsv.parse` for details.
 */
export function csv<ParsedRow extends object>(
    url: string,
    row: (rawRow: DSVRowString, index: number, columns: string[]) => ParsedRow,
    callback: (this: DsvRequest, error: any, d: DSVParsedArray<ParsedRow>) => void,
): DsvRequest;

/**
 * Returns a new request for the HTML file at the specified url with the default mime type `text/html`. The HTML file is returned as a document fragment.
 */
export function html(url: string): Request;
/**
 * Returns a new request for the HTML file at the specified url with the default mime type `text/html`. The HTML file is returned as a document fragment.
 * And send a GET request.
 */
export function html(url: string, callback: (this: Request, error: any, d: DocumentFragment) => void): Request;

/**
 * Returns a new request to get the JSON file at the specified url with the default mime type `application/json`.
 */
export function json(url: string): Request;
/**
 * Returns a new request to get the JSON file at the specified url with the default mime type `application/json`.
 * And send a GET request.
 */
export function json<ParsedObject extends { [key: string]: any }>(
    url: string,
    callback: (this: Request, error: any, d: ParsedObject) => void,
): Request;

/**
 * Returns a new request for specified url. The returned request is not yet sent and can be further configured.
 *
 * See `d3.json`, `d3.csv`, `d3.tsv`, `d3.text`, `d3.html` and `d3.xml` for content-specific convenience constructors.
 */
export function request(url: string): Request;
/**
 * Returns a new request for specified url. It is equivalent to calling `request.get` immediately after construction: `d3.request(url).get(callback)`.
 * And send a GET request.
 *
 * If you wish to specify a request header or a mime type, you must not specify a callback to the constructor.
 * Use `request.header` or `request.mimeType` followed by `request.get` instead.
 *
 * See `d3.json`, `d3.csv`, `d3.tsv`, `d3.text`, `d3.html` and `d3.xml` for content-specific convenience constructors.
 */
export function request(url: string, callback: (this: Request, error: any, d: XMLHttpRequest) => void): Request;

/**
 * Returns a new request to get the text file at the specified url with the default mime type `text/plain`.
 */
export function text(url: string): Request;
/**
 * Returns a new request to get the text file at the specified url with the default mime type `text/plain`.
 * And send a GET request.
 */
export function text(url: string, callback: (this: Request, error: any, d: string) => void): Request;

/**
 * Returns a new request for a TSV file at the specified url with the default mime type `text/tab-separated-values`.
 */
export function tsv(url: string): DsvRequest;
/**
 * Returns a new request for a TSV file at the specified url with the default mime type `text/tab-separated-values`.
 * And send a GET request.
 */
export function tsv(
    url: string,
    callback: (this: DsvRequest, error: any, d: DSVParsedArray<DSVRowString>) => void,
): DsvRequest;
/**
 * Returns a new request for a TSV file at the specified url with the default mime type `text/tab-separated-values`.
 * And send a GET request.
 * Use a row conversion function to map and filter row objects to a more-specific representation; see `dsv.parse` for details.
 */
export function tsv<ParsedRow extends object>(
    url: string,
    row: (rawRow: DSVRowString, index: number, columns: string[]) => ParsedRow,
    callback: (this: DsvRequest, error: any, d: DSVParsedArray<ParsedRow>) => void,
): DsvRequest;

/**
 * Returns a new request to get the XML file at the specified url with the default mime type `application/xml`.
 */
export function xml(url: string): Request;
/**
 * Returns a new request to get the XML file at the specified url with the default mime type `application/xml`.
 * And send a GET request.
 */
export function xml(url: string, callback: (this: Request, error: any, d: any) => void): Request;
