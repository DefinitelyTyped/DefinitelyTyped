// Type definitions for dts-generator 2.1
// Project: https://github.com/SitePen/dts-generator#readme
// Definitions by: Matt Traynham <https://github.com/mtraynham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import ts = require('typescript');
import Bluebird = require('bluebird');

export = dtsGenerator;

declare function dtsGenerator(options: dtsGenerator.DtsGeneratorOptions): Bluebird<void>;

declare namespace dtsGenerator {
    interface ResolveModuleIdParams {
        /** The identifier of the module being declared in the generated d.ts */
        currentModuleId: string;
    }

    interface ResolveModuleImportParams {
        /** The identifier of the module currently being imported in the generated d.ts */
        importedModuleId: string;

        /** The identifier of the enclosing module currently being declared in the generated d.ts */
        currentModuleId: string;

        /** True if the imported module id is declared as a module in the input files. */
        isDeclaredExternalModule: boolean;
    }

    interface DtsGeneratorOptions {
        /**
         * The base directory for the package being bundled. Any dependencies discovered outside this directory will be excluded
         * from the bundle.
         * Note this is no longer the preferred way to configure dts-generator, please see project.
         */
        baseDir?: string | undefined;
        /**
         * The base directory for the project being bundled. It is assumed that this directory contains a
         * tsconfig.json which will be parsed to determine the files that should be bundled as well as
         * other configuration information like target
         */
        project?: string | undefined;
        /** A list of files from the baseDir to bundle. */
        files?: string[] | undefined;
        /**
         * A list of glob patterns, relative to baseDir, that should be excluded from the bundle.
         * Use the --exclude flag one or more times on the command-line. Defaults to [ "node_modules\/**\/*.d.ts" ].
         */
        exclude?: string[] | undefined;
        /**
         * A list of external module reference paths that should be inserted as reference comments.
         * Use the --extern flag one or more times on the command-line.
         */
        externs?: string[] | undefined;
        /**
         * A list of external @types package dependencies that should be inserted as reference comments.
         * Use the --types flag one or more times on the command-line.
         */
        types?: string[] | undefined;
        /** The end-of-line character that should be used when outputting code. Defaults to os.EOL. */
        eol?: string | undefined;

        includes?: string[] | undefined;
        /** The character(s) that should be used to indent the declarations in the output. Defaults to \t. */
        indent?: string | undefined;
        /** The module ID that should be used as the exported value of the package’s “main” module. */
        main?: string | undefined;
        /** The type of module resolution to use when generating the bundle. */
        moduleResolution?: ts.ModuleResolutionKind | undefined;
        /** The name of the package. Used to determine the correct exported package name for modules. */
        name: string;
        /** The filename where the generated bundle will be created. */
        out: string;

        outDir?: string | undefined;

        prefix?: string | undefined;

        rootDir?: string | undefined;
        /** The target environment for generated code. Defaults to ts.ScriptTarget.Latest. */
        target?: ts.ScriptTarget | undefined;

        sendMessage?: ((message: any, ...optionalParams: any[]) => void) | undefined;
        /**
         * An optional callback provided by the invoker to customize the declared module ids the output d.ts files.
         * @see {@link https://github.com/SitePen/dts-generator/blob/master/docs/resolving-module-ids.md Resolving Module Ids}
         */
        resolveModuleId?(params: ResolveModuleIdParams): string;
        /**
         * An optional callback provided by the invoker to customize the imported module ids in the output d.ts files.
         * @see {@link https://github.com/SitePen/dts-generator/blob/master/docs/resolving-module-ids.md Resolving Module Ids}
         */
        resolveModuleImport?(params: ResolveModuleImportParams): string;

        verbose?: boolean | undefined;
    }
}
