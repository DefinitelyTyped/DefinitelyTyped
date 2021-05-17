declare module "vm" {
    interface Context {
        [key: string]: any;
    }
    interface BaseOptions {
        /**
         * Specifies the filename used in stack traces produced by this script.
         * Default: `''`.
         */
        filename?: string;
        /**
         * Specifies the line number offset that is displayed in stack traces produced by this script.
         * Default: `0`.
         */
        lineOffset?: number;
        /**
         * Specifies the column number offset that is displayed in stack traces produced by this script.
         * @default 0
         */
        columnOffset?: number;
    }
    interface ScriptOptions extends BaseOptions {
        displayErrors?: boolean;
        timeout?: number;
        cachedData?: Buffer;
        /** @deprecated in favor of `script.createCachedData()` */
        produceCachedData?: boolean;
    }
    interface RunningScriptOptions extends BaseOptions {
        /**
         * When `true`, if an `Error` occurs while compiling the `code`, the line of code causing the error is attached to the stack trace.
         * Default: `true`.
         */
        displayErrors?: boolean;
        /**
         * Specifies the number of milliseconds to execute code before terminating execution.
         * If execution is terminated, an `Error` will be thrown. This value must be a strictly positive integer.
         */
        timeout?: number;
        /**
         * If `true`, the execution will be terminated when `SIGINT` (Ctrl+C) is received.
         * Existing handlers for the event that have been attached via `process.on('SIGINT')` will be disabled during script execution, but will continue to work after that.
         * If execution is terminated, an `Error` will be thrown.
         * Default: `false`.
         */
        breakOnSigint?: boolean;
    }
    interface CompileFunctionOptions extends BaseOptions {
        /**
         * Provides an optional data with V8's code cache data for the supplied source.
         */
        cachedData?: Buffer;
        /**
         * Specifies whether to produce new cache data.
         * Default: `false`,
         */
        produceCachedData?: boolean;
        /**
         * The sandbox/context in which the said function should be compiled in.
         */
        parsingContext?: Context;

        /**
         * An array containing a collection of context extensions (objects wrapping the current scope) to be applied while compiling
         */
        contextExtensions?: Object[];
    }
    class Script {
        constructor(code: string, options?: ScriptOptions);
        runInContext(contextifiedSandbox: Context, options?: RunningScriptOptions): any;
        runInNewContext(sandbox?: Context, options?: RunningScriptOptions): any;
        runInThisContext(options?: RunningScriptOptions): any;
        cachedDataRejected?: boolean;
    }
    function createContext(sandbox?: Context): Context;
    function isContext(sandbox: Context): boolean;
    function runInContext(code: string, contextifiedSandbox: Context, options?: RunningScriptOptions | string): any;
    function runInNewContext(code: string, sandbox?: Context, options?: RunningScriptOptions | string): any;
    function runInThisContext(code: string, options?: RunningScriptOptions | string): any;
    function compileFunction(code: string, params?: ReadonlyArray<string>, options?: CompileFunctionOptions): Function;
}
