declare namespace _ {
    interface LoDashWrapper<TValue> {
        /**
         * @see _.value
         */
        toJSON(): TValue;
    }
}