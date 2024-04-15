/**
 * The `node:vm` module enables compiling and running code within V8 Virtual
 * Machine contexts.
 *
 * **The `node:vm` module is not a security**
 * **mechanism. Do not use it to run untrusted code.**
 *
 * JavaScript code can be compiled and run immediately or
 * compiled, saved, and run later.
 *
 * A common use case is to run the code in a different V8 Context. This means
 * invoked code has a different global object than the invoking code.
 *
 * One can provide the context by `contextifying` an
 * object. The invoked code treats any property in the context like a
 * global variable. Any changes to global variables caused by the invoked
 * code are reflected in the context object.
 *
 * ```js
 * const vm = require('node:vm');
 *
 * const x = 1;
 *
 * const context = { x: 2 };
 * vm.createContext(context); // Contextify the object.
 *
 * const code = 'x += 40; var y = 17;';
 * // `x` and `y` are global variables in the context.
 * // Initially, x has the value 2 because that is the value of context.x.
 * vm.runInContext(code, context);
 *
 * console.log(context.x); // 42
 * console.log(context.y); // 17
 *
 * console.log(x); // 1; y is not defined.
 * ```
 * @see [source](https://github.com/nodejs/node/blob/v20.2.0/lib/vm.js)
 */
declare module "vm" {
    import { ImportAttributes } from "node:module";
    interface Context extends NodeJS.Dict<any> {}
    interface BaseOptions {
        /**
         * Specifies the filename used in stack traces produced by this script.
         * Default: `''`.
         */
        filename?: string | undefined;
        /**
         * Specifies the line number offset that is displayed in stack traces produced by this script.
         * Default: `0`.
         */
        lineOffset?: number | undefined;
        /**
         * Specifies the column number offset that is displayed in stack traces produced by this script.
         * @default 0
         */
        columnOffset?: number | undefined;
    }
    interface ScriptOptions extends BaseOptions {
        /**
         * V8's code cache data for the supplied source.
         */
        cachedData?: Buffer | NodeJS.ArrayBufferView | undefined;
        /** @deprecated in favor of `script.createCachedData()` */
        produceCachedData?: boolean | undefined;
        /**
         * Called during evaluation of this module when `import()` is called.
         * If this option is not specified, calls to `import()` will reject with `ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING`.
         */
        importModuleDynamically?:
            | ((specifier: string, script: Script, importAttributes: ImportAttributes) => Module)
            | undefined;
    }
    interface RunningScriptOptions extends BaseOptions {
        /**
         * When `true`, if an `Error` occurs while compiling the `code`, the line of code causing the error is attached to the stack trace.
         * Default: `true`.
         */
        displayErrors?: boolean | undefined;
        /**
         * Specifies the number of milliseconds to execute code before terminating execution.
         * If execution is terminated, an `Error` will be thrown. This value must be a strictly positive integer.
         */
        timeout?: number | undefined;
        /**
         * If `true`, the execution will be terminated when `SIGINT` (Ctrl+C) is received.
         * Existing handlers for the event that have been attached via `process.on('SIGINT')` will be disabled during script execution, but will continue to work after that.
         * If execution is terminated, an `Error` will be thrown.
         * Default: `false`.
         */
        breakOnSigint?: boolean | undefined;
    }
    interface RunningScriptInNewContextOptions extends RunningScriptOptions {
        /**
         * Human-readable name of the newly created context.
         */
        contextName?: CreateContextOptions["name"];
        /**
         * Origin corresponding to the newly created context for display purposes. The origin should be formatted like a URL,
         * but with only the scheme, host, and port (if necessary), like the value of the `url.origin` property of a `URL` object.
         * Most notably, this string should omit the trailing slash, as that denotes a path.
         */
        contextOrigin?: CreateContextOptions["origin"];
        contextCodeGeneration?: CreateContextOptions["codeGeneration"];
        /**
         * If set to `afterEvaluate`, microtasks will be run immediately after the script has run.
         */
        microtaskMode?: CreateContextOptions["microtaskMode"];
    }
    interface RunningCodeOptions extends RunningScriptOptions {
        cachedData?: ScriptOptions["cachedData"];
        importModuleDynamically?: ScriptOptions["importModuleDynamically"];
    }
    interface RunningCodeInNewContextOptions extends RunningScriptInNewContextOptions {
        cachedData?: ScriptOptions["cachedData"];
        importModuleDynamically?: ScriptOptions["importModuleDynamically"];
    }
    interface CompileFunctionOptions extends BaseOptions {
        /**
         * Provides an optional data with V8's code cache data for the supplied source.
         */
        cachedData?: Buffer | undefined;
        /**
         * Specifies whether to produce new cache data.
         * Default: `false`,
         */
        produceCachedData?: boolean | undefined;
        /**
         * The sandbox/context in which the said function should be compiled in.
         */
        parsingContext?: Context | undefined;
        /**
         * An array containing a collection of context extensions (objects wrapping the current scope) to be applied while compiling
         */
        contextExtensions?: Object[] | undefined;
    }
    interface CreateContextOptions {
        /**
         * Human-readable name of the newly created context.
         * @default 'VM Context i' Where i is an ascending numerical index of the created context.
         */
        name?: string | undefined;
        /**
         * Corresponds to the newly created context for display purposes.
         * The origin should be formatted like a `URL`, but with only the scheme, host, and port (if necessary),
         * like the value of the `url.origin` property of a URL object.
         * Most notably, this string should omit the trailing slash, as that denotes a path.
         * @default ''
         */
        origin?: string | undefined;
        codeGeneration?:
            | {
                /**
                 * If set to false any calls to eval or function constructors (Function, GeneratorFunction, etc)
                 * will throw an EvalError.
                 * @default true
                 */
                strings?: boolean | undefined;
                /**
                 * If set to false any attempt to compile a WebAssembly module will throw a WebAssembly.CompileError.
                 * @default true
                 */
                wasm?: boolean | undefined;
            }
            | undefined;
        /**
         * If set to `afterEvaluate`, microtasks will be run immediately after the script has run.
         */
        microtaskMode?: "afterEvaluate" | undefined;
    }
    type MeasureMemoryMode = "summary" | "detailed";
    interface MeasureMemoryOptions {
        /**
         * @default 'summary'
         */
        mode?: MeasureMemoryMode | undefined;
        /**
         * @default 'default'
         */
        execution?: "default" | "eager" | undefined;
    }
    interface MemoryMeasurement {
        total: {
            jsMemoryEstimate: number;
            jsMemoryRange: [number, number];
        };
    }
    /**
     * Instances of the `vm.Script` class contain precompiled scripts that can be
     * executed in specific contexts.
     * @since v0.3.1
     */
    class Script {
        constructor(code: string, options?: ScriptOptions | string);
        /**
         * Runs the compiled code contained by the `vm.Script` object within the given`contextifiedObject` and returns the result. Running code does not have access
         * to local scope.
         *
         * The following example compiles code that increments a global variable, sets
         * the value of another global variable, then execute the code multiple times.
         * The globals are contained in the `context` object.
         *
         * ```js
         * const vm = require('node:vm');
         *
         * const context = {
         *   animal: 'cat',
         *   count: 2,
         * };
         *
         * const script = new vm.Script('count += 1; name = "kitty";');
         *
         * vm.createContext(context);
         * for (let i = 0; i < 10; ++i) {
         *   script.runInContext(context);
         * }
         *
         * console.log(context);
         * // Prints: { animal: 'cat', count: 12, name: 'kitty' }
         * ```
         *
         * Using the `timeout` or `breakOnSigint` options will result in new event loops
         * and corresponding threads being started, which have a non-zero performance
         * overhead.
         * @since v0.3.1
         * @param contextifiedObject A `contextified` object as returned by the `vm.createContext()` method.
         * @return the result of the very last statement executed in the script.
         */
        runInContext(contextifiedObject: Context, options?: RunningScriptOptions): any;
        /**
         * First contextifies the given `contextObject`, runs the compiled code contained
         * by the `vm.Script` object within the created context, and returns the result.
         * Running code does not have access to local scope.
         *
         * The following example compiles code that sets a global variable, then executes
         * the code multiple times in different contexts. The globals are set on and
         * contained within each individual `context`.
         *
         * ```js
         * const vm = require('node:vm');
         *
         * const script = new vm.Script('globalVar = "set"');
         *
         * const contexts = [{}, {}, {}];
         * contexts.forEach((context) => {
         *   script.runInNewContext(context);
         * });
         *
         * console.log(contexts);
         * // Prints: [{ globalVar: 'set' }, { globalVar: 'set' }, { globalVar: 'set' }]
         * ```
         * @since v0.3.1
         * @param contextObject An object that will be `contextified`. If `undefined`, a new object will be created.
         * @return the result of the very last statement executed in the script.
         */
        runInNewContext(contextObject?: Context, options?: RunningScriptInNewContextOptions): any;
        /**
         * Runs the compiled code contained by the `vm.Script` within the context of the
         * current `global` object. Running code does not have access to local scope, but _does_ have access to the current `global` object.
         *
         * The following example compiles code that increments a `global` variable then
         * executes that code multiple times:
         *
         * ```js
         * const vm = require('node:vm');
         *
         * global.globalVar = 0;
         *
         * const script = new vm.Script('globalVar += 1', { filename: 'myfile.vm' });
         *
         * for (let i = 0; i < 1000; ++i) {
         *   script.runInThisContext();
         * }
         *
         * console.log(globalVar);
         *
         * // 1000
         * ```
         * @since v0.3.1
         * @return the result of the very last statement executed in the script.
         */
        runInThisContext(options?: RunningScriptOptions): any;
        /**
         * Creates a code cache that can be used with the `Script` constructor's`cachedData` option. Returns a `Buffer`. This method may be called at any
         * time and any number of times.
         *
         * The code cache of the `Script` doesn't contain any JavaScript observable
         * states. The code cache is safe to be saved along side the script source and
         * used to construct new `Script` instances multiple times.
         *
         * Functions in the `Script` source can be marked as lazily compiled and they are
         * not compiled at construction of the `Script`. These functions are going to be
         * compiled when they are invoked the first time. The code cache serializes the
         * metadata that V8 currently knows about the `Script` that it can use to speed up
         * future compilations.
         *
         * ```js
         * const script = new vm.Script(`
         * function add(a, b) {
         *   return a + b;
         * }
         *
         * const x = add(1, 2);
         * `);
         *
         * const cacheWithoutAdd = script.createCachedData();
         * // In `cacheWithoutAdd` the function `add()` is marked for full compilation
         * // upon invocation.
         *
         * script.runInThisContext();
         *
         * const cacheWithAdd = script.createCachedData();
         * // `cacheWithAdd` contains fully compiled function `add()`.
         * ```
         * @since v10.6.0
         */
        createCachedData(): Buffer;
        /** @deprecated in favor of `script.createCachedData()` */
        cachedDataProduced?: boolean | undefined;
        /**
         * When `cachedData` is supplied to create the `vm.Script`, this value will be set
         * to either `true` or `false` depending on acceptance of the data by V8\.
         * Otherwise the value is `undefined`.
         * @since v5.7.0
         */
        cachedDataRejected?: boolean | undefined;
        cachedData?: Buffer | undefined;
        /**
         * When the script is compiled from a source that contains a source map magic
         * comment, this property will be set to the URL of the source map.
         *
         * ```js
         * import vm from 'node:vm';
         *
         * const script = new vm.Script(`
         * function myFunc() {}
         * //# sourceMappingURL=sourcemap.json
         * `);
         *
         * console.log(script.sourceMapURL);
         * // Prints: sourcemap.json
         * ```
         * @since v19.1.0, v18.13.0
         */
        sourceMapURL?: string | undefined;
    }
    /**
     * If given a `contextObject`, the `vm.createContext()` method will `prepare
     * that object` so that it can be used in calls to {@link runInContext} or `script.runInContext()`. Inside such scripts,
     * the `contextObject` will be the global object, retaining all of its existing
     * properties but also having the built-in objects and functions any standard [global object](https://es5.github.io/#x15.1) has. Outside of scripts run by the vm module, global variables
     * will remain unchanged.
     *
     * ```js
     * const vm = require('node:vm');
     *
     * global.globalVar = 3;
     *
     * const context = { globalVar: 1 };
     * vm.createContext(context);
     *
     * vm.runInContext('globalVar *= 2;', context);
     *
     * console.log(context);
     * // Prints: { globalVar: 2 }
     *
     * console.log(global.globalVar);
     * // Prints: 3
     * ```
     *
     * If `contextObject` is omitted (or passed explicitly as `undefined`), a new,
     * empty `contextified` object will be returned.
     *
     * The `vm.createContext()` method is primarily useful for creating a single
     * context that can be used to run multiple scripts. For instance, if emulating a
     * web browser, the method can be used to create a single context representing a
     * window's global object, then run all `<script>` tags together within that
     * context.
     *
     * The provided `name` and `origin` of the context are made visible through the
     * Inspector API.
     * @since v0.3.1
     * @return contextified object.
     */
    function createContext(sandbox?: Context, options?: CreateContextOptions): Context;
    /**
     * Returns `true` if the given `object` object has been `contextified` using {@link createContext}.
     * @since v0.11.7
     */
    function isContext(sandbox: Context): boolean;
    /**
     * The `vm.runInContext()` method compiles `code`, runs it within the context of
     * the `contextifiedObject`, then returns the result. Running code does not have
     * access to the local scope. The `contextifiedObject` object _must_ have been
     * previously `contextified` using the {@link createContext} method.
     *
     * If `options` is a string, then it specifies the filename.
     *
     * The following example compiles and executes different scripts using a single `contextified` object:
     *
     * ```js
     * const vm = require('node:vm');
     *
     * const contextObject = { globalVar: 1 };
     * vm.createContext(contextObject);
     *
     * for (let i = 0; i < 10; ++i) {
     *   vm.runInContext('globalVar *= 2;', contextObject);
     * }
     * console.log(contextObject);
     * // Prints: { globalVar: 1024 }
     * ```
     * @since v0.3.1
     * @param code The JavaScript code to compile and run.
     * @param contextifiedObject The `contextified` object that will be used as the `global` when the `code` is compiled and run.
     * @return the result of the very last statement executed in the script.
     */
    function runInContext(code: string, contextifiedObject: Context, options?: RunningCodeOptions | string): any;
    /**
     * The `vm.runInNewContext()` first contextifies the given `contextObject` (or
     * creates a new `contextObject` if passed as `undefined`), compiles the `code`,
     * runs it within the created context, then returns the result. Running code
     * does not have access to the local scope.
     *
     * If `options` is a string, then it specifies the filename.
     *
     * The following example compiles and executes code that increments a global
     * variable and sets a new one. These globals are contained in the `contextObject`.
     *
     * ```js
     * const vm = require('node:vm');
     *
     * const contextObject = {
     *   animal: 'cat',
     *   count: 2,
     * };
     *
     * vm.runInNewContext('count += 1; name = "kitty"', contextObject);
     * console.log(contextObject);
     * // Prints: { animal: 'cat', count: 3, name: 'kitty' }
     * ```
     * @since v0.3.1
     * @param code The JavaScript code to compile and run.
     * @param contextObject An object that will be `contextified`. If `undefined`, a new object will be created.
     * @return the result of the very last statement executed in the script.
     */
    function runInNewContext(
        code: string,
        contextObject?: Context,
        options?: RunningCodeInNewContextOptions | string,
    ): any;
    /**
     * `vm.runInThisContext()` compiles `code`, runs it within the context of the
     * current `global` and returns the result. Running code does not have access to
     * local scope, but does have access to the current `global` object.
     *
     * If `options` is a string, then it specifies the filename.
     *
     * The following example illustrates using both `vm.runInThisContext()` and
     * the JavaScript [`eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) function to run the same code:
     *
     * ```js
     * const vm = require('node:vm');
     * let localVar = 'initial value';
     *
     * const vmResult = vm.runInThisContext('localVar = "vm";');
     * console.log(`vmResult: '${vmResult}', localVar: '${localVar}'`);
     * // Prints: vmResult: 'vm', localVar: 'initial value'
     *
     * const evalResult = eval('localVar = "eval";');
     * console.log(`evalResult: '${evalResult}', localVar: '${localVar}'`);
     * // Prints: evalResult: 'eval', localVar: 'eval'
     * ```
     *
     * Because `vm.runInThisContext()` does not have access to the local scope,`localVar` is unchanged. In contrast,
     * [`eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) _does_ have access to the
     * local scope, so the value `localVar` is changed. In this way`vm.runInThisContext()` is much like an [indirect `eval()` call](https://es5.github.io/#x10.4.2), e.g.`(0,eval)('code')`.
     *
     * ## Example: Running an HTTP server within a VM
     *
     * When using either `script.runInThisContext()` or {@link runInThisContext}, the code is executed within the current V8 global
     * context. The code passed to this VM context will have its own isolated scope.
     *
     * In order to run a simple web server using the `node:http` module the code passed
     * to the context must either call `require('node:http')` on its own, or have a
     * reference to the `node:http` module passed to it. For instance:
     *
     * ```js
     * 'use strict';
     * const vm = require('node:vm');
     *
     * const code = `
     * ((require) => {
     *   const http = require('node:http');
     *
     *   http.createServer((request, response) => {
     *     response.writeHead(200, { 'Content-Type': 'text/plain' });
     *     response.end('Hello World\\n');
     *   }).listen(8124);
     *
     *   console.log('Server running at http://127.0.0.1:8124/');
     * })`;
     *
     * vm.runInThisContext(code)(require);
     * ```
     *
     * The `require()` in the above case shares the state with the context it is
     * passed from. This may introduce risks when untrusted code is executed, e.g.
     * altering objects in the context in unwanted ways.
     * @since v0.3.1
     * @param code The JavaScript code to compile and run.
     * @return the result of the very last statement executed in the script.
     */
    function runInThisContext(code: string, options?: RunningCodeOptions | string): any;
    /**
     * Compiles the given code into the provided context (if no context is
     * supplied, the current context is used), and returns it wrapped inside a
     * function with the given `params`.
     * @since v10.10.0
     * @param code The body of the function to compile.
     * @param params An array of strings containing all parameters for the function.
     */
    function compileFunction(
        code: string,
        params?: readonly string[],
        options?: CompileFunctionOptions,
    ): Function & {
        cachedData?: Script["cachedData"] | undefined;
        cachedDataProduced?: Script["cachedDataProduced"] | undefined;
        cachedDataRejected?: Script["cachedDataRejected"] | undefined;
    };
    /**
     * Measure the memory known to V8 and used by all contexts known to the
     * current V8 isolate, or the main context.
     *
     * The format of the object that the returned Promise may resolve with is
     * specific to the V8 engine and may change from one version of V8 to the next.
     *
     * The returned result is different from the statistics returned by`v8.getHeapSpaceStatistics()` in that `vm.measureMemory()` measure the
     * memory reachable by each V8 specific contexts in the current instance of
     * the V8 engine, while the result of `v8.getHeapSpaceStatistics()` measure
     * the memory occupied by each heap space in the current V8 instance.
     *
     * ```js
     * const vm = require('node:vm');
     * // Measure the memory used by the main context.
     * vm.measureMemory({ mode: 'summary' })
     *   // This is the same as vm.measureMemory()
     *   .then((result) => {
     *     // The current format is:
     *     // {
     *     //   total: {
     *     //      jsMemoryEstimate: 2418479, jsMemoryRange: [ 2418479, 2745799 ]
     *     //    }
     *     // }
     *     console.log(result);
     *   });
     *
     * const context = vm.createContext({ a: 1 });
     * vm.measureMemory({ mode: 'detailed', execution: 'eager' })
     *   .then((result) => {
     *     // Reference the context here so that it won't be GC'ed
     *     // until the measurement is complete.
     *     console.log(context.a);
     *     // {
     *     //   total: {
     *     //     jsMemoryEstimate: 2574732,
     *     //     jsMemoryRange: [ 2574732, 2904372 ]
     *     //   },
     *     //   current: {
     *     //     jsMemoryEstimate: 2438996,
     *     //     jsMemoryRange: [ 2438996, 2768636 ]
     *     //   },
     *     //   other: [
     *     //     {
     *     //       jsMemoryEstimate: 135736,
     *     //       jsMemoryRange: [ 135736, 465376 ]
     *     //     }
     *     //   ]
     *     // }
     *     console.log(result);
     *   });
     * ```
     * @since v13.10.0
     * @experimental
     */
    function measureMemory(options?: MeasureMemoryOptions): Promise<MemoryMeasurement>;
    interface ModuleEvaluateOptions {
        timeout?: RunningScriptOptions["timeout"] | undefined;
        breakOnSigint?: RunningScriptOptions["breakOnSigint"] | undefined;
    }
    type ModuleLinker = (
        specifier: string,
        referencingModule: Module,
        extra: {
            /** @deprecated Use `attributes` instead */
            assert: ImportAttributes;
            attributes: ImportAttributes;
        },
    ) => Module | Promise<Module>;
    type ModuleStatus = "unlinked" | "linking" | "linked" | "evaluating" | "evaluated" | "errored";
    /**
     * This feature is only available with the `--experimental-vm-modules` command
     * flag enabled.
     *
     * The `vm.Module` class provides a low-level interface for using
     * ECMAScript modules in VM contexts. It is the counterpart of the `vm.Script`class that closely mirrors [Module Record](https://262.ecma-international.org/14.0/#sec-abstract-module-records) s as
     * defined in the ECMAScript
     * specification.
     *
     * Unlike `vm.Script` however, every `vm.Module` object is bound to a context from
     * its creation. Operations on `vm.Module` objects are intrinsically asynchronous,
     * in contrast with the synchronous nature of `vm.Script` objects. The use of
     * 'async' functions can help with manipulating `vm.Module` objects.
     *
     * Using a `vm.Module` object requires three distinct steps: creation/parsing,
     * linking, and evaluation. These three steps are illustrated in the following
     * example.
     *
     * This implementation lies at a lower level than the `ECMAScript Module
     * loader`. There is also no way to interact with the Loader yet, though
     * support is planned.
     *
     * ```js
     * import vm from 'node:vm';
     *
     * const contextifiedObject = vm.createContext({
     *   secret: 42,
     *   print: console.log,
     * });
     *
     * // Step 1
     * //
     * // Create a Module by constructing a new `vm.SourceTextModule` object. This
     * // parses the provided source text, throwing a `SyntaxError` if anything goes
     * // wrong. By default, a Module is created in the top context. But here, we
     * // specify `contextifiedObject` as the context this Module belongs to.
     * //
     * // Here, we attempt to obtain the default export from the module "foo", and
     * // put it into local binding "secret".
     *
     * const bar = new vm.SourceTextModule(`
     *   import s from 'foo';
     *   s;
     *   print(s);
     * `, { context: contextifiedObject });
     *
     * // Step 2
     * //
     * // "Link" the imported dependencies of this Module to it.
     * //
     * // The provided linking callback (the "linker") accepts two arguments: the
     * // parent module (`bar` in this case) and the string that is the specifier of
     * // the imported module. The callback is expected to return a Module that
     * // corresponds to the provided specifier, with certain requirements documented
     * // in `module.link()`.
     * //
     * // If linking has not started for the returned Module, the same linker
     * // callback will be called on the returned Module.
     * //
     * // Even top-level Modules without dependencies must be explicitly linked. The
     * // callback provided would never be called, however.
     * //
     * // The link() method returns a Promise that will be resolved when all the
     * // Promises returned by the linker resolve.
     * //
     * // Note: This is a contrived example in that the linker function creates a new
     * // "foo" module every time it is called. In a full-fledged module system, a
     * // cache would probably be used to avoid duplicated modules.
     *
     * async function linker(specifier, referencingModule) {
     *   if (specifier === 'foo') {
     *     return new vm.SourceTextModule(`
     *       // The "secret" variable refers to the global variable we added to
     *       // "contextifiedObject" when creating the context.
     *       export default secret;
     *     `, { context: referencingModule.context });
     *
     *     // Using `contextifiedObject` instead of `referencingModule.context`
     *     // here would work as well.
     *   }
     *   throw new Error(`Unable to resolve dependency: ${specifier}`);
     * }
     * await bar.link(linker);
     *
     * // Step 3
     * //
     * // Evaluate the Module. The evaluate() method returns a promise which will
     * // resolve after the module has finished evaluating.
     *
     * // Prints 42.
     * await bar.evaluate();
     * ```
     * @since v13.0.0, v12.16.0
     * @experimental
     */
    class Module {
        /**
         * The specifiers of all dependencies of this module. The returned array is frozen
         * to disallow any changes to it.
         *
         * Corresponds to the `[[RequestedModules]]` field of [Cyclic Module Record](https://tc39.es/ecma262/#sec-cyclic-module-records) s in
         * the ECMAScript specification.
         */
        dependencySpecifiers: readonly string[];
        /**
         * If the `module.status` is `'errored'`, this property contains the exception
         * thrown by the module during evaluation. If the status is anything else,
         * accessing this property will result in a thrown exception.
         *
         * The value `undefined` cannot be used for cases where there is not a thrown
         * exception due to possible ambiguity with `throw undefined;`.
         *
         * Corresponds to the `[[EvaluationError]]` field of [Cyclic Module Record](https://tc39.es/ecma262/#sec-cyclic-module-records) s
         * in the ECMAScript specification.
         */
        error: any;
        /**
         * The identifier of the current module, as set in the constructor.
         */
        identifier: string;
        context: Context;
        /**
         * The namespace object of the module. This is only available after linking
         * (`module.link()`) has completed.
         *
         * Corresponds to the [GetModuleNamespace](https://tc39.es/ecma262/#sec-getmodulenamespace) abstract operation in the ECMAScript
         * specification.
         */
        namespace: Object;
        /**
         * The current status of the module. Will be one of:
         *
         * * `'unlinked'`: `module.link()` has not yet been called.
         * * `'linking'`: `module.link()` has been called, but not all Promises returned
         * by the linker function have been resolved yet.
         * * `'linked'`: The module has been linked successfully, and all of its
         * dependencies are linked, but `module.evaluate()` has not yet been called.
         * * `'evaluating'`: The module is being evaluated through a `module.evaluate()` on
         * itself or a parent module.
         * * `'evaluated'`: The module has been successfully evaluated.
         * * `'errored'`: The module has been evaluated, but an exception was thrown.
         *
         * Other than `'errored'`, this status string corresponds to the specification's [Cyclic Module Record](https://tc39.es/ecma262/#sec-cyclic-module-records)'s `[[Status]]` field. `'errored'`
         * corresponds to`'evaluated'` in the specification, but with `[[EvaluationError]]` set to a
         * value that is not `undefined`.
         */
        status: ModuleStatus;
        /**
         * Evaluate the module.
         *
         * This must be called after the module has been linked; otherwise it will reject.
         * It could be called also when the module has already been evaluated, in which
         * case it will either do nothing if the initial evaluation ended in success
         * (`module.status` is `'evaluated'`) or it will re-throw the exception that the
         * initial evaluation resulted in (`module.status` is `'errored'`).
         *
         * This method cannot be called while the module is being evaluated
         * (`module.status` is `'evaluating'`).
         *
         * Corresponds to the [Evaluate() concrete method](https://tc39.es/ecma262/#sec-moduleevaluation) field of [Cyclic Module Record](https://tc39.es/ecma262/#sec-cyclic-module-records) s in the
         * ECMAScript specification.
         * @return Fulfills with `undefined` upon success.
         */
        evaluate(options?: ModuleEvaluateOptions): Promise<void>;
        /**
         * Link module dependencies. This method must be called before evaluation, and
         * can only be called once per module.
         *
         * The function is expected to return a `Module` object or a `Promise` that
         * eventually resolves to a `Module` object. The returned `Module` must satisfy the
         * following two invariants:
         *
         * * It must belong to the same context as the parent `Module`.
         * * Its `status` must not be `'errored'`.
         *
         * If the returned `Module`'s `status` is `'unlinked'`, this method will be
         * recursively called on the returned `Module` with the same provided `linker`function.
         *
         * `link()` returns a `Promise` that will either get resolved when all linking
         * instances resolve to a valid `Module`, or rejected if the linker function either
         * throws an exception or returns an invalid `Module`.
         *
         * The linker function roughly corresponds to the implementation-defined [HostResolveImportedModule](https://tc39.es/ecma262/#sec-hostresolveimportedmodule) abstract operation in the
         * ECMAScript
         * specification, with a few key differences:
         *
         * * The linker function is allowed to be asynchronous while [HostResolveImportedModule](https://tc39.es/ecma262/#sec-hostresolveimportedmodule) is synchronous.
         *
         * The actual [HostResolveImportedModule](https://tc39.es/ecma262/#sec-hostresolveimportedmodule) implementation used during module
         * linking is one that returns the modules linked during linking. Since at
         * that point all modules would have been fully linked already, the [HostResolveImportedModule](https://tc39.es/ecma262/#sec-hostresolveimportedmodule) implementation is fully synchronous per
         * specification.
         *
         * Corresponds to the [Link() concrete method](https://tc39.es/ecma262/#sec-moduledeclarationlinking) field of [Cyclic Module Record](https://tc39.es/ecma262/#sec-cyclic-module-records) s in
         * the ECMAScript specification.
         */
        link(linker: ModuleLinker): Promise<void>;
    }
    interface SourceTextModuleOptions {
        /**
         * String used in stack traces.
         * @default 'vm:module(i)' where i is a context-specific ascending index.
         */
        identifier?: string | undefined;
        cachedData?: ScriptOptions["cachedData"] | undefined;
        context?: Context | undefined;
        lineOffset?: BaseOptions["lineOffset"] | undefined;
        columnOffset?: BaseOptions["columnOffset"] | undefined;
        /**
         * Called during evaluation of this module to initialize the `import.meta`.
         */
        initializeImportMeta?: ((meta: ImportMeta, module: SourceTextModule) => void) | undefined;
        importModuleDynamically?: ScriptOptions["importModuleDynamically"] | undefined;
    }
    /**
     * This feature is only available with the `--experimental-vm-modules` command
     * flag enabled.
     *
     * The `vm.SourceTextModule` class provides the [Source Text Module Record](https://tc39.es/ecma262/#sec-source-text-module-records) as
     * defined in the ECMAScript specification.
     * @since v9.6.0
     * @experimental
     */
    class SourceTextModule extends Module {
        /**
         * Creates a new `SourceTextModule` instance.
         * @param code JavaScript Module code to parse
         */
        constructor(code: string, options?: SourceTextModuleOptions);
    }
    interface SyntheticModuleOptions {
        /**
         * String used in stack traces.
         * @default 'vm:module(i)' where i is a context-specific ascending index.
         */
        identifier?: string | undefined;
        /**
         * The contextified object as returned by the `vm.createContext()` method, to compile and evaluate this module in.
         */
        context?: Context | undefined;
    }
    /**
     * This feature is only available with the `--experimental-vm-modules` command
     * flag enabled.
     *
     * The `vm.SyntheticModule` class provides the [Synthetic Module Record](https://heycam.github.io/webidl/#synthetic-module-records) as
     * defined in the WebIDL specification. The purpose of synthetic modules is to
     * provide a generic interface for exposing non-JavaScript sources to ECMAScript
     * module graphs.
     *
     * ```js
     * const vm = require('node:vm');
     *
     * const source = '{ "a": 1 }';
     * const module = new vm.SyntheticModule(['default'], function() {
     *   const obj = JSON.parse(source);
     *   this.setExport('default', obj);
     * });
     *
     * // Use `module` in linking...
     * ```
     * @since v13.0.0, v12.16.0
     * @experimental
     */
    class SyntheticModule extends Module {
        /**
         * Creates a new `SyntheticModule` instance.
         * @param exportNames Array of names that will be exported from the module.
         * @param evaluateCallback Called when the module is evaluated.
         */
        constructor(
            exportNames: string[],
            evaluateCallback: (this: SyntheticModule) => void,
            options?: SyntheticModuleOptions,
        );
        /**
         * This method is used after the module is linked to set the values of exports. If
         * it is called before the module is linked, an `ERR_VM_MODULE_STATUS` error
         * will be thrown.
         *
         * ```js
         * import vm from 'node:vm';
         *
         * const m = new vm.SyntheticModule(['x'], () => {
         *   m.setExport('x', 1);
         * });
         *
         * await m.link(() => {});
         * await m.evaluate();
         *
         * assert.strictEqual(m.namespace.x, 1);
         * ```
         * @since v13.0.0, v12.16.0
         * @param name Name of the export to set.
         * @param value The value to set the export to.
         */
        setExport(name: string, value: any): void;
    }
}
declare module "node:vm" {
    export * from "vm";
}
