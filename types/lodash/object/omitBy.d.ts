import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * The opposite of `_.pickBy`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that `predicate`
         * doesn't return truthy for.
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omitBy(object, _.isNumber);
         * // => { 'b': '2' }
         */
        omitBy<T extends object>(
            object: T | null | undefined,
            predicate: ValueKeyIteratee<T[keyof T]>
        ): PartialObject<T>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.omitBy
         */
        omitBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate: ValueKeyIteratee<T[keyof T]>
        ): LoDashImplicitWrapper<PartialObject<T>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.omitBy
         */
        omitBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate: ValueKeyIteratee<T[keyof T]>
        ): LoDashExplicitWrapper<PartialObject<T>>;
    }
}