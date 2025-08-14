declare namespace domurl {
    type QueryString<T> = T;
}

declare class Url<T> {
    /**
     * Constructor. If url argument is not passed, current document URL will be used. If second
     * argument bypassed as true value it will try to do no transforms on a given source URL to
     * keep it form as it was initially given. Otherwise, by default, it will try to resolve given
     * URL to an absolute form.
     */
    constructor(url?: string, noTransform?: boolean);

    /**
     * QueryString object. It's a simple Javascript object with automatic string mapping. String
     * representation contains everything after "?" and to the end of QueryString.
     */
    query: domurl.QueryString<T>;

    /**
     * protocol part of URL, everything between the beginning of the URL string and "://"
     * delimiter (if specified)
     */
    protocol: string;

    /**
     * auth user name (if specified)
     */
    user: string;

    /**
     * auth user password (if specified)
     */
    pass: string;

    /**
     * host name (if specified)
     */
    host: string;

    /**
     * port number (if specified)
     */
    port: string;

    /**
     * document path
     */
    path: string;

    /**
     * Anchor part of the URL. Everything after "#" and to the end of anchor.
     */
    hash: string;

    /**
     * Converts URL to string representation. As far as it's special method, any time string
     * operations is performed over Url objects this method is automatically called
     */
    toString: () => string;

    /**
     * Performs URI-compatible encoding of the given urlPart component.
     */
    encode: (urlPart: string) => string;

    /**
     * Performs decoding of URI-encoded component.
     */
    decode: (encUrlPart: string) => string;

    /**
     * Checks if current URL is an absolute resource locator (globally absolute
     * or absolute path to current server)
     */
    isAbsolute: () => boolean;

    /**
     * Returns Url.path representation as array or sets it via array representation if optional
     * array of pathStrings was provided.
     */
    paths: (pathStrings?: string[]) => string[];

    /**
     * Returns true if query string contains no parameters, false otherwise.
     */
    isEmptyQuery: () => boolean;

    /**
     * Returns total count of the query string parameters.
     */
    queryLength: () => number;

    /**
     * Removes all query string parameters from the URL.
     */
    clearQuery: () => Url<{}>;
}

export = Url;
