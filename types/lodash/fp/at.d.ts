import _ = require("../index");

declare namespace Lodash {
    interface At {
        (): At;
        (...props: _.PropertyPath[]): At1x1<T>;
        <T>(...props: _.PropertyPath[], object: _.List<T> | _.Dictionary<T> | null | undefined): T[];
        <T extends object>(...props: Array<_.Many<keyof T>>): At2x1<T>;
        <T extends object>(...props: Array<_.Many<keyof T>>, object: T | null | undefined): Array<T[keyof T]>;
    }
    interface At1x1<T> {
        (): At1x1<T>;
        (object: _.List<T> | _.Dictionary<T> | null | undefined): T[];
    }
    interface At2x1<T extends object> {
        (): At2x1<T>;
        (object: T | null | undefined): Array<T[keyof T]>;
    }
}

declare const at: Lodash.At;
export = at;
