import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Checks if value is a callable function.
         *
         * @param value The value to check.
         * @return Returns true if value is correctly classified, else false.
         */
        isFunction(value: any): value is (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isFunction
         */
        isFunction(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isFunction
         */
        isFunction(): LoDashExplicitWrapper<boolean>;
    }
}