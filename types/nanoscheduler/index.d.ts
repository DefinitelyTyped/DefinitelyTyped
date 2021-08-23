// Type definitions for nanoscheduler 1.0
// Project: https://github.com/choojs/nanoscheduler#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Create a new scheduler instance.
 * The instance is shared as a singleton on window (if available).
 */
declare function createScheduler(): scheduler.NanoScheduler;

declare namespace scheduler {
    /**
     * Schedule work to be completed when the user agent is idle. Weighs 270 bytes compressed.
     */
    abstract class NanoScheduler {
        constructor(hasWindow: boolean);
        /**
         * Push a callback into the scheduler, to be executed when the user agent is idle.
         */
        push(cb: () => void): void;
        schedule(): void;
        setTimeout(cb: () => void): void;
    }
}

export = createScheduler;
