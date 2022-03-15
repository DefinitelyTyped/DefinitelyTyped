// Type definitions for webpack-node-externals 2.5
// Project: https://github.com/liady/webpack-node-externals
// Definitions by: Matt Traynham <https://github.com/mtraynham>
//                 Manuel Pogge <https://github.com/MrSpoocy>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/// <reference types="node" />
import { ExternalsPlugin } from 'webpack';

export = webpackNodeExternals;

type GetArrayInnerType<T> = T extends Array<infer U> ? U : never;
/** The webpack types don't export this so we have to derive it. */
type ExternalItem = GetArrayInnerType<ExternalsPlugin['externals']>;

declare function webpackNodeExternals(options?: webpackNodeExternals.Options): ExternalItem;

declare namespace webpackNodeExternals {
    type AllowlistOption = string | RegExp | AllowlistFunctionType;
    type ImportTypeCallback = (moduleName: string) => string;
    /** a function that accepts the module name and returns whether it should be included */
    type AllowlistFunctionType = (moduleName: string) => boolean;
    interface ModulesFromFileType {
        exclude?: string | string[] | undefined;
        include?: string | string[] | undefined;
    }

    interface Options {
        /**
         * An array for the externals to allow, so they will be included in the bundle.
         * Can accept exact strings ('module_name'), regex patterns (/^module_name/), or a
         * function that accepts the module name and returns whether it should be included.
         * Important - if you have set aliases in your webpack config with the exact
         * same names as modules in node_modules, you need to allowlist them so Webpack will know
         * they should be bundled.
         * @default []
         */
        allowlist?: AllowlistOption[] | AllowlistOption | undefined;
        /**
         * @default ['.bin']
         */
        binaryDirs?: string[] | undefined;
        /**
         * The method in which unbundled modules will be required in the code. Best to leave as
         * 'commonjs' for node modules.
         * @default 'commonjs'
         */
        importType?: 'var' | 'this' | 'commonjs' | 'amd' | 'umd' | ImportTypeCallback | undefined;
        /**
         * The folder in which to search for the node modules.
         * @default 'node_modules'
         */
        modulesDir?: string | undefined;
        /**
         * Additional folders to look for node modules.
         */
        additionalModuleDirs?: string[] | undefined;
        /**
         * Read the modules from the package.json file instead of the node_modules folder.
         * @default false
         */
        modulesFromFile?: boolean | ModulesFromFileType | undefined;
        /**
         * @default false
         */
        includeAbsolutePaths?: boolean | undefined;
    }
}
