import { Request, Response } from "express";

// taken from `cookie@^1.0.0`
export interface SerializeOptions {
    /**
     * Specifies a function that will be used to encode a [cookie-value](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1).
     * Since value of a cookie has a limited character set (and must be a simple string), this function can be used to encode
     * a value into a string suited for a cookie's value, and should mirror `decode` when parsing.
     *
     * @default encodeURIComponent
     */
    encode?: (str: string) => string;
    /**
     * Specifies the `number` (in seconds) to be the value for the [`Max-Age` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.2).
     *
     * The [cookie storage model specification](https://tools.ietf.org/html/rfc6265#section-5.3) states that if both `expires` and
     * `maxAge` are set, then `maxAge` takes precedence, but it is possible not all clients by obey this,
     * so if both are set, they should point to the same date and time.
     */
    maxAge?: number;
    /**
     * Specifies the `Date` object to be the value for the [`Expires` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.1).
     * When no expiration is set clients consider this a "non-persistent cookie" and delete it the current session is over.
     *
     * The [cookie storage model specification](https://tools.ietf.org/html/rfc6265#section-5.3) states that if both `expires` and
     * `maxAge` are set, then `maxAge` takes precedence, but it is possible not all clients by obey this,
     * so if both are set, they should point to the same date and time.
     */
    expires?: Date;
    /**
     * Specifies the value for the [`Domain` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.3).
     * When no domain is set clients consider the cookie to apply to the current domain only.
     */
    domain?: string;
    /**
     * Specifies the value for the [`Path` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.4).
     * When no path is set, the path is considered the ["default path"](https://tools.ietf.org/html/rfc6265#section-5.1.4).
     */
    path?: string;
    /**
     * Enables the [`HttpOnly` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.6).
     * When enabled, clients will not allow client-side JavaScript to see the cookie in `document.cookie`.
     */
    httpOnly?: boolean;
    /**
     * Enables the [`Secure` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.5).
     * When enabled, clients will only send the cookie back if the browser has a HTTPS connection.
     */
    secure?: boolean;
    /**
     * Enables the [`Partitioned` `Set-Cookie` attribute](https://tools.ietf.org/html/draft-cutler-httpbis-partitioned-cookies/).
     * When enabled, clients will only send the cookie back when the current domain _and_ top-level domain matches.
     *
     * This is an attribute that has not yet been fully standardized, and may change in the future.
     * This also means clients may ignore this attribute until they understand it. More information
     * about can be found in [the proposal](https://github.com/privacycg/CHIPS).
     */
    partitioned?: boolean;
    /**
     * Specifies the value for the [`Priority` `Set-Cookie` attribute](https://tools.ietf.org/html/draft-west-cookie-priority-00#section-4.1).
     *
     * - `'low'` will set the `Priority` attribute to `Low`.
     * - `'medium'` will set the `Priority` attribute to `Medium`, the default priority when not set.
     * - `'high'` will set the `Priority` attribute to `High`.
     *
     * More information about priority levels can be found in [the specification](https://tools.ietf.org/html/draft-west-cookie-priority-00#section-4.1).
     */
    priority?: "low" | "medium" | "high";
    /**
     * Specifies the value for the [`SameSite` `Set-Cookie` attribute](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-09#section-5.4.7).
     *
     * - `true` will set the `SameSite` attribute to `Strict` for strict same site enforcement.
     * - `'lax'` will set the `SameSite` attribute to `Lax` for lax same site enforcement.
     * - `'none'` will set the `SameSite` attribute to `None` for an explicit cross-site cookie.
     * - `'strict'` will set the `SameSite` attribute to `Strict` for strict same site enforcement.
     *
     * More information about enforcement levels can be found in [the specification](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-09#section-5.4.7).
     */
    sameSite?: boolean | "lax" | "strict" | "none";
}

/**
 * Load the cookie value.
 * Returns undefined if the cookie does not exist.
 * Deserialize any cookie starting with { or [ unless `dotNotParse` is true
 *
 * @param name string name of the cookie
 * @param doNotParse optional boolean value if parse is not needed
 */
export function load(name: string, doNotParse?: boolean): any;

/**
 * Load all available cookies.
 * Returns an object containing all cookies.
 *
 * @param doNotParse optional boolean value if parse is not needed
 */
export function loadAll(doNotParse?: boolean): { [key: string]: any };

/**
 * Find all the cookies with a name that match the regex.
 * Returns an object with the cookie name as the key.
 * @param regex Regular expression to match
 */
export function select(regex?: RegExp): { [key: string]: any };

/**
 * Set a cookie
 * @param name string Cookie name
 * @param val any value to save
 * @param opt object of cookie options from the [RFC 6265](https://tools.ietf.org/html/rfc6265#section-4.1.2.1)
 */
export function save(name: string, val: string | number | object, opt: SerializeOptions): void;

/**
 * Remove a cookie
 * @param name string
 * @param opt object of cookie options from the [RFC 6265](https://tools.ietf.org/html/rfc6265#section-4.1.2.1)
 */
export function remove(name: string, opt?: SerializeOptions): void;

/**
 * Load the user cookies so you can do server-rendering and match the same result.
 * Also send back to the user the new cookies.
 * Work with connect or express.js by using the cookieParser middleware first.
 * Use const unplug = plugToRequest(req, res) just before your renderToString.
 *
 * Returns unplug() function so it stops setting cookies on the response.
 * @param req
 * @param res
 */
export function plugToRequest(req: Request, res: Response): () => void;

/**
 * Load the user cookies so you can do server-rendering and match the same result.
 * Use setRawCookie(headers.cookie) just before your renderToString.
 * Make sure it is the raw string from the request headers.
 */
export function setRawCookie(rawCookie?: string): void;
