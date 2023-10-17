import { Plugin } from "webpack";

export = ExtraWatchWebpackPlugin;

declare class ExtraWatchWebpackPlugin extends Plugin {
    static defaults: {
        cwd: string;
        files: string[];
        dirs: string[];
    };
    constructor(options?: ExtraWatchWebpackPlugin.Options);
}

declare namespace ExtraWatchWebpackPlugin {
    interface Options {
        /**
         * (absolute path or glob pattern), attach extra files to webpack's watch system
         * @default []
         */
        files?: string | ReadonlyArray<string> | undefined;
        /**
         * attach extra dirs to webpack's watch system
         * @default []
         */
        dirs?: string | ReadonlyArray<string> | undefined;
    }
}
