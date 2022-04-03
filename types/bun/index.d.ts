// Type definitions for bun 0.0
// Project: https://github.com/Jarred-Sumner/bun
// Definitions by: Jarred Sumner <https://github.com/Jarred-Sumner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type TimeLike = string | number | Date;

export type StringOrBuffer = string | TypedArray | ArrayBufferLike;
export type PathLike = string | TypedArray | ArrayBufferLike;
export type PathOrFileDescriptor = PathLike | number;
export type Buffer = TypedArray;
export type NoParamCallback = VoidFunction;
export type BufferEncoding = 'buffer' | 'utf8' | 'utf-8' | 'ascii' | 'utf16le' | 'ucs2' | 'ucs-2' | 'latin1' | 'binary';
export interface BufferEncodingOption {
    encoding?: BufferEncoding;
}

export interface SystemError extends Error {
    errno?: number | undefined;
    code?: string | undefined;
    path?: string | undefined;
    syscall?: string | undefined;
}

export interface VoidFunction {
    (): void;
}

/**
 *   This lets you use macros as regular imports
 *   @example
 *   ```
 *   {
 *     "react-relay": {
 *       "graphql": "bun-macro-relay/bun-macro-relay.tsx"
 *     }
 *   }
 *  ```
 */
export type MacroMap = Record<string, Record<string, string>>;

declare global {
    interface console {
        assert(condition?: boolean, ...data: any[]): void;
        clear(): void;
        /**
         * Increment a [count](https://www.youtube.com/watch?v=2AoxCkySv34&t=22s)
         * @param label label counter
         */
        count(label?: string): void;
        countReset(label?: string): void;
        debug(...data: any[]): void;
        dir(item?: any, options?: any): void;
        dirxml(...data: any[]): void;
        /**
         * Log to stderr in your terminal
         *
         * Appears in red
         *
         * @param data something to display
         */
        error(...data: any[]): void;
        /** Does nothing currently */
        group(...data: any[]): void;
        /** Does nothing currently */
        groupCollapsed(...data: any[]): void;
        /** Does nothing currently */
        groupEnd(): void;
        info(...data: any[]): void;
        log(...data: any[]): void;
        /** Does nothing currently */
        table(tabularData?: any, properties?: string[]): void;
        /**
         * Begin a timer to log with {@link console.timeEnd}
         *
         * @param label - The label to use for the timer
         *
         * ```ts
         *  console.time("how long????");
         * for (let i = 0; i < 999999; i++) {
         *    // do stuff
         *    let x = i * i;
         * }
         * console.timeEnd("how long????");
         * ```
         */
        time(label?: string): void;
        /**
         * End a timer to log with {@link console.time}
         *
         * @param label - The label to use for the timer
         *
         * ```ts
         *  console.time("how long????");
         * for (let i = 0; i < 999999; i++) {
         *  // do stuff
         *  let x = i * i;
         * }
         * console.timeEnd("how long????");
         * ```
         */
        timeEnd(label?: string): void;
        timeLog(label?: string, ...data: any[]): void;
        timeStamp(label?: string): void;
        trace(...data: any[]): void;
        warn(...data: any[]): void;
    }

    let console: console;

    // -- HTMLRewriter --
    /**
     * [HTMLRewriter](https://developers.cloudflare.com/workers/runtime-apis/html-rewriter?bun) is a fast API for transforming HTML.
     *
     * Bun leverages a native implementation powered by [lol-html](https://github.com/cloudflare/lol-html).
     *
     * HTMLRewriter can be used to transform HTML in a letiety of ways, including:
     * * Rewriting URLs
     * * Adding meta tags
     * * Removing elements
     * * Adding elements to the head
     *
     * @example
     * ```ts
     * const rewriter = new HTMLRewriter().on('a[href]', {
     *   element(element: Element) {
     *     // Rewrite all the URLs to this youtube video
     *     element.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
     *   }
     * });
     * rewriter.transform(await fetch("https://remix.run"));
     * ```
     */
    class HTMLRewriter {
        constructor();
        on(selector: string, handlers: HTMLRewriterElementContentHandlers): HTMLRewriter;
        onDocument(handlers: HTMLRewriterDocumentContentHandlers): HTMLRewriter;
        /**
         * @param input - The HTML to transform
         * @returns A new {@link Response} with the transformed HTML
         */
        transform(input: Response): Response;
    }

    interface HTMLRewriterElementContentHandlers {
        element?(element: Element): void | Promise<void>;
        comments?(comment: Comment): void | Promise<void>;
        text?(text: Text): void | Promise<void>;
    }

    interface HTMLRewriterDocumentContentHandlers {
        doctype?(doctype: Doctype): void | Promise<void>;
        comments?(comment: Comment): void | Promise<void>;
        text?(text: Text): void | Promise<void>;
        end?(end: DocumentEnd): void | Promise<void>;
    }

    interface Text {
        readonly text: string;
        readonly lastInTextNode: boolean;
        readonly removed: boolean;
        before(content: Content, options?: ContentOptions): Text;
        after(content: Content, options?: ContentOptions): Text;
        replace(content: Content, options?: ContentOptions): Text;
        remove(): Text;
    }

    interface Doctype {
        readonly name: string | null;
        readonly publicId: string | null;
        readonly systemId: string | null;
    }

    interface DocumentEnd {
        append(content: Content, options?: ContentOptions): DocumentEnd;
    }

    interface ContentOptions {
        html?: boolean;
    }
    type Content = string;

    interface Comment {
        text: string;
        readonly removed: boolean;
        before(content: Content, options?: ContentOptions): Comment;
        after(content: Content, options?: ContentOptions): Comment;
        replace(content: Content, options?: ContentOptions): Comment;
        remove(): Comment;
    }

    interface Element {
        tagName: string;
        readonly attributes: IterableIterator<string[]>;
        readonly removed: boolean;
        readonly namespaceURI: string;
        getAttribute(name: string): string | null;
        hasAttribute(name: string): boolean;
        setAttribute(name: string, value: string): Element;
        removeAttribute(name: string): Element;
        before(content: Content, options?: ContentOptions): Element;
        after(content: Content, options?: ContentOptions): Element;
        prepend(content: Content, options?: ContentOptions): Element;
        append(content: Content, options?: ContentOptions): Element;
        replace(content: Content, options?: ContentOptions): Element;
        remove(): Element;
        removeAndKeepContent(): Element;
        setInnerContent(content: Content, options?: ContentOptions): Element;
        onEndTag(handler: (tag: EndTag) => void | Promise<void>): void;
    }

    interface EndTag {
        name: string;
        before(content: Content, options?: ContentOptions): EndTag;
        after(content: Content, options?: ContentOptions): EndTag;
        remove(): EndTag;
    }
    // -- HTMLRewriter

    interface ImportMeta {
        /**
         * Absolute path to the source file
         *
         * This is an alias of `import.meta.path`
         *
         * A future version of this may be an absolute URL.
         */
        url: string;
        /**
         * Absolute path to the source file
         */
        path: string;
        /**
         * Absolute path to the directory containing the source file.
         *
         * Does not have a trailing slash
         */
        dir: string;
        /**
         * Filename of the source file
         */
        file: string;
        /**
         * Resolve a module ID the same as if you imported it
         *
         * On failure, throws a `ResolveError`
         */
        resolve(moduleId: string): Promise<string>;
        /**
         * Resolve a `moduleId` as though it were imported from `parent`
         *
         * On failure, throws a `ResolveError`
         */
        resolve(moduleId: string, parent: string): Promise<string>;
    }

    interface EncodeIntoResult {
        /**
         * The read Unicode code units of input.
         */
        read: number;
        /**
         * The written UTF-8 bytes of output.
         */
        written: number;
    }

    interface Process {
        /**
         * The current version of Bun
         */
        version: string;
        /**
         * Run a function on the next tick of the event loop
         *
         * This is the same as {@link queueMicrotask}
         *
         * @param callback - The function to run
         */
        nextTick(callback: (...args: any) => any, ...args: any): void;
        versions: Record<string, string>;
        ppid: number;
        pid: number;
        arch: 'arm64' | 'arm' | 'ia32' | 'mips' | 'mipsel' | 'ppc' | 'ppc64' | 's390' | 's390x' | 'x32' | 'x64' | 'x86';
        platform: 'darwin' | 'freebsd' | 'linux' | 'openbsd' | 'sunos' | 'win32';
        argv: string[];
        // execArgv: string[];
        env: Record<string, string> & {
            NODE_ENV: string;
        };
        // execPath: string;
        // abort(): void;
        chdir(directory: string): void;
        cwd(): string;
        exit(code?: number): void;
        getgid(): number;
        setgid(id: number | string): void;
        getuid(): number;
        setuid(id: number | string): void;
    }

    let process: Process;

    interface BlobInterface {
        text(): Promise<string>;
        arrayBuffer(): Promise<ArrayBuffer>;
        json(): Promise<JSON>;
    }

    type BlobPart = string | Blob | ArrayBufferView | ArrayBuffer | FileBlob;
    interface BlobPropertyBag {
        /** Set a default "type" */
        type?: string;

        /** Not implemented in Bun yet. */
        endings?: 'transparent' | 'native';
    }

    /**
     * This Fetch API interface allows you to perform various actions on HTTP
     * request and response headers. These actions include retrieving, setting,
     * adding to, and removing. A Headers object has an associated header list,
     * which is initially empty and consists of zero or more name and value
     * pairs.
     *
     * You can add to this using methods like append()
     *
     * In all methods of this interface, header names are matched by
     * case-insensitive byte sequence.
     */
    interface Headers {
        append(name: string, value: string): void;
        delete(name: string): void;
        get(name: string): string | null;
        has(name: string): boolean;
        set(name: string, value: string): void;
        forEach(callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void;
    }

    let Headers: {
        prototype: Headers;
        new (init?: HeadersInit): Headers;
    };

    type HeadersInit = Array<[string, string]> | Record<string, string> | Headers;

    class Blob implements BlobInterface {
        /**
         * Create a new view **without 🚫 copying** the underlying data.
         *
         * Similar to [`TypedArray.subarray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray)
         *
         * @param begin The index that sets the beginning of the view.
         * @param end The index that sets the end of the view.
         *
         */
        slice(begin?: number, end?: number): Blob;

        /**
         * Read the data from the blob as a string. It will be decoded from UTF-8.
         */
        text(): Promise<string>;

        /**
         * Read the data from the blob as an ArrayBuffer.
         *
         * This copies the data into a new ArrayBuffer.
         */
        arrayBuffer(): Promise<ArrayBuffer>;

        /**
         * Read the data from the blob as a JSON object.
         *
         * This first decodes the data from UTF-8, then parses it as JSON.
         *
         */
        json(): Promise<JSON>;
    }

    /**
     * Represents an HTTP [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
     *
     * Use it to get the body of the response, the status code, and other information.
     *
     * @example
     * ```ts
     * const response: Response = await fetch("https://remix.run");
     * await response.text();
     * ```
     * @example
     * ```ts
     * const response: Response = await fetch("https://remix.run");
     * await Bun.write("remix.html", response);
     * ```
     */
    class Response implements BlobInterface {
        constructor(
            body: BlobPart | BlobPart[] | Blob | FileBlob,
            options?: {
                headers?: HeadersInit;
                /** @default 200 */
                status?: number;
            },
        );

        /**
         * HTTP [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) sent with the response.
         *
         * @example
         * ```ts
         * const {headers} = await fetch("https://remix.run");
         * headers.get("Content-Type");
         * headers.get("Content-Length");
         * headers.get("Set-Cookie");
         * ```
         */
        headers: Headers;

        /**
         * Has the body of the response already been consumed?
         */
        bodyUsed: boolean;

        /**
         * Read the data from the Response as a string. It will be decoded from UTF-8.
         *
         * When the body is valid latin1, this operation is zero copy.
         */
        text(): Promise<string>;

        /**
         * Read the data from the Response as a string. It will be decoded from UTF-8.
         *
         * When the body is valid latin1, this operation is zero copy.
         */
        arrayBuffer(): Promise<ArrayBuffer>;

        /**
         * Read the data from the Response as a JSON object.
         *
         * This first decodes the data from UTF-8, then parses it as JSON.
         *
         */
        json(): Promise<JSON>;

        /**
         * Read the data from the Response as a Blob.
         *
         * This allows you to reuse the underlying data.
         *
         * @returns Promise<Blob> - The body of the response as a {@link Blob}.
         */
        blob(): Promise<Blob>;
    }

    type RequestCache = 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
    type RequestCredentials = 'include' | 'omit' | 'same-origin';
    type RequestDestination =
        | ''
        | 'audio'
        | 'audioworklet'
        | 'document'
        | 'embed'
        | 'font'
        | 'frame'
        | 'iframe'
        | 'image'
        | 'manifest'
        | 'object'
        | 'paintworklet'
        | 'report'
        | 'script'
        | 'sharedworker'
        | 'style'
        | 'track'
        | 'video'
        | 'worker'
        | 'xslt';
    type RequestMode = 'cors' | 'navigate' | 'no-cors' | 'same-origin';
    type RequestRedirect = 'error' | 'follow' | 'manual';
    type ReferrerPolicy =
        | ''
        | 'no-referrer'
        | 'no-referrer-when-downgrade'
        | 'origin'
        | 'origin-when-cross-origin'
        | 'same-origin'
        | 'strict-origin'
        | 'strict-origin-when-cross-origin'
        | 'unsafe-url';
    type RequestInfo = Request | string;

    type BodyInit = XMLHttpRequestBodyInit;
    type XMLHttpRequestBodyInit = Blob | BufferSource | string;

    interface RequestInit {
        /**
         * A BodyInit object or null to set request's body.
         */
        body?: BodyInit | null;
        /**
         * A string indicating how the request will interact with the browser's cache to set request's cache.
         *
         * Note: as of Bun v0.0.74, this is not implemented yet.
         */
        cache?: RequestCache;
        /**
         * A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.
         */
        credentials?: RequestCredentials;
        /**
         * A Headers object, an object literal, or an array of two-item arrays to set request's headers.
         */
        headers?: HeadersInit;
        /**
         * A cryptographic hash of the resource to be fetched by request. Sets request's integrity.
         *
         * Note: as of Bun v0.0.74, this is not implemented yet.
         */
        integrity?: string;
        /**
         * A boolean to set request's keepalive.
         *
         * Note: as of Bun v0.0.74, this is not implemented yet.
         */
        keepalive?: boolean;
        /**
         * A string to set request's method.
         */
        method?: string;
        /**
         * A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.
         */
        mode?: RequestMode;
        /**
         * A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.
         */
        redirect?: RequestRedirect;
        /**
         * A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.
         */
        referrer?: string;
        /**
         * A referrer policy to set request's referrerPolicy.
         */
        referrerPolicy?: ReferrerPolicy;
        /**
         * An AbortSignal to set request's signal.
         *
         * Note: as of Bun v0.0.74, this is not implemented yet.
         */
        signal?: AbortSignal | null;
        /**
         * Can only be null. Used to disassociate request from any Window.
         *
         * This does nothing in Bun
         */
        window?: any;
    }

    /**
     * [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) represents an HTTP request.
     *
     * @example
     * ```ts
     * const request = new Request("https://remix.run/");
     * await fetch(request);
     * ```
     *
     * @example
     * ```ts
     * const request = new Request("https://remix.run/");
     * await fetch(request);
     * ```
     */
    class Request implements BlobInterface {
        constructor(requestInfo: RequestInfo, requestInit?: RequestInit);

        /**
         * Read or write the HTTP headers for this request.
         *
         * @example
         * ```ts
         * const request = new Request("https://remix.run/");
         * request.headers.set("Content-Type", "application/json");
         * request.headers.set("Accept", "application/json");
         * await fetch(request);
         * ```
         */
        headers: Headers;

        /**
         * Consume the [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) body as a string. It will be decoded from UTF-8.
         *
         * When the body is valid latin1, this operation is zero copy.
         */
        text(): Promise<string>;

        /**
         * Consume the [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) body as an ArrayBuffer.
         *
         */
        arrayBuffer(): Promise<ArrayBuffer>;

        /**
         * Consume the [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) body as a JSON object.
         *
         * This first decodes the data from UTF-8, then parses it as JSON.
         *
         */
        json(): Promise<JSON>;

        /**
         * Consume the [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) body as a `Blob`.
         *
         * This allows you to reuse the underlying data.
         *
         */
        blob(): Promise<Blob>;
    }

    interface Crypto {
        getRandomValues(array: TypedArray): void;
        /**
         * Generate a cryptographically secure random UUID.
         *
         * @example
         *
         * ```js
         * crypto.randomUUID()
         * '5e6adf82-f516-4468-b1e1-33d6f664d7dc'
         * ```
         */
        randomUUID(): string;
    }

    let crypto: Crypto;

    /**
     * [`atob`](https://developer.mozilla.org/en-US/docs/Web/API/atob) converts ascii text into base64.
     *
     * @param asciiText The ascii text to convert.
     */
    function atob(asciiText: string): string;

    /**
     * [`btoa`](https://developer.mozilla.org/en-US/docs/Web/API/btoa) decodes base64 into ascii text.
     *
     * @param base64Text The base64 text to convert.
     */
    function btoa(base64Text: string): string;

    /**
     * An implementation of the [WHATWG Encoding Standard](https://encoding.spec.whatwg.org/) `TextEncoder` API. All
     * instances of `TextEncoder` only support UTF-8 encoding.
     *
     * ```js
     * const encoder = new TextEncoder();
     * const uint8array = encoder.encode('this is some data');
     * ```
     *
     */
    class TextEncoder {
        constructor(encoding?: 'utf-8');
        readonly encoding: 'utf-8';

        /**
         * UTF-8 encodes the `input` string and returns a `Uint8Array` containing the
         * encoded bytes.
         * @param [input='an empty string'] The text to encode.
         */
        encode(input?: string): Uint8Array;
        /**
         * UTF-8 encodes the `src` string to the `dest` Uint8Array and returns an object
         * containing the read Unicode code units and written UTF-8 bytes.
         *
         * ```js
         * const encoder = new TextEncoder();
         * const src = 'this is some data';
         * const dest = new Uint8Array(10);
         * const { read, written } = encoder.encodeInto(src, dest);
         * ```
         * @param src The text to encode.
         * @param dest The array to hold the encode result.
         */
        encodeInto(src?: string, dest?: TypedArray): EncodeIntoResult;
    }

    class TextDecoder {
        constructor(encoding?: Bun.WebPlatform.Encoding, options?: { fatal?: boolean; ignoreBOM?: boolean });

        encoding: Bun.WebPlatform.Encoding;
        ignoreBOM: boolean;
        fatal: boolean;

        /**
         * Decodes the `input` and returns a string. If `options.stream` is `true`, any
         * incomplete byte sequences occurring at the end of the `input` are buffered
         * internally and emitted after the next call to `textDecoder.decode()`.
         *
         * If `textDecoder.fatal` is `true`, decoding errors that occur will result in a`TypeError` being thrown.
         * @param input An `ArrayBuffer`, `DataView` or `TypedArray` instance containing the encoded data.
         */
        decode(input?: TypedArray | ArrayBuffer): string;
    }

    type TypedArray =
        | Uint8Array
        | Int8Array
        | Uint8ClampedArray
        | Int16Array
        | Uint16Array
        | Int32Array
        | Uint32Array
        | Float32Array
        | Float64Array;

    namespace Bun {
        namespace WebPlatform {
            type Encoding = 'utf-8' | 'windows-1252' | 'utf-16';
        }

        type Platform =
            /**
             * When building for bun.js
             */
            | 'bun'
            /**
             * When building for the web
             */
            | 'browser'
            /**
             * When building for node.js
             */
            | 'node'
            | 'neutral';

        type JavaScriptLoader = 'jsx' | 'js' | 'ts' | 'tsx';

        interface TranspilerOptions {
            /**
             * Replace key with value. Value must be a JSON string.
             * @example
             *  ```
             *  { "process.env.NODE_ENV": "\"production\"" }
             * ```
             */
            define?: Record<string, string>;

            /** What is the default loader used for this transpiler?  */
            loader?: JavaScriptLoader;

            /**  What platform are we targeting? This may affect how import and/or require is used */
            /**  @example "browser" */
            platform?: Platform;

            /**
             *  TSConfig.json file as stringified JSON or an object
             *  Use this to set a custom JSX factory, fragment, or import source
             *  For example, if you want to use Preact instead of React. Or if you want to use Emotion.
             */
            tsconfig?: string;

            /**
             *    Replace an import statement with a macro.
             *
             *    This will remove the import statement from the final output
             *    and replace any function calls or template strings with the result returned by the macro
             *
             *    @example
             *    ```json
             *    {
             *        "react-relay": {
             *            "graphql": "bun-macro-relay"
             *        }
             *    }
             *    ```
             *
             *    Code that calls `graphql` will be replaced with the result of the macro.
             *
             *    ```js
             *    import {graphql} from "react-relay";
             *
             *    // Input:
             *    const query = graphql`
             *        query {
             *            ... on User {
             *                id
             *            }
             *        }
             *    }`;
             *    ```
             *
             *    Will be replaced with:
             *
             *    ```js
             *    import UserQuery from "./UserQuery.graphql";
             *    const query = UserQuery;
             *    ```
             */
            macros: MacroMap;
        }

        /**
         * Quickly transpile TypeScript, JSX, or JS to modern JavaScript.
         *
         * @example
         * ```js
         * const transpiler = new Bun.Transpiler();
         * transpiler.transformSync(`
         *   const App = () => <div>Hello World</div>;
         *   default App;
         * `);
         * // This outputs:
         * const output = `
         * const App = () => jsx("div", {
         *   children: "Hello World"
         * }, undefined, false, undefined, this);
         * default App;
         * `
         * ```
         *
         */
        class Transpiler {
            constructor(options: TranspilerOptions);

            /**
             * Transpile code from TypeScript or JSX into valid JavaScript.
             * This function does not resolve imports.
             * @param code The code to transpile
             */
            transform(code: StringOrBuffer, loader?: JavaScriptLoader): Promise<string>;
            /**
             * Transpile code from TypeScript or JSX into valid JavaScript.
             * This function does not resolve imports.
             * @param code The code to transpile
             *
             */
            transformSync(code: StringOrBuffer, loader?: JavaScriptLoader): string;

            /**
             * Get a list of import paths and paths from a TypeScript, JSX, TSX, or JavaScript file.
             * @param code The code to scan
             * @example
             * ```js
             * const {imports, exports} = transpiler.scan(`
             * import {foo} from "baz";
             * const hello = "hi!";
             * `);
             *
             * console.log(imports); // ["baz"]
             * console.log(exports); // ["hello"]
             * ```
             */
            scan(code: StringOrBuffer): { exports: string[]; imports: Import[] };

            /**
             *  Get a list of import paths from a TypeScript, JSX, TSX, or JavaScript file.
             * @param code The code to scan
             * @example
             * ```js
             * const imports = transpiler.scanImports(`
             * import {foo} from "baz";
             * import type {FooType} from "bar";
             * import type {DogeType} from "wolf";
             * `);
             *
             * console.log(imports); // ["baz"]
             * ```
             * This is a fast path which performs less work than `scan`.
             */
            scanImports(code: StringOrBuffer): Import[];
        }

        interface Import {
            path: string;

            kind:
                | 'import-statement'
                | 'require-call'
                | 'require-resolve'
                | 'dynamic-import'
                | 'import-rule'
                | 'url-token'
                | 'internal'
                | 'entry-point';
        }

        interface HTTP {
            /**
             * What port should the server listen on?
             * @default process.env.PORT || "3000"
             */
            port?: string | number;
            /**
             * What hostname should the server listen on?
             * @default "0.0.0.0" // listen on all interfaces
             * @example "127.0.0.1" // Only listen locally
             * @example "remix.run" // Only listen on remix.run
             */
            hostname?: string;

            /**
             * What is the maximum size of a request body? (in bytes)
             * @default 1024 * 1024 * 128 // 128MB
             */
            maxRequestBodySize?: number;

            /**
             * Render contextual errors? This enables bun's error page
             * @default process.env.NODE_ENV !== 'production'
             */
            development?: boolean;

            /**
             * Handle HTTP requests
             *
             * Respond to {@link Request} objects with a {@link Response} object.
             *
             */
            fetch(request: Request): Response | Promise<Response>;

            error?: (request: Errorlike) => Response | Promise<Response> | undefined | Promise<undefined>;
        }

        interface Errorlike extends Error {
            code?: string;
            errno?: number;
            syscall?: string;
        }

        interface SSLAdvancedOptions {
            passphrase?: string;
            caFile?: string;
            dhParamsFile?: string;

            /**
             * This sets `OPENSSL_RELEASE_BUFFERS` to 1.
             * It reduces overall performance but saves some memory.
             * @default false
             */
            lowMemoryMode?: boolean;
        }
        interface SSLOptions {
            /**
             * File path to a TLS key
             *
             * To enable TLS, this option is required.
             */
            keyFile: string;
            /**
             * File path to a TLS certificate
             *
             * To enable TLS, this option is required.
             */
            certFile: string;
        }

        type SSLServeOptions = HTTP &
            SSLOptions &
            SSLAdvancedOptions & {
                /**
                 *  The keys are [SNI](https://en.wikipedia.org/wiki/Server_Name_Indication) hostnames.
                 *  The values are SSL options objects.
                 */
                serverNames: Record<string, SSLOptions & SSLAdvancedOptions>;
            };

        type Serve = SSLServeOptions | HTTP;
        /**
         * Start a fast HTTP server.
         *
         * @param options Server options (port defaults to $PORT || 8080)
         *
         * -----
         *
         * @example
         *
         * ```ts
         * Bun.serve({
         *   fetch(req: Request): Response | Promise<Response> {
         *     return new Response("Hello World!");
         *   },
         *
         *   // Optional port number - the default value is 3000
         *   port: process.env.PORT || 3000,
         * });
         * ```
         * -----
         *
         * @example
         *
         * Send a file
         *
         * ```ts
         * Bun.serve({
         *   fetch(req: Request): Response | Promise<Response> {
         *     return new Response(Bun.file("./package.json"));
         *   },
         *
         *   // Optional port number - the default value is 3000
         *   port: process.env.PORT || 3000,
         * });
         * ```
         */
        function serve(options: Serve): void;

        /**
         *
         * Persist a {@link Response} body to disk.
         *
         * @param destination The file to write to. If the file doesn't exist,
         * it will be created and if the file does exist, it will be
         * overwritten. If `input`'s size is less than `destination`'s size,
         * `destination` will be truncated.
         * @param input - `Response` object
         * @returns A promise that resolves with the number of bytes written.
         */
        function write(destination: FileBlob, input: Response): Promise<number>;

        /**
         *
         * Persist a {@link Response} body to disk.
         *
         * @param destinationPath The file path to write to. If the file doesn't
         * exist, it will be created and if the file does exist, it will be
         * overwritten. If `input`'s size is less than `destination`'s size,
         * `destination` will be truncated.
         * @param input - `Response` object
         * @returns A promise that resolves with the number of bytes written.
         */
        function write(destinationPath: string, input: Response): Promise<number>;

        /**
         *
         * Use the fastest syscalls available to copy from `input` into `destination`.
         *
         * If `destination` exists, it must be a regular file or symlink to a file.
         *
         * On Linux, this uses `copy_file_range`.
         *
         * On macOS, when the destination doesn't already exist, this uses
         * [`clonefile()`](https://www.manpagez.com/man/2/clonefile/) and falls
         * back to [`fcopyfile()`](https://www.manpagez.com/man/2/fcopyfile/)
         *
         * @param destination The file to write to. If the file doesn't exist,
         * it will be created and if the file does exist, it will be
         * overwritten. If `input`'s size is less than `destination`'s size,
         * `destination` will be truncated.
         * @param input The file to copy from.
         * @returns A promise that resolves with the number of bytes written.
         */
        function write(destination: FileBlob, input: FileBlob): Promise<number>;

        /**
         *
         * Use the fastest syscalls available to copy from `input` into `destination`.
         *
         * If `destination` exists, it must be a regular file or symlink to a file.
         *
         * On Linux, this uses `copy_file_range`.
         *
         * On macOS, when the destination doesn't already exist, this uses
         * [`clonefile()`](https://www.manpagez.com/man/2/clonefile/) and falls
         * back to [`fcopyfile()`](https://www.manpagez.com/man/2/fcopyfile/)
         *
         * @param destinationPath The file path to write to. If the file doesn't
         * exist, it will be created and if the file does exist, it will be
         * overwritten. If `input`'s size is less than `destination`'s size,
         * `destination` will be truncated.
         * @param input The file to copy from.
         * @returns A promise that resolves with the number of bytes written.
         */
        function write(destinationPath: string, input: FileBlob): Promise<number>;

        /**
         *
         * Use the fastest syscalls available to copy from `input` into `destination`.
         *
         * If `destination` exists, it must be a regular file or symlink to a file.
         *
         * @param destination The file or file path to write to
         * @param input The data to copy into `destination`.
         * @returns A promise that resolves with the number of bytes written.
         */
        function write(destination: FileBlob | string, input: Blob | TypedArray | string | BlobPart[]): Promise<number>;

        /**
         * Resolve a `moduleId` as though it were imported from `parent`
         *
         * On failure, throws a `ResolveError`
         *
         * For now, use the sync version. There is zero performance benefit to using this async version. It exists for future-proofing.
         */
        function resolve(moduleId: string, parent: string): Promise<string>;

        /**
         * Synchronously resolve a `moduleId` as though it were imported from `parent`
         *
         * On failure, throws a `ResolveError`
         */
        function resolveSync(moduleId: string, parent: string): string;

        /**
         * [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) powered by the fastest system calls available for operating on files.
         *
         * This Blob is lazy. That means it won't do any work until you read from it.
         *
         * - `size` will not be valid until the contents of the file are read at least once.
         * - `type` is auto-set based on the file extension when possible
         *
         * @example
         * ```js
         * const file = Bun.file("./hello.json");
         * console.log(file.type); // "application/json"
         * console.log(await file.json()); // { hello: "world" }
         * ```
         *
         * @example
         * ```js
         * await Bun.write(
         *   Bun.file("./hello.txt"),
         *   "Hello, world!"
         * );
         * ```
         * @param path The path to the file (lazily loaded)
         *
         */
        function file(path: string, options?: BlobPropertyBag): FileBlob;

        /**
         * `Blob` that leverages the fastest system calls available to operate on files.
         *
         * This Blob is lazy. It won't do any work until you read from it. Errors propagate as promise rejections.
         *
         * `Blob.size` will not be valid until the contents of the file are read at least once.
         * `Blob.type` will have a default set based on the file extension
         *
         * @example
         * ```js
         * const file = Bun.file(new TextEncoder.encode("./hello.json"));
         * console.log(file.type); // "application/json"
         * ```
         *
         * @param path The path to the file as a byte buffer (the buffer is copied)
         */
        function file(path: ArrayBufferLike | Uint8Array, options?: BlobPropertyBag): FileBlob;

        /**
         * [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) powered by the fastest system calls available for operating on files.
         *
         * This Blob is lazy. That means it won't do any work until you read from it.
         *
         * - `size` will not be valid until the contents of the file are read at least once.
         *
         * @example
         * ```js
         * const file = Bun.file(fd);
         * ```
         *
         * @param fileDescriptor The file descriptor of the file
         */
        function file(fileDescriptor: number, options?: BlobPropertyBag): FileBlob;

        /**
         * Allocate a new [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) without zeroing the bytes.
         *
         * This can be 3.5x faster than `new Uint8Array(size)`, but if you send uninitialized memory to your users (even unintentionally), it can potentially leak anything recently in memory.
         */
        function allocUnsafe(size: number): Uint8Array;

        /**
         * Pretty-print an object the same as {@link console.log} to a `string`
         *
         * Supports JSX
         *
         * @param args
         */
        function inspect(...args: any): string;

        interface MMapOptions {
            /**
             * Sets MAP_SYNC flag on Linux. Ignored on macOS due to lack of support.
             */
            sync?: boolean;
            /**
             * Allow other processes to see results instantly?
             * This enables MAP_SHARED. If false, it enables MAP_PRIVATE.
             * @default true
             */
            shared?: boolean;
        }
        /**
         * Open a file as a live-updating `Uint8Array` without copying memory
         * - Writing to the array writes to the file.
         * - Reading from the array reads from the file.
         *
         * This uses the [`mmap()`](https://man7.org/linux/man-pages/man2/mmap.2.html) syscall under the hood.
         *
         * ---
         *
         * This API inherently has some rough edges:
         * - It does not support empty files. It will throw a `SystemError` with `EINVAL`
         * - Usage on shared/networked filesystems is discouraged. It will be very slow.
         * - If you delete or truncate the file, that will crash bun. This is called a segmentation fault.
         *
         * ---
         *
         * To close the file, set the array to `null` and it will be garbage collected eventually.
         *
         */
        function mmap(path: PathLike, opts?: MMapOptions): Uint8Array;

        interface unsafe {
            /**
             * Cast bytes to a `String` without copying. This is the fastest way to get a `String` from a `Uint8Array` or `ArrayBuffer`.
             *
             * **Only use this for ASCII strings**. If there are non-ascii characters, your application may crash and/or very confusing bugs will happen such as `"foo" !== "foo"`.
             *
             * **The input buffer must not be garbage collected**. That means you will need to hold on to it for the duration of the string's lifetime.
             *
             */
            arrayBufferToString(buffer: Uint8Array | ArrayBufferLike): string;

            /**
             * Cast bytes to a `String` without copying. This is the fastest way to get a `String` from a `Uint16Array`
             *
             * **The input must be a UTF-16 encoded string**. This API does no validation whatsoever.
             *
             * **The input buffer must not be garbage collected**. That means you will need to hold on to it for the duration of the string's lifetime.
             *
             */
            arrayBufferToString(buffer: Uint16Array): string;

            /** Mock bun's segfault handler. You probably don't want to use this */
            segfault(): void;
        }
        let unsafe: unsafe;

        /**
         * Manually trigger the garbage collector
         *
         * This does two things:
         * 1. It tells JavaScriptCore to run the garbage collector
         * 2. It tells [mimalloc](https://github.com/microsoft/mimalloc) to clean up fragmented memory. Mimalloc manages the heap not used in JavaScriptCore.
         *
         * @param force Synchronously run the garbage collector
         */
        function gc(force: boolean): void;

        /**
         * The next time JavaScriptCore is idle, clear unused memory and attempt to reduce the heap size.
         */
        function shrink(): void;

        /**
         * Open a file in your local editor. Auto-detects via `$VISUAL` || `$EDITOR`
         *
         * @param path path to open
         */
        function openInEditor(path: string, options?: EditorOptions): void;

        interface EditorOptions {
            editor?: 'vscode' | 'subl';
            line?: number;
            column?: number;
        }
    }

    interface Blob {
        /**
         * Read the contents of the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) as a JSON object
         * @warn in browsers, this function is only available for `Response` and `Request`
         */
        json(): Promise<any>;
        /**
         * Read the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) as a UTF-8 string
         * @link https://developer.mozilla.org/en-US/docs/Web/API/Blob/text
         */
        text(): Promise<string>;
        /**
         * Read the [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) as an ArrayBuffer object
         * @link https://developer.mozilla.org/en-US/docs/Web/API/Blob/arrayBuffer
         */
        arrayBuffer(): Promise<ArrayBuffer>;
    }

    /**
     * [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) powered by the fastest system calls available for operating on files.
     *
     * This Blob is lazy. That means it won't do any work until you read from it.
     *
     * - `size` will not be valid until the contents of the file are read at least once.
     * - `type` is auto-set based on the file extension when possible
     *
     * @example
     * ```js
     * const file = Bun.file("./hello.json");
     * console.log(file.type); // "application/json"
     * console.log(await file.text()); // '{"hello":"world"}'
     * ```
     *
     * @example
     * ```js
     * await Bun.write(
     *   Bun.file("./hello.txt"),
     *   "Hello, world!"
     * );
     * ```
     *
     */
    interface FileBlob extends Blob {
        /** Currently, "name" is not exposed because it may or may not exist */
        name: never;
    }

    /**
     * Cancel a repeating timer by its timer ID.
     * @param id timer id
     */
    function clearInterval(id?: number): void;
    /**
     * Cancel a delayed function call by its timer ID.
     * @param id timer id
     */
    function clearTimeout(id?: number): void;
    // declare function createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    // declare function createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    /**
     * Send an HTTP(s) request
     *
     * @param url URL string
     * @param init A structured value that contains settings for the fetch() request.
     *
     * @returns A promise that resolves to {@link Response} object.
     *
     *
     */
    function fetch(url: string, init?: RequestInit): Promise<Response>;

    /**
     * Send an HTTP(s) request
     *
     * @param request Request object
     * @param init A structured value that contains settings for the fetch() request.
     *
     * @returns A promise that resolves to {@link Response} object.
     *
     *
     */
    function fetch(request: Request, init?: RequestInit): Promise<Response>;

    function queueMicrotask(callback: VoidFunction): void;
    /**
     * Log an error using the default exception handler
     * @param error Error or string
     */
    function reportError(error: any): void;
    /**
     * Run a function every `interval` milliseconds
     * @param handler function to call
     * @param interval milliseconds to wait between calls
     */
    function setInterval(handler: TimerHandler, interval?: number, ...arguments: any[]): number;
    /**
     * Run a function after `timeout` (milliseconds)
     * @param handler function to call
     * @param timeout milliseconds to wait between calls
     */
    function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    function addEventListener<K extends keyof EventMap>(
        type: K,
        listener: (this: object, ev: EventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    function addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;
    function removeEventListener<K extends keyof EventMap>(
        type: K,
        listener: (this: object, ev: EventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
    function removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;

    // -----------------------
    // -----------------------
    // --- libdom.d.ts

    interface ErrorEventInit extends EventInit {
        colno?: number;
        error?: any;
        filename?: string;
        lineno?: number;
        message?: string;
    }

    interface EventInit {
        bubbles?: boolean;
        cancelable?: boolean;
        composed?: boolean;
    }

    interface EventListenerOptions {
        capture?: boolean;
    }

    interface UIEventInit extends EventInit {
        detail?: number;
        view?: null;
        /** @deprecated */
        which?: number;
    }

    interface EventModifierInit extends UIEventInit {
        altKey?: boolean;
        ctrlKey?: boolean;
        metaKey?: boolean;
        modifierAltGraph?: boolean;
        modifierCapsLock?: boolean;
        modifierFn?: boolean;
        modifierFnLock?: boolean;
        modifierHyper?: boolean;
        modifierNumLock?: boolean;
        modifierScrollLock?: boolean;
        modifierSuper?: boolean;
        modifierSymbol?: boolean;
        modifierSymbolLock?: boolean;
        shiftKey?: boolean;
    }

    interface EventSourceInit {
        withCredentials?: boolean;
    }

    /** A controller object that allows you to abort one or more DOM requests as and when desired. */
    interface AbortController {
        /**
         * Returns the AbortSignal object associated with this object.
         */
        readonly signal: AbortSignal;
        /**
         * Invoking this method will set this object's AbortSignal's aborted flag and signal to any observers that the associated activity is to be aborted.
         */
        abort(): void;
    }

    /** EventTarget is a DOM interface implemented by objects that can receive events and may have listeners for them. */
    interface EventTarget {
        /**
         * Appends an event listener for events whose type attribute value is
         * type. The callback argument sets the callback that will be invoked
         * when the event is dispatched.
         *
         * The options argument sets listener-specific options. For
         * compatibility this can be a boolean, in which case the method behaves
         * exactly as if the value was specified as options's capture.
         *
         * When set to true, options's capture prevents callback from being
         * invoked when the event's eventPhase attribute value is
         * BUBBLING_PHASE. When false (or not present), callback will not be
         * invoked when event's eventPhase attribute value is CAPTURING_PHASE.
         * Either way,callback will be invoked if event's eventPhase attribute
         * value is AT_TARGET.
         *
         * When set to true, options's passive indicates that the callback will
         * not cancel the event by invoking preventDefault(). This is used to
         * enable performance optimizations described in § 2.8 Observing event
         * listeners.
         *
         * When set to true, options's once indicates that the callback will
         * only be invoked once after which the event listener will be removed.
         *
         * If an AbortSignal is passed for options's signal, then the event
         * listener will be removed when signal is aborted.
         *
         * The event listener is appended to target's event listener list and is
         * not appended if it has the same type, callback, and capture.
         */
        addEventListener(
            type: string,
            callback: EventListenerOrEventListenerObject | null,
            options?: AddEventListenerOptions | boolean,
        ): void;
        /** Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise. */
        dispatchEvent(event: Event): boolean;
        /** Removes the event listener in target's event listener list with the same type, callback, and options. */
        removeEventListener(
            type: string,
            callback: EventListenerOrEventListenerObject | null,
            options?: EventListenerOptions | boolean,
        ): void;
    }

    let EventTarget: {
        prototype: EventTarget;
        new (): EventTarget;
    };

    /** An event which takes place in the DOM. */
    interface Event {
        /**
         * Returns true or false depending on how event was initialized. True
         * if event goes through its target's ancestors in reverse tree order,
         * and false otherwise.
         */
        readonly bubbles: boolean;
        cancelBubble: boolean;
        /**
         * Returns true or false depending on how event was initialized. Its
         * return value does not always carry meaning, but true can indicate
         * that part of the operation during which event was dispatched, can be
         * canceled by invoking the preventDefault() method.
         */
        readonly cancelable: boolean;
        /**
         * Returns true or false depending on how event was initialized. True
         * if event invokes listeners past a ShadowRoot node that is the root of
         * its target, and false otherwise.
         */
        readonly composed: boolean;
        /**
         * Returns the object whose event listener's callback is currently
         * being invoked.
         */
        readonly currentTarget: EventTarget | null;
        /**
         * Returns true if preventDefault() was invoked successfully to
         * indicate cancelation, and false otherwise.
         */
        readonly defaultPrevented: boolean;
        /**
         * Returns the event's phase, which is one of NONE, CAPTURING_PHASE,
         * AT_TARGET, and BUBBLING_PHASE.
         */
        readonly eventPhase: number;
        /**
         * Returns true if event was dispatched by the user agent, and false
         * otherwise.
         */
        readonly isTrusted: boolean;
        /**
         * @deprecated
         */
        returnValue: boolean;
        /**
         * @deprecated
         */
        readonly srcElement: EventTarget | null;
        /**
         * Returns the object to which event is dispatched (its target).
         */
        readonly target: EventTarget | null;
        /**
         * Returns the event's timestamp as the number of milliseconds measured
         * relative to the time origin.
         */
        readonly timeStamp: DOMHighResTimeStamp;
        /**
         * Returns the type of event, e.g. "click", "hashchange", or "submit".
         */
        readonly type: string;
        /**
         * Returns the invocation target objects of event's path (objects on
         * which listeners will be invoked), except for any nodes in shadow
         * trees of which the shadow root's mode is "closed" that are not
         * reachable from event's currentTarget.
         */
        composedPath(): EventTarget[];
        /**
         * @deprecated
         */
        initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
        /**
         * If invoked when the cancelable attribute value is true, and while
         * executing a listener for the event with passive set to false, signals
         * to the operation that caused event to be dispatched that it needs to
         * be canceled.
         */
        preventDefault(): void;
        /**
         * Invoking this method prevents event from reaching any registered
         * event listeners after the current one finishes running and, when
         * dispatched in a tree, also prevents event from reaching any other
         * objects.
         */
        stopImmediatePropagation(): void;
        /**
         * When dispatched in a tree, invoking this method prevents event from
         * reaching any objects other than the current object.
         */
        stopPropagation(): void;
        readonly AT_TARGET: number;
        readonly BUBBLING_PHASE: number;
        readonly CAPTURING_PHASE: number;
        readonly NONE: number;
    }

    let Event: {
        prototype: Event;
        new (type: string, eventInitDict?: EventInit): Event;
        readonly AT_TARGET: number;
        readonly BUBBLING_PHASE: number;
        readonly CAPTURING_PHASE: number;
        readonly NONE: number;
    };

    /**
     * Events providing information related to errors in scripts or in files.
     */
    interface ErrorEvent extends Event {
        readonly colno: number;
        readonly error: any;
        readonly filename: string;
        readonly lineno: number;
        readonly message: string;
    }

    let ErrorEvent: {
        prototype: ErrorEvent;
        new (type: string, eventInitDict?: ErrorEventInit): ErrorEvent;
    };

    /**
     * The URL interface represents an object providing static methods used for
     * creating object URLs.
     */
    interface URL {
        hash: string;
        host: string;
        hostname: string;
        href: string;
        toString(): string;
        readonly origin: string;
        password: string;
        pathname: string;
        port: string;
        protocol: string;
        search: string;
        readonly searchParams: URLSearchParams;
        username: string;
        toJSON(): string;
    }

    interface URLSearchParams {
        /** Appends a specified key/value pair as a new search parameter. */
        append(name: string, value: string): void;
        /** Deletes the given search parameter, and its associated value, from the list of all search parameters. */
        delete(name: string): void;
        /** Returns the first value associated to the given search parameter. */
        get(name: string): string | null;
        /** Returns all the values association with a given search parameter. */
        getAll(name: string): string[];
        /** Returns a Boolean indicating if such a search parameter exists. */
        has(name: string): boolean;
        /** Sets the value associated to a given search parameter to the given value. If there were several values, delete the others. */
        set(name: string, value: string): void;
        sort(): void;
        /** Returns a string containing a query string suitable for use in a URL. Does not include the question mark. */
        toString(): string;
        forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void;
    }

    let URLSearchParams: {
        prototype: URLSearchParams;
        new (init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams;
        toString(): string;
    };

    let URL: {
        prototype: URL;
        new (url: string | URL, base?: string | URL): URL;
        /** Not implemented yet */
        createObjectURL(obj: Blob): string;
        /** Not implemented yet */
        revokeObjectURL(url: string): void;
    };

    type TimerHandler = (...args: any[]) => void;

    interface EventListener {
        (evt: Event): void;
    }

    interface EventListenerObject {
        handleEvent(object: Event): void;
    }

    let AbortController: {
        prototype: AbortController;
        new (): AbortController;
    };

    interface FetchEvent extends Event {
        readonly request: Request;
        readonly url: string;

        waitUntil(promise: Promise<any>): void;
        respondWith(response: Response | Promise<Response>): void;
    }

    interface EventMap {
        fetch: FetchEvent;
        // exit: Event;
    }

    interface AbortSignalEventMap {
        abort: Event;
    }

    interface AddEventListenerOptions extends EventListenerOptions {
        once?: boolean;
        passive?: boolean;
        signal?: AbortSignal;
    }

    /** A signal object that allows you to communicate with a DOM request (such as a Fetch) and abort it if required via an AbortController object. */
    interface AbortSignal extends EventTarget {
        /**
         * Returns true if this AbortSignal's AbortController has signaled to abort, and false otherwise.
         */
        readonly aborted: boolean;
        onabort: ((this: AbortSignal, ev: Event) => any) | null;
        addEventListener<K extends keyof AbortSignalEventMap>(
            type: K,
            listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any,
            options?: boolean | AddEventListenerOptions,
        ): void;
        addEventListener(
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | AddEventListenerOptions,
        ): void;
        removeEventListener<K extends keyof AbortSignalEventMap>(
            type: K,
            listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any,
            options?: boolean | EventListenerOptions,
        ): void;
        removeEventListener(
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | EventListenerOptions,
        ): void;
    }

    let AbortSignal: {
        prototype: AbortSignal;
        new (): AbortSignal;
    };

    // type AlgorithmIdentifier = Algorithm | string;
    type BigInteger = Uint8Array;
    type BinaryData = ArrayBuffer | ArrayBufferView;
    // type BodyInit = ReadableStream | XMLHttpRequestBodyInit;
    type BufferSource = ArrayBufferView | ArrayBuffer;
    type COSEAlgorithmIdentifier = number;
    type CSSNumberish = number;
    // type CanvasImageSource =
    //   | HTMLOrSVGImageElement
    //   | HTMLVideoElement
    //   | HTMLCanvasElement
    //   | ImageBitmap;
    type DOMHighResTimeStamp = number;
    type EpochTimeStamp = number;
    type EventListenerOrEventListenerObject = EventListener | EventListenerObject;
}

/**
 * To run the tests, run `bun wiptest`
 *
 * @example
 *
 * ```bash
 * $ bun wiptest
 * ```
 *
 * @example
 * ```bash
 * $ bun wiptest file-name
 * ```
 */
declare module 'bun:test' {
    function describe(label: string, body: VoidFunction): any;
    function it(label: string, test: () => void | Promise<any>): any;
    function test(label: string, test: () => void | Promise<any>): any;

    function expect(value: any): Expect;

    interface Expect {
        toBe(value: any): void;
        toContain(value: any): void;
    }
}

import './path.d.ts';
import './fs.d.ts';
