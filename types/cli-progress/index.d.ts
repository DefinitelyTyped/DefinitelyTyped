// Type definitions for cli-progress 3.8
// Project: https://github.com/AndiDittrich/Node.CLI-Progress
// Definitions by:  Mohamed Hegazy <https://github.com/mhegazy>
//                  Álvaro Martínez <https://github.com/alvaromartmart>
//                  Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

export interface Params {
    progress: number;
    eta: number;
    startTime: Date;
    total: number;
    value: number;
    maxWidth: number;
}

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
    format?: string | ((options: Options, params: Params, payload: any) => string);

    /** a custom bar formatter function which renders the bar-element (default: format-bar.js) */
    formatBar?: (progress: number, options: Options) => string;

    /** a custom timer formatter function which renders the formatted time elements like eta_formatted and duration-formatted (default: format-time.js) */
    formatTime?: (t: number, options: Options, roundToMultipleOf: number) => string;

    /** a custom value formatter function which renders all other values (default: format-value.js) */
    formatValue?: (v: number, options: Options, type: string) => string;

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

    /**  position of the progress bar - 'left' (default), 'right' or 'center  */
    align?: 'left' | 'right' | 'center';

    /** character to use as "complete" indicator in the bar (default: "=") */
    barCompleteString?: string;

    /** character to use as "incomplete" indicator in the bar (default: "-") */
    barIncompleteString?: string;

    /** character to use as "complete" indicator in the bar (default: "=") */
    barCompleteChar?: string;

    /** character to use as "incomplete" indicator in the bar (default: "-") */
    barIncompleteChar?: string;

    /**
     * hide the cursor during progress operation; restored on complete (default: false)
     * - pass `null` to keep terminal settings
     */
    hideCursor?: boolean | null;

    /** number of updates with which to calculate the eta; higher numbers give a more stable eta (default: 10) */
    etaBuffer?: number;

    /**
     *  trigger an eta calculation update during asynchronous rendering trigger using the current value
     * - should only be used for long running processes in conjunction with lof `fps` values and large `etaBuffer`
     * @default false
     */
    etaAsynchronousUpdate?: boolean;

    /** disable line wrapping (default: false) - pass null to keep terminal settings; pass true to trim the output to terminal width */
    linewrap?: boolean | null;

    /** trigger redraw during update() in case threshold time x2 is exceeded (default: true) - limited to single bar usage */
    synchronousUpdate?: boolean;

    /** enable scheduled output to notty streams - e.g. redirect to files (default: false) */
    noTTYOutput?: boolean;

    /** set the output schedule/interval for notty output in ms (default: 2000ms) */
    notTTYSchedule?: number;

    /** display progress bars with 'total' of zero(0) as empty, not full (default: false) */
    emptyOnZero?: boolean;

    /** trigger redraw on every frame even if progress remains the same; can be useful if progress bar gets overwritten by other concurrent writes to the terminal (default: false) */
    forceRedraw?: boolean;

    /** add padding chars to formatted time and percentage to force fixed width (default: false) */
    autopadding?: boolean;

    /** the character sequence used for autopadding (default: " ") */
    autopaddingChar?: string;
}

export interface Preset {
    barCompleteChar: string;
    barIncompleteChar: string;

    /**
     *   Example: 'progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total}'
     *
     * {bar} - the progress bar, customizable by the options barsize, barCompleteString and barIncompleteString
     *
     * {percentage} - the current progress in percent (0-100)
     *
     * {total} - the end value
     *
     * {value} - the current value set by last update() call
     *
     * {eta} - expected time of accomplishment in seconds
     *
     * {duration} - elapsed time in seconds
     *
     * {eta_formatted} - expected time of accomplishment formatted into appropriate units
     *
     * {duration_formatted} - elapsed time formatted into appropriate units
     *
     */
    format: string;
}

export class SingleBar {
    /** Initialize a new Progress bar. An instance can be used multiple times! it's not required to re-create it! */
    constructor(opt: Options, preset?: Preset);

    calculateETA(): void;
    /** Force eta calculation update (long running processes) without altering the progress values. */
    updateETA(): void;

    formatTime(t: any, roundToMultipleOf: any): any;

    getTotal(): any;

    /** Increases the current progress value by a specified amount (default +1). Update payload optionally */
    increment(step?: number, payload?: object): void;
    increment(payload: object): void;

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
    update(payload: object): void;
}

export class MultiBar {
    constructor(opt: Options, preset?: Preset);

    create(total: number, startValue: number, payload?: any): SingleBar;

    remove(bar: SingleBar): boolean;

    stop(): void;
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

export class Bar extends SingleBar {}
