import _ = require("../index");

declare namespace Lodash {
    interface Tap {
        (): Tap;
        <T>(interceptor: (value: T) => void): Tap1x1<T>;
        <T>(interceptor: (value: T) => void, value: T): T;
    }
    interface Tap1x1<T> {
        (): Tap1x1<T>;
        (value: T): T;
    }
}

declare const tap: Lodash.Tap;
export = tap;
