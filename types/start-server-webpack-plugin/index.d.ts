// Type definitions for start-server-webpack-plugin 2.2
// Project: https://github.com/ericclemmons/start-server-webpack-plugin
// Definitions by: AGenson <https://github.com/AGenson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin, Compiler } from 'webpack';

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
        name?: string;
        /**
         * Arguments for node.
         * Default: `[]`.
         */
        nodeArgs?: string[];
        /**
         * Arguments for the script.
         * Default: `[]`.
         */
        args?: string[];
        /**
         * Signal to send for HMR.
         * Default: 'false'.
         */
        signal?: false | true | 'SIGUSR2';
        /**
         * Allow typing 'rs' to restart the server.
         * Default: 'true' if in 'development' mode, 'false' otherwise.
         */
        keyboard?: boolean;
    }
}
