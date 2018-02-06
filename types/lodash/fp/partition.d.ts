import _ = require("../index");

declare namespace Lodash {
    interface Partition {
        (): Partition;
        <T>(callback: _.ValueIteratee<T>): Partition1x1<T>;
        <T>(callback: _.ValueIteratee<T>, collection: _.List<T> | null | undefined): [T[], T[]];
        <T extends object>(callback: _.ValueIteratee<T[keyof T]>, collection: T | null | undefined): [Array<T[keyof T]>, Array<T[keyof T]>];
    }
    interface Partition1x1<T> {
        (): Partition1x1<T>;
        (collection: _.List<T> | null | undefined): [T[], T[]];
        (collection: object | null | undefined): [Array<T[keyof T]>, Array<T[keyof T]>];
    }
}

declare const partition: Lodash.Partition;
export = partition;
