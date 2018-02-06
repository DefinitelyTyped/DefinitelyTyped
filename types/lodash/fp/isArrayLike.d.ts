import _ = require("../index");

declare namespace Lodash {
    interface IsArrayLike {
        (): IsArrayLike;
        <T>(value: T & string & number): boolean;
        (value: ((...args: any[]) => any) | null | undefined): value is never;
        (value: any): value is { length: number };
    }
}

declare const isArrayLike: Lodash.IsArrayLike;
export = isArrayLike;
