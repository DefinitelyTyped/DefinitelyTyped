declare module 'assert' {
    /** An alias of `assert.ok()`. */
    function assert(value: any, message?: string | Error): void;
    namespace assert {
        class AssertionError implements Error {
            name: string;
            message: string;
            actual: any;
            expected: any;
            operator: string;
            generatedMessage: boolean;
            code: 'ERR_ASSERTION';

            constructor(options?: {
                /** If provided, the error message is set to this value. */
                message?: string;
                /** The `actual` property on the error instance. */
                actual?: any;
                /** The `expected` property on the error instance. */
                expected?: any;
                /** The `operator` property on the error instance. */
                operator?: string;
                /** If provided, the generated stack trace omits frames before this function. */
                // tslint:disable-next-line:ban-types
                stackStartFn?: Function;
            });
        }

        class CallTracker {
            calls(exact?: number): () => void;
            calls<Func extends (...args: any[]) => any>(fn?: Func, exact?: number): Func;
            report(): CallTrackerReportInformation[];
            verify(): void;
        }
        interface CallTrackerReportInformation {
            message: string;
            /** The actual number of times the function was called. */
            actual: number;
            /** The number of times the function was expected to be called. */
            expected: number;
            /** The name of the function that is wrapped. */
            operator: string;
            /** A stack trace of the function. */
            stack: object;
        }

        type AssertPredicate = RegExp | (new () => object) | ((thrown: any) => boolean) | object | Error;

        function fail(message?: string | Error): never;
        /** @deprecated since v10.0.0 - use fail([message]) or other assert functions instead. */
        function fail(
            actual: any,
            expected: any,
            message?: string | Error,
            operator?: string,
            // tslint:disable-next-line:ban-types
            stackStartFn?: Function,
        ): never;
        function ok(value: any, message?: string | Error): void;
        /** @deprecated since v9.9.0 - use strictEqual() instead. */
        function equal(actual: any, expected: any, message?: string | Error): void;
        /** @deprecated since v9.9.0 - use notStrictEqual() instead. */
        function notEqual(actual: any, expected: any, message?: string | Error): void;
        /** @deprecated since v9.9.0 - use deepStrictEqual() instead. */
        function deepEqual(actual: any, expected: any, message?: string | Error): void;
        /** @deprecated since v9.9.0 - use notDeepStrictEqual() instead. */
        function notDeepEqual(actual: any, expected: any, message?: string | Error): void;
        function strictEqual(actual: any, expected: any, message?: string | Error): void;
        function notStrictEqual(actual: any, expected: any, message?: string | Error): void;
        function deepStrictEqual(actual: any, expected: any, message?: string | Error): void;
        function notDeepStrictEqual(actual: any, expected: any, message?: string | Error): void;

        function throws(block: () => any, message?: string | Error): void;
        function throws(block: () => any, error: AssertPredicate, message?: string | Error): void;
        function doesNotThrow(block: () => any, message?: string | Error): void;
        function doesNotThrow(block: () => any, error: AssertPredicate, message?: string | Error): void;

        function ifError(value: any): void;

        function rejects(block: (() => Promise<any>) | Promise<any>, message?: string | Error): Promise<void>;
        function rejects(
            block: (() => Promise<any>) | Promise<any>,
            error: AssertPredicate,
            message?: string | Error,
        ): Promise<void>;
        function doesNotReject(block: (() => Promise<any>) | Promise<any>, message?: string | Error): Promise<void>;
        function doesNotReject(
            block: (() => Promise<any>) | Promise<any>,
            error: AssertPredicate,
            message?: string | Error,
        ): Promise<void>;

        function match(value: string, regExp: RegExp, message?: string | Error): void;
        function doesNotMatch(value: string, regExp: RegExp, message?: string | Error): void;

        const strict: typeof assert;
    }

    export = assert;
}
