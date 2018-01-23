declare namespace _ {
    interface LoDashStatic {
        /**
         * Creates a function that returns value.
         *
         * @param value The value to return from the new function.
         * @return Returns the new function.
         */
        constant<T>(value: T): () => T;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.constant
         */
        constant(): LoDashImplicitWrapper<() => TValue>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.constant
         */
        constant(): LoDashExplicitWrapper<() => TValue>;
    }
}