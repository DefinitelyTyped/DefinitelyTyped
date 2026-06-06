import type { PropertyKey } from "..";

declare function DefineMethodProperty(
    O: object,
    key: PropertyKey,
    closure: (...args: any[]) => any,
    enumerable: boolean,
): void;
export = DefineMethodProperty;
