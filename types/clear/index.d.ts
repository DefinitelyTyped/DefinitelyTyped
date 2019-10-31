// Type definitions for clear 0.1
// Project: https://github.com/bahamas10/node-clear#readme
// Definitions by: Connor Fitzgerald <https://github.com/connorjayfitzgerald>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

interface ClearOptions {
    /**
     * Setting this to false will prevent this module from clearing the screen.
     * This will not remove anything from the screen, but instead move your cursor
     * to position 0,0. Much like printing a \r instead of a \n to reset the current line of output.
     *
     * @default true
     */
    fullClear?: boolean;
}

/**
 * Clear the terminal screen if possible.
 */
declare function clear(opts?: ClearOptions): void;

export = clear;
