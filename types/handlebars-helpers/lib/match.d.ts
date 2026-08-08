/**
 * Returns an array of strings that match the given glob pattern(s).
 * Options may be passed on the options hash or locals.
 *
 * ```handlebars
 * {{match (readdir "foo") "*.js"}}
 * {{match (readdir "foo") (toRegex "\\.js$")}}
 * ```
 * @param {Array|String} `files`
 * @param {Array|String} `patterns` One or more glob patterns.
 * @param {Object} `locals`
 * @param {Object} `options`
 * @return {Array} Array of matches
 * @api public
 */
export function match(files: any[] | string, patterns: any[] | string, locals: object, options: object): any[];
/**
 * Returns true if a filepath contains the given pattern.
 * Options may be passed on the options hash or locals.
 *
 * ```handlebars
 * {{isMatch "foo.md" "*.md"}}
 * <!-- results in: true -->
 * ```
 *
 * @param {String} `filepath`
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Boolean}
 * @api public
 */
export function isMatch(files: any, patterns: any, locals: any, options: object): boolean;
/**
 * Alias for micromatch helper. Deprecated in v0.9.0.
 */
export function mm(...args: any[]): any[];
