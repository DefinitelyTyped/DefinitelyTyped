import _ = require("../index");

declare namespace Lodash {
    interface Set {
        (): Set;
        (value: any): Set1x1<T>;
        <T extends object>(value: any, object: T): Set1x2<T>;
        <T extends object>(value: any, object: T, path: _.PropertyPath): T;
        (value: any, object: object): Set2x2<TResult>;
        <TResult>(value: any, object: object, path: _.PropertyPath): TResult;
    }
    interface Set1x1<T extends object> {
        (): Set1x1<T>;
        (object: T): Set1x2<T>;
        (object: T, path: _.PropertyPath): T;
        (object: object): Set2x2<TResult>;
        (object: object, path: _.PropertyPath): TResult;
    }
    interface Set1x2<T extends object> {
        (): Set1x2<T>;
        (path: _.PropertyPath): T;
    }
    interface Set2x2<TResult> {
        (): Set2x2<TResult>;
        (path: _.PropertyPath): TResult;
    }
}

declare const set: Lodash.Set;
export = set;
