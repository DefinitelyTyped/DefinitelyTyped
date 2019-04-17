import _ = require("../index");
declare module "../index" {
    // now

    interface Stat {
        /**
         * Gets the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).
         *
         * @return The number of milliseconds.
         */
        now(): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.now
         */
        now(): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.now
         */
        now(): Exp<number>;
    }
}
