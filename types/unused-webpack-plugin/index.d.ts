import { Compiler, WebpackPluginInstance } from "webpack";

export = UnusedWebpackPlugin;

declare namespace UnusedWebpackPlugin {
    interface UnusedWebpackPluginOptions {
        /**
         * Array of directories where to look for unused source files.
         *
         * @default []
         */
        directories?: string[] | undefined;

        /**
         * Array of exclude patterns when looking for unused source files.
         *
         * @default []
         */
        exclude?: string[] | undefined;

        /**
         * Root directory that will be use to display relative paths instead of absolute ones.
         */
        root?: string | undefined;

        /**
         * Whether or not the build should fail if unused files are found.
         *
         * @default false
         */
        failOnUnused?: boolean | undefined;

        /**
         * Whether or not to respect .gitignore file.
         *
         * @default true
         */
        useGitIgnore?: boolean | undefined;
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
