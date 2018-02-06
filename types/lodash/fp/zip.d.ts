import _ = require("../index");

declare namespace Lodash {
    interface Zip {
        (): Zip;
        <T2>(arrays2: _.List<T2>): Zip1x1<T1, T2>;
        <T1, T2>(arrays2: _.List<T2>, arrays1: _.List<T1>): Array<[T1 | undefined, T2 | undefined]>;
    }
    interface Zip1x1<T1, T2> {
        (): Zip1x1<T1, T2>;
        (arrays1: _.List<T1>): Array<[T1 | undefined, T2 | undefined]>;
    }
}

declare const zip: Lodash.Zip;
export = zip;
