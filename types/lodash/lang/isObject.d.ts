import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0),
         * and new String(''))
         *
         * @param value The value to check.
         * @return Returns true if value is an object, else false.
         */
        isObject(value?: any): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isObject
         */
        isObject(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * see _.isObject
         */
        isObject(): LoDashExplicitWrapper<boolean>;
    }
}