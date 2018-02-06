import _ = require("../index");

declare namespace Lodash {
    interface Debounce {
        /**
         * Specify invoking on the leading edge of the timeout.
         */
        (): Debounce;
        /**
         * Specify invoking on the leading edge of the timeout.
         */
        (wait: number): Debounce1x1;
        /**
         * Specify invoking on the leading edge of the timeout.
         */
        <T extends (...args: any[]) => any>(wait: number, func: T): T & _.Cancelable;
    }
    interface Debounce1x1 {
        /**
         * Specify invoking on the leading edge of the timeout.
         */
        (): Debounce1x1;
        /**
         * Specify invoking on the leading edge of the timeout.
         */
        <T extends (...args: any[]) => any>(func: T): T & _.Cancelable;
    }
}

declare const debounce: Lodash.Debounce;
export = debounce;
