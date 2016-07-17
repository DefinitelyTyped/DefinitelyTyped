// Type definitions for D3JS d3-collection module
// Project: https://github.com/d3/d3-collection/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Reference type things that can be coerced to string implicitely
 */
type Stringifiable = {
    toString(): string;
};


export function keys(object: { [key: string]: any }): Array<string>;
export function keys(object: Object): Array<string>;

export function values<T>(object: { [key: string]: T }): Array<T>;
export function values(object: Object): Array<any>;

export function entries<T>(object: { [key: string]: T }): Array<{ key: string, value: T }>;
export function entries(object: Object): Array<{ key: string, value: any }>;

export interface D3Map<T> {
    has(key: string): boolean;
    get(key: string): any;
    set(key: string, value: T): D3Map<T>;
    remove(key: string): boolean;
    clear(): void;
    keys(): Array<string>;
    values(): Array<T>;
    entries(): Array<{ key: string, value: T }>;
    each(func: (value: T, key: string, map: D3Map<T>) => void): undefined;
    empty(): boolean;
    size(): number;
}

export function map<T>(): D3Map<T>;
export function map<T>(d3Map: D3Map<T>): D3Map<T>;
export function map<T>(array: Array<T>, key?: (value: T, i?: number, array?: Array<T>) => string): D3Map<T>;
export function map(object: Object): D3Map<any>;


export interface D3Set<T extends Stringifiable> {
    has(value: T): boolean;
    add(value: T): D3Set<T>;
    remove(value: T): boolean;
    clear(): void;
    values(): Array<string>;
    /**
     * The first and second parameter of the function are both passed
     * the 'value' of the set entry for consistency with map.each(...)
     * signature
     */
    each(func: (value: string, valueRepeat: string, set: D3Set<T>) => void): undefined;
    empty(): boolean;
    size(): number;
}


export function set<T extends Stringifiable>(): D3Set<T>;
export function set<T extends Stringifiable>(d3Set: D3Set<T>): D3Set<T>;
export function set<T extends Stringifiable>(array: Array<T>, key?: (value: T) => string): D3Set<T>;


interface D3Nest<T> {
    key(func: (datum: T) => string): D3Nest<T>;
    sortKeys(comparator: (a: string, b: string) => number): D3Nest<T>;
    sortValues(comparator: (a: T, b: T) => number): D3Nest<T>;
    rollup<U>(func: (values: T[]) => U): D3Nest<T>;
    map(array: T[]): D3Map<any>;
    object(array: T[]): { [key: string]: any};
    entries(array: T[]): { key: string; values: any }[];
}

export function nest<T>(): D3Nest<T>;
