// Type definitions for webpack-merge
// Project: https://github.com/survivejs/webpack-merge
// Definitions by: Simon Hartcher <https://github.com/deevus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="webpack" />

declare module "webpack-merge" {
    import {Configuration} from "webpack";

    interface WebpackMerge {
        /**
         * Merge multiple webpack configurations into one.
         */
        (...configs: Configuration[]): Configuration;

        /**
         * Merge multiple webpack configurations into one, with smart merging of loaders.
         */
        smart(...configs: Configuration[]): Configuration;
    }

    const merge: WebpackMerge;
    export = merge;
}
