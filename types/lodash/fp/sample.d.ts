import _ = require("../index");

declare namespace Lodash {
    interface Sample {
        (): Sample;
        <T>(collection: _.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined): T | undefined;
        <T extends object>(collection: T): T[keyof T];
        <T extends object>(collection: T | null | undefined): T[keyof T] | undefined;
    }
}

declare const sample: Lodash.Sample;
export = sample;
