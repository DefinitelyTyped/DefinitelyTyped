// Type definitions for caseless 0.12
// Project: https://github.com/mikeal/caseless
// Definitions by: downace <https://github.com/downace>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

type KeyType = string;
type ValueType = any;
type RawDict = object;

declare class Caseless {
    constructor(dict?: RawDict);
    set(name: KeyType, value: ValueType, clobber?: boolean): KeyType | false;
    set(dict: RawDict): void;
    has(name: KeyType): KeyType | false;
    get(name: KeyType): ValueType | undefined;
    swap(name: KeyType): void;
    del(name: KeyType): boolean;
}

export function httpify(resp: object, headers: RawDict): Caseless;

declare function caseless(dict?: RawDict): Caseless;

export default caseless;
