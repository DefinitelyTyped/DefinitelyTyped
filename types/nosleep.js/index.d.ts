// Type definitions for nosleep.js 0.9
// Project: https://github.com/richtr/NoSleep.js
// Definitions by: JoshuaKGoldberg <https://github.com/JoshuaKGoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class NoSleep {
    /**
     * Disables wake lock at some point in the future.
     *
     * @remarks
     * This does not need to be wrapped in any user input.
     */
    disable(): void;

    /**
     * Enables wake lock.
     *
     * @remarks
     * This function call must be wrapped in a user input event handler:
     * e.g. a mouse or touch handler.
     */
    enable(): void;
}

export as namespace NoSleep;
export = NoSleep;
