declare namespace _ {
    interface DebounceSettings {
        /**
         * Specify invoking on the leading edge of the timeout.
         */
        leading?: boolean;

        /**
         * The maximum time func is allowed to be delayed before it’s invoked.
         */
        maxWait?: number;

        /**
         * Specify invoking on the trailing edge of the timeout.
         */
        trailing?: boolean;
    }

    interface LoDashStatic {
        /**
         * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since
         * the last time the debounced function was invoked. The debounced function comes with a cancel method to
         * cancel delayed invocations and a flush method to immediately invoke them. Provide an options object to
         * indicate that func should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent
         * calls to the debounced function return the result of the last func invocation.
         *
         * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only
         * if the the debounced function is invoked more than once during the wait timeout.
         *
         * See David Corbacho’s article for details over the differences between _.debounce and _.throttle.
         *
         * @param func The function to debounce.
         * @param wait The number of milliseconds to delay.
         * @param options The options object.
         * @param options.leading Specify invoking on the leading edge of the timeout.
         * @param options.maxWait The maximum time func is allowed to be delayed before it’s invoked.
         * @param options.trailing Specify invoking on the trailing edge of the timeout.
         * @return Returns the new debounced function.
         */
        debounce<T extends (...args: any[]) => any>(
            func: T,
            wait?: number,
            options?: DebounceSettings
        ): T & Cancelable;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.debounce
         */
        debounce(
            wait?: number,
            options?: DebounceSettings
        ): LoDashImplicitWrapper<TValue & Cancelable>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.debounce
         */
        debounce(
            wait?: number,
            options?: DebounceSettings
        ): LoDashExplicitWrapper<TValue & Cancelable>;
    }
}