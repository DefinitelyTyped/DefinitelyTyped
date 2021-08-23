import type { PropertyKey } from '../index';

declare function OrdinaryGetOwnProperty<O extends object, P extends PropertyKey>(
    O: O,
    P: P,
):
    | {
        '[[Configurable]]': boolean;
        '[[Enumerable]]': boolean;
        '[[Writable]]': boolean;
        '[[Value]]': P extends keyof O ? O[P] : unknown;
    }
    | {
        '[[Configurable]]': boolean;
        '[[Enumerable]]': boolean;
        '[[Get]]': (() => P extends keyof O ? O[P] : unknown) | undefined;
        '[[Set]]': ((value: P extends keyof O ? O[P] : unknown) => void) | undefined;
    }
    | undefined;
export = OrdinaryGetOwnProperty;
