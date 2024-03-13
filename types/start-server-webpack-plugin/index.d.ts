import { Compiler, Plugin } from "webpack";

export = StartServerWebpackPlugin;

declare class StartServerWebpackPlugin extends Plugin {
    constructor(options?: string | StartServerWebpackPlugin.Options);
}

declare namespace StartServerWebpackPlugin {
    interface Options {
        /**
         * Name of the server to start (built asset from webpack).
         * If not provided, the plugin will tell you the available names.
         */
        name?: string | undefined;
        /**
         * Arguments for node.
         * Default: `[]`.
         */
        nodeArgs?: string[] | undefined;
        /**
         * Arguments for the script.
         * Default: `[]`.
         */
        args?: string[] | undefined;
        /**
         * Signal to send for HMR.
         * Default: 'false'.
         */
        signal?: false | true | "SIGUSR2" | undefined;
        /**
         * Allow typing 'rs' to restart the server.
         * Default: 'true' if in 'development' mode, 'false' otherwise.
         */
        keyboard?: boolean | undefined;
    }
}
