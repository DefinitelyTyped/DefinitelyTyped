// Type definitions for quick-format-unescaped 4.0
// Project: https://github.com/davidmarkclements/quick-format-unescaped#readme
// Definitions by: Adam Vigneaux <https://github.com/AdamVig>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Alternative to NodeJS `util.format`. Does not escape strings.
 * @description Uses `JSON.stringify` instead of `util.inspect`, this means functions _will not be serialized_.
 * @param fmt A printf-like format string. Example: `'hello %s %j %d'`
 * @param parameters Values to be inserted into the `fmt` string. Example: `['world', {obj:true}]`
 * @param options Passing an options object as the third parameter with a `stringify` will mean any objects will be passed
 * to the supplied function instead of an the internal `tryStringify` function. This can be useful when using augmented
 * capability serializers such as `fast-safe-stringify` or `fast-redact`.
 * @example
 * format('hello %s %o', ['world', {obj: true}])
 * // 'hello world {"obj": true}'
 */
declare function format(fmt: string, parameters: ReadonlyArray<unknown>, options?: format.Options): string;

declare namespace format {
    interface Options {
        /**
         * Function that stringifies objects.
         */
        stringify: (o: unknown) => string;
    }
}

export = format;
