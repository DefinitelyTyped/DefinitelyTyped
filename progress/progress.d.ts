// Type definitions for node-progress v1.1.8
// Project: https://github.com/tj/node-progress
// Definitions by: Sebastian Lenz <https://github.com/sebastian-lenz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>


declare module "progress"
{
    /**
     * These are keys in the options object you can pass to the progress bar along with total as seen in the example above.
     */
    interface ProgressBarOptions
    {
        /**
         * Total number of ticks to complete.
         */
        total:number;

        /**
         * The displayed width of the progress bar defaulting to total.
         */
        width?:number;

        /**
         * The output stream defaulting to stderr.
         */
        stream?:NodeJS.WritableStream;

        /**
         * Completion character defaulting to "=".
         */
        complete?:string;

        /**
         * Incomplete character defaulting to "-".
         */
        incomplete?:string;

        /**
         * Option to clear the bar on completion defaulting to false.
         */
        clear?:boolean;

        /**
         * Optional function to call when the progress bar completes.
         */
        callback?:Function;
    }


    /**
     * Flexible ascii progress bar.
     */
    class ProgressBar
    {
        /**
         * Initialize a `ProgressBar` with the given `fmt` string and `options` or
         * `total`.
         *
         * Options:
         *   - `total` total number of ticks to complete
         *   - `width` the displayed width of the progress bar defaulting to total
         *   - `stream` the output stream defaulting to stderr
         *   - `complete` completion character defaulting to "="
         *   - `incomplete` incomplete character defaulting to "-"
         *   - `renderThrottle` minimum time between updates in milliseconds defaulting to 16
         *   - `callback` optional function to call when the progress bar completes
         *   - `clear` will clear the progress bar upon termination
         *
         * Tokens:
         *   - `:bar` the progress bar itself
         *   - `:current` current tick number
         *   - `:total` total ticks
         *   - `:elapsed` time elapsed in seconds
         *   - `:percent` completion percentage
         *   - `:eta` eta in seconds
         */
        constructor(format:string, total:number);
        constructor(format:string, options:ProgressBarOptions);


        /**
         * "tick" the progress bar with optional `len` and optional `tokens`.
         */
        tick(tokens?:any):void;
        tick(count?:number, tokens?:any):void;


        /**
         * Method to render the progress bar with optional `tokens` to place in the
         * progress bar's `fmt` field.
         */
        render(tokens?:any):void;


        /**
         * "update" the progress bar to represent an exact percentage.
         * The ratio (between 0 and 1) specified will be multiplied by `total` and
         * floored, representing the closest available "tick." For example, if a
         * progress bar has a length of 3 and `update(0.5)` is called, the progress
         * will be set to 1.
         *
         * A ratio of 0.5 will attempt to set the progress to halfway.
         *
         * @param ratio The ratio (between 0 and 1 inclusive) to set the
         *   overall completion to.
         */
        update(ratio:number, tokens?:any):void;


        /**
         * Terminates a progress bar.
         */
        terminate():void;
    }


    export = ProgressBar;
}
