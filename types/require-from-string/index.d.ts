// Type definitions for require-from-string 1.2
// Project: https://github.com/floatdrop/require-from-string
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Load module from string in Node.
 */
declare function requireFromString(code: string, options?: requireFromString.Options): any;
declare function requireFromString(code: string, filename?: string, options?: requireFromString.Options): any;

declare namespace requireFromString {
    interface Options {
        /**
         * List of `paths`, that will be appended to module `paths`.
         * Useful when you want to be able require modules from these paths.
         */
        appendPaths?: string[];
        /**
         * List of `paths`, that will be preppended to module `paths`.
         * Useful when you want to be able require modules from these paths.
         */
        prependPaths?: string[];
    }
}

export = requireFromString;
