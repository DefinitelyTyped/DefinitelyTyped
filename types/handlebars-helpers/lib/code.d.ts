/**
 * Embed code from an external file as preformatted text.
 *
 * ```handlebars
 * {{embed 'path/to/file.js'}}
 * <!-- optionally specify the language to use -->
 * {{embed 'path/to/file.hbs' 'html')}}
 * ```
 *
 * @param {String} `filepath` filepath to the file to embed.
 * @param {String} `language` Optionally specify the language to use for syntax highlighting.
 * @return {String}
 * @api public
 */
export function embed(filepath: string, ext: any): string;
/**
 * Embed a GitHub Gist using only the id of the Gist
 *
 * ```handlebars
 * {{gist "12345"}}
 * ```
 * @param {String} `id`
 * @return {String}
 * @api public
 */
export function gist(id: string): string;
/**
 * Generate the HTML for a jsFiddle link with the given `params`
 *
 * ```handlebars
 * {{jsfiddle id="0dfk10ks" tabs="true"}}
 * ```
 * @param {Object} `params`
 * @return {String}
 * @api public
 */
export function jsfiddle(options: any): string;
