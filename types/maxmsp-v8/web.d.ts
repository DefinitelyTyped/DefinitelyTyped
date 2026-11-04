/*
 * v8-only globals, web-platform APIs and built-in modules for [v8] / [v8ui] / [v8.codebox] (Max 9.2+).
 * https://docs.cycling74.com/apiref/js/
 *
 * NOTE: TypeScript's "dom" lib must NOT be used (Max defines its own global File and Image),
 * so the subset of web APIs that Max documents is declared here.
 */

// ---------------------------------------------------------------------------------------------
// Console
// ---------------------------------------------------------------------------------------------

/**
 * The Max-console-backed `console` object exposed by the v8 runtime. Output is routed to the Max console: `log`, `info`,
 * and `debug` use normal post rows, `warn` uses warning rows, and `error`, `assert`, and `trace` use error rows.
 *
 * Formatting is a pragmatic subset: string joining, `Error` stack/message rendering, JSON-ish object rendering with a circular
 * fallback, and the `%s`, `%d`, `%i`, `%f`, `%j`, `%o`, `%O`, and `%%` format tokens. Full Node `util.inspect`, `console.table`,
 * grouping, profiling, and configurable output streams are not implemented.
 * @see https://docs.cycling74.com/apiref/js/console/
 */
interface Console {
    /** If `condition` is falsy, prints the remaining arguments using Max error rows. If `condition` is truthy, does nothing. */
    assert(condition?: boolean, ...data: any[]): void;
    /** Increments and prints a counter for the given label (default `"default"`). */
    count(label?: string): void;
    /** Resets the counter for the given label (default `"default"`). */
    countReset(label?: string): void;
    /** Prints a debug message using normal Max console rows. */
    debug(...data: any[]): void;
    /** Prints an error using Max error rows. */
    error(...data: any[]): void;
    /** Prints an informational message. Alias of `console.log()` routing to normal Max console rows. */
    info(...data: any[]): void;
    /** Prints a message using normal Max console rows. */
    log(...data: any[]): void;
    /** Starts a timer under the given label (default `"default"`). */
    time(label?: string): void;
    /** Stops the timer for the given label and prints the elapsed time. */
    timeEnd(label?: string): void;
    /** Prints the elapsed time for the given label without stopping the timer. */
    timeLog(label?: string, ...data: any[]): void;
    /** Prints a stack trace using Max error rows. */
    trace(...data: any[]): void;
    /** Prints a warning using Max warning rows. */
    warn(...data: any[]): void;
}

/**
 * The global `console` instance. Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/global-console/
 */
declare var console: Console;

// ---------------------------------------------------------------------------------------------
// Timers / scheduling
// ---------------------------------------------------------------------------------------------

/**
 * Schedules a one-shot callback to run after a delay (milliseconds, default 0).
 * Backed by the Max scheduler; the returned handle is a numeric ID for use with `clearTimeout()`.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/global-settimeout/
 */
declare function setTimeout(callback: (...args: any[]) => void, delay?: number, ...args: any[]): number;

/**
 * Cancels a timeout previously created with `setTimeout()`.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/global-cleartimeout/
 */
declare function clearTimeout(id: number): void;

/**
 * Schedules a callback to run repeatedly at a fixed interval (milliseconds, default 0).
 * Intervals use Max queue coalescing: if an interval fires faster than its callback can be serviced, pending callbacks are
 * coalesced rather than backlogged indefinitely.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/global-setinterval/
 */
declare function setInterval(callback: (...args: any[]) => void, delay?: number, ...args: any[]): number;

/**
 * Cancels an interval previously created with `setInterval()`.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/global-clearinterval/
 */
declare function clearInterval(id: number): void;

/**
 * Schedules a callback to run on the next scheduler tick. Returns a numeric timer ID for use with `clearImmediate()`.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/global-setimmediate/
 */
declare function setImmediate(callback: (...args: any[]) => void, ...args: any[]): number;

/**
 * Cancels an immediate previously created with `setImmediate()`.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/global-clearimmediate/
 */
declare function clearImmediate(id: number): void;

/**
 * Queues a microtask to run after the current task completes and before the next timer callback.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/global-queuemicrotask/
 */
declare function queueMicrotask(callback: () => void): void;

// ---------------------------------------------------------------------------------------------
// Networking errors
// ---------------------------------------------------------------------------------------------

/**
 * The shape of `Error` objects delivered to networking `'error'` callbacks and promise rejections across `fetch()`,
 * the `net`/`tls`/`dgram` modules, the `http`/`https` modules, `WebSocket`, and `EventSource`.
 * These are ordinary JavaScript `Error` instances with extra properties; any individual property may be absent.
 * Recognized `code` values include Node-style codes (`ECONNREFUSED`, `ETIMEDOUT`, ...) plus internal codes such as
 * `ABORT_ERR`, `ERR_INVALID_URL`, `ERR_SOCKET_CLOSED`, `ERR_TLS_CONTEXT`, `ERR_TLS_SNI`, `ERR_CONTENT_DECODING`,
 * `ERR_HTTP_CONTENT_LENGTH_MISMATCH`, and `ERR_SSL`.
 * @see https://docs.cycling74.com/apiref/js/networkerror/
 */
interface NetworkError extends Error {
    /** Remote address when relevant (e.g. TCP connect or fetch DNS resolution). */
    address?: string;
    /** Node-style error code when known, e.g. `"ECONNREFUSED"`, `"ETIMEDOUT"`. */
    code?: string;
    /** Mirror of `code` for Node compatibility. */
    errno?: string;
    /** Remote port when relevant. */
    port?: number;
    /** The operation that failed, e.g. `"connect"`, `"listen"`, `"read"`, `"write"`. */
    syscall?: string;
}

/**
 * The local or remote endpoint of a socket, as returned by `address()`.
 * IPC endpoints report `family: "IPC"` and `port: 0`, with `address` set to the socket path or pipe name.
 * @see https://docs.cycling74.com/apiref/js/addressinfo/
 */
interface AddressInfo {
    address: string;
    family: string;
    port: number;
}

// ---------------------------------------------------------------------------------------------
// Abort
// ---------------------------------------------------------------------------------------------

/**
 * Signals abortion to abortable operations such as `fetch()`.
 * @see https://docs.cycling74.com/apiref/js/abortsignal/
 */
declare class AbortSignal {
    /** Returns a signal that aborts automatically after `ms` milliseconds. */
    static timeout(ms: number): AbortSignal;
    /** Whether the signal has been aborted. */
    readonly aborted: boolean;
    /** The abort reason, when `aborted` is true. */
    readonly reason: any;
    /** Registers a listener. `type` is typically `"abort"`. */
    addEventListener(type: string, listener: (...args: any[]) => void): void;
    /** Removes a previously registered listener. */
    removeEventListener(type: string, listener: (...args: any[]) => void): void;

    /**
     * Handler called when the signal aborts, with `this` set to the signal and an event whose `type` is "abort"
     * (undocumented; verified in Max 9.2.0). `null` until set.
     */
    onabort: ((this: AbortSignal, event: { type: string }) => void) | null;
}

/**
 * Creates an `AbortSignal` and the means to abort it.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/abortcontroller/
 */
declare class AbortController {
    constructor();
    /** The signal to pass to abortable operations. */
    readonly signal: AbortSignal;
    /** Aborts associated operations and marks `signal` as aborted. */
    abort(reason?: any): void;
}

// ---------------------------------------------------------------------------------------------
// Encoding
// ---------------------------------------------------------------------------------------------

/**
 * Encodes JavaScript strings into UTF-8 bytes. Only UTF-8 is supported.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/textencoder/
 */
declare class TextEncoder {
    constructor();
    /** Always `"utf-8"`. */
    /** Encodes a string (default `""`) into UTF-8 bytes, returned as an `IOBuffer` (a `Uint8Array` subclass). */
    encode(input?: string): import("buffer").IOBuffer;
}

/**
 * Decodes UTF-8 bytes into a JavaScript string. Only UTF-8 is supported.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/textdecoder/
 */
declare class TextDecoder {
    /**
     * @param label the encoding label. Only `"utf-8"` is supported.
     */
    constructor(label?: string, options?: { fatal?: boolean; ignoreBOM?: boolean });
    /** The decoder's encoding, `"utf-8"`. */
    /** Whether decoding errors throw rather than emitting a replacement character. */
    /** Whether a leading byte-order mark is preserved rather than stripped. */
    /** Decodes bytes (an `IOBuffer`, typed array, or `ArrayBuffer`) into a string. */
    decode(input?: ArrayBuffer | ArrayBufferView): string;
}

// ---------------------------------------------------------------------------------------------
// URL
// ---------------------------------------------------------------------------------------------

/**
 * Parses and manipulates URLs. Supported schemes are `http`, `https`, `ws`, and `wss`.
 * There is no ambient `location` global, so `fetch()`, `Request`, and `WebSocket` require absolute URLs;
 * use a `URL` with an explicit base for relative resolution.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/url/
 */
declare class URL {
    /**
     * @param input an absolute URL string, or a relative URL when `base` is supplied.
     * @param base an optional base URL string or `URL` for relative resolution.
     */
    constructor(input: string, base?: string | URL);
    /** The fragment including the leading `#`. */
    hash: string;
    /** The host, including port when present. */
    host: string;
    /** The host without the port. */
    hostname: string;
    /** The full serialized URL. */
    href: string;
    /** The origin, e.g. `"https://example.com"`. */
    readonly origin: string;
    /** The path portion of the URL. */
    pathname: string;
    /** The port as a string, or `""` when none. */
    port: string;
    /** The protocol including the trailing colon, e.g. `"https:"`. */
    protocol: string;
    /** The query string including the leading `?`, kept in sync with `searchParams`. */
    search: string;
    /** The parsed query parameters, kept in sync with `search`. */
    readonly searchParams: URLSearchParams;
    /** Returns the serialized URL (same as `href`). */
    toString(): string;
}

/**
 * Reads and manipulates URL query strings.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/urlsearchparams/
 */
declare class URLSearchParams {
    /**
     * @param init a query string, another `URLSearchParams`, an array of `[name, value]` pairs, or a record of string values.
     */
    constructor(init?: string | URLSearchParams | string[][] | Record<string, string>);
    /** Appends a new name/value pair. */
    append(name: string, value: string): void;
    /** Removes all values for a name. */
    delete(name: string): void;
    /** Iterates `[name, value]` pairs. */
    entries(): IterableIterator<[string, string]>;
    /** Returns the first value for a name, or `null`. */
    get(name: string): string | null;
    /** Returns all values for a name. */
    getAll(name: string): string[];
    /** Returns whether any value exists for a name. */
    has(name: string): boolean;
    /** Iterates parameter names. */
    keys(): IterableIterator<string>;
    /** Sets a name to a single value, replacing any existing values. */
    set(name: string, value: string): void;
    /** Serializes the parameters to a query string (without a leading `?`). */
    toString(): string;
    /** Iterates parameter values. */
    values(): IterableIterator<string>;
}

// ---------------------------------------------------------------------------------------------
// Blob / FormData / Headers
// ---------------------------------------------------------------------------------------------

/**
 * An immutable blob of binary data with a MIME type.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/blob/
 */
declare class Blob {
    /**
     * @param parts the data parts that make up the blob.
     * @param options blob options; `type` sets the MIME type.
     */
    constructor(parts?: Array<string | ArrayBuffer | ArrayBufferView | Blob>, options?: { type?: string });
    /** Size of the blob in bytes. */
    readonly size: number;
    /** MIME type of the blob, or `""`. */
    readonly type: string;
    /** Reads the blob contents as an `ArrayBuffer`. */
    arrayBuffer(): Promise<ArrayBuffer>;
    /** Reads the blob contents as bytes. */
    bytes(): Promise<import("buffer").IOBuffer>;
    /** Returns a new blob containing a byte range (`end` exclusive) of this blob. */
    slice(start?: number, end?: number, contentType?: string): Blob;
    /** Returns a byte-oriented `ReadableStream` over the blob contents. */
    stream(): ReadableStream;
    /** Reads the blob contents as a UTF-8 string. */
    text(): Promise<string>;

    // Also present in Max 9.2.0 but undocumented, so not declared (signatures unknown):
    // name
}

/**
 * A `multipart/form-data` field set.
 * There is intentionally no global `File` web class (Max already provides a different `File` object).
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/formdata/
 */
declare class FormData {
    constructor();
    /** Appends a field, optionally with a filename for blob parts. */
    append(name: string, value: string | Blob, filename?: string): void;
    /** Removes a field. */
    delete(name: string): void;
    /** Iterates `[name, value]` pairs. */
    entries(): IterableIterator<[string, string | Blob]>;
    /** Invokes a callback for each field. */
    forEach(callback: (value: string | Blob, name: string, parent: FormData) => void): void;
    /** Returns the first value for a field, or `null`. */
    get(name: string): string | Blob | null;
    /** Returns all values for a field. */
    getAll(name: string): Array<string | Blob>;
    /** Returns whether a field is present. */
    has(name: string): boolean;
    /** Iterates field names. */
    keys(): IterableIterator<string>;
    /** Sets a field, replacing existing values. */
    set(name: string, value: string | Blob, filename?: string): void;
    /** Iterates field values. */
    values(): IterableIterator<string | Blob>;
}

/**
 * Acceptable initializers for `Headers`.
 * @see https://docs.cycling74.com/apiref/js/headersinit/
 */
type HeadersInit = Headers | string[][] | Record<string, string>;

/**
 * A case-insensitive multimap of HTTP headers.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/headers/
 */
declare class Headers {
    constructor(init?: HeadersInit);
    /** Appends a value to a header, preserving existing values. */
    append(name: string, value: string): void;
    /** Removes a header. */
    /** Iterates `[name, value]` pairs. */
    entries(): IterableIterator<[string, string]>;
    /** Invokes a callback for each header. */
    /** Returns the combined value for a header, or `null`. */
    get(name: string): string | null;
    /** Returns whether a header is present. */
    has(name: string): boolean;
    /** Iterates header names. */
    /** Sets a header, replacing any existing value. */
    set(name: string, value: string): void;
    /** Iterates header values. */
    /** Returns the headers as a plain name/value object (undocumented; verified in Max 9.2.0). */
    toJSON(): Record<string, string>;
}

// ---------------------------------------------------------------------------------------------
// Streams
// ---------------------------------------------------------------------------------------------

/**
 * The result of a single `ReadableStreamDefaultReader.read()` call.
 * @see https://docs.cycling74.com/apiref/js/readablestreamreadresult/
 */
interface ReadableStreamReadResult {
    /** Whether the stream has been fully read. */
    done: boolean;
    /** The chunk read, or `undefined` when `done` is true. */
    value: import("buffer").IOBuffer | undefined;
}

/**
 * A reader that pulls chunks from a `ReadableStream`.
 * @see https://docs.cycling74.com/apiref/js/readablestreamdefaultreader/
 */
interface ReadableStreamDefaultReader {
    /** Resolves when the stream closes or rejects on error. */
    readonly closed: Promise<void>;
    /** Cancels the stream. */
    cancel(reason?: any): Promise<void>;
    /** Reads the next chunk. */
    read(): Promise<ReadableStreamReadResult>;
    /** Releases the reader's lock on the stream. */
    releaseLock(): void;
}

/**
 * A byte-oriented readable stream. Used for `Response.body` and as a streamed request body.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/readablestream/
 */
declare class ReadableStream {
    /**
     * @param underlyingSource an object with optional `start`, `pull`, and `cancel` methods.
     * @param strategy an optional queuing strategy.
     */
    constructor(underlyingSource?: any, strategy?: any);
    /** Async iteration support (`for await ... of`). */
    [Symbol.asyncIterator](): AsyncIterableIterator<import("buffer").IOBuffer>;
    /** Cancels the stream, aborting any underlying transport. */
    cancel(reason?: any): Promise<void>;
    /** Acquires a reader and locks the stream. */
    getReader(): ReadableStreamDefaultReader;
    /** Pipes this stream through a `TransformStream`. */
    pipeThrough(transform: TransformStream): ReadableStream;
    /** Pipes this stream to a `WritableStream`. */
    pipeTo(destination: WritableStream): Promise<void>;
    /** Splits the stream into two independent branches. */
    tee(): [ReadableStream, ReadableStream];
    /** Returns an async iterator over the stream's chunks. */
    values(): AsyncIterableIterator<import("buffer").IOBuffer>;
    /** Whether a reader currently holds the stream's lock (undocumented; verified in Max 9.2.0). */
    readonly locked: boolean;
}

/**
 * A writer that pushes chunks to a `WritableStream`.
 * @see https://docs.cycling74.com/apiref/js/writablestreamdefaultwriter/
 */
interface WritableStreamDefaultWriter {
    /** Resolves when the stream closes or rejects on error. */
    readonly closed: Promise<void>;
    /** Resolves when the stream is ready to accept more data. */
    readonly ready: Promise<void>;
    /** Aborts the stream. */
    abort(reason?: any): Promise<void>;
    /** Closes the stream. */
    close(): Promise<void>;
    /** Releases the writer's lock on the stream. */
    releaseLock(): void;
    /** Writes a chunk of byte data. */
    write(chunk: import("buffer").IOBuffer | ArrayBuffer | ArrayBufferView): Promise<void>;
}

/**
 * A byte-oriented writable stream companion for piping.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/writablestream/
 */
declare class WritableStream {
    /**
     * @param underlyingSink an object with optional `start`, `write`, `close`, and `abort` methods.
     * @param strategy an optional queuing strategy.
     */
    constructor(underlyingSink?: any, strategy?: any);
    /** Aborts the stream. */
    abort(reason?: any): Promise<void>;
    /** Closes the stream. */
    /** Acquires a writer and locks the stream. */
    getWriter(): WritableStreamDefaultWriter;
    /** Whether a writer currently holds the stream's lock (undocumented; verified in Max 9.2.0). */
    readonly locked: boolean;
}

/**
 * A byte-oriented transform stream pairing a writable input with a readable output.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/transformstream/
 */
declare class TransformStream {
    /**
     * @param transformer an object with optional `start`, `transform`, and `flush` methods.
     * @param writableStrategy an optional queuing strategy for the writable side.
     * @param readableStrategy an optional queuing strategy for the readable side.
     */
    constructor(transformer?: any, writableStrategy?: any, readableStrategy?: any);
    /** The readable output side. */
    readonly readable: ReadableStream;
    /** The writable input side. */
    readonly writable: WritableStream;
}

// ---------------------------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------------------------

/**
 * Acceptable values for an outgoing request or response body.
 * Buffered bodies accept strings, byte views, `Blob`, `FormData`, and `URLSearchParams`. A `ReadableStream` body is streamed
 * and requires `duplex: "half"` on the request init.
 * @see https://docs.cycling74.com/apiref/js/bodyinit/
 */
type BodyInit =
    | string
    | import("buffer").IOBuffer
    | ArrayBuffer
    | ArrayBufferView
    | Blob
    | FormData
    | URLSearchParams
    | ReadableStream;

/**
 * Credentials mode controlling cookie sending/storage for a request.
 * @see https://docs.cycling74.com/apiref/js/requestcredentials/
 */
type RequestCredentials = "omit" | "same-origin" | "include";

/**
 * Redirect-following mode for a request.
 * @see https://docs.cycling74.com/apiref/js/requestredirect/
 */
type RequestRedirect = "follow" | "manual" | "error";

/**
 * Options accepted by `fetch()` and the `Request` constructor.
 * @see https://docs.cycling74.com/apiref/js/requestinit/
 */
interface RequestInit {
    /** A keep-alive connection agent from `require("http").Agent` / `require("https").Agent` for pooled connection reuse. */
    agent?: any;
    /** Request body. */
    body?: BodyInit | null;
    /** Cookie credentials mode (default `"same-origin"`). */
    credentials?: RequestCredentials;
    /** Must be `"half"` when `body` is a `ReadableStream` (streamed upload). */
    duplex?: "half";
    /** Request headers. */
    headers?: HeadersInit;
    /** HTTP method (default `"GET"`). */
    method?: string;
    /** Redirect-following mode (default `"follow"`, up to 20 redirects). */
    redirect?: RequestRedirect;
    /** An `AbortSignal` that aborts the request when triggered. */
    signal?: AbortSignal;
}

/**
 * A request to be sent with `fetch()`. The URL must be an absolute `http://` or `https://` URL.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/request/
 */
declare class Request {
    /**
     * @param input an absolute URL string or another `Request` to copy.
     * @param init request options.
     */
    constructor(input: string | Request, init?: RequestInit);
    /** A byte-oriented `ReadableStream` of the body, or `null`. */
    readonly body: ReadableStream | null;
    /** Whether the body has already been consumed. */
    readonly bodyUsed: boolean;
    /** The credentials mode. */
    readonly credentials: RequestCredentials;
    /** The duplex mode for streamed bodies; undefined when the request has no streamed body (verified in Max 9.2.0). */
    readonly duplex: string | undefined;
    /** The request headers. */
    readonly headers: Headers;
    /** The HTTP method. */
    readonly method: string;
    /** The redirect mode. */
    readonly redirect: RequestRedirect;
    /** The associated abort signal, or null when none was given (verified in Max 9.2.0). */
    readonly signal: AbortSignal | null;
    /** The request URL. */
    readonly url: string;
    /** Reads the body as an `ArrayBuffer`. */
    arrayBuffer(): Promise<ArrayBuffer>;
    /** Reads the body as a `Blob` using the current `content-type`. */
    blob(): Promise<Blob>;
    /** Reads the body as bytes. */
    bytes(): Promise<import("buffer").IOBuffer>;
    /** Clones the request (tee-based; throws once the body is consumed). */
    clone(): Request;
    /** Reads the body as `FormData` (urlencoded or buffered multipart). */
    formData(): Promise<FormData>;
    /** Reads and parses the body as JSON. */
    json(): Promise<any>;
    /** Reads the body as a UTF-8 string. */
    text(): Promise<string>;
}

/**
 * A response returned by `fetch()`.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/response/
 */
declare class Response {
    constructor(body?: BodyInit | null, init?: { status?: number; statusText?: string; headers?: HeadersInit });
    /**
     * A byte-oriented `ReadableStream` for incremental body consumption, or `null`.
     * Canceling it aborts the underlying native transport.
     */
    readonly body: ReadableStream | null;
    /** Whether the body has already been consumed. */
    readonly bodyUsed: boolean;
    /** The response headers. */
    readonly headers: Headers;
    /** Whether `status` is in the range 200-299. */
    readonly ok: boolean;
    /** The HTTP status code. */
    readonly status: number;
    /** The HTTP status text. */
    readonly statusText: string;
    /** The final response URL after any redirects. */
    readonly url: string;
    /** Reads the body as an `ArrayBuffer`. */
    arrayBuffer(): Promise<ArrayBuffer>;
    /** Reads the body as a `Blob` using the current `content-type`. */
    blob(): Promise<Blob>;
    /** Reads the body as bytes. */
    bytes(): Promise<import("buffer").IOBuffer>;
    /** Clones the response (tee-based; throws once the body is consumed). */
    clone(): Response;
    /** Reads and parses the body as JSON. */
    json(): Promise<any>;
    /** Reads the body as a UTF-8 string. */
    text(): Promise<string>;
    /** Reads the body as form data (undocumented; verified in Max 9.2.0 with an application/x-www-form-urlencoded body). */
    formData(): Promise<FormData>;
}

/**
 * Fetches a resource over HTTP or HTTPS.
 *
 * This is a compatibility subset of the WHATWG Fetch standard. Only absolute `http://` and `https://` URLs are supported
 * (there is no ambient page `location`). There is no browser CORS model, cache mode, persistent cookie store, `document.cookie`,
 * public-suffix enforcement, or SameSite enforcement. The promise resolves once status and headers are available; the body
 * streams afterward through `Response.body` or the buffered body helpers. `gzip` / `deflate` responses are decoded
 * transparently; when that happens the exposed headers omit `content-encoding` and `content-length`.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/global-fetch/
 */
declare function fetch(input: string | Request, init?: RequestInit): Promise<Response>;

// ---------------------------------------------------------------------------------------------
// EventSource
// ---------------------------------------------------------------------------------------------

/**
 * An event delivered to an `EventSource`.
 * @see https://docs.cycling74.com/apiref/js/eventsourcemessageevent/
 */
interface EventSourceMessageEvent {
    /** The event payload. */
    data: string;
    /** The last event ID seen, used as `Last-Event-ID` on reconnect. */
    lastEventId: string;
    /** The event origin. */
    origin: string;
    target: EventSource;
    type: string;
}

/**
 * A Server-Sent Events client. URLs must be absolute `http://` or `https://` URLs. Successful connections require `200 OK`
 * and a `content-type` beginning with `text/event-stream`. On failure the client dispatches `error` and reconnects
 * (default delay 3000 ms, overridable by the stream's `retry:` field).
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/eventsource/
 */
declare class EventSource {
    /**
     * @param url an absolute `http://` or `https://` URL.
     * @param options `withCredentials` controls cross-origin cookie use.
     */
    constructor(url: string, options?: { withCredentials?: boolean });
    /** Closed state constant (2). */
    static readonly CLOSED: number;
    /** Connecting state constant (0). */
    static readonly CONNECTING: number;
    /** Open state constant (1). */
    static readonly OPEN: number;
    /** Closed state constant (2). */
    readonly CLOSED: number;
    /** Connecting state constant (0). */
    readonly CONNECTING: number;
    /** Open state constant (1). */
    readonly OPEN: number;
    /** Called on error (before an automatic reconnect). */
    onerror: ((event: { type: string }) => void) | null;
    /** Called when a default (unnamed) message arrives. */
    onmessage: ((event: EventSourceMessageEvent) => void) | null;
    /** Called when the connection opens. */
    onopen: ((event: { type: string }) => void) | null;
    /** The connection state. */
    readonly readyState: number;
    /** The stream URL. */
    readonly url: string;
    /** Whether cross-origin credentials are used. */
    readonly withCredentials: boolean;
    /** Registers a listener. Use a custom `type` to receive named `event:` messages from the stream. */
    addEventListener(type: string, listener: (event: EventSourceMessageEvent) => void): void;
    /** Closes the connection permanently (no reconnect). */
    close(): void;
    /** Removes an event listener. */
    removeEventListener(type: string, listener: (event: EventSourceMessageEvent) => void): void;
}

// ---------------------------------------------------------------------------------------------
// WebSocket
// ---------------------------------------------------------------------------------------------

/**
 * A `close` event delivered to a `WebSocket`.
 * @see https://docs.cycling74.com/apiref/js/websocketcloseevent/
 */
interface WebSocketCloseEvent {
    /** The close code. */
    /** Absent in Max 9.2.0: a close event carries only `type` and `target` (verified with close(1000, "bye")). */
    code?: number;
    /** The close reason. */
    /** Absent in Max 9.2.0 (see `code`). */
    reason?: string;
    /** The socket the event belongs to (verified in Max 9.2.0) */
    target: WebSocket | WebSocketConnection;
    type: string;
}

/**
 * An `error` event delivered to a `WebSocket`.
 * @see https://docs.cycling74.com/apiref/js/websocketerrorevent/
 */
interface WebSocketErrorEvent {
    /** The underlying error. */
    error: NetworkError;
    type: string;
}

/**
 * A `message` event delivered to a `WebSocket` (or a `WebSocketConnection` `message` listener).
 * Text frames arrive as strings; binary frames arrive as `IOBuffer`.
 * @see https://docs.cycling74.com/apiref/js/websocketmessageevent/
 */
interface WebSocketMessageEvent {
    data: string | import("buffer").IOBuffer;
    /** The socket the event belongs to (verified in Max 9.2.0) */
    target: WebSocket | WebSocketConnection;
    type: string;
}

/**
 * A WebSocket client. URLs must be absolute `ws://` or `wss://` URLs.
 * There is no `binaryType`, `extensions`, or custom-header API.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/websocket/
 */
declare class WebSocket {
    /**
     * @param url an absolute `ws://` or `wss://` URL.
     * @param protocols one or more subprotocol names to offer.
     */
    constructor(url: string, protocols?: string | string[]);
    /** The number of queued outbound bytes. */
    readonly bufferedAmount: number;
    /** Called when the connection closes. */
    onclose: ((event: WebSocketCloseEvent) => void) | null;
    /** Called when queued outbound bytes drop below the high-water mark. */
    ondrain: ((event: { type: string }) => void) | null;
    /** Called on error. */
    onerror: ((event: WebSocketErrorEvent) => void) | null;
    /** Called when a message arrives. */
    onmessage: ((event: WebSocketMessageEvent) => void) | null;
    /** Called when the connection opens. */
    onopen: ((event: { type: string }) => void) | null;
    /** The negotiated subprotocol, or `""` until the handshake selects one. */
    readonly protocol: string;
    /** The connection state (`CONNECTING` = 0, `OPEN` = 1, `CLOSING` = 2, `CLOSED` = 3). */
    readonly readyState: number;
    /** The connection URL. */
    readonly url: string;
    /** Registers an event listener. */
    addEventListener(type: string, listener: (...args: any[]) => void): void;
    /** Closes the connection. */
    close(code?: number, reason?: string): void;
    /** Removes an event listener. */
    removeEventListener(type: string, listener: (...args: any[]) => void): void;
    /**
     * Sends data. Strings are sent as text frames; other values are coerced through `IOBuffer` and sent as binary frames.
     * Returns `false` once queued outbound bytes exceed the high-water mark.
     */
    send(value: string | import("buffer").IOBuffer | ArrayBuffer | ArrayBufferView): boolean;
}

/**
 * A server-side WebSocket connection accepted by a `WebSocketServer`.
 * @see https://docs.cycling74.com/apiref/js/websocketconnection/
 */
interface WebSocketConnection {
    /** The number of queued outbound bytes. */
    readonly bufferedAmount: number;
    /** The negotiated subprotocol, or `""`. */
    readonly protocol: string;
    /** Same values as WebSocket.readyState (undocumented; verified in Max 9.2.0). */
    readonly readyState: number;
    /** Handler slots, null until set (undocumented; verified in Max 9.2.0). */
    onclose: ((event: WebSocketCloseEvent) => void) | null;
    ondrain: ((event: { type: string }) => void) | null;
    onerror: ((event: WebSocketErrorEvent) => void) | null;
    onmessage: ((event: WebSocketMessageEvent) => void) | null;
    /** Undocumented; verified present in Max 9.2.0. */
    addEventListener(type: string, listener: (...args: any[]) => void): void;
    /** Undocumented; verified present in Max 9.2.0. */
    off(type: string, listener: (...args: any[]) => void): this;
    /** Undocumented; verified present in Max 9.2.0. */
    once(type: string, listener: (...args: any[]) => void): this;
    /** Undocumented; verified present in Max 9.2.0. */
    removeEventListener(type: string, listener: (...args: any[]) => void): void;
    /** Closes the connection. */
    close(code?: number, reason?: string): void;
    /** Registers an event listener (`message`, `close`, `error`, `drain`). */
    /**
     * The "message" listener receives ONE argument, the same `WebSocketMessageEvent` object as `onmessage` (`{ type, data, target }`),
     * not Node's `(data, isBinary)` pair (verified in Max 9.2.0).
     */
    on(type: string, listener: (...args: any[]) => void): this;
    /** Sends data. See `WebSocket.send()`. */
    send(value: string | import("buffer").IOBuffer | ArrayBuffer | ArrayBufferView): boolean;

    // Also present in Max 9.2.0 but undocumented, so not declared (signatures unknown):
    // emit
}

/**
 * A WebSocket server. Supports plain `ws://` server sockets only; WSS/certificate configuration is not exposed.
 * Use `{ noServer: true }` together with an `http`/`https` server `upgrade` listener to accept `ws://`/`wss://` upgrades on an
 * existing server.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/websocketserver/
 */
declare class WebSocketServer {
    /**
     * @param options server options. `noServer: true` creates a server with no acceptor for use with `handleUpgrade`.
     * `selectProtocol(req, offered)` chooses a subprotocol during upgrade handling.
     * @param callback an optional `connection` listener.
     */
    constructor(
        options?: {
            port?: number;
            host?: string;
            noServer?: boolean;
            protocols?: string | string[];
            selectProtocol?: (req: any, offeredProtocols: string[]) => string;
        },
        callback?: (ws: WebSocketConnection, req: any) => void,
    );
    /** Stops the server. */
    close(callback?: () => void): void;
    /** Emits an event to registered listeners. */
    emit(type: string, ...args: any[]): boolean;
    /** Completes a WebSocket handshake on an upgrade socket obtained from an HTTP server `upgrade` event. */
    handleUpgrade(req: any, socket: any, head: any, callback: (ws: WebSocketConnection) => void): void;
    /** Begins listening (when not in `noServer` mode). */
    listen(optionsOrPort: number | { port?: number; host?: string }, callback?: () => void): void;
    /** Removes an event listener. */
    off(type: string, listener: (...args: any[]) => void): this;
    /** Registers an event listener (`listening`, `connection`, `close`, `error`). */
    on(type: string, listener: (...args: any[]) => void): this;
    /** Registers a one-shot event listener. */
    once(type: string, listener: (...args: any[]) => void): this;
}

// ---------------------------------------------------------------------------------------------
// XMLHttpRequest (both engines; v8 supports more)
// ---------------------------------------------------------------------------------------------

/**
 * Information about the progress of a network request, passed to progress-related handlers such as
 * `XMLHttpRequest.onprogress` and `XMLHttpRequest.onerror`. There is no global `ProgressEvent` class.
 * @see https://docs.cycling74.com/apiref/js/progressevent/
 */
interface ProgressEvent {
    /** Whether the total size of the transfer is known. */
    readonly lengthComputable: boolean;
    /** The number of bytes that have been loaded. */
    readonly loaded: number;
    /** The total number of bytes expected to be loaded. */
    readonly total: number;
}

/**
 * The upload object of an `XMLHttpRequest`, exposing lightweight progress events for the request body.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/xmlhttprequestupload/
 */
interface XMLHttpRequestUpload {
    onabort: ((event: ProgressEvent) => void) | null;
    onerror: ((event: ProgressEvent) => void) | null;
    onload: ((event: ProgressEvent) => void) | null;
    onloadend: ((event: ProgressEvent) => void) | null;
    onloadstart: ((event: ProgressEvent) => void) | null;
    onprogress: ((event: ProgressEvent) => void) | null;
    ontimeout: ((event: ProgressEvent) => void) | null;
}

/**
 * HTTP client functionality implementing a subset of the web standard XMLHttpRequest API.
 * In [v8] it is backed by the same native HTTP client as `fetch()` (not `maxurl`) and additionally supports `arraybuffer`,
 * `blob`, and `json` response types, `response`, `responseURL`, `upload`, redirect following, transparent gzip/deflate
 * decoding and the full progress event set. Asynchronous only: in v8 `open(..., false)` throws. URLs must be absolute.
 * `responseXML`, `responseType = "document"`, synchronous requests, and the browser CORS model are not implemented.
 * @see https://docs.cycling74.com/apiref/js/xmlhttprequest/
 */
declare class XMLHttpRequest {
    /** State constant: open() has not been called (0). */
    static readonly UNSENT: number;
    /** State constant: open() has been called (1). */
    static readonly OPENED: number;
    /** State constant: headers and status are available (2). */
    static readonly HEADERS_RECEIVED: number;
    /** State constant: response body is downloading (3). */
    static readonly LOADING: number;
    /** State constant: the operation is complete (4). */
    static readonly DONE: number;
    /** State constant: open() has not been called (0). */
    readonly UNSENT: number;
    /** State constant: open() has been called (1). */
    readonly OPENED: number;
    /** State constant: headers and status are available (2). */
    readonly HEADERS_RECEIVED: number;
    /** State constant: response body is downloading (3). */
    readonly LOADING: number;
    /** State constant: the operation is complete (4). */
    readonly DONE: number;
    /** Event handler called when the request is aborted. */
    onabort: ((this: XMLHttpRequest) => void) | null;
    /** Event handler called on network errors (not HTTP error statuses). */
    onerror: ((this: XMLHttpRequest, event: ProgressEvent) => void) | null;
    /** Event handler called when the request completes, even with an HTTP error status. */
    onload: ((this: XMLHttpRequest) => void) | null;
    /** Event handler called when the request finishes, regardless of success or failure. */
    onloadend: ((this: XMLHttpRequest) => void) | null;
    /** Event handler called when the request starts loading data. */
    onloadstart: ((this: XMLHttpRequest) => void) | null;
    /** Event handler called periodically as data is received. */
    onprogress: ((this: XMLHttpRequest, event: ProgressEvent) => void) | null;
    /** Event handler called whenever the readyState property changes. */
    onreadystatechange: ((this: XMLHttpRequest) => void) | null;
    /** Event handler called when the request times out. Currently not fully implemented. */
    ontimeout: ((this: XMLHttpRequest) => void) | null;
    /** The current state of the request (0 UNSENT, 1 OPENED, 2 HEADERS_RECEIVED, 3 LOADING, 4 DONE). */
    readonly readyState: number;
    /**
     * The parsed response: a string for `""`/`"text"`, an `ArrayBuffer` for `"arraybuffer"`, a `Blob` for `"blob"`, or parsed
     * JSON for `"json"` (invalid JSON resolves to `null`). Supported only in the v8 engine.
     */
    readonly response: any;
    /** The response body as a string. Available when `responseType` is `""` or `"text"`. */
    readonly responseText: string;
    /** The response type. The legacy [js] object supports only `""` and `"text"`. */
    responseType: "" | "text" | "arraybuffer" | "blob" | "json";
    /** The final response URL, reflecting any redirects that were followed. Supported only in the v8 engine. */
    readonly responseURL: string;
    /** The HTTP status code of the response. 0 indicates the request has not completed or encountered an error. */
    readonly status: number;
    /** The HTTP status text of the response (e.g. "OK", "Not Found"). */
    readonly statusText: string;
    /** The timeout for the request in milliseconds. Set to 0 for no timeout. */
    timeout: number;
    /** The upload object, exposing progress events for the request body. Supported only in the v8 engine. */
    readonly upload: XMLHttpRequestUpload;
    /** Whether to include credentials (cookies) in requests. */
    withCredentials: boolean;
    /** Aborts the request if it is still in progress. */
    abort(): void;
    /**
     * Registers an event listener (`readystatechange`, `loadstart`, `progress`, `abort`, `error`, `timeout`, `load`, `loadend`).
     * Supported only in the v8 engine.
     */
    addEventListener(type: string, listener: (...args: any[]) => void): void;
    /** Gets all response headers as a single string (omits `set-cookie` in v8). */
    getAllResponseHeaders(): string;
    /** Gets the value of a specific response header, or an empty string if not found. */
    /** null before a response has arrived or when the header is absent (verified in Max 9.2.0) */
    getResponseHeader(name: string): string | null;
    /** Initializes a request. The v8 engine throws if `async` is `false`. */
    open(method: string, url: string, async?: boolean, username?: string, password?: string): void;
    /** Overrides the MIME type of the response. Must be called before `send()`. */
    overrideMimeType(mimeType: string): void;
    /** Removes a previously registered event listener. Supported only in the v8 engine. */
    removeEventListener(type: string, listener: (...args: any[]) => void): void;
    /**
     * Sends the request. v8 accepts a string, `IOBuffer`, typed array / view, `ArrayBuffer`, `Blob`, `FormData`, or
     * `URLSearchParams`.
     */
    send(body?: any): void;
    /** Sets a request header. Must be called after `open()` but before `send()`. */
    setRequestHeader(name: string, value: string): void;

    // Also present in Max 9.2.0 but undocumented, so not declared (signatures unknown):
    // on, off, once, emit
}

// ---------------------------------------------------------------------------------------------
// CommonJS module system
// ---------------------------------------------------------------------------------------------

/**
 * `require()` loads a CommonJS module (a `.js` file in the Max search path, or a built-in module).
 * @see https://docs.cycling74.com/userguide/javascript/#require
 */
interface MaxV8Require {
    (id: "buffer"): typeof import("buffer");
    (id: "dgram"): typeof import("dgram");
    (id: "http"): typeof import("http");
    (id: "https"): typeof import("https");
    (id: "net"): typeof import("net");
    (id: "tls"): typeof import("tls");
    (id: string): any;
}

/**
 * Include code from other JavaScript files. The included file should be a CommonJS module: it sets properties of `exports`
 * or replaces `module.exports`.
 * @see https://docs.cycling74.com/userguide/javascript/#require
 */
declare var require: MaxV8Require;

/**
 * The CommonJS module object of a file loaded with `require()`.
 * @see https://docs.cycling74.com/userguide/javascript/#require
 */
declare var module: { exports: any };

/**
 * The CommonJS exports object of a file loaded with `require()`.
 * @see https://docs.cycling74.com/userguide/javascript/#require
 */
declare var exports: any;

// ---------------------------------------------------------------------------------------------
// Built-in modules
// ---------------------------------------------------------------------------------------------

/**
 * The `buffer` module exposed by `require("buffer")`, providing the `IOBuffer` class for handling binary data.
 * There is no global `Buffer` alias (which would conflict with the Max `buffer~` wrapper).
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/buffer-module/
 */
declare module "buffer" {
    /** Encodings accepted by `IOBuffer` construction and conversion. */
    type IOBufferEncoding = "utf8" | "ascii" | "base64" | "hex";

    /**
     * A `Uint8Array` subclass for binary data, used throughout the v8 networking APIs.
     * In the spirit of Node's `Buffer`, but not full Node `Buffer` parity.
     * @see https://docs.cycling74.com/apiref/js/buffer-module/#class-iobuffer
     */
    class IOBuffer extends Uint8Array {
        /**
         * @param value a byte length, an `ArrayBuffer`, a typed array / view, a string (decoded with `encoding`), or an
         * array-like of byte values.
         * @param encoding the encoding used when `value` is a string (default `"utf8"`).
         */
        constructor(
            value?: number | ArrayBuffer | ArrayBufferView | string | ArrayLike<number>,
            encoding?: IOBufferEncoding,
        );
        /** Allocates a zero- or fill-initialized `IOBuffer` of the given size. */
        static alloc(size: number, fill?: number | string): IOBuffer;
        /** Returns the byte length of a string in the given encoding. */
        static byteLength(value: string, encoding?: IOBufferEncoding): number;
        /** Concatenates several buffers into one. */
        static concat(items: IOBuffer[]): IOBuffer;
        /** Creates an `IOBuffer` from a value. */
        static from(
            value: ArrayBuffer | ArrayBufferView | string | ArrayLike<number>,
            encoding?: IOBufferEncoding,
        ): IOBuffer;
        /** Inherited `Uint8Array.from` form with a map function. */
        static from(
            arrayLike: Iterable<number> | ArrayLike<number>,
            mapfn?: (v: number, k: number) => number,
            thisArg?: any,
        ): IOBuffer;
        /** Inherited `Uint8Array.from` form with a map function. */
        static from<T>(
            arrayLike: Iterable<T> | ArrayLike<T>,
            mapfn: (v: T, k: number) => number,
            thisArg?: any,
        ): IOBuffer;
        /** Returns whether a value is an `IOBuffer`. */
        static isBuffer(value: any): boolean;
        /** Returns whether this buffer has the same bytes as another. */
        equals(other: IOBuffer): boolean;
        /**
         * Returns a new `IOBuffer` containing a copy of a byte range, like `Uint8Array.slice`.
         * Unlike Node's `Buffer.slice`, the result does not share memory with the original; use `subarray` for a view.
         * (The Max docs currently describe this as a view; it copies.)
         */
        slice(start?: number, end?: number): IOBuffer;
        /** Decodes (a range of) the buffer to a string (default encoding `"utf8"`). */
        toString(encoding?: IOBufferEncoding, start?: number, end?: number): string;
        /** Returns a new `IOBuffer` view over a byte range, sharing memory with the original (verified in Max 9.2.0). */
        subarray(start?: number, end?: number): IOBuffer;

        /** Returns a plain `Uint8Array` view of the same bytes. */
        toUint8Array(): Uint8Array;
    }
}

/**
 * The `http` module exposed by `require("http")` to access HTTP/1.1 clients and servers.
 * This is a minimal `http` subset, not full Node parity.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/http-module/
 */
declare module "http" {
    type IOBuffer = import("buffer").IOBuffer;

    /**
     * Merged, lowercased header view. Repeated `set-cookie` values are arrays; other repeated headers are merged into a single string.
     */
    type Headers = Record<string, string | string[]>;

    /** Callback function to handle incoming requests. */
    type RequestListener = (req: IncomingMessage, res: ServerResponse) => void;

    /** Options accepted by `http.request()` / `http.get()`. */
    interface RequestOptions {
        /** A keep-alive `http.Agent` for pooled connection reuse. */
        agent?: any;
        /** Opt in to transparent `gzip`/`deflate` decoding (default `false`). */
        decompress?: boolean;
        headers?: Record<string, string | string[]>;
        host?: string;
        hostname?: string;
        method?: string;
        path?: string;
        port?: number;
        protocol?: string;
        /** Accept a certificate that fails verification, e.g. self-signed (undocumented; verified in Max 9.2.0 with https.get). */
        rejectUnauthorized?: boolean;
        /** An `AbortSignal` that aborts the request. */
        signal?: AbortSignal;
        /** Abort the request after this many milliseconds. */
        timeout?: number;
    }

    /** A keep-alive connection pool for client requests. */
    class Agent {
        constructor(options?: { keepAlive?: boolean; keepAliveMsecs?: number });
        /** Whether the agent keeps connections alive; default false (undocumented; verified in Max 9.2.0). */
        keepAlive: boolean;
        /** Keep-alive interval in milliseconds; default 1000 (undocumented; verified in Max 9.2.0). */
        keepAliveMsecs: number;
        /** Closes pooled connections. */
        destroy(): void;
    }

    /**
     * An outgoing client request. Headers become immutable after the first body write or `end()`.
     * Events: `response`, `drain`, `close`, `error`, `timeout`.
     */
    class ClientRequest {
        /** Whether the request has been destroyed (undocumented; verified in Max 9.2.0). */
        readonly destroyed: boolean;
        /** The request method, e.g. "GET" (undocumented; verified in Max 9.2.0). */
        method: string;
        /** The request target. Holds the full URL in Max 9.2.0, e.g. "http://127.0.0.1:1/" (undocumented). */
        path: string;
        /** Whether end() has been called (undocumented; verified in Max 9.2.0). */
        readonly writableEnded: boolean;
        /** Aborts the request. */
        abort(): void;
        /** Destroys the request, optionally with an error. */
        destroy(error?: Error): void;
        /** Writes an optional final chunk and finishes the request. */
        /** Returns the request (verified in Max 9.2.0) */
        end(chunk?: string | IOBuffer | ArrayBufferView, encoding?: string, callback?: () => void): this;
        /** Returns a previously set header value. */
        getHeader(name: string): string | string[] | undefined;
        off(event: string, listener: (...args: any[]) => void): this;
        on(event: string, listener: (...args: any[]) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        /** Removes a previously set header. */
        /** Returns the request (verified in Max 9.2.0) */
        removeHeader(name: string): this;
        /** Sets a request header. Array values emit repeated header lines. */
        /** Returns the request (verified in Max 9.2.0) */
        setHeader(name: string, value: string | string[]): this;
        /** Sets a per-request timeout. */
        setTimeout(timeout: number, callback?: () => void): this;
        /** Writes a body chunk. Returns `false` once queued outbound bytes exceed the high-water mark. */
        write(chunk?: string | IOBuffer | ArrayBufferView, encoding?: string, callback?: () => void): boolean;

        // Also present in Max 9.2.0 but undocumented, so not declared (signatures unknown):
        // emit, hasListener
    }

    /**
     * The response delivered to an `http.request()` / `http.get()` callback.
     * Events: `data`, `end`, `close`, `error`.
     * Not exported by the module at runtime (verified in Max 9.2.0: `http.ClientResponse` is undefined, and the object passed
     * to the callback is a `ClientIncomingMessage`, not an `http.IncomingMessage`), so it is only usable as a type.
     */
    interface ClientResponse {
        /** Whether the response has been destroyed (undocumented; present in Max 9.2.0). */
        readonly destroyed: boolean;
        readonly complete: boolean;
        /** Merged, lowercased headers. */
        readonly headers: Headers;
        /** Flat alternating `[name, value, ...]` wire-order header list. */
        readonly rawHeaders: string[];
        readonly readableFlowing: boolean | null;
        readonly statusCode: number;
        readonly statusMessage: string;
        readonly url: string;
        arrayBuffer(): Promise<ArrayBuffer>;
        bytes(): Promise<IOBuffer>;
        off(event: string, listener: (...args: any[]) => void): this;
        on(event: string, listener: (...args: any[]) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        /** Returns the message (verified in Max 9.2.0) */
        pause(): this;
        /** Returns the message (verified in Max 9.2.0) */
        resume(): this;
        text(): Promise<string>;

        // Also present in Max 9.2.0 but undocumented, so not declared (signatures unknown):
        // emit, hasListener
    }

    /**
     * An incoming server request (the first argument to a request listener).
     * Events: `data`, `end`, `close`, `error`.
     */
    class IncomingMessage {
        readonly complete: boolean;
        readonly destroyed: boolean;
        /** Merged, lowercased headers. */
        readonly headers: Headers;
        readonly httpVersion: string;
        readonly localAddress: string;
        readonly localPort: number;
        readonly method: string;
        /** Flat alternating `[name, value, ...]` wire-order header list. */
        readonly rawHeaders: string[];
        readonly readableFlowing: boolean | null;
        readonly remoteAddress: string;
        readonly remotePort: number;
        readonly socket: any;
        readonly url: string;
        /** Buffers the full body as an `ArrayBuffer`. */
        arrayBuffer(): Promise<ArrayBuffer>;
        /** Buffers the full body as bytes. */
        bytes(): Promise<IOBuffer>;
        /** Buffers and parses the full body as JSON. */
        json(): Promise<any>;
        off(event: string, listener: (...args: any[]) => void): this;
        on(event: string, listener: (...args: any[]) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        /** Pauses `data` event flow. */
        /** Returns the message (verified in Max 9.2.0) */
        pause(): this;
        /** Resumes `data` event flow. */
        /** Returns the message (verified in Max 9.2.0) */
        resume(): this;
        /** Buffers the full body as a UTF-8 string. */
        text(): Promise<string>;

        // Also present in Max 9.2.0 but undocumented, so not declared (signatures unknown):
        // emit, hasListener
    }

    /**
     * A server response (the second argument to a request listener).
     * Events: `drain`, `close`, `error`.
     */
    class ServerResponse {
        readonly headersSent: boolean;
        statusCode: number;
        statusMessage: string;
        readonly writableEnded: boolean;
        /** Writes an optional final chunk and ends the response. */
        /** Returns the response (verified in Max 9.2.0) */
        end(chunk?: string | IOBuffer | ArrayBufferView, encoding?: string, callback?: () => void): this;
        /** Returns a previously set header value. */
        getHeader(name: string): string | string[] | undefined;
        off(event: string, listener: (...args: any[]) => void): this;
        on(event: string, listener: (...args: any[]) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        /** Removes a previously set header. */
        /** Returns the response (verified in Max 9.2.0) */
        removeHeader(name: string): this;
        /** Sets a response header. Array values emit repeated header lines. */
        /** Returns the response (verified in Max 9.2.0) */
        setHeader(name: string, value: string | string[]): this;
        /** Writes a body chunk. Returns `false` once queued outbound bytes exceed the high-water mark. */
        write(chunk?: string | IOBuffer | ArrayBufferView, encoding?: string, callback?: () => void): boolean;
        /** Writes the status line and headers. */
        writeHead(
            statusCode: number,
            statusMessageOrHeaders?: string | Record<string, string | string[]>,
            headers?: Record<string, string | string[]>,
        ): this;

        // Also present in Max 9.2.0 but undocumented, so not declared (signatures unknown):
        // emit, hasListener
    }

    /**
     * An HTTP/1.1 server. Accepts a `request` listener and supports `upgrade` for WebSocket handling.
     * Events: `listening`, `request`, `upgrade`, `close`, `error`.
     */
    class Server {
        /** Whether the server is currently listening (present in Max 9.2.0 on http.Server, undocumented) */
        readonly listening: boolean;
        /** Returns the bound local endpoint after `listening`; null before that (verified in Max 9.2.0 for net.Server). */
        address(): AddressInfo | null;
        close(callback?: () => void): this;
        listen(port: number, host?: string, callback?: () => void): this;
        listen(options: { port?: number; host?: string }, callback?: () => void): this;
        off(event: string, listener: (...args: any[]) => void): this;
        on(event: string, listener: (...args: any[]) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;

        // Also present in Max 9.2.0 but undocumented, so not declared (signatures unknown):
        // emit, hasListener, and onclose / onerror / onlistening / onrequest / onupgrade (null until set)
    }

    /** The shared default `http.Agent` (a writable property at runtime). */
    let globalAgent: Agent;

    /** Creates an HTTP `http.Server`. */
    function createServer(requestListener?: RequestListener): Server;

    /** Starts a client GET request, calling `end()` automatically. */
    function get(
        optionsOrUrl: string | { href: string } | RequestOptions,
        callback?: (res: ClientResponse) => void,
    ): ClientRequest;

    /** Starts a client request. */
    function request(
        optionsOrUrl: string | { href: string } | RequestOptions,
        callback?: (res: ClientResponse) => void,
    ): ClientRequest;
}

/**
 * The `https` module exposed by `require("https")`. Mirrors `http` over TLS, defaulting to `https:` URLs.
 * This is a minimal `https` subset, not full Node parity.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/https-module/
 */
declare module "https" {
    type IOBuffer = import("buffer").IOBuffer;
    import * as http from "http";

    /** The shared default agent for HTTPS requests. */
    let globalAgent: http.Agent;

    /**
     * Creates a TLS-backed HTTP/1.1 server. `options.key` and `options.cert` are required PEM strings or `IOBuffer` values.
     */
    function createServer(
        options: { key: string | IOBuffer; cert: string | IOBuffer },
        requestListener?: http.RequestListener,
    ): http.Server;

    /** Starts an HTTPS client GET request, calling `end()` automatically. */
    function get(
        optionsOrUrl: string | { href: string } | http.RequestOptions,
        callback?: (res: http.ClientResponse) => void,
    ): http.ClientRequest;

    /** Starts an HTTPS client request. */
    function request(
        optionsOrUrl: string | { href: string } | http.RequestOptions,
        callback?: (res: http.ClientResponse) => void,
    ): http.ClientRequest;
}

/**
 * The `net` module exposed by `require("net")` providing TCP client and server sockets, plus IPC stream sockets via a
 * `path` endpoint (Unix domain sockets on macOS/Linux, named pipes on Windows).
 * This is a minimal `net` subset, not full Node parity.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/net-module/
 */
declare module "net" {
    type IOBuffer = import("buffer").IOBuffer;

    /** Options for `net.Socket.connect` / `net.connect`. */
    interface ConnectOptions {
        host?: string;
        /**
         * Connect to an IPC endpoint instead of a TCP host/port. Mutually exclusive with `host`/`port` (supplying both throws).
         * macOS / Linux: a Unix domain socket path. Windows: a named-pipe name such as `"\\\\.\\pipe\\max-v8"`.
         */
        path?: string;
        port?: number;
        /** Byte threshold at which `write()` starts returning `false` (default 65536). */
        writableHighWaterMark?: number;
    }

    /** Options for `net.Server.listen`. */
    interface ListenOptions {
        host?: string;
        /** Bind an IPC endpoint instead of a TCP host/port listener. */
        path?: string;
        port?: number;
        /** Applied as `ConnectOptions.writableHighWaterMark` to accepted sockets. */
        writableHighWaterMark?: number;
    }

    /**
     * A TCP (or IPC) stream socket. Incoming `data` arrives as `IOBuffer`. `write()` returns a boolean and a `drain` event
     * fires when the outbound queue falls below the high-water mark.
     * Events: `connect`, `data`, `drain`, `close`, `error`.
     */
    class Socket {
        /** Whether the socket has been destroyed. */
        readonly destroyed: boolean;
        /** undefined until the socket is connected (verified in Max 9.2.0) */
        readonly localAddress: string | undefined;
        /** undefined until the socket is connected (verified in Max 9.2.0) */
        readonly localPort: number | undefined;
        /** undefined until the socket is connected (verified in Max 9.2.0) */
        readonly remoteAddress: string | undefined;
        /** undefined until the socket is connected (verified in Max 9.2.0) */
        readonly remotePort: number | undefined;
        /** Returns the local endpoint once connected. */
        /** null while the socket is not connected (verified in Max 9.2.0) */
        address(): AddressInfo | null;
        /** Connects to a TCP host/port. */
        connect(port: number, host?: string, callback?: () => void): this;
        /** Connects using an options object (TCP host/port or IPC `path`). */
        connect(options: ConnectOptions, callback?: () => void): this;
        /** Destroys the socket. */
        /** Returns the socket (verified in Max 9.2.0) */
        destroy(): this;
        /**
         * Sends an optional final chunk and half-closes the writable side. (Windows named pipes have no half-close; the peer
         * sees EOF only on `destroy()`.)
         */
        /** Returns the socket (verified in Max 9.2.0) */
        end(chunk?: string | IOBuffer | ArrayBufferView, encoding?: string, callback?: () => void): this;
        /** Removes an event listener. */
        off(event: string, listener: (...args: any[]) => void): this;
        /** Registers an event listener. */
        on(event: string, listener: (...args: any[]) => void): this;
        /** Registers a one-shot event listener. */
        once(event: string, listener: (...args: any[]) => void): this;
        /** Pauses delivery of `data` events (single pending chunk). */
        /** Returns the socket (verified in Max 9.2.0) */
        pause(): this;
        /** Resumes delivery of `data` events. */
        /** Returns the socket (verified in Max 9.2.0) */
        resume(): this;
        /** Queues data to send. Returns `false` once queued bytes exceed the high-water mark. */
        write(chunk: string | IOBuffer | ArrayBufferView, encoding?: string, callback?: () => void): boolean;

        // Also present in Max 9.2.0 but undocumented, so not declared (signatures unknown):
        // emit
    }

    /**
     * A TCP (or IPC) server. Accepted `connection` sockets are delivered as `net.Socket` instances.
     * Events: `listening`, `connection`, `close`, `error`.
     */
    class Server {
        /** Whether the server is currently listening. */
        readonly listening: boolean;
        /** Returns the bound local endpoint after `listening`; null before that (verified in Max 9.2.0). */
        address(): AddressInfo | null;
        /** Stops the server. */
        close(callback?: () => void): this;
        /** Begins listening on a TCP host/port. */
        listen(port: number, host?: string, callback?: () => void): this;
        /** Begins listening using an options object (host/port or IPC `path`). */
        listen(options: ListenOptions, callback?: () => void): this;
        /** Removes an event listener. */
        off(event: string, listener: (...args: any[]) => void): this;
        /** Registers an event listener. */
        on(event: string, listener: (...args: any[]) => void): this;
        /** Registers a one-shot event listener. */
        once(event: string, listener: (...args: any[]) => void): this;

        // Also present in Max 9.2.0 but undocumented, so not declared (signatures unknown):
        // emit
    }

    /** Creates a `net.Socket` and connects to a TCP host/port. */
    function connect(port: number, host?: string, callback?: () => void): Socket;
    /** Creates a `net.Socket` and connects using an options object. */
    function connect(options: ConnectOptions, callback?: () => void): Socket;
    /** Alias of `net.connect`. */
    function createConnection(port: number, host?: string, callback?: () => void): Socket;
    /** Alias of `net.connect`. */
    function createConnection(options: ConnectOptions, callback?: () => void): Socket;
    /** Creates a `net.Server`. */
    function createServer(connectionListener?: (socket: Socket) => void): Server;
}

/**
 * The `tls` module exposed by `require("tls")`: TLS/SSL client and server sockets.
 * This is a minimal `tls` subset: no client-certificate auth, no SNI routing, no ALPN/HTTP2, and no advanced TLS options
 * beyond `key`/`cert`/`ca`.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/tls-module/
 */
declare module "tls" {
    type IOBuffer = import("buffer").IOBuffer;

    /** Options for `tls.connect`. */
    interface ConnectOptions {
        /** Trusted CA certificate(s) (PEM string or `IOBuffer`). */
        ca?: string | IOBuffer;
        /** Client certificate (PEM string or `IOBuffer`). */
        cert?: string | IOBuffer;
        host?: string;
        /** Client private key (PEM string or `IOBuffer`). */
        key?: string | IOBuffer;
        port?: number;
        /** Verify the peer certificate (default `true`). Set `false` for self-signed/dev certs. */
        rejectUnauthorized?: boolean;
        /** Server name for the connection. */
        servername?: string;
    }

    /** Options for `tls.createServer()`. `key` and `cert` are required. */
    interface ServerOptions {
        cert: string | IOBuffer;
        key: string | IOBuffer;
    }

    /** A summary of a peer certificate, as returned by `TLSSocket.getPeerCertificate()`. */
    interface PeerCertificate {
        issuer: string;
        subject: string;
        valid_from: string;
        valid_to: string;
    }

    /**
     * A TLS/SSL stream socket. Verifies peer certificates by default.
     * Events: `connect`, `secureConnect`, `data`, `drain`, `close`, `error`.
     */
    class TLSSocket {
        /** The verification error message, when not authorized. */
        /** Why the peer was not authorized, e.g. "self signed certificate"; undefined on a server-side socket (verified in Max 9.2.0). */
        readonly authorizationError: string | undefined;
        /** Whether the peer certificate was verified. */
        readonly authorized: boolean;
        readonly destroyed: boolean;
        /** Always `true` for a TLS socket. */
        readonly encrypted: boolean;
        readonly localAddress: string;
        readonly localPort: number;
        readonly remoteAddress: string;
        readonly remotePort: number;
        /** Returns the local endpoint once connected. */
        address(): AddressInfo;
        /** Connects and performs the TLS handshake. */
        connect(
            optionsOrPort: ConnectOptions | number,
            hostOrCallback?: string | (() => void),
            callback?: () => void,
        ): this;
        /** Destroys the socket. */
        /** Returns the socket (verified in Max 9.2.0) */
        destroy(): this;
        /** Sends an optional final chunk and half-closes the socket. */
        /** Returns the socket (verified in Max 9.2.0) */
        end(chunk?: string | IOBuffer | ArrayBufferView, encoding?: string, callback?: () => void): this;
        /** Returns a summary of the peer certificate, when available. */
        getPeerCertificate(): PeerCertificate | undefined;
        /** Removes an event listener. */
        off(event: string, listener: (...args: any[]) => void): this;
        /** Registers an event listener. */
        on(event: string, listener: (...args: any[]) => void): this;
        /** Registers a one-shot event listener. */
        once(event: string, listener: (...args: any[]) => void): this;
        /** Pauses delivery of `data` events (single pending chunk). */
        /** Returns the socket (verified in Max 9.2.0) */
        pause(): this;
        /** Resumes delivery of `data` events. */
        /** Returns the socket (verified in Max 9.2.0) */
        resume(): this;
        /** Queues data to send. Returns `false` under backpressure. */
        write(chunk: string | IOBuffer | ArrayBufferView, encoding?: string, callback?: () => void): boolean;

        // Also present in Max 9.2.0 but undocumented, so not declared (signatures unknown):
        // emit
    }

    /**
     * A TLS server. Accepted secure sockets are delivered as `tls.TLSSocket` instances.
     * Events: `listening`, `secureConnection`, `close`, `error`.
     */
    class Server {
        /** Whether the server is currently listening (present in Max 9.2.0 on http.Server, undocumented) */
        readonly listening: boolean;
        /** Returns the bound local endpoint after `listening`; null before that (verified in Max 9.2.0 for net.Server). */
        address(): AddressInfo | null;
        close(callback?: () => void): this;
        listen(port: number, host?: string, callback?: () => void): this;
        listen(options: { port?: number; host?: string }, callback?: () => void): this;
        off(event: string, listener: (...args: any[]) => void): this;
        on(event: string, listener: (...args: any[]) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;

        // Also present in Max 9.2.0 but undocumented, so not declared (signatures unknown):
        // emit
    }

    /** Creates a `tls.TLSSocket` and connects. */
    function connect(options: ConnectOptions, callback?: () => void): TLSSocket;
    /** Creates a `tls.TLSSocket` and connects to a port/host. */
    function connect(port: number, host?: string, callback?: () => void): TLSSocket;
    /** Alias of `tls.connect`. */
    function createConnection(options: ConnectOptions, callback?: () => void): TLSSocket;
    /** Creates a TLS `tls.Server`. Requires `key` and `cert`. */
    function createServer(options: ServerOptions, secureConnectionListener?: (socket: TLSSocket) => void): Server;
}

/**
 * The `dgram` module exposed by `require("dgram")` (UDP). IPv6 parity is limited and UDP socket-option coverage is narrow.
 * Supported only in the v8 engine. Introduced in Max 9.2.0.
 * @see https://docs.cycling74.com/apiref/js/dgram-module/
 */
declare module "dgram" {
    type IOBuffer = import("buffer").IOBuffer;

    /** The sender information passed with a UDP `message` event. */
    interface RemoteInfo {
        address: string;
        port: number;
    }

    /**
     * A UDP socket. Incoming `message` payloads arrive as `IOBuffer`. Socket-option setters throw a structured error
     * (`syscall: "setsockopt"`) on failure and lazily open the socket if it has not been bound.
     * Events: `message`, `listening`, `close`, `error`.
     */
    class Socket {
        /** The socket protocol, `"udp4"` or `"udp6"`. */
        readonly type: string;
        /** Joins a multicast group. */
        /** Returns the socket (verified in Max 9.2.0) */
        addMembership(multicastAddress: string, interfaceAddress?: string): this;
        /** Returns the bound local endpoint. */
        address(): AddressInfo;
        /** Binds the socket to a local port/address. */
        bind(port: number, address?: string, callback?: () => void): void;
        /** Closes the socket. */
        close(): void;
        /** Leaves a multicast group. */
        /** Returns the socket (verified in Max 9.2.0) */
        dropMembership(multicastAddress: string, interfaceAddress?: string): this;
        /** Removes an event listener. */
        off(event: string, listener: (...args: any[]) => void): this;
        /** Registers an event listener. */
        on(event: string, listener: (...args: any[]) => void): this;
        /** Registers a one-shot event listener. */
        once(event: string, listener: (...args: any[]) => void): this;
        /** Sends a datagram. */
        send(
            msg: string | IOBuffer | ArrayBufferView,
            port: number,
            address?: string,
            callback?: (error?: Error) => void,
        ): this; // returns the socket (verified in Max 9.2.0)
        /** Enables or disables broadcast. */
        /** Returns the socket (verified in Max 9.2.0) */
        setBroadcast(flag: boolean): this;
        /** Selects the outgoing multicast interface (IPv4 dotted-quad only). */
        /** Returns the socket (verified in Max 9.2.0) */
        setMulticastInterface(iface: string): this;
        /** Enables or disables multicast loopback. */
        /** Returns the socket (verified in Max 9.2.0) */
        setMulticastLoopback(flag: boolean): this;
        /** Sets the multicast time-to-live. */
        /** Returns the socket (verified in Max 9.2.0) */
        setMulticastTTL(ttl: number): this;
        /** Sets the unicast time-to-live. */
        /** Returns the socket (verified in Max 9.2.0) */
        setTTL(ttl: number): this;

        // Also present in Max 9.2.0 but undocumented, so not declared (signatures unknown):
        // emit
    }

    /** Creates a UDP `dgram.Socket`. */
    function createSocket(type: "udp4" | "udp6"): Socket;
}

/*
 * Runtime additions not yet in the docs
 */

/**
 * `IOBuffer` is also installed on `globalThis` by the v8 runtime (used without `require` in Max's own v8-network examples).
 */
declare var IOBuffer: typeof import("buffer").IOBuffer;
type IOBuffer = import("buffer").IOBuffer;

interface Headers {
    [Symbol.iterator](): IterableIterator<[string, string]>;
}
interface URLSearchParams {
    [Symbol.iterator](): IterableIterator<[string, string]>;
}
interface FormData {
    [Symbol.iterator](): IterableIterator<[string, string | Blob]>;
}
