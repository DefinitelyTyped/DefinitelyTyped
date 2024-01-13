import * as ProgressBar from "progress";
import { Plugin } from "webpack";

export = ProgressBarPlugin;

declare namespace ProgressBarPlugin {
    interface Options extends ProgressBar.ProgressBarOptions {
        /**
         * the format of the progress bar
         * @default ':bar'
         */
        format?: string | undefined;
        /**
         * optional function to call when the progress bar completes
         */
        callback?: (() => void) | undefined;
        /**
         * option to show summary of time taken
         * @default true
         */
        summary?: boolean | undefined;
        /**
         * custom summary message if summary option is false
         */
        summaryContent?: boolean | undefined;
        /**
         * function to display a custom summary
         * (passed build time)
         */
        customSummary?: ((summary: string) => void) | undefined;
    }
}

/**
 * A progress bar plugin for Webpack.
 */
declare class ProgressBarPlugin extends Plugin {
    constructor(options?: ProgressBarPlugin.Options);
}
