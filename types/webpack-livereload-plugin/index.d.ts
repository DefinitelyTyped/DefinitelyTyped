// Type definitions for webpack-livereload-plugin 2.3
// Project: https://github.com/statianzo/webpack-livereload-plugin#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7
import { Plugin, Stats } from 'webpack';
import { ServerOptions } from 'https';
import webpack = require('webpack');

declare class LiveReloadPlugin extends Plugin {
    readonly isRunning: boolean;
    constructor(options?: LiveReloadPlugin.Options);

    apply(compiler: webpack.Compiler): void;

    start(watching: any, cb: () => void): void;
    done(stats: Stats): void;
    failed(): void;
    autoloadJs(): string;
    scriptTag(source: string): string;
    applyCompilation(compilation: webpack.compilation.Compilation): void;
}

declare namespace LiveReloadPlugin {
    interface Options extends Pick<ServerOptions, 'cert' | 'key' | 'pfx'> {
        /**
         * protocol for livereload `<script>` src attribute value
         * @default protocol of the page, either `http` or `https`
         */
        protocol?: string;
        /**
         * The desired port for the livereload server.
         * If you define port 0, an available port will be searched for, starting from 35729.
         * @default 35729
         */
        port?: number;
        /**
         * he desired hostname for the appended `<script>` (if present) to point to
         * @default hostname of the page, like `localhost` or 10.0.2.2
         */
        hostname?: string;
        /**
         * livereload `<script>` automatically to `<head>`.
         * @default false
         */
        appendScriptTag?: boolean;
        /**
         * RegExp of files to ignore. Null value means ignore nothing.
         * It is also possible to define an array and use multiple anymatch patterns
         */
        ignore?: RegExp | RegExp[] | null;
        /**
         * amount of milliseconds by which to delay the live reload (in case build takes longer)
         * @default 0
         */
        delay?: number;
        /**
         * create hash for each file source and only notify livereload if hash has changed
         * @default false
         */
        useSourceHash?: boolean;
    }
}

export = LiveReloadPlugin;
