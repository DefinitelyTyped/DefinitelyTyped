// Type definitions for unused-webpack-plugin 2.4
// Project: https://github.com/MatthieuLemoine/unused-webpack-plugin#readme
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { WebpackPluginInstance, Compiler } from 'webpack';

export = UnusedWebpackPlugin;

declare namespace UnusedWebpackPlugin {
    interface UnusedWebpackPluginOptions {
        /**
         * Array of directories where to look for unused source files.
         *
         * @default []
         */
        directories?: string[];

        /**
         * Array of exclude patterns when looking for unused source files.
         *
         * @default []
         */
        exclude?: string[];

        /**
         * Root directory that will be use to display relative paths instead of absolute ones.
         */
        root?: string;

        /**
         * Whether or not the build should fail if unused files are found.
         *
         * @default false
         */
        failOnUnused?: boolean;

        /**
         * Whether or not to respect .gitignore file.
         *
         * @default true
         */
        useGitIgnore?: boolean;
    }
}

/**
 * A webpack plugin to find unused modules/source files.
 *
 * @link https://github.com/MatthieuLemoine/unused-webpack-plugin
 */
declare class UnusedWebpackPlugin implements WebpackPluginInstance {
    constructor(options: UnusedWebpackPlugin.UnusedWebpackPluginOptions);
    apply(compiler: Compiler): void;
}
