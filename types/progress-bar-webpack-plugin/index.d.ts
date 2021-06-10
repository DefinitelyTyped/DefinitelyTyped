// Type definitions for progress-bar-webpack-plugin 2.1
// Project: https://github.com/clessg/progress-bar-webpack-plugin#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import * as ProgressBar from 'progress';
import { Plugin } from 'webpack';

export = ProgressBarPlugin;

declare namespace ProgressBarPlugin {
    interface Options extends ProgressBar.ProgressBarOptions {
        /**
         * the format of the progress bar
         * @default ':bar'
         */
        format?: string;
        /**
         * optional function to call when the progress bar completes
         */
        callback?: () => void;
        /**
         * option to show summary of time taken
         * @default true
         */
        summary?: boolean;
        /**
         * custom summary message if summary option is false
         */
        summaryContent?: boolean;
        /**
         * function to display a custom summary
         * (passed build time)
         */
        customSummary?: (summary: string) => void;
    }
}

/**
 * A progress bar plugin for Webpack.
 */
declare class ProgressBarPlugin extends Plugin {
    constructor(options?: ProgressBarPlugin.Options);
}
