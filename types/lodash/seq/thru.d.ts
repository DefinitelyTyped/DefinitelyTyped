import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * This method is like _.tap except that it returns the result of interceptor.
         *
         * @param value The value to provide to interceptor.
         * @param interceptor The function to invoke.
         * @param thisArg The this binding of interceptor.
         * @return Returns the result of interceptor.
         */
        thru<T, TResult>(
            value: T,
            interceptor: (value: T) => TResult
        ): TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.thru
         */
        thru<TResult>(interceptor: (value: TValue) => TResult): LoDashImplicitWrapper<TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.thru
         */
        thru<TResult>(interceptor: (value: TValue) => TResult): LoDashExplicitWrapper<TResult>;
    }
}