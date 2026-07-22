/**
 * Stringify attributes on the options `hash`.
 *
 * ```handlebars
 * <!-- value = 'bar' -->
 * <div{{attr foo=value}}></div>
 * <!-- results in: <div foo="bar"></div>
 * ```
 * @param {Object} `options`
 * @return {String}
 * @api public
 */
export function attr(options: Object): string;
/**
 * Add an array of `<link>` tags. Automatically resolves
 * relative paths to `options.assets` if passed on the context.
 *
 * ```handlebars
 * <!-- {stylesheets: ['foo.css', 'bar.css']} -->
 * {{css stylesheets}}
 *
 * <!-- results in: -->
 * <!-- <link type="text/css" rel="stylesheet" href="foo.css"> -->
 * <!-- <link type="text/css" rel="stylesheet" href="bar.css"> -->
 * ```
 * @param {String|Array} `list` One or more stylesheet urls.
 * @return {String}
 * @api public
 */
export function css(list: string | any[], options: any, ...args: any[]): string;
/**
 * Generate one or more `<script></script>` tags with paths/urls to
 * javascript or coffeescript files.
 *
 * ```handlebars
 * {{js scripts}}
 * ```
 * @param {Object} `context`
 * @return {String}
 * @api public
 */
export function js(context: Object): string;
/**
 * Strip HTML tags from a string, so that only the text nodes
 * are preserved.
 *
 * ```handlebars
 * {{sanitize "<span>foo</span>"}}
 * <!-- results in: 'foo' -->
 * ```
 *
 * @param {String} `str` The string of HTML to sanitize.
 * @return {String}
 * @api public
 */
export function sanitize(str: string): string;
/**
 * Block helper for creating unordered lists (`<ul></ul>`)
 *
 * @param {Object} `context`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */
export function ul(context: Object, options: Object): string;
/**
 * Block helper for creating ordered lists  (`<ol></ol>`)
 *
 * @param {Object} `context`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */
export function ol(context: Object, options: Object): string;
/**
 * Returns a `<figure>` with a thumbnail linked to a full picture
 *
 * @param {Object} `context` Object with values/attributes to add to the generated elements:
 * @param {String} `context.alt`
 * @param {String} `context.src`
 * @param {Number} `context.width`
 * @param {Number} `context.height`
 * @return {String} HTML `<figure>` element with image and optional caption/link.
 * @contributor: Marie Hogebrandt <https://github.com/Melindrea>
 * @api public
 */
export function thumbnailImage(context: {
    alt: string;
    src: string;
    width: number;
    height: number;
}): string;
