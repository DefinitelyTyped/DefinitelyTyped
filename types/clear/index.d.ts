interface ClearOptions {
    /**
     * Setting this to false will prevent this module from clearing the screen.
     * This will not remove anything from the screen, but instead move your cursor
     * to position 0,0. Much like printing a \r instead of a \n to reset the current line of output.
     *
     * @default true
     */
    fullClear?: boolean | undefined;
}

/**
 * Clear the terminal screen if possible.
 */
declare function clear(opts?: ClearOptions): void;
declare function clear(clear: boolean): void;

export = clear;
