import _ = require("../index");

declare namespace Lodash {
    interface Noop {
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        (): Noop;
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        (...args: any[]): void;
    }
}

declare const noop: Lodash.Noop;
export = noop;
