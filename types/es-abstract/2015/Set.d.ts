import type { PropertyKey } from '../index';

declare function Set<O extends object, P extends PropertyKey>(
    O: O,
    P: P,
    V: P extends keyof O ? O[P] : unknown,
    Throw: true,
): true | never;
declare function Set<O extends object, P extends PropertyKey>(
    O: O,
    P: P,
    V: P extends keyof O ? O[P] : unknown,
    Throw: boolean,
): boolean;
export = Set;
