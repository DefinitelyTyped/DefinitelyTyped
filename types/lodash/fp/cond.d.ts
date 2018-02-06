import _ = require("../index");

declare namespace Lodash {
    interface Cond {
        (): Cond;
        <T, R>(pairs: Array<CondPair<T, R>>): (Target: T) => R;
    }
}

declare const cond: Lodash.Cond;
export = cond;
