import _ = require("../index");

declare namespace Lodash {
    interface Fill {
        (): Fill;
        (end: number): Fill1x1<T, U>;
        (end: number, start: number): Fill1x2<T, U>;
        <U>(end: number, start: number, array: U[] | null | undefined): Fill1x3<T, U>;
        <T, U>(end: number, start: number, array: U[] | null | undefined, value: T): Array<T | U>;
        <U>(end: number, start: number, array: _.List<U> | null | undefined): Fill2x3<T, U>;
        <T, U>(end: number, start: number, array: _.List<U> | null | undefined, value: T): _.List<T | U>;
    }
    interface Fill1x1<T, U> {
        (): Fill1x1<T, U>;
        (start: number): Fill1x2<T, U>;
        (start: number, array: U[] | null | undefined): Fill1x3<T, U>;
        (start: number, array: U[] | null | undefined, value: T): Array<T | U>;
        (start: number): Fill2x2<T, U>;
        (start: number, array: _.List<U> | null | undefined): Fill2x3<T, U>;
        (start: number, array: _.List<U> | null | undefined, value: T): _.List<T | U>;
    }
    interface Fill1x2<T, U> {
        (): Fill1x2<T, U>;
        (array: U[] | null | undefined): Fill1x3<T, U>;
        (array: U[] | null | undefined, value: T): Array<T | U>;
        (array: _.List<U> | null | undefined): Fill2x3<T, U>;
        (array: _.List<U> | null | undefined, value: T): _.List<T | U>;
    }
    interface Fill1x3<T, U> {
        (): Fill1x3<T, U>;
        (value: T): Array<T | U>;
    }
    interface Fill2x3<T, U> {
        (): Fill2x3<T, U>;
        (value: T): _.List<T | U>;
    }
}

declare const fill: Lodash.Fill;
export = fill;
