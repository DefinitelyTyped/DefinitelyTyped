/**
 * Find the first directory with a package.json, recursing up from the given directory.
 *
 * @param cwd - The directory to start searching from
 * @returns A promise that resolves to the path of the found package.json, or undefined if not found
 *
 * @example
 * ```javascript
 * const findPkg = require('find-pkg');
 *
 * findPkg('a/b/c/some/path')
 *   .then(file => console.log(file))
 *   .catch(console.error);
 * ```
 */
declare function findPkg(cwd: string): Promise<string | undefined>;

/**
 * Find the first directory with a package.json, recursing up from the given directory.
 *
 * @param cwd - The directory to start searching from
 * @param callback - Callback function called with (err, filepath)
 *
 * @example
 * ```javascript
 * findPkg('a/b/c/some/path', function(err, file) {
 *   if (err) throw err;
 *   console.log(file);
 * });
 * ```
 */
declare function findPkg(cwd: string, callback: (err: Error | null, file: string | undefined) => void): void;

declare namespace findPkg {
    /**
     * Synchronously find the first directory with a package.json, recursing up from the given directory.
     *
     * @param cwd - The directory to start searching from
     * @returns The path of the found package.json, or undefined if not found
     *
     * @example
     * ```javascript
     * const file = findPkg.sync('a/b/c/some/path');
     * ```
     */
    function sync(cwd: string): string | undefined;
}

export = findPkg;
