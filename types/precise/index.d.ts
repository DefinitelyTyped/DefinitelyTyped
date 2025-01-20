/**
 * Precise factory
 */
declare function _precise(): _precise.Precise;

declare namespace _precise {
    class Precise {
        constructor();

        /**
         * Starts a timer
         */
        start(): Precise;

        /**
         * Stops a timer
         */
        stop(): Precise;

        /**
         * Returns the nanoseconds from `start()` to `stop()`
         */
        diff(): number;
    }
}

export = _precise;
