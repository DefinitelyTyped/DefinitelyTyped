import _ = require("../index");

declare namespace Lodash {
    interface Omit {
        /**
         * The opposite of `_.pick`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that are not omitted.
         *
         * @category Object
         * @param object The source object.
         * @param [paths] The property names to omit, specified
         *  individually or in arrays..
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omit(object, ['a', 'c']);
         * // => { 'b': '2' }
         */
        (): Omit;
        /**
         * The opposite of `_.pick`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that are not omitted.
         *
         * @category Object
         * @param object The source object.
         * @param [paths] The property names to omit, specified
         *  individually or in arrays..
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omit(object, ['a', 'c']);
         * // => { 'b': '2' }
         */
        (paths: _.PropertyPath): Omit1x1;
        /**
         * The opposite of `_.pick`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that are not omitted.
         *
         * @category Object
         * @param object The source object.
         * @param [paths] The property names to omit, specified
         *  individually or in arrays..
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omit(object, ['a', 'c']);
         * // => { 'b': '2' }
         */
        <T>(paths: _.PropertyPath, object: _.Dictionary<T>): _.Dictionary<T>;
        /**
         * The opposite of `_.pick`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that are not omitted.
         *
         * @category Object
         * @param object The source object.
         * @param [paths] The property names to omit, specified
         *  individually or in arrays..
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omit(object, ['a', 'c']);
         * // => { 'b': '2' }
         */
        <T extends object>(paths: _.PropertyPath, object: T | null | undefined): _.PartialObject<T>;
    }
    interface Omit1x1 {
        /**
         * The opposite of `_.pick`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that are not omitted.
         *
         * @category Object
         * @param object The source object.
         * @param [paths] The property names to omit, specified
         *  individually or in arrays..
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omit(object, ['a', 'c']);
         * // => { 'b': '2' }
         */
        (): Omit1x1;
        /**
         * The opposite of `_.pick`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that are not omitted.
         *
         * @category Object
         * @param object The source object.
         * @param [paths] The property names to omit, specified
         *  individually or in arrays..
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omit(object, ['a', 'c']);
         * // => { 'b': '2' }
         */
        <T>(object: _.Dictionary<T>): _.Dictionary<T>;
        /**
         * The opposite of `_.pick`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that are not omitted.
         *
         * @category Object
         * @param object The source object.
         * @param [paths] The property names to omit, specified
         *  individually or in arrays..
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omit(object, ['a', 'c']);
         * // => { 'b': '2' }
         */
        <T extends object>(object: T | null | undefined): _.PartialObject<T>;
    }
}

declare const omitAll: Lodash.Omit;
export = omitAll;
