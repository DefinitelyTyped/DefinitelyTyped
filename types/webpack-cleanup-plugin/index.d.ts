import { Plugin } from "webpack";
export = WebpackCleanupPlugin;

declare class WebpackCleanupPlugin extends Plugin {
    constructor(options?: WebpackCleanupPlugin.Options);
}

declare namespace WebpackCleanupPlugin {
    interface Options {
        /**
         * Keep some files in the output path. It accepts globbing as in [minimatch](https://github.com/isaacs/minimatch).
         */
        exclude?: string[] | undefined;

        /**
         * Print the list of the files that will be deleted without actually deleting them.
         */
        preview?: boolean | undefined;

        /**
         * Mute the console output.
         */
        quiet?: boolean | undefined;
    }
}
