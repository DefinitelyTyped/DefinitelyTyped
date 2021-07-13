declare module 'module' {
    import { URL } from 'node:url';
    namespace Module {
        /**
         * Updates all the live bindings for builtin ES Modules to match the properties of the CommonJS exports.
         * It does not add or remove exported names from the ES Modules.
         */
        function syncBuiltinESMExports(): void;

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

        class SourceMap {
            readonly payload: SourceMapPayload;
            constructor(payload: SourceMapPayload);
            findEntry(line: number, column: number): SourceMapping;
        }
    }
    interface Module extends NodeModule {}
    class Module {
        static runMain(): void;
        static wrap(code: string): string;

        static createRequire(path: string | URL): NodeRequire;
        static builtinModules: string[];

        static Module: typeof Module;

        constructor(id: string, parent?: Module);
    }

    global {
        interface ImportMeta {
            url: string;
            /**
             * @experimental
             * This feature is only available with the `--experimental-import-meta-resolve`
             * command flag enabled.
             *
             * Provides a module-relative resolution function scoped to each module, returning
             * the URL string.
             *
             * @param specified The module specifier to resolve relative to `parent`.
             * @param parent The absolute parent module URL to resolve from. If none
             * is specified, the value of `import.meta.url` is used as the default.
             */
            resolve?(specified: string, parent?: string | URL): Promise<string>;
        }
    }

    export = Module;
}

declare module 'node:module' {
    import module = require('module');
    export = module;
}
