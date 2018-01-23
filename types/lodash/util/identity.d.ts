declare namespace _ {
    interface LoDashStatic {
        /**
         * This method returns the first argument provided to it.
         *
         * @param value Any value.
         * @return Returns value.
         */
        identity<T>(value: T): T;

        /**
         * @see _.identity
         */
        identity(): undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.identity
         */
        identity(): TValue;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.identity
         */
        identity(): this;
    }
}