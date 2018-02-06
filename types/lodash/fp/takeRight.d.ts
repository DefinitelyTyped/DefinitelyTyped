import _ = require("../index");

declare namespace Lodash {
    interface TakeRight {
        (): TakeRight;
        (n: number): TakeRight1x1<T>;
        <T>(n: number, array: _.List<T> | null | undefined): T[];
    }
    interface TakeRight1x1<T> {
        (): TakeRight1x1<T>;
        (array: _.List<T> | null | undefined): T[];
    }
}

declare const takeRight: Lodash.TakeRight;
export = takeRight;
