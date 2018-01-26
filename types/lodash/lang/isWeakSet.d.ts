import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Checks if value is classified as a WeakSet object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        isWeakSet(value?: any): value is WeakSet<object>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isWeakSet
         */
        isWeakSet(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isWeakSet
         */
        isWeakSet(): LoDashExplicitWrapper<boolean>;
    }
}