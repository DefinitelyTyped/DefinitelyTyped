declare namespace _ {
    interface LoDashStatic {
        /**
         * @see _.entriesIn
         */
        entriesIn<T>(object?: Dictionary<T>): Array<[string, T]>;

        /**
         * @see _.entriesIn
         */
        entriesIn(object?: object): Array<[string, any]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.entriesIn
         */
        entriesIn<T>(this: LoDashImplicitWrapper<Dictionary<T>>): LoDashImplicitWrapper<Array<[string, T]>>;

        /**
         * @see _.entriesIn
         */
        entriesIn(): LoDashImplicitWrapper<Array<[string, any]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.entriesIn
         */
        entriesIn<T>(this: LoDashExplicitWrapper<Dictionary<T>>): LoDashExplicitWrapper<Array<[string, T]>>;

        /**
         * @see _.entriesIn
         */
        entriesIn(): LoDashExplicitWrapper<Array<[string, any]>>;
    }
}