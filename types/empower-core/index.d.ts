/**
 * Enhances Power Assert feature to assert function/object.
 *
 * @param originalAssert An instance of standard `assert` function or any assert-like object to enhance.
 * @param options Configuration options. If not passed, default options will be used.
 * @return Enhanced assert function/object.
 */
declare function empowerCore<T>(originalAssert: T, options?: empowerCore.Options): T;

declare namespace empowerCore {
    interface Options {
        /**
         * If truthy, modify `originalAssert` destructively.
         *
         * If `false`, empower-core mimics `originalAssert` as new object/function, so
         * `originalAssert` will not be changed. If `true`, `originalAssert` will be
         * manipulated directly and returned `enhancedAssert` will be the same instance of
         * `originalAssert`.
         *
         * @default false
         */
        destructive?: boolean | undefined;
        /**
         * Defaults to `true`, meaning assertion methods have their this value bound to the
         * original assertion. Setting to `false` causes the this reference to be passed
         * through from the actual invocation.
         *
         * @default true
         */
        bindReceiver?: boolean | undefined;
        // TODO: Add type for event.
        onError?: ((event: any) => any) | undefined;
        // TODO: Add type for event.
        onSuccess?: ((event: any) => any) | undefined;
        // TODO: Add type for powerAssertContext.
        modifyMessageBeforeAssert?:
            | ((params: { originalMessage: string; powerAssertContext: any }) => string)
            | undefined;
        /**
         * Target patterns for power assert feature instrumentation.
         *
         * Pattern detection is done by call-signature. Any arguments enclosed in bracket
         * (for example, `[message]`) means optional parameters. Without bracket means
         * mandatory parameters.
         *
         * Instead of a string, you may alternatively specify an object with a `pattern`
         * property, and any other arbitrary data. Currently only `defaultMessage` is
         * formally recommended, but you can attach any data here and it will be passed to
         * the `onSuccess` and `onError` handlers.
         */
        patterns?: Pattern[] | undefined;
        /**
         * Methods matching these patterns will not be instrumented by the code transform,
         * but they will be wrapped at runtime and trigger events in the `onSuccess` and `onError`
         * callbacks. Note that "wrap only" events will never have a `powerAssertContext` property.
         *
         * Similar to the `options.patterns`, you may supply objects with a pattern member, and the
         * additional metadata will be passed to the assertion listeners.
         *
         * @default []
         */
        wrapOnlyPatterns?: Pattern[] | undefined;
    }

    type Pattern = string | PatternObject;

    interface PatternObject {
        pattern: string;
        defaultMessage?: string | undefined;
        [name: string]: any;
    }

    /**
     * Returns default options object for `empowerCore` function.
     */
    function defaultOptions(): Required<Omit<Options, "modifyMessageBeforeAssert">>;
}

export = empowerCore;
