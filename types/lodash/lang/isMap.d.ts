import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Checks if value is classified as a Map object.
         *
         * @param value The value to check.
         * @returns Returns true if value is correctly classified, else false.
         */
        isMap(value?: any): value is Map<any, any>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isMap
         */
        isMap(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isMap
         */
        isMap(): LoDashExplicitWrapper<boolean>;
    }
}