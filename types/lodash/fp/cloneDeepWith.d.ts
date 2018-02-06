import _ = require("../index");

declare namespace Lodash {
    interface CloneDeepWith {
        (): CloneDeepWith;
        <T>(customizer: CloneDeepWithCustomizer<T>): CloneDeepWith1x1<T>;
        <T>(customizer: CloneDeepWithCustomizer<T>, value: T): any;
    }
    interface CloneDeepWith1x1<T> {
        (): CloneDeepWith1x1<T>;
        (value: T): any;
    }
}

declare const cloneDeepWith: Lodash.CloneDeepWith;
export = cloneDeepWith;
