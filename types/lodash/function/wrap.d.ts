import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates a function that provides value to the wrapper function as its first argument. Any additional
         * arguments provided to the function are appended to those provided to the wrapper function. The wrapper is
         * invoked with the this binding of the created function.
         *
         * @param value The value to wrap.
         * @param wrapper The wrapper function.
         * @return Returns the new function.
         */
        wrap<T, TArgs, TResult>(
            value: T,
            wrapper: (value: T, ...args: TArgs[]) => TResult
        ): (...args: TArgs[]) => TResult;

        /**
         * @see _.wrap
         */
        wrap<T, TResult>(
            value: T,
            wrapper: (value: T, ...args: any[]) => TResult
        ): (...args: any[]) => TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.wrap
         */
        wrap<TArgs, TResult>(
            wrapper: (value: TValue, ...args: TArgs[]) => TResult
        ): LoDashImplicitWrapper<(...args: TArgs[]) => TResult>;

        /**
         * @see _.wrap
         */
        wrap<TResult>(
            wrapper: (value: TValue, ...args: any[]) => TResult
        ): LoDashImplicitWrapper<(...args: any[]) => TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.wrap
         */
        /**
         * @see _.wrap
         */
        wrap<TArgs, TResult>(
            wrapper: (value: TValue, ...args: TArgs[]) => TResult
        ): LoDashExplicitWrapper<(...args: TArgs[]) => TResult>;

        /**
         * @see _.wrap
         */
        wrap<TResult>(
            wrapper: (value: TValue, ...args: any[]) => TResult
        ): LoDashExplicitWrapper<(...args: any[]) => TResult>;
    }
}