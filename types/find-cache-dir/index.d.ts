// Type definitions for find-cache-dir 3.2
// Project: https://github.com/avajs/find-cache-dir#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = findCacheDir;

/**
 * Finds the cache directory using the supplied options.
 * The algorithm tries to find a `package.json` file, searching every parent directory of the `cwd` specified
 * (or implied from other options). It returns a `string` containing the absolute path to the cache directory,
 * or `undefined` if `package.json` was never found or if the `node_modules` directory is unwritable.
 */
declare function findCacheDir(options: findCacheDir.OptionsWithThunk): ((...pathParts: string[]) => string) | undefined;
declare function findCacheDir(options: findCacheDir.Options): string | undefined;

declare namespace findCacheDir {
    interface Options {
        /**
         * Should be the same as your project name in `package.json`.
         */
        name: string;

        /**
         * An array of files that will be searched for a common parent directory.
         * This common parent directory will be used in lieu of the `cwd` option below.
         */
        files?: string | string[];

        /**
         * Directory to start searching for a `package.json` from.
         */
        cwd?: string;

        /**
         * If `true`, the directory will be created synchronously before returning.
         * @default false
         */
        create?: boolean;

        /**
         * If `true`, this modifies the return type to be a function that is a thunk for `path.join(theFoundCacheDirectory)`.
         * @default false
         */
        thunk?: boolean;
    }

    interface OptionsWithThunk extends Options {
        /**
         * If `true`, this modifies the return type to be a function that is a thunk for `path.join(theFoundCacheDirectory)`.
         * @default false
         */
        thunk: true;
    }
}
