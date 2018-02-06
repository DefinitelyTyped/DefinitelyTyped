import _ = require("../index");

declare namespace Lodash {
    interface CloneWith {
        (): CloneWith;
        <T, TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<T, TResult>): CloneWith1x1<T, TResult>;
        <T, TResult extends object | string | number | boolean | null>(customizer: CloneWithCustomizer<T, TResult>, value: T): TResult;
        <T, TResult>(customizer: CloneWithCustomizer<T, TResult | undefined>): CloneWith2x1<T, TResult>;
        <T, TResult>(customizer: CloneWithCustomizer<T, TResult | undefined>, value: T): TResult | T;
    }
    interface CloneWith1x1<T, TResult extends object | string | number | boolean | null> {
        (): CloneWith1x1<T, TResult>;
        (value: T): TResult;
    }
    interface CloneWith2x1<T, TResult> {
        (): CloneWith2x1<T, TResult>;
        (value: T): TResult | T;
    }
}

declare const cloneWith: Lodash.CloneWith;
export = cloneWith;
