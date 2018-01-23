declare namespace _ {
    interface FunctionBind {
        placeholder: any;

        (
            func: (...args: any[]) => any,
            thisArg: any,
            ...partials: any[]
        ): (...args: any[]) => any;
    }

    interface LoDashStatic {
        /**
         * Creates a function that invokes func with the this binding of thisArg and prepends any additional _.bind
         * arguments to those provided to the bound function.
         *
         * The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for
         * partially applied arguments.
         *
         * Note: Unlike native Function#bind this method does not set the "length" property of bound functions.
         *
         * @param func The function to bind.
         * @param thisArg The this binding of func.
         * @param partials The arguments to be partially applied.
         * @return Returns the new bound function.
         */
        bind: FunctionBind;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.bind
         */
        bind(
            thisArg: any,
            ...partials: any[]
        ): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.bind
         */
        bind(
            thisArg: any,
            ...partials: any[]
        ): LoDashExplicitWrapper<(...args: any[]) => any>;
    }
}