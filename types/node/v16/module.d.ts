/**
 * @since v0.3.7
 */
declare module "module" {
    import { URL } from "node:url";
    import { MessagePort } from "node:worker_threads";
    namespace Module {
        /**
         * The `module.syncBuiltinESMExports()` method updates all the live bindings for
         * builtin `ES Modules` to match the properties of the `CommonJS` exports. It
         * does not add or remove exported names from the `ES Modules`.
         *
         * ```js
         * import fs from 'node:fs';
         * import assert from 'node:assert';
         * import { syncBuiltinESMExports } from 'node:module';
         *
         * fs.readFile = newAPI;
         *
         * delete fs.readFileSync;
         *
         * function newAPI() {
         *   // ...
         * }
         *
         * fs.newAPI = newAPI;
         *
         * syncBuiltinESMExports();
         *
         * import('fs').then((esmFS) => {
         *   // It syncs the existing readFile property with the new value
         *   assert.strictEqual(esmFS.readFile, newAPI);
         *   // readFileSync has been deleted from the required fs
         *   assert.strictEqual('readFileSync' in fs, false);
         *   // syncBuiltinESMExports() does not remove readFileSync from esmFS
         *   assert.strictEqual('readFileSync' in esmFS, true);
         *   // syncBuiltinESMExports() does not add names
         *   assert.strictEqual(esmFS.newAPI, undefined);
         * });
         * ```
         * @since v12.12.0
         */
        function syncBuiltinESMExports(): void;
        /**
         * `path` is the resolved path for the file for which a corresponding source map
         * should be fetched.
         * @since v13.7.0, v12.17.0
         */
        function findSourceMap(path: string, error?: Error): SourceMap;
        interface SourceMapPayload {
            file: string;
            version: number;
            sources: string[];
            sourcesContent: string[];
            names: string[];
            mappings: string;
            sourceRoot: string;
        }
        interface SourceMapping {
            generatedLine: number;
            generatedColumn: number;
            originalSource: string;
            originalLine: number;
            originalColumn: number;
        }
        /**
         * @since v13.7.0, v12.17.0
         */
        class SourceMap {
            /**
             * Getter for the payload used to construct the `SourceMap` instance.
             */
            readonly payload: SourceMapPayload;
            constructor(payload: SourceMapPayload);
            /**
             * Given a line number and column number in the generated source file, returns
             * an object representing the position in the original file. The object returned
             * consists of the following keys:
             */
            findEntry(line: number, column: number): SourceMapping;
        }
        interface ImportAssertions extends NodeJS.Dict<string> {
            type?: string | undefined;
        }
        type ModuleFormat = "builtin" | "commonjs" | "json" | "module" | "wasm";
        type ModuleSource = string | ArrayBuffer | NodeJS.TypedArray;
        interface GlobalPreloadContext {
            port: MessagePort;
        }
        /**
         * Sometimes it might be necessary to run some code inside of the same global scope that the application runs in.
         * This hook allows the return of a string that is run as a sloppy-mode script on startup.
         *
         * @param context Information to assist the preload code
         * @return Code to run before application startup
         */
        type GlobalPreloadHook = (context: GlobalPreloadContext) => string;
        interface ResolveHookContext {
            /**
             * Export conditions of the relevant `package.json`
             */
            conditions: string[];
            /**
             *  An object whose key-value pairs represent the assertions for the module to import
             */
            importAssertions: ImportAssertions;
            /**
             * The module importing this one, or undefined if this is the Node.js entry point
             */
            parentURL: string | undefined;
        }
        interface ResolveFnOutput {
            /**
             * A hint to the load hook (it might be ignored)
             */
            format?: ModuleFormat | null | undefined;
            /**
             * The import assertions to use when caching the module (optional; if excluded the input will be used)
             */
            importAssertions?: ImportAssertions | undefined;
            /**
             * A signal that this hook intends to terminate the chain of `resolve` hooks.
             * @default false
             */
            shortCircuit?: boolean | undefined;
            /**
             * The absolute URL to which this input resolves
             */
            url: string;
        }
        /**
         * The `resolve` hook chain is responsible for resolving file URL for a given module specifier and parent URL, and optionally its format (such as `'module'`) as a hint to the `load` hook.
         * If a format is specified, the load hook is ultimately responsible for providing the final `format` value (and it is free to ignore the hint provided by `resolve`);
         * if `resolve` provides a format, a custom `load` hook is required even if only to pass the value to the Node.js default `load` hook.
         *
         * @param specifier The specified URL path of the module to be resolved
         * @param context
         * @param nextResolve The subsequent `resolve` hook in the chain, or the Node.js default `resolve` hook after the last user-supplied resolve hook
         */
        type ResolveHook = (
            specifier: string,
            context: ResolveHookContext,
            nextResolve: (
                specifier: string,
                context?: ResolveHookContext,
            ) => ResolveFnOutput | Promise<ResolveFnOutput>,
        ) => ResolveFnOutput | Promise<ResolveFnOutput>;
        interface LoadHookContext {
            /**
             * Export conditions of the relevant `package.json`
             */
            conditions: string[];
            /**
             * The format optionally supplied by the `resolve` hook chain
             */
            format: ModuleFormat;
            /**
             *  An object whose key-value pairs represent the assertions for the module to import
             */
            importAssertions: ImportAssertions;
        }
        interface LoadFnOutput {
            format: ModuleFormat;
            /**
             * A signal that this hook intends to terminate the chain of `resolve` hooks.
             * @default false
             */
            shortCircuit?: boolean | undefined;
            /**
             * The source for Node.js to evaluate
             */
            source?: ModuleSource;
        }
        /**
         * The `load` hook provides a way to define a custom method of determining how a URL should be interpreted, retrieved, and parsed.
         * It is also in charge of validating the import assertion.
         *
         * @param url The URL/path of the module to be loaded
         * @param context Metadata about the module
         * @param nextLoad The subsequent `load` hook in the chain, or the Node.js default `load` hook after the last user-supplied `load` hook
         */
        type LoadHook = (
            url: string,
            context: LoadHookContext,
            nextLoad: (url: string, context?: LoadHookContext) => LoadFnOutput | Promise<LoadFnOutput>,
        ) => LoadFnOutput | Promise<LoadFnOutput>;
    }
    interface Module extends NodeModule {}
    class Module {
        static runMain(): void;
        static wrap(code: string): string;
        static createRequire(path: string | URL): NodeRequire;
        static builtinModules: string[];
        static isBuiltin(moduleName: string): boolean;
        static Module: typeof Module;
        constructor(id: string, parent?: Module);
    }
    type ImportMetaDOMCompat = typeof globalThis extends { onmessage: any } ? {
            resolve(specifier: string): string;
        }
        : {
            resolve?(specifier: string, parent?: string | URL): Promise<string>;
        };
    global {
        interface ImportMeta extends ImportMetaDOMCompat {
            url: string;
        }
    }
    export = Module;
}
declare module "node:module" {
    import module = require("module");
    export = module;
}
