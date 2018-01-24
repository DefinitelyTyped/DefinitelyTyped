import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Creates a function that invokes func, with the this binding and arguments of the created function, while
         * it’s called less than n times. Subsequent calls to the created function return the result of the last func
         * invocation.
         *
         * @param n The number of calls at which func is no longer invoked.
         * @param func The function to restrict.
         * @return Returns the new restricted function.
         */
        before<TFunc extends (...args: any[]) => any>(
            n: number,
            func: TFunc
        ): TFunc;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.before
         **/
        before<TFunc extends (...args: any[]) => any>(func: TFunc): LoDashImplicitWrapper<TFunc>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.before
         **/
        before<TFunc extends (...args: any[]) => any>(func: TFunc): LoDashExplicitWrapper<TFunc>;
    }
}