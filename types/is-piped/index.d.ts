// Type definitions for is-piped 0.1
// Project: https://github.com/Qix-/node-is-piped
// Definitions by: BendingBender <https://github.com/bendingbender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = isPiped;

declare const isPiped: isPiped;

interface isPiped {
    /**
     * Determines if an inbound file descriptor is piped or not, across platforms.
     *
     * @example
     * import * as isPiped from 'is-piped';
     *
     * console.log(isPiped.in(0));
     *
     * // {
     * //     piped: false,
     * //     confident: false
     * // }
     */
    in: (fd: number) => isPiped.IsPipedResult;
    /**
     * Determines if an outbound file descriptor is piped or not, across platforms.
     *
     * @example
     * import * as isPiped from 'is-piped';
     *
     * console.log(isPiped.out(1));
     *
     * // {
     * //     piped: false,
     * //     confident: false
     * // }
     */
    out: (fd: number) => isPiped.IsPipedResult;
}

declare namespace isPiped {
    interface IsPipedResult {
        /**
         * Whether or not it's a pipe.
         */
        piped: boolean;
        /**
         * Whether or not we're absolutely sure of that.
         */
        confident: boolean;
    }
}
