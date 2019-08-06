// Type definitions for cli-progress 1.8
// Project: https://github.com/AndiDittrich/Node.CLI-Progress
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

export interface Options {
    /**
     * progress bar output format.
     * The progressbar can be customized by using the following build-in placeholders. They can be combined in any order.
     *   {bar} - the progress bar, customizable by the options barsize, barCompleteString and barIncompleteString
     *   {percentage} - the current progress in percent (0-100)
     *   {total} - the end value
     *   {value} - the current value set by last update() call
     *   {eta} - expected time of accomplishment in seconds
     *   {duration} - elapsed time in seconds
     *   {eta_formatted} - expected time of accomplishment formatted into appropriate units
     *   {duration_formatted} - elapsed time formatted into appropriate units
     *
     * Example:
     *      progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total}
     *    is rendered as
     *      progress [========================================] 100% | ETA: 0s | 200/200
     */
    format?: string;

    /** the maximum update rate (default: 10) */
    fps?: number;

    /** output stream to use (default: process.stderr) */
    stream?: NodeJS.WritableStream;

    /**  automatically call stop() when the value reaches the total (default: false) */
    stopOnComplete?: boolean;

    /** clear the progress bar on complete / stop() call (default: false) */
    clearOnComplete?: boolean;

    /** the length of the progress bar in chars (default: 40) */
    barsize?: number;

    /** character to use as "complete" indicator in the bar (default: "=") */
    barCompleteString?: string;

    /** character to use as "incomplete" indicator in the bar (default: "-") */
    barIncompleteString?: string;

    /** character to use as "complete" indicator in the bar (default: "=") */
    barCompleteChar?: string;

    /** character to use as "incomplete" indicator in the bar (default: "-") */
    barIncompleteChar?: string;

    /** hide the cursor during progress operation; restored on complete (default: false) */
    hideCursor?: boolean;

    /** number of updates with which to calculate the eta; higher numbers give a more stable eta (default: 10) */
    etaBuffer?: number;

    /** disable line wrapping (default: false) - pass null to keep terminal settings; pass true to trim the output to terminal width */
    linewrap?: boolean | null;
}

export interface Preset {
    barCompleteChar: string;
    barIncompleteChar: string;
    format: string;
}

export class Bar {
    /** Initialize a new Progress bar. An instance can be used multiple times! it's not required to re-create it! */
    constructor(opt: Options, preset?: Preset);

    calculateETA(): void;

    formatTime(t: any, roundToMultipleOf: any): any;

    getTotal(): any;

    /** Increases the current progress value by a specified amount (default +1). Update payload optionally */
    increment(step: number, payload?: object): void;

    render(): void;

    /** Sets the total progress value while progressbar is active. Especially useful handling dynamic tasks. */
    setTotal(total: number): void;

    /** Starts the progress bar and set the total and initial value */
    start(total: number, startValue: number, payload?: object): void;

    /** Stops the progress bar and go to next line */
    stop(): void;

    stopTimer(): void;

    /** Sets the current progress value and optionally the payload with values of custom tokens as a second parameter */
    update(current: number, payload?: object): void;
}

export const Presets: {
    /** Styles as of cli-progress v1.3.0 */
    legacy: Preset;

    /** Unicode Rectangles */
    rect: Preset;

    /** Unicode background shades are used for the bar */
    shades_classic: Preset;

    /** Unicode background shades with grey bar */
    shades_grey: Preset;
};
