/**
 * Provides access to the Cookies header of a request, allowing the
 * addition, removal, or modification of cookie values.
 */
export class Cookies {
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
    constructor(header?: string | string[], options?: object);

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
export class SetCookie {
    /**
     * Constructor for a new "SetCookie" struct to hold a specific Set-Cookie
     * header representation.
     */
    constructor(opts?: {
        name?: string;
        value?: string;
        maxAge?: number;
        domain?: string;
        path?: string;
        expires?: { toUTCString: () => string };
        httpOnly?: boolean;
        secure?: boolean;
        sameSite?: "Strict" | "Lax" | "None" | true;
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
