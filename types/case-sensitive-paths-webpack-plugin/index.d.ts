import { Compiler, Plugin } from "webpack";

export = CaseSensitivePathsWebpackPlugin;

declare class CaseSensitivePathsWebpackPlugin extends Plugin {
    constructor(options?: CaseSensitivePathsWebpackPlugin.Options);

    apply(compiler: Compiler): void;
}

declare namespace CaseSensitivePathsWebpackPlugin {
    interface Options {
        /**
         * Show more information
         */
        debug?: boolean | undefined;
        /**
         * Run before emit instead of after resolve for individual files
         */
        useBeforeEmitHook?: boolean | undefined;
    }
}
