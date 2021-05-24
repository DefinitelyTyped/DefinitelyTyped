// Type definitions for webpack-shell-plugin 0.5
// Project: https://github.com/1337programming/webpack-shell-plugin
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

import { Plugin } from 'webpack';

declare class WebpackShellPlugin extends Plugin {
    constructor(options?: WebpackShellPlugin.Options);
}

declare namespace WebpackShellPlugin {
    interface Options {
        /**
         * scripts to execute on the initial build
         * @default []
         */
        onBuildStart?: string[];
        /**
         * scripts to execute after files are emitted at the end of the compilation
         * @default []
         */
        onBuildEnd?: string[];
        /**
         * scripts to execute after webpack process is complete
         * @default []
         */
        onBuildExit?: string[];
        /**
         * Switch for development environments.
         * This causes scripts to execute once.
         * Useful for running HMR on webpack-dev-server or webpack watch mode.
         * @default true
         */
        dev?: boolean;
        /**
         * Switches script execution process from spawn to exec.
         * If running into problems with spawn, turn this setting on.
         * @default false
         */
        safe?: boolean;
        /**
         * Enable for verbose output
         * @deprecated
         * @default false
         */
        verbose?: boolean;
    }
}

export = WebpackShellPlugin;
