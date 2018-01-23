declare namespace _ {
    interface ThrottleSettings {
        /**
         * If you'd like to disable the leading-edge call, pass this as false.
         */
        leading?: boolean;

        /**
         * If you'd like to disable the execution on the trailing-edge, pass false.
         */
        trailing?: boolean;
    }

    interface LoDashStatic {
        /**
         * Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled
         * function comes with a cancel method to cancel delayed invocations and a flush method to immediately invoke
         * them. Provide an options object to indicate that func should be invoked on the leading and/or trailing edge
         * of the wait timeout. Subsequent calls to the throttled function return the result of the last func call.
         *
         * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if
         * the the throttled function is invoked more than once during the wait timeout.
         *
         * @param func The function to throttle.
         * @param wait The number of milliseconds to throttle invocations to.
         * @param options The options object.
         * @param options.leading Specify invoking on the leading edge of the timeout.
         * @param options.trailing Specify invoking on the trailing edge of the timeout.
         * @return Returns the new throttled function.
         */
        throttle<T extends (...args: any[]) => any>(
            func: T,
            wait?: number,
            options?: ThrottleSettings
        ): T & Cancelable;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.throttle
         */
        throttle(
            wait?: number,
            options?: ThrottleSettings
        ): LoDashImplicitWrapper<TValue & Cancelable>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.throttle
         */
        throttle(
            wait?: number,
            options?: ThrottleSettings
        ): LoDashExplicitWrapper<TValue & Cancelable>;
    }
}