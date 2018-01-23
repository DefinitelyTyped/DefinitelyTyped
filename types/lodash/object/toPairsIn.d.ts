declare namespace _ {
    interface LoDashStatic {
        /**
         * Creates an array of own and inherited enumerable key-value pairs for object.
         *
         * @param object The object to query.
         * @return Returns the new array of key-value pairs.
         */
        toPairsIn<T>(object?: Dictionary<T>): Array<[string, T]>;

        /**
         * @see _.toPairsIn
         */
        toPairsIn(object?: object): Array<[string, any]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPairsIn
         */
        toPairsIn<T>(this: LoDashImplicitWrapper<Dictionary<T>>): LoDashImplicitWrapper<Array<[string, T]>>;

        /**
         * @see _.toPairsIn
         */
        toPairsIn(): LoDashImplicitWrapper<Array<[string, any]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPairsIn
         */
        toPairsIn<T>(this: LoDashExplicitWrapper<Dictionary<T>>): LoDashExplicitWrapper<Array<[string, T]>>;

        /**
         * @see _.toPairsIn
         */
        toPairsIn(): LoDashExplicitWrapper<Array<[string, any]>>;
    }
}