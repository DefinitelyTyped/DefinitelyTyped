import _ = require("../index");

declare namespace Lodash {
    /**
     * A no-operation function that returns undefined regardless of the arguments it receives.
     *
     * @return undefined
     */
    type Noop = (...args: any[]) => void;
}

declare const noop: Lodash.Noop;
export = noop;
