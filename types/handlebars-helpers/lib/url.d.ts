/**
 * Encodes a Uniform Resource Identifier (URI) component
 * by replacing each instance of certain characters by
 * one, two, three, or four escape sequences representing
 * the UTF-8 encoding of the character.
 *
 * @param {String} `str` The un-encoded string
 * @return {String} The endcoded string
 * @api public
 */
export function encodeURI(str: string): string;
/**
 * Escape the given string by replacing characters with escape sequences.
 * Useful for allowing the string to be used in a URL, etc.
 *
 * @param {String} `str`
 * @return {String} Escaped string.
 * @api public
 */
export function escape(str: string): string;
/**
 * Decode a Uniform Resource Identifier (URI) component.
 *
 * @param {String} `str`
 * @return {String}
 * @api public
 */
export function decodeURI(str: string): string;
/**
 * Alias for [encodeURI](#encodeuri).
 * @api public
 */
export function url_encode(...args: any[]): string;
/**
 * Alias for [decodeURI](#decodeuri).
 * @api public
 */
export function url_decode(val: any, ...args: any[]): string;
/**
 * Take a base URL, and a href URL, and resolve them as a
 * browser would for an anchor tag.
 *
 * @param {String} `base`
 * @param {String} `href`
 * @return {String}
 * @api public
 */
export function urlResolve(base: string, href: string): string;
/**
 * Parses a `url` string into an object.
 *
 * @param {String} `str` URL string
 * @return {String} Returns stringified JSON
 * @api public
 */
export function urlParse(str: string): string;
/**
 * Strip the query string from the given `url`.
 *
 * @param {String} `url`
 * @return {String} the url without the queryString
 * @api public
 */
export function stripQuerystring(str: any): string;
/**
 * Strip protocol from a `url`. Useful for displaying media that
 * may have an 'http' protocol on secure connections.
 *
 * ```handlebars
 * <!-- url = 'http://foo.bar' -->
 * {{stripProtocol url}}
 * <!-- results in: '//foo.bar' -->
 * ```
 * @param {String} `str`
 * @return {String} the url with http protocol stripped
 * @api public
 */
export function stripProtocol(str: string): string;
