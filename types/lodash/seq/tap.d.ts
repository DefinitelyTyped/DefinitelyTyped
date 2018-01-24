import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * This method invokes interceptor and returns value. The interceptor is bound to thisArg and invoked with one
         * argument; (value). The purpose of this method is to "tap into" a method chain in order to perform operations
         * on intermediate results within the chain.
         *
         * @param value The value to provide to interceptor.
         * @param interceptor The function to invoke.
         * @parem thisArg The this binding of interceptor.
         * @return Returns value.
         **/
        tap<T>(
            value: T,
            interceptor: (value: T) => void
        ): T;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.tap
         */
        tap(
            interceptor: (value: TValue) => void
        ): this;
    }
}