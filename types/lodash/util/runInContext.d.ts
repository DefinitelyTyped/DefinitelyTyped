declare namespace _ {
    interface LoDashStatic {
        /**
         * Create a new pristine lodash function using the given context object.
         *
         * @param context The context object.
         * @return Returns a new lodash function.
         */
        runInContext(context?: object): typeof _;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.runInContext
         */
        runInContext(): typeof _;
    }
}