// Type definitions for sort-json 2.0
// Project: https://github.com/kesla/sort-json
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace visit {
    interface VisitOptions {
        /**
         * Depth's level sorting keys on a multidimensional object
         * (default: `Infinity`)
         */
        depth?: number;
        /**
         * When sorting keys, converts all keys to lowercase so that
         * capitalization doesn't interfere with sort order (default: `false`)
         */
        ignoreCase?: boolean;
        /** Default: `1` */
        level?: number;
        /** Reverse the ordering z -> a (default: `false`) */
        reverse?: boolean;
    }

    interface OverwriteOptions extends VisitOptions {
        /**
         * Formats the file content with an indentation of spaces. Use a number
         * greater then 0 for the value (default: detects the used indentation
         * of the file)
         */
        indentSize?: number;
        /** Default: `false` */
        noFinalNewLine?: boolean;
    }

    /**
     * Sorts the JSON files with the `visit()` function and then overwrites the
     * file with sorted JSON
     * @param absolutePaths
     * * String: Absolute path to JSON file to sort and overwrite
     * * Array: Absolute paths to JSON files to sort and overwrite
     */
    function overwrite(absolutePaths: string | string[], options?: OverwriteOptions): any;
}

/**
 * Sorts the keys on objects
 * @param old An object to sort the keys of, if not object just returns whatever
 * was given
 */
declare function visit<T>(old: T, options?: visit.VisitOptions): T;

export = visit;
