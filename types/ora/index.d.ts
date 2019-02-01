// Type definitions for ora 3.0
// Project: https://github.com/sindresorhus/ora
// Definitions by: Basarat Ali Syed <https://github.com/basarat>
//                 Christian Rackerseder <https://github.com/screendriver>
//                 BendingBender <https://github.com/BendingBender>
//                 Aleh Zasypkin <https://github.com/azasypkin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

export = ora;

/**
 * Elegant terminal spinner.
 *
 * @param options If a string is provided, it is treated as a shortcut for `options.text`.
 */
declare function ora(options?: ora.Options | string): ora.Ora;

declare namespace ora {
    /**
     * Starts a spinner for a promise. The spinner is stopped with `.succeed()` if the promise fulfills
     * or with `.fail()` if it rejects.
     *
     * @param action
     * @param options If a string is provided, it is treated as a shortcut for `options.text`.
     * @returns The spinner instance.
     */
    function promise(action: PromiseLike<any>, options?: Options | string): Ora;

    interface Ora {
        /**
         * A boolean of whether the instance is currently spinning.
         */
        readonly isSpinning: boolean;

        /**
         * Change the text.
         */
        text: string;

        /**
         * Change the spinner color.
         */
        color: Color;

        /**
         * Start the spinner.
         *
         * @param text Set the current text.
         * @returns The spinner instance.
         */
        start(text?: string): Ora;

        /**
         * Stop and clear the spinner.
         *
         * @returns The spinner instance.
         */
        stop(): Ora;

        /**
         * Stop the spinner, change it to a green `✔` and persist the current text, or `text` if provided.
         *
         * @param text will persist text if provided
         * @returns The spinner instance.
         */
        succeed(text?: string): Ora;

        /**
         * Stop the spinner, change it to a red `✖` and persist the current text, or `text` if provided.
         *
         * @param text will persist text if provided
         * @returns The spinner instance.
         */
        fail(text?: string): Ora;

        /**
         * Stop the spinner, change it to a yellow `⚠` and persist the current text, or `text` if provided.
         *
         * @param text will persist text if provided
         * @returns The spinner instance.
         */
        warn(text?: string): Ora;

        /**
         * Stop the spinner, change it to a blue `ℹ` and persist the current text, or `text` if provided.
         *
         * @param text will persist text if provided
         * @returns The spinner instance.
         */
        info(text?: string): Ora;

        /**
         * Stop the spinner and change the symbol or text.
         *
         * @param options
         * @returns The spinner instance.
         */
        stopAndPersist(options?: PersistOptions): Ora;

        /**
         * Clear the spinner.
         * @returns The spinner instance.
         */
        clear(): Ora;

        /**
         * Manually render a new frame.
         * @returns The spinner instance.
         */
        render(): Ora;

        /**
         * Get a new frame.
         * @returns The spinner instance.
         */
        frame(): Ora;
    }

    interface Options {
        /**
         * Text to display after the spinner.
         */
        text?: string;
        /**
         * Name of one of the provided spinners. See `example.js` in this repo if you want to test out different spinners.
         * On Windows, it will always use the line spinner as the Windows command-line doesn't have proper Unicode support.
         *
         * Or an object like:
         *
         * @example
         * {
         *     interval: 80, // optional
         *     frames: ['-', '+', '-']
         * }
         *
         * @default 'dots'
         */
        spinner?: SpinnerName | Spinner;
        /**
         * Color of the spinner.
         * @default 'cyan'
         */
        color?: Color;
        /**
         * Set to `false` to stop Ora from hiding the cursor.
         * @default true
         */
        hideCursor?: boolean;
        /**
         * Interval between each frame.
         *
         * Spinners provide their own recommended interval, so you don't really need to specify this.
         * @default Provided by the spinner or 100
         */
        interval?: number;
        /**
         * Stream to write the output.
         *
         * You could for example set this to `process.stdout` instead.
         * @default process.stderr
         */
        stream?: NodeJS.WritableStream;
        /**
         * Force enable/disable the spinner. If not specified, the spinner will be enabled
         * if the `stream` is being run inside a TTY context (not spawned or piped) and/or not in a CI environment.
         *
         * Note that `{isEnabled: false}` doesn't mean it won't output anything. It just means it won't output the spinner,
         * colors, and other ansi escape codes. It will still log text.
         */
        isEnabled?: boolean;
    }

    interface PersistOptions {
        /**
         * Symbol to replace the spinner with.
         * @default ' '
         */
        symbol?: string;
        /**
         * Text to be persisted.
         * @default Current text
         */
        text?: string;
    }

    interface Spinner {
        interval?: number;
        frames: string[];
    }

    type SpinnerName =
        | 'dots'
        | 'dots2'
        | 'dots3'
        | 'dots4'
        | 'dots5'
        | 'dots6'
        | 'dots7'
        | 'dots8'
        | 'dots9'
        | 'dots10'
        | 'dots11'
        | 'dots12'
        | 'line'
        | 'line2'
        | 'pipe'
        | 'simpleDots'
        | 'simpleDotsScrolling'
        | 'star'
        | 'star2'
        | 'flip'
        | 'hamburger'
        | 'growVertical'
        | 'growHorizontal'
        | 'balloon'
        | 'balloon2'
        | 'noise'
        | 'bounce'
        | 'boxBounce'
        | 'boxBounce2'
        | 'triangle'
        | 'arc'
        | 'circle'
        | 'squareCorners'
        | 'circleQuarters'
        | 'circleHalves'
        | 'squish'
        | 'toggle'
        | 'toggle2'
        | 'toggle3'
        | 'toggle4'
        | 'toggle5'
        | 'toggle6'
        | 'toggle7'
        | 'toggle8'
        | 'toggle9'
        | 'toggle10'
        | 'toggle11'
        | 'toggle12'
        | 'toggle13'
        | 'arrow'
        | 'arrow2'
        | 'arrow3'
        | 'bouncingBar'
        | 'bouncingBall'
        | 'smiley'
        | 'monkey'
        | 'hearts'
        | 'clock'
        | 'earth'
        | 'moon'
        | 'runner'
        | 'pong'
        | 'shark'
        | 'dqpb'
        | 'weather'
        | 'christmas'
        | 'grenade'
        | 'point'
        | 'layer';

    type Color =
        | 'black'
        | 'red'
        | 'green'
        | 'yellow'
        | 'blue'
        | 'magenta'
        | 'cyan'
        | 'white'
        | 'gray';
}
