export = set;

// Technically, everything will fall to the last overload,
// but the first one can be useful for signature help.

/**
 * @param object The object to set `value` on
 * @param path The of the property to set.
 * @param value The value to set on `object[prop]`
 * @param [options]
 */

declare function set<T extends object, K extends keyof T>(object: T, path: K, value: T[K], options?: set.Options): void;
declare function set(object: object, path: set.InputType, value: any, options?: set.Options): void;

declare namespace set {
    interface Options {
        /**
         * Do not split properties that include a `/`.
         * By default, set-value assumes that properties with a `/` are not intended to be split.
         * This option allows you to disable default behavior.
         * Note that this option cannot be used if `options.separator` is set to `/`.
         * @default true
         */
        preservePaths?: boolean | undefined;
        /**
         * Custom separator to use for splitting object paths.
         * @default `.`
         */
        separator?: string | undefined;
        /**
         * Custom `.split()` function to use.
         */
        split?: SplitFunc | undefined;
        /**
         * Allows you to update plain object values, instead of overwriting them.
         * @default  `undefined`
         */
        merge?: boolean | MergeFunc | undefined;
    }

    type InputType = string | symbol | ReadonlyArray<string | symbol>;

    type MergeFunc = <TObject, TSource>(object: TObject, source: TSource) => TObject & TSource;

    type SplitFunc = (input: string, options?: Options) => string;
}
