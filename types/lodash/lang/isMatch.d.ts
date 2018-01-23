declare namespace _ {
    type isMatchCustomizer = (value: any, other: any, indexOrKey?: PropertyName) => boolean;

    interface LoDashStatic {
        /**
         * Performs a deep comparison between `object` and `source` to determine if
         * `object` contains equivalent property values.
         *
         * **Note:** This method supports comparing the same values as `_.isEqual`.
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * var object = { 'user': 'fred', 'age': 40 };
         *
         * _.isMatch(object, { 'age': 40 });
         * // => true
         *
         * _.isMatch(object, { 'age': 36 });
         * // => false
         */
        isMatch(object: object, source: object): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isMatch
         */
        isMatch(source: object): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isMatch
         */
        isMatch(source: object): LoDashExplicitWrapper<boolean>;
    }
}