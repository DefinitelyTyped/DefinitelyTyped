import { Plugin } from "webpack";

declare class WebpackShellPlugin extends Plugin {
    constructor(options?: WebpackShellPlugin.Options);
}

declare namespace WebpackShellPlugin {
    interface Options {
        /**
         * scripts to execute on the initial build
         * @default []
         */
        onBuildStart?: string[] | undefined;
        /**
         * scripts to execute after files are emitted at the end of the compilation
         * @default []
         */
        onBuildEnd?: string[] | undefined;
        /**
         * scripts to execute after webpack process is complete
         * @default []
         */
        onBuildExit?: string[] | undefined;
        /**
         * Switch for development environments.
         * This causes scripts to execute once.
         * Useful for running HMR on webpack-dev-server or webpack watch mode.
         * @default true
         */
        dev?: boolean | undefined;
        /**
         * Switches script execution process from spawn to exec.
         * If running into problems with spawn, turn this setting on.
         * @default false
         */
        safe?: boolean | undefined;
        /**
         * Enable for verbose output
         * @deprecated
         * @default false
         */
        verbose?: boolean | undefined;
    }
}

export = WebpackShellPlugin;
