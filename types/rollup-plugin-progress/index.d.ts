import { Plugin } from "rollup";

declare namespace PluginProgress {
    interface PluginProgressOptions {
        /** @default true */
        clearLine?: boolean | undefined;
    }
}

declare function PluginProgress(options?: PluginProgress.PluginProgressOptions): Plugin;

export = PluginProgress;
