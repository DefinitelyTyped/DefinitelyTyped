/**
 * Get the directory path segment from the given `filepath`.
 *
 * ```handlebars
 * {{absolute "docs/toc.md"}}
 * <!-- results in: 'docs' -->
 * ```
 * @param {String} `ext`
 * @return {String}
 * @api public
 */
export function absolute(filepath: any, options: any): string;
/**
 * Get the directory path segment from the given `filepath`.
 *
 * ```handlebars
 * {{dirname "docs/toc.md"}}
 * <!-- results in: 'docs' -->
 * ```
 * @param {String} `ext`
 * @return {String}
 * @api public
 */
export function dirname(filepath: any, options: any): string;
/**
 * Get the relative filepath from `a` to `b`.
 *
 * ```handlebars
 * {{relative a b}}
 * ```
 * @param {String} `a`
 * @param {String} `b`
 * @return {String}
 * @api public
 */
export function relative(a: string, b: string): string;
/**
 * Get the file extension from the given `filepath`.
 *
 * ```handlebars
 * {{basename "docs/toc.md"}}
 * <!-- results in: 'toc.md' -->
 * ```
 * @param {String} `ext`
 * @return {String}
 * @api public
 */
export function basename(filepath: any): string;
/**
 * Get the "stem" from the given `filepath`.
 *
 * ```handlebars
 * {{stem "docs/toc.md"}}
 * <!-- results in: 'toc' -->
 * ```
 * @param {String} `filepath`
 * @return {String}
 * @api public
 */
export function stem(filepath: string): string;
/**
 * Get the file extension from the given `filepath`.
 *
 * ```handlebars
 * {{extname "docs/toc.md"}}
 * <!-- results in: '.md' -->
 * ```
 * @param {String} `filepath`
 * @return {String}
 * @api public
 */
export function extname(filepath: string): string;
/**
 * Resolve an absolute path from the given `filepath`.
 *
 * ```handlebars
 * {{resolve "docs/toc.md"}}
 * <!-- results in: '/User/dev/docs/toc.md' -->
 * ```
 * @param {String} `filepath`
 * @return {String}
 * @api public
 */
export function resolve(filepath: string, ...args: any[]): string;
/**
 * Get specific (joined) segments of a file path by passing a
 * range of array indices.
 *
 * ```handlebars
 * {{segments "a/b/c/d" "2" "3"}}
 * <!-- results in: 'c/d' -->
 *
 * {{segments "a/b/c/d" "1" "3"}}
 * <!-- results in: 'b/c/d' -->
 *
 * {{segments "a/b/c/d" "1" "2"}}
 * <!-- results in: 'b/c' -->
 * ```
 *
 * @param {String} `filepath` The file path to split into segments.
 * @return {String} Returns a single, joined file path.
 * @api public
 */
export function segments(filepath: string, a: any, b: any): string;
