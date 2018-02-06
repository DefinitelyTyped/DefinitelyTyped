import _ = require("../index");

declare namespace Lodash {
    interface OverSome {
        (): OverSome;
        <T>(...predicates: Array<_.Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean;
    }
}

declare const overSome: Lodash.OverSome;
export = overSome;
