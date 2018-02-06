import _ = require("../index");

declare namespace Lodash {
    interface OverEvery {
        (): OverEvery;
        <T>(...predicates: Array<_.Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean;
    }
}

declare const overEvery: Lodash.OverEvery;
export = overEvery;
