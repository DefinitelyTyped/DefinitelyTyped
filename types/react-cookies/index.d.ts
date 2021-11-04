// Type definitions for react-cookies 0.1
// Project: https://github.com/bukinoshita/react-cookies/
// Definitions by: Nikolai Lopin <https://github.com/nlopin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { CookieSerializeOptions } from 'cookie';
import { Request, Response } from 'express';

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
export function save(name: string, val: string | number | object, opt: CookieSerializeOptions): void;

/**
 * Remove a cookie
 * @param name string
 * @param opt object of cookie options from the [RFC 6265](https://tools.ietf.org/html/rfc6265#section-4.1.2.1)
 */
export function remove(name: string, opt?: CookieSerializeOptions): void;

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
