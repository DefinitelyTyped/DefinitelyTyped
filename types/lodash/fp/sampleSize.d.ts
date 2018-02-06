import _ = require("../index");

declare namespace Lodash {
    interface SampleSize {
        (): SampleSize;
        (n: number): SampleSize1x1<T>;
        <T>(n: number, collection: _.List<T>|_.Dictionary<T>|_.NumericDictionary<T> | null | undefined): T[];
        <T extends object>(n: number, collection: T | null | undefined): Array<T[keyof T]>;
    }
    interface SampleSize1x1<T> {
        (): SampleSize1x1<T>;
        (collection: _.List<T>|_.Dictionary<T>|_.NumericDictionary<T> | null | undefined): T[];
        (collection: T | null | undefined): Array<T[keyof T]>;
    }
}

declare const sampleSize: Lodash.SampleSize;
export = sampleSize;
