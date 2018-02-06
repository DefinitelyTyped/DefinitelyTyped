import _ = require("../index");

declare namespace Lodash {
    interface DefaultTo {
        (): DefaultTo;
        <T>(defaultValue: T): DefaultTo1x1<T>;
        <T>(defaultValue: T, value: T | null | undefined): T;
        <TDefault>(defaultValue: TDefault): DefaultTo2x1<T, TDefault>;
        <T, TDefault>(defaultValue: TDefault, value: T | null | undefined): T | TDefault;
    }
    interface DefaultTo1x1<T> {
        (): DefaultTo1x1<T>;
        (value: T | null | undefined): T;
    }
    interface DefaultTo2x1<T, TDefault> {
        (): DefaultTo2x1<T, TDefault>;
        (value: T | null | undefined): T | TDefault;
    }
}

declare const defaultTo: Lodash.DefaultTo;
export = defaultTo;
