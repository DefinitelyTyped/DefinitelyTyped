declare namespace _ {
    interface LoDashStatic {
        /**
         * Gets the size of collection by returning its length for array-like values or the number of own enumerable
         * properties for objects.
         *
         * @param collection The collection to inspect.
         * @return Returns the size of collection.
         */
        size(collection: object | string | null | undefined): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.size
         */
        size(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.size
         */
        size(): LoDashExplicitWrapper<number>;
    }
}