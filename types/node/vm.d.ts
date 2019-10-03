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
         * Default: `0`
         */
        columnOffset?: number;
    }
    interface ScriptOptions extends BaseOptions {
        displayErrors?: boolean;
        timeout?: number;
        cachedData?: Buffer;
        produceCachedData?: boolean;
    }
    interface RunningScriptOptions extends BaseOptions {
        displayErrors?: boolean;
        timeout?: number;
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

    interface CreateContextOptions {
        /**
         * Human-readable name of the newly created context.
         * @default 'VM Context i' Where i is an ascending numerical index of the created context.
         */
        name?: string;
        /**
         * Corresponds to the newly created context for display purposes.
         * The origin should be formatted like a `URL`, but with only the scheme, host, and port (if necessary),
         * like the value of the `url.origin` property of a URL object.
         * Most notably, this string should omit the trailing slash, as that denotes a path.
         * @default ''
         */
        origin?: string;
        codeGeneration?: {
            /**
             * If set to false any calls to eval or function constructors (Function, GeneratorFunction, etc)
             * will throw an EvalError.
             * @default true
             */
            strings?: boolean;
            /**
             * If set to false any attempt to compile a WebAssembly module will throw a WebAssembly.CompileError.
             * @default true
             */
            wasm?: boolean;
        };
    }

    class Script {
        constructor(code: string, options?: ScriptOptions);
        runInContext(contextifiedSandbox: Context, options?: RunningScriptOptions): any;
        runInNewContext(sandbox?: Context, options?: RunningScriptOptions): any;
        runInThisContext(options?: RunningScriptOptions): any;
        createCachedData(): Buffer;
    }
    function createContext(sandbox?: Context, options?: CreateContextOptions): Context;
    function isContext(sandbox: Context): boolean;
    function runInContext(code: string, contextifiedSandbox: Context, options?: RunningScriptOptions | string): any;
    function runInNewContext(code: string, sandbox?: Context, options?: RunningScriptOptions | string): any;
    function runInThisContext(code: string, options?: RunningScriptOptions | string): any;
    function compileFunction(code: string, params: string[], options: CompileFunctionOptions): Function;
}
