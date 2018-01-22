declare namespace _ {
    interface LoDashStatic {
        /**
         * Attempts to invoke func, returning either the result or the caught error object. Any additional arguments
         * are provided to func when it’s invoked.
         *
         * @param func The function to attempt.
         * @return Returns the func result or error object.
         */
        attempt<TResult>(func: (...args: any[]) => TResult, ...args: any[]): TResult|Error;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.attempt
         */
        attempt<TResult>(...args: any[]): TResult|Error;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.attempt
         */
        attempt<TResult>(...args: any[]): LoDashExplicitWrapper<TResult|Error>;
    }
}