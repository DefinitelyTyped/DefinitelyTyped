// Type definitions for fromnow v3.0.0
// Project: https://github.com/lukeed/fromNow
// Definitions by: Martin Bukovics <https://github.com/marinewater>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var FromNow: FromNow.FromNowStatic;
export = FromNow;
export as namespace fromNow;

declare namespace FromNow {
    interface FromNowOpts {
        max?: number,
        suffix?: boolean,
        zero?: boolean,
        and?: boolean
    }
    export interface FromNowStatic {
        /**
         * Get readable time differences from now vs past or future dates.
         * @param {string|Date} date
         * @param {object} [opts]
         * @param {number} [opts.max=Infinity]
         * @param {boolean} [opts.suffix=false]
         * @param {boolean} [opts.zero=false]
         * @param {boolean} [opts.and=false]
         */
        (date: string|Date, opts?: FromNowOpts): string
    }
}
