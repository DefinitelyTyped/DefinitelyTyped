import File = require("vinyl");

declare namespace copy {
    /**
     * Copy an array of files to the given destination `directory`, with
     * `options` and callback function that exposes `err` and the array of
     * vinyl files that are created by the copy operation.
     *
     * ```js
     * copy.each(['foo.txt', 'bar.txt', 'baz.txt'], 'dist', function(err, files) {
     *   // exposes the vinyl `files` created when the files are copied
     * });
     * ```
     * @param `files` Filepaths or vinyl files.
     * @param `dir` Destination directory
     * @param `options` or callback function
     * @param `cb` Callback function if no options are specified
     */
    function each(files: string[] | File[], dir: string, options: Options, cb: Callback): void;
    function each(files: string[] | File[], dir: string, cb: Callback): void;

    /**
     * Copy a single `file` to the given `dest` directory, using
     * the specified options and callback function.
     *
     * ```js
     * copy.one('foo.txt', 'dist', function(err, file) {
     *   if (err) throw err;
     *   // exposes the vinyl `file` that is created when the file is copied
     * });
     * ```
     * @param `file` Filepath or vinyl file
     * @param `dir` Destination directory
     * @param `options` or callback function
     * @param `cb` Callback function if no options are specified
     */
    function one(pattern: string | File, dir: string, options: Options, cb: Callback): void;
    function one(pattern: string | File, dir: string, cb: Callback): void;

    type Callback = (error: Error | null, files?: File[]) => void;

    interface Options {
        cwd?: string | undefined;
        srcBase?: string | undefined;
    }
}

/**
 * Copy a filepath, vinyl file, array of files, or glob of files to the
 * given destination `directory`, with `options` and callback function that
 * exposes `err` and the array of vinyl files that are created by the copy
 * operation.
 *
 * ```js
 * copy('*.js', 'dist', function(err, file) {
 *   // exposes the vinyl `file` created when the file is copied
 * });
 * ```
 * @param `patterns` Filepath(s), vinyl file(s) or glob of files.
 * @param `dir` Destination directory
 * @param `options` or callback function
 * @param `cb` Callback function if no options are specified
 */
declare function copy(
    patterns: string | File | string[] | File[],
    dir: string,
    options: copy.Options,
    callback: copy.Callback,
): void;
declare function copy(patterns: string | File | string[] | File[], dir: string, callback: copy.Callback): void;

export = copy;
