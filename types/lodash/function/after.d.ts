import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * The opposite of _.before; this method creates a function that invokes func once it’s called n or more times.
         *
         * @param n The number of calls before func is invoked.
         * @param func The function to restrict.
         * @return Returns the new restricted function.
         */
        after<TFunc extends (...args: any[]) => any>(
            n: number,
            func: TFunc
        ): TFunc;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
        * @see _.after
        **/
        after<TFunc extends (...args: any[]) => any>(func: TFunc): LoDashImplicitWrapper<TFunc>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.after
         **/
        after<TFunc extends (...args: any[]) => any>(func: TFunc): LoDashExplicitWrapper<TFunc>;
    }
}