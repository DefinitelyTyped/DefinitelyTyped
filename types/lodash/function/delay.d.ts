import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Invokes func after wait milliseconds. Any additional arguments are provided to func when it’s invoked.
         *
         * @param func The function to delay.
         * @param wait The number of milliseconds to delay invocation.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        delay(
            func: (...args: any[]) => any,
            wait: number,
            ...args: any[]
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.delay
         */
        delay(
            wait: number,
            ...args: any[]
        ): LoDashImplicitWrapper<number>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.delay
         */
        delay(
            wait: number,
            ...args: any[]
        ): LoDashExplicitWrapper<number>;
    }
}
