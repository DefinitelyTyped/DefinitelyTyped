declare namespace _ {
    interface LoDashStatic {
        /**
         * Creates a function that invokes func with the this binding of the created function and arguments from start
         * and beyond provided as an array.
         *
         * Note: This method is based on the rest parameter.
         *
         * @param func The function to apply a rest parameter to.
         * @param start The start position of the rest parameter.
         * @return Returns the new function.
         */
        rest(
            func: (...args: any[]) => any,
            start?: number
        ): (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.rest
         */
        rest(start?: number): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.rest
         */
        rest(start?: number): LoDashExplicitWrapper<(...args: any[]) => any>;
    }
}