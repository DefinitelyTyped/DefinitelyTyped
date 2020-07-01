// Type definitions for clui 0.3
// Project: https://github.com/nathanpeck/clui#readme
// Definitions by: Farzad Majidfayyaz <https://github.com/farzadmf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as clc from 'cli-color';

export interface LineBufferOptions {
    x?: number;
    y?: number;
    width?: number | 'console';
    height?: number | 'console';
    scroll?: number;
}

export class LineBuffer {
    /**
     * Creates an object for buffering a group of text lines and then outputting them
     * @param options Values to build the buffer
     */
    constructor(options: LineBufferOptions);

    /**
     * Return the height of the `LineBuffer`, when specified as `console`
     */
    height(): number;

    /**
     * Return the width of the `LineBuffer`, when specified as `console`
     */
    width(): number;

    /**
     * Put a `Line` object into the `LineBuffer`
     * @param line The line object to put into the buffer
     */
    addLine(line: Line): void;

    /**
     * If you don't have enough lines in the buffer, this will fill the reset of
     * the lines with empty spaces
     */
    fill(): void;

    /**
     * Draw the `LineBuffer` to screen
     */
    output(): void;
}

/**
 * This chainable object can be used to generate a line of text with columns, padding, and fill
 */
export class Line {
    /**
     * Create a new instance of Line object
     * @param buffer Object to be used as buffer
     */
    constructor(buffer?: LineBuffer);

    /**
     * Output `width` characters of blank space
     * @param width Number of characters to print
     */
    padding(width: number): Line;

    /**
     * Output text within a column of the specified width
     * @param text Text to print
     * @param width Width of the column
     * @param styles List of `cli-color` styles to apply
     */
    column(text: string, width: number, styles?: clc.Format[]): Line;

    /**
     * At the end of a line, fill the rest of the columns to the right edge
     */
    fill(): Line;

    /**
     * Print the generated line of text to the console
     */
    output(): Line;

    /**
     * Return the contents of this line as a string
     */
    contents(): string;

    /**
     * Store this line into the buffer
     */
    store(): void;
}

/**
 * Creates a basic horizontal gauge to the screen
 * @param value The current value of the metric being displayed by this gauge
 * @param maxValue The highest possible value of the metric being displayed
 * @param guageWidth  How many columns widt to draw the gauge
 * @param dangerZone The point after which the value will be drawn in red because it's too high
 * @param suffix A value to output after the gauge itself
 */
export function Gauge(
    value: number,
    maxValue: number,
    guageWidth: number,
    dangerZone: number,
    suffix: string,
): string;

/**
 * A simple command line sparkline that draws a series of values, and highlights the peak for the period
 * @param values An array of values to go into the sparkline
 * @param suffix A suffix to use when drawing the current and max values at the end of the sparkline
 */
export function Sparkline(values: number[], suffix: string): string;

export class Progress {
    /**
     * Creates a progress bar
     * @param length The desired length of the progress bar in characters
     */
    constructor(length: number);

    /**
     * Returns the progress bar min/max context to write to stdout
     * @param currentValueOrPercent Current value (or percent) of the progress bar
     * @param maxValue Maximum value of the progress bar
     */
    update(currentValueOrPercent: number, maxValue?: number): string;
}

export class Spinner {
    /**
     * Creates a new spinner
     * @param statusText The default text to display while the spinner is spinning
     * @param style Array of graphical characters used to draw the spinner
     */
    constructor(statusText: string, style?: string[]);

    /**
     * Show the spinner on the screen
     */
    start(): void;

    /**
     * Update the status message that follows the spinner
     * @param statusMessage Message to be displayed
     */
    message(statusMessage: string): void;

    /**
     * Erase the spinner from the screen
     */
    stop(): void;
}
