import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates a function that invokes func with the this binding of the created function and an array of arguments
         * much like Function#apply.
         *
         * Note: This method is based on the spread operator.
         *
         * @param func The function to spread arguments over.
         * @return Returns the new function.
         */
        spread<TResult>(func: (...args: any[]) => TResult): (...args: any[]) => TResult;

        /**
         * @see _.spread
         */
        spread<TResult>(func: (...args: any[]) => TResult, start: number): (...args: any[]) => TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.spread
         */
        spread<TResult>(this: LoDashImplicitWrapper<(...args: any[]) => TResult>): LoDashImplicitWrapper<(...args: any[]) => TResult>;

        /**
         * @see _.spread
         */
        spread<TResult>(this: LoDashImplicitWrapper<(...args: any[]) => TResult>, start: number): LoDashImplicitWrapper<(...args: any[]) => TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.spread
         */
        spread<TResult>(this: LoDashExplicitWrapper<(...args: any[]) => TResult>): LoDashExplicitWrapper<(...args: any[]) => TResult>;

        /**
         * @see _.spread
         */
        spread<TResult>(this: LoDashExplicitWrapper<(...args: any[]) => TResult>, start: number): LoDashExplicitWrapper<(...args: any[]) => TResult>;
    }
}