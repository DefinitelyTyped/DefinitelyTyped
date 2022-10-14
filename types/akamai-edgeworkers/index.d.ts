// Type definitions for non-npm package Akamai EdgeWorkers JavaScript API 1.1
// Project: https://developer.akamai.com/akamai-edgeworkers-overview
// Definitions by: Evan Hughes <https://github.com/evan-hughes>
//                 Will Bain <https://github.com/wabain>
//                 Swathi Bala <https://github.com/swathimr>
//                 Aman Nanner <https://github.com/ananner>
//                 Ben Matthews <https://github.com/bmatthew>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Modifyed by: Shige Fukushima <sfukushi@akamai.com>
//

declare namespace EW {
    interface ReadsHeaders {
        /**
         * Provides header values by header name
         */
        getHeader(name: string): string[] | null;
    }

    // This is what we return from the API. Hence the type is string[]
    interface Headers {
        [others: string]: string[];
    }

    interface ReadAllHeader {
        getHeaders(): Headers;
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

    interface ReadsBody {
        /**
         * A promise that reads the body to completion and resolves to a string containing the full
         * body decoded as UTF-8, using the replacement character on encoding errors.
         */
        text(): Promise<string>;

        /**
         * A promise that reads the body to completion and resolves to an Object that is the result
         * of parsing the body as JSON.
         */
        json(): Promise<any>;
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

        /**
         * The body associated with the incoming request.
         */
        readonly body: ReadableStreamEW;
    }

    interface ReadableStreamDefaultControllerEW<R = any> {
        readonly desiredSize: number | null;
        close(): void;
        enqueue(chunk: R): void;
        error(error?: any): void;
    }

    interface ReadableStreamDefaultControllerCallbackEW<R> {
        (controller: ReadableStreamDefaultControllerEW<R>): void | PromiseLike<void>;
    }

    interface ReadableStreamErrorCallback {
        (reason: any): void | PromiseLike<void>;
    }

    /**
     * https://streams.spec.whatwg.org/#underlying-source-api
     */
    interface UnderlyingSource<R = any> {
        start?: ReadableStreamDefaultControllerCallbackEW<R>;
        pull?: ReadableStreamDefaultControllerCallbackEW<R>;
        cancel?: ReadableStreamErrorCallback;
        type?: undefined;
    }
    interface ReadableStreamBYOBRequest {
        readonly view: ArrayBufferView;
        respond(bytesWritten: number): void;
        respondWithNewView(view: ArrayBufferView): void;
    }

    interface ReadableByteStreamController {
        readonly byobRequest: ReadableStreamBYOBRequest | undefined;
        readonly desiredSize: number | null;
        close(): void;
        enqueue(chunk: ArrayBufferView): void;
        error(error?: any): void;
    }

    interface ReadableByteStreamControllerCallback {
        (controller: ReadableByteStreamController): void | PromiseLike<void>;
    }

    interface UnderlyingByteSource {
        autoAllocateChunkSize?: number;
        cancel?: ReadableStreamErrorCallback;
        pull?: ReadableByteStreamControllerCallback;
        start?: ReadableByteStreamControllerCallback;
        type: "bytes";
    }
    interface WritableStreamDefaultController {
        error(error?: any): void;
    }

    interface WritableStreamDefaultControllerStartCallback {
        (controller: WritableStreamDefaultController): void | PromiseLike<void>;
    }

    interface WritableStreamDefaultControllerWriteCallback<W> {
        (chunk: W, controller: WritableStreamDefaultController): void | PromiseLike<void>;
    }

    interface WritableStreamDefaultControllerCloseCallback {
        (): void | PromiseLike<void>;
    }

    interface WritableStreamErrorCallback {
        (reason: any): void | PromiseLike<void>;
    }

    interface UnderlyingSink<W = any> {
        start?: WritableStreamDefaultControllerStartCallback;
        write?: WritableStreamDefaultControllerWriteCallback<W>;
        close?: WritableStreamDefaultControllerCloseCallback;
        abort?: WritableStreamErrorCallback;
        type?: undefined;
    }
    interface ReadableStreamReadResult<T> {
        readonly done: boolean;
        readonly value: T;
    }

    interface PipeOptions {
        preventAbort?: boolean;
        preventCancel?: boolean;
        preventClose?: boolean;
        signal?: { aborted: boolean };
    }

    interface QueuingStrategySizeCallback<T = any> {
        (chunk: T): number;
    }

    interface QueuingStrategy<T = any> {
        highWaterMark?: number;
        size?: QueuingStrategySizeCallback<T>;
    }

    interface WritableStreamDefaultWriter<W = any> {
        readonly closed: Promise<void>;
        readonly desiredSize: number | null;
        readonly ready: Promise<void>;
        abort(reason?: any): Promise<void>;
        close(): Promise<void>;
        releaseLock(): void;
        write(chunk: W): Promise<void>;
    }

    interface WritableStreamEW<W = any> {
        readonly locked: boolean;
        abort(reason?: any): Promise<void>;
        close(): Promise<void>;
        getWriter(): WritableStreamDefaultWriter<W>;
    }

    const WritableStreamEW: {
        prototype: WritableStreamEW;
        new <W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStreamEW<W>;
    };

    interface ReadableStreamEW<R = any> {
        readonly locked: boolean;
        cancel(reason?: any): Promise<void>;
        getReader(options: { mode: "byob" }): ReadableStreamBYOBReader;
        getReader(): ReadableStreamDefaultReader<R>;
        pipeThrough<T>({ writable, readable }: { writable: WritableStreamEW<R>, readable: ReadableStreamEW<T> }, options?: PipeOptions): ReadableStreamEW<T>;
        pipeTo(dest: WritableStreamEW<R>, options?: PipeOptions): Promise<void>;
        tee(): [ReadableStreamEW<R>, ReadableStreamEW<R>];
    }

    const ReadableStreamEW: {
        prototype: ReadableStreamEW;
        new(underlyingSource: UnderlyingByteSource, strategy?: { highWaterMark?: number, size?: undefined }): ReadableStreamEW<Uint8Array>;
        new <R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStreamEW<R>;
    };

    interface ReadableStreamBYOBReader {
        readonly closed: Promise<void>;
        cancel(reason?: any): Promise<void>;
        read<T extends ArrayBufferView>(view: T): Promise<ReadableStreamReadResult<T>>;
        releaseLock(): void;
    }

    interface ReadableStreamDefaultReader<R = any> {
        readonly closed: Promise<void>;
        cancel(reason?: any): Promise<void>;
        read(): Promise<ReadableStreamReadResult<R>>;
        releaseLock(): void;
    }

    // Legacy interfaces for backwards compatability
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
    interface EgressClientRequest extends ReadsHeaders, ReadsVariables, Request, HasRespondWith, MutatesVariables {
    }
    interface EgressClientResponse extends MutatesHeaders, ReadsHeaders, HasStatus {
    }

    // responseProvider
    interface ResponseProviderRequest extends Request, ReadsHeaders, ReadAllHeader, ReadsBody, ReadsVariables {
    }

    interface Destination {
        /**
         * The identifier of the pre-configured origin to send the outgoing request to.
         */
        origin?: string | undefined;

        /**
         * The new path to use in the outgoing request.
         */
        path?: string | undefined;

        /**
         * The new query string to use in the outgoing request.
         */
        query?: string | undefined;
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

    export { ReadableStreamEW, WritableStreamEW, ReadableStreamDefaultControllerEW, QueuingStrategy, UnderlyingSource, UnderlyingByteSource, UnderlyingSink, ReadsHeaders, ReadAllHeader, ResponseProviderRequest, IngressClientRequest, IngressOriginRequest, EgressOriginRequest, EgressOriginResponse, EgressClientRequest, EgressClientResponse };
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
            name?: string | undefined;
            value?: string | undefined;
            maxAge?: number | undefined;
            domain?: string | undefined;
            path?: string | undefined;
            expires?: { toUTCString: () => string } | undefined;
            httpOnly?: boolean | undefined;
            secure?: boolean | undefined;
            sameSite?: "Strict" | "Lax" | "None" | true | undefined;
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
 * Creates a response that can be returned from the `responseProvider()`
 * callback in a promise.
 */
declare module "create-response" {
    import { ReadableStream } from "streams";

    /**
     * Specifies headers for createResponse(). Keys are treated as header
     * names, and values are treated as header values.
     */
    interface Headers {
        [others: string]: string | string[];
    }

    /**
     * A response body, either in the form of a static string or a readable stream.
     */
    type CreateResponseBody = string | ReadableStream;

    /**
     * Generates a return value for responseProvider(). It validates the
     * passed values and returns an opaque object. Callers should be
     * prepared for the function to throw exceptions if they specify invalid
     * arguments.
     *
     * @param status The HTTP status code of the outgoing response. Must be
     *          in the range of 100-599.
     * @param headers Properties used as key:value pairs for the response
     *          headers. Keys are strings that contain header names, values
     *          are either strings or arrays of strings.
     * @param body Content of the response body. When specified as a
     *          string, the body is limited to 100,000 bytes. When specified
     *          as a ReadableStream, there is no limit.
     * @param denyReason Deny reason when the status code is 403.
     */
    function createResponse(status: number, headers: Headers, body: CreateResponseBody, denyReason?: string): object;
    function createResponse(body?: CreateResponseBody, opts?: {
        status?: number | undefined, headers?: Headers | undefined, body?: object | undefined, denyReason?: string | undefined
    }): object;
}

declare module "http-request" {
    import { ReadableStream } from "streams";

    /**
     * A request body, either in the form of a static string or a readable stream.
     */
    type RequestBody = string | ReadableStream;

    /**
     * Performs a subrequest, fetching the requested resource asynchronously.
     *
     * @param url A String containing the URL to fetch. Can be an absolute
     *      or relative URL. Relative URLs will use the parent request as
     *      the base URL. Only "http" and "https" are supported for the
     *      scheme. Specifying port numbers is not supported.
     * @param options May include
     *  - `method` The HTTP method to use.
     *  - `headers` Request headers to specify.
     *  - `body` The request payload.
     *  - `timeout` The request timeout, in milliseconds.
     */
    function httpRequest(url: string, options?: {
        method?: string | undefined,
        headers?: { [others: string]: string | string[] } | undefined,
        body?: RequestBody | undefined,
        timeout?: number | undefined
    }): Promise<HttpResponse>;

    /**
     * Describes the result of a `httpRequest()`.
     */
    interface HttpResponse extends EW.ReadsHeaders, EW.ReadAllHeader {
        /**
         * The HTTP status code
         */
        readonly status: number;

        /**
         * A boolean which is true for 2XX responses
         */
        readonly ok: boolean;

        body: ReadableStream;

        /**
         * Returns a Promise that resolves to a string containing the
         * response body. Note that the body is buffered in memory.
         */
        text(): Promise<string>;

        /**
         * Parses the body of the response as JSON. The response is buffered
         * and `JSON.parse()` is run on the text.
         */
        json(): Promise<any>;
    }
}

/**
 * Provides implementations of the [WHATWG Streams Standard].
 *
 * [WHATWG Streams Standard]: https://streams.spec.whatwg.org
 */
declare module "streams" {
    interface ReadableStream<R = any> extends EW.ReadableStreamEW {
    }

    const ReadableStream: {
        prototype: ReadableStream;
        new(underlyingSource: EW.UnderlyingByteSource, strategy?: { highWaterMark?: number, size?: undefined }): ReadableStream<Uint8Array>;
        new <R = any>(underlyingSource?: EW.UnderlyingSource<R>, strategy?: EW.QueuingStrategy<R>): ReadableStream<R>;
    };

    interface WritableStream<R = any> extends EW.WritableStreamEW {
    }

    const WritableStream: {
        prototype: WritableStream;
        new <W = any>(underlyingSink?: EW.UnderlyingSink<W>, strategy?: EW.QueuingStrategy<W>): WritableStream<W>;
    };

    interface ReadableStreamDefaultController<R = any> extends EW.ReadableStreamDefaultControllerEW {
    }

    interface TransformStream<I = any, O = any> {
        readonly readable: ReadableStream<O>;
        readonly writable: WritableStream<I>;
    }

    const TransformStream: {
        prototype: TransformStream;
        new <I = any, O = any>(transformer?: Transformer<I, O>, writableStrategy?: EW.QueuingStrategy<I>, readableStrategy?: EW.QueuingStrategy<O>): TransformStream<I, O>;
    };

    interface Transformer<I = any, O = any> {
        flush?: TransformerFlushCallback<O>;
        readableType?: undefined;
        start?: TransformerStartCallback<O>;
        transform?: TransformerTransformCallback<I, O>;
        writableType?: undefined;
    }

    interface TransformerFlushCallback<O> {
        (controller: TransformStreamDefaultController<O>): void | Promise<void>;
    }

    interface TransformerStartCallback<O> {
        (controller: TransformStreamDefaultController<O>): void | Promise<void>;
    }

    interface TransformerTransformCallback<I, O> {
        (chunk: I, controller: TransformStreamDefaultController<O>): void | Promise<void>;
    }

    interface TransformStreamDefaultController<O = any> {
        readonly desiredSize: number | null;
        enqueue(chunk: O): void;
        error(reason?: any): void;
        terminate(): void;
    }

    interface CountQueuingStrategy {
        highWaterMark: number;
        size(chunk: any): 1;
    }

    interface ByteLengthQueuingStrategy extends EW.QueuingStrategy<ArrayBufferView> {
        highWaterMark: number;
        size(chunk: ArrayBufferView): number;
    }

    const ByteLengthQueuingStrategy: {
        prototype: ByteLengthQueuingStrategy;
        new(options: { highWaterMark: number }): ByteLengthQueuingStrategy;
    };

    export { ByteLengthQueuingStrategy, CountQueuingStrategy, ReadableStream, TransformStream, WritableStream, ReadableStreamDefaultController };
}

declare module "text-encode-transform" {
    import { ReadableStream, WritableStream } from "streams";

    interface TextEncoderCommon {
        /**
         * Returns "utf-8".
         */
        readonly encoding: string;
    }

    interface TextEncoderStream extends GenericTransformStream, TextEncoderCommon {
        readonly readable: ReadableStream<Uint8Array>;
        readonly writable: WritableStream<string>;
    }

    const TextEncoderStream: {
        prototype: TextEncoderStream;
        new(): TextEncoderStream;
    };

    type BufferSource = ArrayBufferView | ArrayBuffer;

    interface TextDecoderOptions {
        fatal?: boolean | undefined;
        ignoreBOM?: boolean | undefined;
    }

    interface GenericTransformStream {
        /**
         * Returns a readable stream whose chunks are strings resulting from running encoding's decoder on the chunks written to writable.
         */
        readonly readable: ReadableStream;
        /**
         * Returns a writable stream which accepts [AllowShared] BufferSource chunks and runs them through encoding's decoder before making them available to readable.
         *
         * Typically this will be used via the pipeThrough() method on a ReadableStream source.
         *
         * ```
         * var decoder = new TextDecoderStream(encoding);
         * byteReadable
         *   .pipeThrough(decoder)
         *   .pipeTo(textWritable);
         * ```
         *
         * If the error mode is "fatal" and encoding's decoder returns error, both readable and writable will be errored with a TypeError.
         */
        readonly writable: WritableStream;
    }

    interface TextDecoderCommon {
        /**
         * Returns encoding's name, lowercased.
         */
        readonly encoding: string;
        /**
         * Returns true if error mode is "fatal", and false otherwise.
         */
        readonly fatal: boolean;
        /**
         * Returns true if ignore BOM flag is set, and false otherwise.
         */
        readonly ignoreBOM: boolean;
    }

    interface TextDecoderStream extends GenericTransformStream, TextDecoderCommon {
        readonly readable: ReadableStream<string>;
        readonly writable: WritableStream<BufferSource>;
    }

    const TextDecoderStream: {
        prototype: TextDecoderStream;
        new(label?: string, options?: TextDecoderOptions): TextDecoderStream;
    };

    export { TextEncoderStream, TextDecoderStream };
}

/**
 * Provides a debug logging facility. When debugging is enabled, log
 * messages are written to response headers or the responseProvider()
 * multipart output.
 */
declare module "log" {
    interface Logger {
        /**
         * Emit a message to the log. If logging is not enabled, this is a noop.
         *
         * When logging is enabled, the format string indicates how to display
         * the arguments. Format specifiers are:
         *
         * - %s - Call `Value::ToString()` on the corresponding argument.
         * - %d or %i - Convert the argument to an integer.
         * - %f - Convert the argument to a float.
         * - %o or %O - Convert the argument to JSON with `JSON.stringify()`.
         *
         * See https://console.spec.whatwg.org/#formatter.
         *
         * When logging is disabled, the format string is not processed, which
         * makes it more efficient than string arithmatic in production
         * environments.
         *
         * @param format A format string, containing zero or more specifiers.
         * @param values Zero or more values to record in the log.
         */
        log(format: string, ...values: any): void;
    }

    const logger: Logger;

    export { logger };
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

/**
 * The crypto module is available to use in your EdgeWorkers code bundles to expose support for a Javascript crypto API based on the Web Crypto API.
 * See: https://techdocs.akamai.com/edgeworkers/docs/crypto
 */
declare module "crypto" {
    interface Crypto {
        readonly subtle: SubtleCrypto;
        /**
         * A function that allows you to get cryptographically strong random values
         * @param array: An integer-based TypedArray
         *
         * @returns The same array passed as typedArray but with its contents replaced with the newly generated random numbers
         */
        getRandomValues(array: Exclude<TypedArray, Float32Array | Float64Array>): TypedArray;
    }

    type BufferSource = ArrayBufferView | ArrayBuffer;

    type TypedArray =
        | Int8Array
        | Uint8Array
        | Uint8ClampedArray
        | Int16Array
        | Uint16Array
        | Int32Array
        | Uint32Array
        | Float32Array
        | Float64Array;

    type Usages = "encrypt" | "decrypt" | "sign" | "verify" | "deriveKey" | "deriveBits" | "wrapKey" | "unwrapKey";

    type Format = "raw" | "pkcs8" | "spki" | "jwk";

    interface CryptoKey {
        readonly type: string;
        readonly extractable: boolean;
        readonly algorithm: object;
        readonly usages: Usages[];
    }

    /**
     * The subtleCrypto interface provides several cryptographic functions.
     * SubtleCrypto features are obtained through the subtle property of the Crypto object you get from the Crypto property.
     * See: https://techdocs.akamai.com/edgeworkers/docs/crypto
     */
    interface SubtleCrypto {
        /**
         * Imports the key
         * @param format string describing the data format of the key to import
         * @param keyData An ArrayBuffer, a TypedArray, a DataView, or a JSONWebKey object containing the key
         * @param algorithm A string or object defining the type of key to import
         * @param extractable A boolean value indicating whether it will be possible to export the key
         * @param keyUsages An array indicating the operations that can be done with the key
         *
         * @returns A promise that fulfills with the imported key as a CryptoKey object.
         */
        importKey(
            format: Format,
            keyData: BufferSource | TypedArray | object,
            algorithm: string | object,
            extractable: boolean,
            keyUsages: Usages[],
        ): Promise<CryptoKey>;

        /**
         * Encrypts data
         * @param algorithm An object specifying the algorithm to be used
         * @param key A CryptoKey containing the key to be used for encryption
         * @param data An ArrayBuffer, a TypedArray or a DataView containing the data to be encrypted
         *
         * @returns A promise that fulfills with an ArrayBuffer containing the ciphertext
         */
        encrypt(
            algorithm: object,
            key: CryptoKey,
            data: ArrayBuffer | TypedArray | DataView,
        ): Promise<ArrayBuffer>;

        /**
         * Decrypts the encrypted data
         * @param algorithm An object specifying the algorithm to be used
         * @param key A CryptoKey containing the key to be used for decryption
         * @param data An ArrayBuffer, a TypedArray or a DataView containing the data to be decrypted
         *
         * @returns A promise that fulfills with an ArrayBuffer containing the plaintext
         */
        decrypt(
            algorithm: object,
            key: CryptoKey,
            data: ArrayBuffer | TypedArray | DataView,
        ): Promise<ArrayBuffer>;

        /**
         * Verify a digital signature
         * @param algorithm A string or object specifying the algorithm to be used
         * @param key A CryptoKey containing the key that will be used to verify the signature
         * @param signature ArrayBuffer containing the signature to verify
         * @param data ArrayBuffer containing the data whose signature is to be verified
         *
         * @returns A promise that fulfills with a boolean value: true if the signature is valid, false otherwise
         */
        verify(
            algorithm: string | object,
            key: CryptoKey,
            signature: ArrayBuffer,
            data: ArrayBuffer,
        ): Promise<boolean>;

        /**
         * Generate a digest of the given data
         * @param algorithm A string or an object that includes the name property, the string names the hash functions to use
         * @param data An ArrayBuffer, a TypedArray or a DataView containing the data to be digested
         *
         * @returns A promise that fulfills with an ArrayBuffer containing the digest
         */
        digest(
            algorithm: string | object,
            data: ArrayBuffer | TypedArray | DataView,
        ): Promise<ArrayBuffer>;
    }

    /**
     * Converts a PEM-encoded key string into an ArrayBuffer.
     * @param pemEncodedKey
     *
     * @returns ArrayBuffer
     */
    export function pem2ab(pemEncodedKey: string): ArrayBuffer;

    const crypto: Crypto;

    export { crypto };
}
