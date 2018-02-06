import _ = require("../index");

declare namespace Lodash {
    interface Difference {
        (): Difference;
        <T>(...values: Array<_.List<T>>): Difference1x1<T>;
        <T>(...values: Array<_.List<T>>, array: _.List<T> | null | undefined): T[];
    }
    interface Difference1x1<T> {
        (): Difference1x1<T>;
        (array: _.List<T> | null | undefined): T[];
    }
}

declare const difference: Lodash.Difference;
export = difference;
