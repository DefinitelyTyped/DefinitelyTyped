import _ = require("../index");

declare namespace Lodash {
    interface UpdateWith {
        (): UpdateWith;
        <T extends object>(customizer: SetWithCustomizer<T>): UpdateWith1x1<T>;
        <T extends object>(customizer: SetWithCustomizer<T>, path: _.PropertyPath): UpdateWith1x2<T>;
        <T extends object>(customizer: SetWithCustomizer<T>, path: _.PropertyPath, updater: (oldValue: any) => any): UpdateWith1x3<T>;
        <T extends object>(customizer: SetWithCustomizer<T>, path: _.PropertyPath, updater: (oldValue: any) => any, object: T): T;
        <T extends object, TResult>(customizer: SetWithCustomizer<T>, path: _.PropertyPath, updater: (oldValue: any) => any, object: T): TResult;
    }
    interface UpdateWith1x1<T extends object> {
        (): UpdateWith1x1<T>;
        (path: _.PropertyPath): UpdateWith1x2<T>;
        (path: _.PropertyPath, updater: (oldValue: any) => any): UpdateWith1x3<T>;
        (path: _.PropertyPath, updater: (oldValue: any) => any, object: T): T;
        (path: _.PropertyPath): UpdateWith2x2<T, TResult>;
        (path: _.PropertyPath, updater: (oldValue: any) => any): UpdateWith2x3<T, TResult>;
        (path: _.PropertyPath, updater: (oldValue: any) => any, object: T): TResult;
    }
    interface UpdateWith1x2<T extends object> {
        (): UpdateWith1x2<T>;
        (updater: (oldValue: any) => any): UpdateWith1x3<T>;
        (updater: (oldValue: any) => any, object: T): T;
        (updater: (oldValue: any) => any): UpdateWith2x3<T, TResult>;
        (updater: (oldValue: any) => any, object: T): TResult;
    }
    interface UpdateWith1x3<T extends object> {
        (): UpdateWith1x3<T>;
        (object: T): T;
        (object: T): TResult;
    }
}

declare const updateWith: Lodash.UpdateWith;
export = updateWith;
