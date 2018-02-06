import _ = require("../index");

declare namespace Lodash {
    interface Concat {
        (): Concat;
        <T>(...values: Array<_.Many<T>>): Concat1x1<T>;
        <T>(...values: Array<_.Many<T>>, array: _.Many<T>): T[];
    }
    interface Concat1x1<T> {
        (): Concat1x1<T>;
        (array: _.Many<T>): T[];
    }
}

declare const concat: Lodash.Concat;
export = concat;
