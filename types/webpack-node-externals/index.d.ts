// Type definitions for webpack-node-externals 1.7
// Project: https://github.com/liady/webpack-node-externals
// Definitions by: Matt Traynham <https://github.com/mtraynham>
//                 Manuel Pogge <https://github.com/MrSpoocy>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ExternalsFunctionElement } from 'webpack';

export = webpackNodeExternals;

declare function webpackNodeExternals(options?: webpackNodeExternals.Options): ExternalsFunctionElement;

declare namespace webpackNodeExternals {
    type WhitelistOption = string | RegExp | WhitelistFunctionType;
    type ImportTypeCallback = (moduleName: string) => string;
    /** a function that accepts the module name and returns whether it should be included */
    type WhitelistFunctionType = (moduleName: string) => boolean;
    interface ModulesFromFileType {
        exclude?: string | string[];
        include?: string | string[];
    }

    interface Options {
        /**
         * An array for the externals to whitelist, so they will be included in the bundle.
         * Can accept exact strings ('module_name'), regex patterns (/^module_name/), or a
         * function that accepts the module name and returns whether it should be included.
         * Important - if you have set aliases in your webpack config with the exact
         * same names as modules in node_modules, you need to whitelist them so Webpack will know
         * they should be bundled.
         * @default []
         */
        whitelist?: WhitelistOption[] | WhitelistOption;
        /**
         * @default ['.bin']
         */
        binaryDirs?: string[];
        /**
         * The method in which unbundled modules will be required in the code. Best to leave as
         * 'commonjs' for node modules.
         * @default 'commonjs'
         */
        importType?: 'var' | 'this' | 'commonjs' | 'amd' | 'umd' | ImportTypeCallback;
        /**
         * The folder in which to search for the node modules.
         * @default 'node_modules'
         */
        modulesDir?: string;
        /**
         * Read the modules from the package.json file instead of the node_modules folder.
         * @default false
         */
        modulesFromFile?: boolean | ModulesFromFileType;
        /**
         * @default false
         */
        includeAbsolutePaths?: boolean;
    }
}
