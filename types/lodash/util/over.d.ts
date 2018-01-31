import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates a function that invokes iteratees with the arguments provided to the created function and returns
         * their results.
         *
         * @param iteratees The iteratees to invoke.
         * @return Returns the new function.
         */
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): (...args: any[]) => TResult[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.over
         */
        over<TResult>(
            this: LoDashImplicitWrapper<Many<(...args: any[]) => TResult>>,
            ...iteratees: Array<Many<(...args: any[]) => TResult>>
        ): LoDashImplicitWrapper<(...args: any[]) => TResult[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.over
         */
        over<TResult>(
            this: LoDashExplicitWrapper<Many<(...args: any[]) => TResult>>,
            ...iteratees: Array<Many<(...args: any[]) => TResult>>
        ): LoDashExplicitWrapper<(...args: any[]) => TResult[]>;
    }
}