import _ = require("../index");

declare namespace Lodash {
    interface MapKeys {
        (): MapKeys;
        <T>(iteratee: _.ValueIteratee<T>): MapKeys1x1<T>;
        <T>(iteratee: _.ValueIteratee<T>, object: _.List<T> | null | undefined): _.Dictionary<T>;
        <T>(iteratee: _.ValueIteratee<T>, object: _.Dictionary<T> | null | undefined): _.Dictionary<T>;
        (iteratee: _.ValueIteratee<any[keyof any]>): MapKeys3x1;
        (iteratee: _.ValueIteratee<any[keyof any]>, object: object | null | undefined): _.Dictionary<any>;
    }
    interface MapKeys1x1<T> {
        (): MapKeys1x1<T>;
        (object: _.List<T> | null | undefined): _.Dictionary<T>;
        (object: _.Dictionary<T> | null | undefined): _.Dictionary<T>;
    }
    interface MapKeys3x1 {
        (): MapKeys3x1;
        (object: object | null | undefined): _.Dictionary<any>;
    }
}

declare const mapKeys: Lodash.MapKeys;
export = mapKeys;
