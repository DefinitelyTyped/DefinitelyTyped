declare module "assert" {
    function internal(value: any, message?: string | Error): void;
    namespace internal {
        class AssertionError implements Error {
            name: string;
            message: string;
            actual: any;
            expected: any;
            operator: string;
            generatedMessage: boolean;
            code: 'ERR_ASSERTION';

            constructor(options?: {
                message?: string; actual?: any; expected?: any;
                operator?: string; stackStartFn?: Function
            });
        }

        function fail(message?: string | Error): never;
        /** @deprecated since v10.0.0 - use fail([message]) or other assert functions instead. */
        function fail(actual: any, expected: any, message?: string | Error, operator?: string, stackStartFn?: Function): never;
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

        function throws(block: Function, message?: string | Error): void;
        function throws(block: Function, error: RegExp | Function | Object | Error, message?: string | Error): void;
        function doesNotThrow(block: Function, message?: string | Error): void;
        function doesNotThrow(block: Function, error: RegExp | Function, message?: string | Error): void;

        function ifError(value: any): void;

        function rejects(block: Function | Promise<any>, message?: string | Error): Promise<void>;
        function rejects(block: Function | Promise<any>, error: RegExp | Function | Object | Error, message?: string | Error): Promise<void>;
        function doesNotReject(block: Function | Promise<any>, message?: string | Error): Promise<void>;
        function doesNotReject(block: Function | Promise<any>, error: RegExp | Function, message?: string | Error): Promise<void>;

        const strict: typeof internal;
    }

    export = internal;
}
