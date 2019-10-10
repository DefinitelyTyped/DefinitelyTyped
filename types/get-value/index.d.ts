// Type definitions for get-value 3.0
// Project: https://github.com/jonschlinkert/get-value
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
//                 Mathew Allen <https://github.com/TheMallen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export = get;

declare function get<T>(obj: T): T;
declare function get(obj: object, key: string | string[], options?: get.Options): any;

declare namespace get {
    interface Options {
        /**
         * The default value to return when get-value cannot result a value from the given object.
         *
         * default: `undefined`
         */
        default?: any;
        /**
         * If defined, this function is called on each resolved value.
         * Useful if you want to do `.hasOwnProperty` or `Object.prototype.propertyIsEnumerable`.
         */
        isValid?: <K extends string>(key: K, object: Record<K, any>) => boolean;
        /**
         * Custom function to use for splitting the string into object path segments.
         *
         * default: `String.split`
         */
        split?: (s: string) => string[];
        /**
         * The separator to use for spliting the string.
         * (this is probably not needed when `options.split` is used).
         *
         *  default: `"."`
         */
        separator?: string | RegExp;
        /**
         * Customize how the object path is created when iterating over path segments.
         *
         * default: `Array.join`
         */
        join?: (segs: string[]) => string;
        /**
         * The character to use when re-joining the string to check for keys
         * with dots in them (this is probably not needed when `options.join` is used).
         * This can be a different value than the separator, since the separator can be a string or regex.
         *
         * default: `"."`
         */
        joinChar?: string;
    }
}
