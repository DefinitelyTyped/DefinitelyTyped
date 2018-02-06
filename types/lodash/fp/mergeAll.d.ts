import _ = require("../index");

declare namespace Lodash {
    interface Merge {
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        (): Merge;
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        <TObject>(object: TObject): Merge1x1<TObject>;
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        <TObject, TSource1>(object: TObject, source1: TSource1): Merge1x2<TObject, TSource1>;
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): Merge1x3<TObject, TSource1, TSource2>;
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        <TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
    interface Merge1x1<TObject> {
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        (): Merge1x1<TObject>;
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        <TSource1>(source1: TSource1): Merge1x2<TSource1, TObject>;
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        <TSource1, TSource2>(source1: TSource1, source2: TSource2): Merge1x3<TSource1, TSource2, TObject>;
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        <TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
    interface Merge1x2<TObject, TSource1> {
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        (): Merge1x2<TObject, TSource1>;
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        <TSource2>(source2: TSource2): Merge1x3<TSource2, TObject, TSource1>;
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        <TSource2, TSource3>(source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
    interface Merge1x3<TObject, TSource1, TSource2> {
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        (): Merge1x3<TObject, TSource1, TSource2>;
        /**
         * Recursively merges own and inherited enumerable properties of source
         * objects into the destination object, skipping source properties that resolve
         * to `undefined`. Array and plain object properties are merged recursively.
         * Other objects and value types are overridden by assignment. Source objects
         * are applied from left to right. Subsequent sources overwrite property
         * assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @category Object
         * @param object The destination object.
         * @param [sources] The source objects.
         * @returns Returns `object`.
         * @example
         *
         * var users = {
         *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
         * };
         *
         * var ages = {
         *   'data': [{ 'age': 36 }, { 'age': 40 }]
         * };
         *
         * _.merge(users, ages);
         * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
         */
        <TSource3>(source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
    }
}

declare const mergeAll: Lodash.Merge;
export = mergeAll;
