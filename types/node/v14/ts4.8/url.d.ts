declare module 'node:url' {
    import { ClientRequestArgs } from 'node:http';
    import { ParsedUrlQuery, ParsedUrlQueryInput } from 'querystring';

    // Input to `url.format`
    interface UrlObject {
        auth?: string | null | undefined;
        hash?: string | null | undefined;
        host?: string | null | undefined;
        hostname?: string | null | undefined;
        href?: string | null | undefined;
        pathname?: string | null | undefined;
        protocol?: string | null | undefined;
        search?: string | null | undefined;
        slashes?: boolean | null | undefined;
        port?: string | number | null | undefined;
        query?: string | null | ParsedUrlQueryInput | undefined;
    }

    // Output of `url.parse`
    interface Url {
        auth: string | null;
        hash: string | null;
        host: string | null;
        hostname: string | null;
        href: string;
        path: string | null;
        pathname: string | null;
        protocol: string | null;
        search: string | null;
        slashes: boolean | null;
        port: string | null;
        query: string | null | ParsedUrlQuery;
    }

    interface UrlWithParsedQuery extends Url {
        query: ParsedUrlQuery;
    }

    interface UrlWithStringQuery extends Url {
        query: string | null;
    }

    /** @deprecated since v11.0.0 - Use the WHATWG URL API. */
    function parse(urlStr: string): UrlWithStringQuery;
    /** @deprecated since v11.0.0 - Use the WHATWG URL API. */
    function parse(urlStr: string, parseQueryString: false | undefined, slashesDenoteHost?: boolean): UrlWithStringQuery;
    /** @deprecated since v11.0.0 - Use the WHATWG URL API. */
    function parse(urlStr: string, parseQueryString: true, slashesDenoteHost?: boolean): UrlWithParsedQuery;
    /** @deprecated since v11.0.0 - Use the WHATWG URL API. */
    function parse(urlStr: string, parseQueryString: boolean, slashesDenoteHost?: boolean): Url;

    function format(URL: URL, options?: URLFormatOptions): string;
    /** @deprecated since v11.0.0 - Use the WHATWG URL API. */
    function format(urlObject: UrlObject | string): string;
    /** @deprecated since v11.0.0 - Use the WHATWG URL API. */
    function resolve(from: string, to: string): string;

    function domainToASCII(domain: string): string;
    function domainToUnicode(domain: string): string;

    /**
     * This function ensures the correct decodings of percent-encoded characters as
     * well as ensuring a cross-platform valid absolute path string.
     * @param url The file URL string or URL object to convert to a path.
     */
    function fileURLToPath(url: string | URL): string;

    /**
     * This function ensures that path is resolved absolutely, and that the URL
     * control characters are correctly encoded when converting into a File URL.
     * @param url The path to convert to a File URL.
     */
    function pathToFileURL(url: string): URL;
    /**
     * This utility function converts a URL object into an ordinary options object as
     * expected by the `http.request()` and `https.request()` APIs.
     *
     * ```js
     * import { urlToHttpOptions } from 'url';
     * const myURL = new URL('https://a:b@測試?abc#foo');
     *
     * console.log(urlToHttpOptions(myURL));
     *
     * {
     *   protocol: 'https:',
     *   hostname: 'xn--g6w251d',
     *   hash: '#foo',
     *   search: '?abc',
     *   pathname: '/',
     *   path: '/?abc',
     *   href: 'https://a:b@xn--g6w251d/?abc#foo',
     *   auth: 'a:b'
     * }
     *
     * ```
     * @since v14.18.0
     * @param url The `WHATWG URL` object to convert to an options object.
     * @return Options object
     */
    function urlToHttpOptions(url: URL): ClientRequestArgs;

    interface URLFormatOptions {
        auth?: boolean | undefined;
        fragment?: boolean | undefined;
        search?: boolean | undefined;
        unicode?: boolean | undefined;
    }

    class URL {
        constructor(input: string, base?: string | URL);
        hash: string;
        host: string;
        hostname: string;
        href: string;
        readonly origin: string;
        password: string;
        pathname: string;
        port: string;
        protocol: string;
        search: string;
        readonly searchParams: URLSearchParams;
        username: string;
        toString(): string;
        toJSON(): string;
    }

    class URLSearchParams implements Iterable<[string, string]> {
        constructor(init?: URLSearchParams | string | Record<string, string | ReadonlyArray<string>> | Iterable<[string, string]> | ReadonlyArray<[string, string]>);
        readonly size: number;
        append(name: string, value: string): void;
        delete(name: string): void;
        entries(): IterableIterator<[string, string]>;
        forEach(callback: (value: string, name: string, searchParams: URLSearchParams) => void, thisArg?: any): void;
        get(name: string): string | null;
        getAll(name: string): string[];
        has(name: string): boolean;
        keys(): IterableIterator<string>;
        set(name: string, value: string): void;
        sort(): void;
        toString(): string;
        values(): IterableIterator<string>;
        [Symbol.iterator](): IterableIterator<[string, string]>;
    }

    import { URL as _URL, URLSearchParams as _URLSearchParams } from 'url';
    global {
        interface URLSearchParams extends _URLSearchParams {}
        interface URL extends _URL {}
        interface Global {
            URL: typeof _URL;
            URLSearchParams: typeof _URLSearchParams;
        }
        /**
         * `URL` class is a global reference for `require('url').URL`
         * https://nodejs.org/api/url.html#the-whatwg-url-api
         * @since v10.0.0
         */
        var URL:
            // For compatibility with "dom" and "webworker" URL declarations
            typeof globalThis extends { onmessage: any, URL: infer URL }
                ? URL
                : typeof _URL;
        /**
         * `URLSearchParams` class is a global reference for `require('url').URLSearchParams`.
         * https://nodejs.org/api/url.html#class-urlsearchparams
         * @since v10.0.0
         */
        var URLSearchParams:
            // For compatibility with "dom" and "webworker" URLSearchParams declarations
            typeof globalThis extends { onmessage: any, URLSearchParams: infer URLSearchParams }
                ? URLSearchParams
                : typeof _URLSearchParams;
    }
}
declare module 'url' {
    export * from 'node:url';
}
