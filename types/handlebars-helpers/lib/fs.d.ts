export const fileSize: (number: number | string, precision: any, options: any) => string;
/**
 * Read a file from the file system. This is useful in composing
 * "include"-style helpers using sub-expressions.
 *
 * ```handlebars
 * {{read "a/b/c.js"}}
 * {{someHelper (read "a/b/c.md")}}
 * ```
 * @param {String} `filepath`
 * @return {String}
 * @api public
 */
export function read(filepath: string, options: any): string;
/**
 * Return an array of files from the given
 * directory.
 *
 * @param {String} `directory`
 * @return {Array}
 * @api public
 */
export function readdir(dir: any, filter: any): any[];
