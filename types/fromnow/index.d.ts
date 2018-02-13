// Type definitions for fromnow v2.0.0
// Project: https://github.com/lukeed/fromNow
// Definitions by: Martin Bukovics <https://github.com/marinewater>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var FromNow: FromNow.FromNowStatic;
export = FromNow;
export as namespace fromNow;

declare namespace FromNow {
    interface FromNowOpts {
        maxChunks?: number,
        useAgo?: boolean,
        useAnd?: boolean
    }
    export interface FromNowStatic {
        /**
         * Get readable time differences from now vs past or future dates.
         * @param {string|Date} date
         * @param {object} [opts]
         * @param {number} [opts.maxChucks=10]
         * @param {boolean} [opts.useAgo=false]
         * @param {boolean} [opts.useAnd=false]
         */
        (date: string|Date, opts?: FromNowOpts): string
    }
}
