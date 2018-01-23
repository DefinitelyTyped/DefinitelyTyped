declare namespace _ {
    interface LoDashWrapper<TValue> {
        /**
         * Executes the chained sequence and returns the wrapped result.
         *
         * @return Returns the new lodash wrapper instance.
         */
        commit(): this;
    }
}