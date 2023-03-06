// Type definitions for ola 1.2
// Project: https://www.npmjs.com/package/ola
// Definitions by: Adrien Gautier <https://github.com/adrgautier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
type MultiValue<V extends Record<string, number>> = V & {
    get: (name: keyof V, now?: Date) => number;
    set: (values: V, time?: number) => void;
};

interface SingleValue {
    get: (name?: 'value', now?: Date) => number;
    set: (values: number | { value: number }, time?: number) => void;
    value: number;
}

type TupleValue<V extends number[]> = V & {
    get: (name?: number, now?: Date) => number;
    set: (values: V, time?: number) => void;
};

declare function Ola<V extends number[]>(values: V, time?: number): TupleValue<V>;
declare function Ola<K extends string>(values: Record<K, number>, time?: number): MultiValue<Record<K, number>>;
declare function Ola(values: number, time?: number): SingleValue;
export = Ola;
