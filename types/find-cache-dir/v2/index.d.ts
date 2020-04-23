// Type definitions for find-cache-dir 2.0
// Project: https://github.com/avajs/find-cache-dir#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = findCacheDir;

/**
 * Finds the cache directory using the supplied options. The algorithm tries to find a `package.json` file,
 * searching every parent directory of the `cwd` specified (or implied from other options).
 * @param options
 * @returns A string containing the absolute path to the cache directory, or null if package.json was never found.
 */
declare function findCacheDir(
    options: findCacheDir.OptionsWithThunk
): ((...pathParts: string[]) => string) | null;
declare function findCacheDir(options: findCacheDir.Options): string | null;

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
