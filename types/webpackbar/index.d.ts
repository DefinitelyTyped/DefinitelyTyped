// Type definitions for webpackbar 4.0
// Project: https://github.com/nuxt/webpackbar
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7
/// <reference types="node" />

import { Plugin, ProgressPlugin } from 'webpack';

export = WebpackBar;

/**
 * Elegant ProgressBar and Profiler for Webpack
 */
declare class WebpackBar extends ProgressPlugin {
    constructor(options?: WebpackBar.Options);
    readonly state: WebpackBar.Status;
}

declare namespace WebpackBar {
    /**
     * 'context' is the reference to the plugin
     * You can use 'context.state' to access status
     */
    type ReporterContextFunc = (context: WebpackBar) => void;

    interface Status {
        /** @default null */
        readonly start: [number, number] | null;
        /** @default -1 */
        readonly progress: number;
        /** @default false */
        readonly done: boolean;
        /** @default '' */
        readonly message: string;
        readonly details: string[];
        readonly request: null | {
            readonly file: null | string;
            readonly loaders: string[];
        };
        /** @default false */
        readonly hasErrors: boolean;
        readonly color: string;
        readonly name: string;
    }

    /**
     * If you plan to provide your own reporter,
     * don't forget to setting fancy and basic options to false to prevent conflicts.
     * A reporter should be instance of a class or plain object and functions for special hooks.
     * It is not necessary to implement all functions, webpackbar only calls those that exists
     */
    interface Reporter {
        /**
         * Called when (re)compile is started
         */
        start?: ReporterContextFunc | undefined;
        /**
         * Called when a file changed on watch mode
         */
        change?: ReporterContextFunc | undefined;
        /**
         * Called after each progress update
         */
        update?: ReporterContextFunc | undefined;
        /**
         * Called when compile finished
         */
        done?: ReporterContextFunc | undefined;
        /**
         * Called when build progress updated
         */
        progress?: ReporterContextFunc | undefined;
        /**
         * Called when _all_ compiles finished
         */
        allDone?: ReporterContextFunc | undefined;
        beforeAllDone?: ReporterContextFunc | undefined;
        afterAllDone?: ReporterContextFunc | undefined;
    }

    interface Options {
        /**
         * Display name
         * @default 'webpack'
         */
        name?: string | undefined;
        /**
         * Color output of the progress bar
         * @default 'green'
         */
        color?: string | undefined;

        /**
         * Enable profiler
         * @default false
         */
        profile?: boolean | undefined;
        /**
         * Enable bars reporter
         * Defaults to 'true' when not in CI or testing mod
         * @default true
         */
        fancy?: boolean | undefined;
        /**
         * Enable a simple log reporter (only start and end)
         * Defaults to 'true' when running in minimal environments
         * @default true
         */
        basic?: boolean | undefined;
        /**
         * Register a custom reporter
         * @default null
         */
        reporter?: Reporter | null | undefined;
        /**
         * Register an Array of your custom reporters.
         * @default ['basic'] | ['fancy']
         */
        reporters?: string[] | undefined;
    }
}
