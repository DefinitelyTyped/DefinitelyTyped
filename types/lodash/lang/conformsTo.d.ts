declare namespace _ {

    interface LoDashStatic {
        /**
         * Checks if object conforms to source by invoking the predicate properties of source with the
         * corresponding property values of object.
         *
         * Note: This method is equivalent to _.conforms when source is partially applied.
         */
        conformsTo<T>(object: T, source: ConformsPredicateObject<T>): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.conformsTo
         */
        conformsTo<T>(this: LoDashImplicitWrapper<T>, source: ConformsPredicateObject<T>): boolean;
        // Note: we can't use TValue here,  because it generates a typescript error when strictFunctionTypes is enabled.
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.conformsTo
         */
        conformsTo<T>(this: LoDashImplicitWrapper<T>, source: ConformsPredicateObject<T>): LoDashExplicitWrapper<boolean>;
        // Note: we can't use TValue here,  because it generates a typescript error when strictFunctionTypes is enabled.
    }

    type CondPair<T, R> = [(val: T) => boolean, (val: T) => R]
}