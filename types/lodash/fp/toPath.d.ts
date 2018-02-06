import _ = require("../index");

declare namespace Lodash {
    interface ToPath {
        /**
         * Converts `value` to a property path array.
         *
         * @category Util
         * @param value The value to convert.
         * @returns Returns the new property path array.
         * @example
         *
         * _.toPath('a.b.c');
         * // => ['a', 'b', 'c']
         *
         * _.toPath('a[0].b.c');
         * // => ['a', '0', 'b', 'c']
         *
         * var path = ['a', 'b', 'c'],
         * newPath = _.toPath(path);
         *
         * console.log(newPath);
         * // => ['a', 'b', 'c']
         *
         * console.log(path === newPath);
         * // => false
         */
        (): ToPath;
        /**
         * Converts `value` to a property path array.
         *
         * @category Util
         * @param value The value to convert.
         * @returns Returns the new property path array.
         * @example
         *
         * _.toPath('a.b.c');
         * // => ['a', 'b', 'c']
         *
         * _.toPath('a[0].b.c');
         * // => ['a', '0', 'b', 'c']
         *
         * var path = ['a', 'b', 'c'],
         * newPath = _.toPath(path);
         *
         * console.log(newPath);
         * // => ['a', 'b', 'c']
         *
         * console.log(path === newPath);
         * // => false
         */
        (value: any): string[];
    }
}

declare const toPath: Lodash.ToPath;
export = toPath;
