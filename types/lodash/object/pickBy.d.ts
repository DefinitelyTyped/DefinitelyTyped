declare namespace _ {
    interface LoDashStatic {
        /**
         * Creates an object composed of the `object` properties `predicate` returns
         * truthy for. The predicate is invoked with two arguments: (value, key).
         *
         * @category Object
         * @param object The source object.
         * @param [predicate=_.identity] The function invoked per property.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pickBy(object, _.isNumber);
         * // => { 'a': 1, 'c': 3 }
         */
        pickBy<T extends object>(
            object: T | null | undefined,
            predicate?: ValueKeyIteratee<T[keyof T]>
        ): PartialObject<T>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.pickBy
         */
        pickBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate?: ValueKeyIteratee<T[keyof T]>
        ): LoDashImplicitWrapper<PartialObject<T>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.pickBy
         */
        pickBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate?: ValueKeyIteratee<T[keyof T]>
        ): LoDashExplicitWrapper<PartialObject<T>>;
    }
}