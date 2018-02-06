import _ = require("../index");

declare namespace Lodash {
    interface Pick {
        (): Pick;
        <U extends keyof T>(...props: Array<_.Many<U>>): Pick1x1<T, U>;
        <T extends object, U extends keyof T>(...props: Array<_.Many<U>>, object: T): Pick<T, U>;
        (...props: _.PropertyPath[]): Pick2x1<T>;
        <T>(...props: _.PropertyPath[], object: T | null | undefined): _.PartialDeep<T>;
    }
    interface Pick1x1<T extends object, U extends keyof T> {
        (): Pick1x1<T, U>;
        (object: T): Pick<T, U>;
    }
    interface Pick2x1<T> {
        (): Pick2x1<T>;
        (object: T | null | undefined): _.PartialDeep<T>;
    }
}

declare const pick: Lodash.Pick;
export = pick;
