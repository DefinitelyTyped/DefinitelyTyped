import _ = require("../index");

declare namespace Lodash {
    interface IsArrayLikeObject {
        (): IsArrayLikeObject;
        <T>(value: T & string & number): boolean;
        (value: ((...args: any[]) => any) | Function | string | boolean | number | null | undefined): value is never;
        <T extends object>(value: T | ((...args: any[]) => any) | Function | string | boolean | number | null | undefined): value is T & { length: number };
    }
}

declare const isArrayLikeObject: Lodash.IsArrayLikeObject;
export = isArrayLikeObject;
