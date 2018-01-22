declare namespace _ {
    interface LoDashStatic {
        /**
         * Checks if `path` is a direct property of `object`.
         *
         * @category Object
         * @param object The object to query.
         * @param path The path to check.
         * @returns Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = { 'a': { 'b': { 'c': 3 } } };
         * var other = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
         *
         * _.has(object, 'a');
         * // => true
         *
         * _.has(object, 'a.b.c');
         * // => true
         *
         * _.has(object, ['a', 'b', 'c']);
         * // => true
         *
         * _.has(other, 'a');
         * // => false
         */
        has<T>(
            object: T,
            path: PropertyPath
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.has
         */
        has(path: PropertyPath): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.has
         */
        has(path: PropertyPath): LoDashExplicitWrapper<boolean>;
    }
}