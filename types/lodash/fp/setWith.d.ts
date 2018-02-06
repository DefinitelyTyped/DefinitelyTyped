import _ = require("../index");

declare namespace Lodash {
    interface SetWith {
        (): SetWith;
        <T extends object>(customizer: SetWithCustomizer<T>): SetWith1x1<T>;
        <T extends object>(customizer: SetWithCustomizer<T>, path: _.PropertyPath): SetWith1x2<T>;
        <T extends object>(customizer: SetWithCustomizer<T>, path: _.PropertyPath, value: any): SetWith1x3<T>;
        <T extends object>(customizer: SetWithCustomizer<T>, path: _.PropertyPath, value: any, object: T): T;
        <T extends object, TResult>(customizer: SetWithCustomizer<T>, path: _.PropertyPath, value: any, object: T): TResult;
    }
    interface SetWith1x1<T extends object> {
        (): SetWith1x1<T>;
        (path: _.PropertyPath): SetWith1x2<T>;
        (path: _.PropertyPath, value: any): SetWith1x3<T>;
        (path: _.PropertyPath, value: any, object: T): T;
        (path: _.PropertyPath): SetWith2x2<T, TResult>;
        (path: _.PropertyPath, value: any): SetWith2x3<T, TResult>;
        (path: _.PropertyPath, value: any, object: T): TResult;
    }
    interface SetWith1x2<T extends object> {
        (): SetWith1x2<T>;
        (value: any): SetWith1x3<T>;
        (value: any, object: T): T;
        (value: any): SetWith2x3<T, TResult>;
        (value: any, object: T): TResult;
    }
    interface SetWith1x3<T extends object> {
        (): SetWith1x3<T>;
        (object: T): T;
        (object: T): TResult;
    }
}

declare const setWith: Lodash.SetWith;
export = setWith;
