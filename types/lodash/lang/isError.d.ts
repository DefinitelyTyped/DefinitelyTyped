import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or URIError
         * object.
         *
         * @param value The value to check.
         * @return Returns true if value is an error object, else false.
         */
        isError(value: any): value is Error;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isError
         */
        isError(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isError
         */
        isError(): LoDashExplicitWrapper<boolean>;
    }
}