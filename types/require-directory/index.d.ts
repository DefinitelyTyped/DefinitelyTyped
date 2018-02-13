// Type definitions for require-directory 2.1
// Project: https://github.com/troygoode/node-require-directory/
// Definitions by: My Self <https://github.com/Igmat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4
/// <reference types="node" />

declare namespace requireDirectory {
    /**
     * @description function that checks path for whitelisting/blacklisting
     * @param path path of required module
     * @returns true if path have to be whitelisted/blacklisted, false otherwise
     */
    type CheckPathFn = (path: string) => boolean;

    interface RequireDirectoryResult<T> {
        /**
         * @description module itself or hash of modules in subdirectory with name of this directory
         */
        [index: string]: RequireDirectoryResult<T> | T;
    }
    interface RequireDirectoryOptions<T, U = T> {
        /**
         * @description array of file extensions that will be included in resulting hash as modules
         * @default "['js', 'json', 'coffee']"
         */
        extensions?: string[];
        /**
         * @description option to include subdirectories
         * @default true
         */
        recurse?: boolean;
        /**
         * @description RegExp or function for whitelisting modules
         * @default undefined
         */
        include?: RegExp | CheckPathFn;
        /**
         * @description RegExp or function for blacklisting modules
         * @default undefined
         */
        exclude?: RegExp | CheckPathFn;
        /**
         * @description function for renaming modules in resulting hash
         * @param name name of required module
         * @returns transformed name of module
         * @default "change nothing"
         */
        rename?(name: string): string;
        /**
         * @description function that will be called for each required module
         * @param obj required module
         * @returns transformed module OR nothing (in second case module itself will be added to hash)
         * @default "change nothing"
         */
        visit?(obj: T): U | void;
    }

    /**
     * @description default options that is used for "require-directory" module
     */
    const defaults: RequireDirectoryOptions<any>;
}

/**
 * @description function for requiring directory content as hash of modules
 * @param m module for which has will be created
 * @param path path to directory, if you want to build hash for another one (default to __dirname)
 * @param options object with options for require-directory call
 * @returns hash of modules in specified directory
 */
declare function requireDirectory<T, U>(
    m: NodeModule,
    path?: string | requireDirectory.RequireDirectoryOptions<T, U>,
    options?: requireDirectory.RequireDirectoryOptions<T, U>): requireDirectory.RequireDirectoryResult<U>;

export = requireDirectory;
