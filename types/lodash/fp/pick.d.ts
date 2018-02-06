// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface LodashPick {
        /**
         * Creates an object composed of the picked `object` properties.
         *
         * @category Object
         * @param object The source object.
         * @param [props] The property names to pick, specified
         *  individually or in arrays.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pick(object, ['a', 'c']);
         * // => { 'a': 1, 'c': 3 }
         */
        (): LodashPick;
        /**
         * Creates an object composed of the picked `object` properties.
         *
         * @category Object
         * @param object The source object.
         * @param [props] The property names to pick, specified
         *  individually or in arrays.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pick(object, ['a', 'c']);
         * // => { 'a': 1, 'c': 3 }
         */
        <T extends object, U extends keyof T>(props: _.Many<U>): LodashPick1x1<T, U>;
        /**
         * Creates an object composed of the picked `object` properties.
         *
         * @category Object
         * @param object The source object.
         * @param [props] The property names to pick, specified
         *  individually or in arrays.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pick(object, ['a', 'c']);
         * // => { 'a': 1, 'c': 3 }
         */
        <T extends object, U extends keyof T>(props: _.Many<U>, object: T): Pick<T, U>;
        /**
         * Creates an object composed of the picked `object` properties.
         *
         * @category Object
         * @param object The source object.
         * @param [props] The property names to pick, specified
         *  individually or in arrays.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pick(object, ['a', 'c']);
         * // => { 'a': 1, 'c': 3 }
         */
        (props: _.PropertyPath): LodashPick2x1;
        /**
         * Creates an object composed of the picked `object` properties.
         *
         * @category Object
         * @param object The source object.
         * @param [props] The property names to pick, specified
         *  individually or in arrays.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pick(object, ['a', 'c']);
         * // => { 'a': 1, 'c': 3 }
         */
        <T>(props: _.PropertyPath, object: T | null | undefined): _.PartialDeep<T>;
    }
    interface LodashPick1x1<T extends object, U extends keyof T> {
        /**
         * Creates an object composed of the picked `object` properties.
         *
         * @category Object
         * @param object The source object.
         * @param [props] The property names to pick, specified
         *  individually or in arrays.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pick(object, ['a', 'c']);
         * // => { 'a': 1, 'c': 3 }
         */
        (): LodashPick1x1<T, U>;
        /**
         * Creates an object composed of the picked `object` properties.
         *
         * @category Object
         * @param object The source object.
         * @param [props] The property names to pick, specified
         *  individually or in arrays.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pick(object, ['a', 'c']);
         * // => { 'a': 1, 'c': 3 }
         */
        (object: T): Pick<T, U>;
    }
    interface LodashPick2x1 {
        /**
         * Creates an object composed of the picked `object` properties.
         *
         * @category Object
         * @param object The source object.
         * @param [props] The property names to pick, specified
         *  individually or in arrays.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pick(object, ['a', 'c']);
         * // => { 'a': 1, 'c': 3 }
         */
        (): LodashPick2x1;
        /**
         * Creates an object composed of the picked `object` properties.
         *
         * @category Object
         * @param object The source object.
         * @param [props] The property names to pick, specified
         *  individually or in arrays.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pick(object, ['a', 'c']);
         * // => { 'a': 1, 'c': 3 }
         */
        <T>(object: T | null | undefined): _.PartialDeep<T>;
    }
}

declare const pick: Lodash.LodashPick;
export = pick;
