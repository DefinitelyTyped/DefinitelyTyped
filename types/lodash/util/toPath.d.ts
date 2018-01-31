import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
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
         *     newPath = _.toPath(path);
         *
         * console.log(newPath);
         * // => ['a', 'b', 'c']
         *
         * console.log(path === newPath);
         * // => false
         */
        toPath(value: any): string[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPath
         */
        toPath(): LoDashImplicitWrapper<string[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPath
         */
        toPath(): LoDashExplicitWrapper<string[]>;
    }
}