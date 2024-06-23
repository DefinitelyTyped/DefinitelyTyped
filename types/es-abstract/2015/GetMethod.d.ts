import type { PropertyKey } from "../index";

declare function GetMethod<O, P extends PropertyKey>(
    O: O,
    P: P,
): P extends keyof O // eslint-disable-next-line @typescript-eslint/ban-types
    ? NonNullable<O[P]> extends Function ? O[P]
    : never
    : ((...args: any) => any) | undefined;
export = GetMethod;
