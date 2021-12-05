/**
 * Docs: https://github.com/suryapratapsinghsuryavanshi/solverjs/blob/main/src/time/time.js
 */
declare namespace SolverJS {
    interface Static {
        /**
         * nanosecond to micorsecond.
         */
        nsToUs(ns: number): number;

        /**
         * nanosecond to milisecond.
         */
        nsToMs(ns: number): number;

        /**
         * nanosecond to second.
         */
        nsToSc(ns: number): number;

        /**
         * nanosecond to minute.
         */
        nsToMi(ns: number): number;

        /**
         * nanosecond to hour.
         */
        nsToHr(ns: number): number;

        /**
         * nanosecond to day.
         */
        nsToDd(ns: number): number;

        /**
         * nanosecond to week.
         */
        nsToWk(ns: number): number;

        /**
         * nanosecond to month.
         */
        nsToMm(ns: number): number;

        /**
         * nanosecond to year.
         */
        nsToYy(ns: number): number;
    }
}
