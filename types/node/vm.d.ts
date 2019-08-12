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

    /**
     * If options is a string, then it specifies the filename.
     * https://nodejs.org/api/vm.html#vm_constructor_new_vm_script_code_options
     */
    type ScriptOptions = {
        cachedData?: NodeJS.TypedArray | DataView;
        /** @deprecated This option is deprecated in favor of script.createCachedData() */
        produceCachedData?: boolean;
        /** This option is part of the experimental API for the --experimental-modules flag, and should not be considered stable. */
        importModuleDynamically?(specifier: string, module: SourceTextModule): { [key: string]: any } | SourceTextModule;
    } & BaseOptions | string;

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

    interface SourceTextModuleOptions {
        url?: string;
        context?: Context;
        lineOffset?: number;
        columnOffset?: number;
        initializeImportMeta?(meta: ImportMeta, module: SourceTextModule): void;
        importModuleDynamically?(specifier: string, module: SourceTextModule): Object | SourceTextModule;
    }

    interface SourceTextModuleEvaluateOptions {
        timeout?: number;
        breakOnSigint?: boolean;
    }

    type SourceTextModuleStatus = 'uninstantiated' | 'instantiating' | 'instantiated' | 'evaluating' | 'evaluated' | 'errored';
    type SourceTextModuleLinkingStatus = 'unlinked' | 'linking' | 'linked' | 'errored';

    class Script {
        cachedData?: Buffer;
        cachedDataProduced?: boolean;
        cachedDataRejected?: boolean;
        constructor(code: string, options?: ScriptOptions);
        runInContext(contextifiedSandbox: Context, options?: RunningScriptOptions): any;
        runInNewContext(sandbox?: Context, options?: RunningScriptOptions): any;
        runInThisContext(options?: RunningScriptOptions): any;
        createCachedData(): Buffer;
    }

    /**
     * This feature is only available with the --experimental-vm-modules command flag enabled.
     * https://nodejs.org/api/vm.html#vm_class_vm_sourcetextmodule
     */
    class SourceTextModule {
        dependencySpecifiers: string[];
        error: any;
        linkingStatus: SourceTextModuleLinkingStatus;
        namespace: Object;
        status: SourceTextModuleStatus;
        url: string;
        constructor(code: string, options?: SourceTextModuleOptions);
        evaluate(options?: SourceTextModuleEvaluateOptions): Promise<any>;
        instantiate(): void;
        link(linker: (specifier: string, referencingModule: SourceTextModule) => SourceTextModule | Promise<any>): Promise<any>;
    }

    function createContext(sandbox?: Context, options?: CreateContextOptions): Context;
    function isContext(sandbox: Context): boolean;
    function runInContext(code: string, contextifiedSandbox: Context, options?: RunningScriptOptions | string): any;
    function runInNewContext(code: string, sandbox?: Context, options?: RunningScriptOptions | string): any;
    function runInThisContext(code: string, options?: RunningScriptOptions | string): any;
    function compileFunction(code: string, params: string[], options: CompileFunctionOptions): Function;
}
