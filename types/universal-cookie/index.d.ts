// Type definitions for universal-cookie 2.2
// Project: https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie#readme
// Definitions by: Tomi Turtiainen <https://github.com/tomi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface CookiesByName {
    [cookieName: string]: string;
}

export interface GetOpts {
    /**
     * do not convert the cookie into an object no matter what
     */
    doNotParse: boolean;
}

export interface CookieOpts {
    /**
     * cookie path, use / as the path if you want your cookie to be accessible on all pages
     */
    path?: string;

    /**
     * absolute expiration date for the cookie
     */
    expires?: Date;

    /**
     * relative max age of the cookie from when the client receives it in second
     */
    maxAge?: number;

    /**
     * domain for the cookie (sub.domain.com or .allsubdomains.com)
     */
    domain?: string;

    /**
     * Is only accessible through HTTPS?
     */
    secure?: boolean;

    /**
     * Is only the server can access the cookie?
     */
    httpOnly?: boolean;
}

export type ChangeListenerCallback = (
    name: string,
    value: string | object,
    options: CookieOpts
) => void;

export default class Cookies {
    constructor(cookieHeader?: string | CookiesByName);

    /**
     * Get a cookie value
     *
     * @param name cookie name
     * @param options.doNotParse do not convert the cookie into an object no matter what
     */
    get(name: string, options?: GetOpts): string;

    /**
     * Get all cookies
     *
     * @param options.doNotParse do not convert the cookie into an object no matter what
     */
    getAll(options?: GetOpts): CookiesByName;

    /**
     * Set a cookie value
     *
     * @param name cookie name
     * @param value save the value and stringify the object if needed
     * @param options Support all the cookie options from RFC 6265
     */
    set(name: string, value: string | object, options?: CookieOpts): void;

    /**
     * Set a cookie value
     *
     * @param name cookie name
     * @param options Support all the cookie options from RFC 6265
     */
    remove(name: string, options?: CookieOpts): void;

    /**
     * Add a listener to when a cookie is set or removed.
     *
     * @param callback Call that will be called with the first argument containing name, value and options of the changed cookie.
     */
    addChangeListener(callback: ChangeListenerCallback): void;

    /**
     * Remove a listener from the change callback.
     */
    removeChangeListener(callback: ChangeListenerCallback): void;
}
