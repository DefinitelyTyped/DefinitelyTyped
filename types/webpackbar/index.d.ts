// Type definitions for webpackbar 4.0
// Project: https://github.com/nuxt/webpackbar
// Definitions by: Ryan Clark <https://github.com/rynclark>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
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
        start?: ReporterContextFunc;
        /**
         * Called when a file changed on watch mode
         */
        change?: ReporterContextFunc;
        /**
         * Called after each progress update
         */
        update?: ReporterContextFunc;
        /**
         * Called when compile finished
         */
        done?: ReporterContextFunc;
        /**
         * Called when build progress updated
         */
        progress?: ReporterContextFunc;
        /**
         * Called when _all_ compiles finished
         */
        allDone?: ReporterContextFunc;
        beforeAllDone?: ReporterContextFunc;
        afterAllDone?: ReporterContextFunc;
    }

    interface Options {
        /**
         * Display name
         * @default 'webpack'
         */
        name?: string;
        /**
         * Color output of the progress bar
         * @default 'green'
         */
        color?: string;

        /**
         * Enable profiler
         * @default false
         */
        profile?: boolean;
        /**
         * Enable bars reporter
         * Defaults to 'true' when not in CI or testing mod
         * @default true
         */
        fancy?: boolean;
        /**
         * Enable a simple log reporter (only start and end)
         * Defaults to 'true' when running in minimal environments
         * @default true
         */
        basic?: boolean;
        /**
         * Register a custom reporter
         * @default null
         */
        reporter?: Reporter | null;
        /**
         * Register an Array of your custom reporters.
         * @default ['basic'] | ['fancy']
         */
        reporters?: string[];
    }
}
