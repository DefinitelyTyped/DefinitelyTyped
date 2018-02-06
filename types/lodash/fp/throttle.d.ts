import _ = require("../index");

declare namespace Lodash {
    interface Throttle {
        /**
         * If you'd like to disable the leading-edge call, pass this as false.
         */
        (): Throttle;
        /**
         * If you'd like to disable the leading-edge call, pass this as false.
         */
        (wait: number): Throttle1x1;
        /**
         * If you'd like to disable the leading-edge call, pass this as false.
         */
        <T extends (...args: any[]) => any>(wait: number, func: T): T & _.Cancelable;
    }
    interface Throttle1x1 {
        /**
         * If you'd like to disable the leading-edge call, pass this as false.
         */
        (): Throttle1x1;
        /**
         * If you'd like to disable the leading-edge call, pass this as false.
         */
        <T extends (...args: any[]) => any>(func: T): T & _.Cancelable;
    }
}

declare const throttle: Lodash.Throttle;
export = throttle;
