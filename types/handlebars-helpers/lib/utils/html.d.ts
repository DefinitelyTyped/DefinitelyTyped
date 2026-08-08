/**
 * Remove extra newlines from HTML, respect indentation.
 *
 * @param {String} html
 * @return {String}
 * @api public
 */
export function condense(str: any): string;
/**
 * Add a single newline above code comments in HTML
 *
 * @param {String} `html`
 * @return {String}
 * @api public
 */
export function padcomments(str: any): string;
/**
 * Parse HTML tag attributes from the `options.hash`.
 *
 * @param {Object} `hash` Helper options hash, e.g. `{foo: 'bar'}`
 * @return {String} Stringified attributes, e.g. `foo="bar"`
 * @api public
 */
export function parseAttributes(hash: Object): string;
/**
 * Strip HTML tags from a string, so that only the text nodes
 * are preserved.
 *
 * ```handlebars
 * {{sanitize "<span>foo</span>"}}
 * //=> 'foo'
 * ```
 *
 * @param {String} `str` The string of HTML to sanitize.
 * @return {String}
 * @api public
 */
export function sanitize(str: string): string;
export function toAttributes(hash: any): string;
