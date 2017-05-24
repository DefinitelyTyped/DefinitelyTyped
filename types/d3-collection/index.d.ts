// Type definitions for D3JS d3-collection module 1.0
// Project: https://github.com/d3/d3-collection/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 1.0.1

/**
 * Reference type things that can be coerced to string implicitely
 */
export interface Stringifiable {
    toString(): string;
}

// ---------------------------------------------------------------------
// Objects
// ---------------------------------------------------------------------

export function keys(object: { [key: string]: any }): string[];
// TODO: When upgrading definitions to use TS 2.2+, use "object" data type in next line
export function keys(object: any): string[];

export function values<T>(object: { [key: string]: T }): T[];
// TODO: When upgrading definitions to use TS 2.2+, use "object" data type in next line
export function values(object: any): any[];

export function entries<T>(object: { [key: string]: T }): Array<{ key: string, value: T }>;
// TODO: When upgrading definitions to use TS 2.2+, use "object" data type in next line
export function entries(object: any): Array<{ key: string, value: any }>;

// ---------------------------------------------------------------------
// map / Map
// ---------------------------------------------------------------------

export interface Map<T> {
    has(key: string): boolean;
    get(key: string): T | undefined;
    set(key: string, value: T): this;
    remove(key: string): boolean;
    clear(): void;
    keys(): string[];
    values(): T[];
    entries(): Array<{ key: string, value: T }>;
    each(func: (value: T, key: string, map: Map<T>) => void): void;
    empty(): boolean;
    size(): number;
}

export function map<T>(): Map<T>;
export function map<T>(d3Map: Map<T>): Map<T>;
export function map<T>(object: { [key: string]: T }): Map<T>;
export function map<T>(object: { [key: number]: T }): Map<T>;
export function map<T>(array: T[], key?: (value: T, i?: number, array?: T[]) => string): Map<T>;
export function map(object: any): Map<any>; // TODO: When upgrading definitions to use TS 2.2+, use "object" data type for argument

// ---------------------------------------------------------------------
// set / Set
// ---------------------------------------------------------------------

export interface Set {
    has(value: string | Stringifiable): boolean;
    add(value: string | Stringifiable): this;
    remove(value: string | Stringifiable): boolean;
    clear(): void;
    values(): string[];
    /**
     * The first and second parameter of the function are both passed
     * the 'value' of the set entry for consistency with map.each(...)
     * signature
     */
    each(func: (value: string, valueRepeat: string, set: Set) => void): void;
    empty(): boolean;
    size(): number;
}

export function set(): Set;
export function set(d3Set: Set): Set;
export function set(array: Array<string | Stringifiable>): Set;
export function set<T>(array: T[], key: (value: T, index?: number, array?: T[]) => string): Set;

// ---------------------------------------------------------------------
// nest / Nest
// ---------------------------------------------------------------------

// NB: the following three interfaces NestedArray, NestedMap and NestedObject provide a more formal definitions
// of the return values provided by Nest.entries(...), Nest.map(...) and Nest.object(...), respectively. However,
// the union types cannot be ex ante simplified without knowledge of the nesting level (number of key(...) operations)
// and whether the data were rolled-up. The latter question also determins whether NestedArray has the 'values' property
// with an array of type Datum at leaf level, or has a rolled-up 'value' property.
// The interfaces are not used as return types, as they are cumbersome to work with on the consuming side (Determining the
// applicable type from the respective union, i. p. for array elements).
// It is preferable to carefully define appropriate use-case-specific interfaces for the variables that
// are assigned the return values of the Nest.entries(...), Nest.map(...) and Nest.object(...) operations. The downside
// is an overly permissive return type.

// Also note, that the below return types for Nest.entries(...), Nest.map(...) and Nest.object(...) strictly only work,
// if AT LEAST ONE KEY was set. This seems a reasonable constraint in practice, given the intent of the nest operator.
// Otherwise, an additional '| Datum[] | RollupType` would have to be added to the union type. This would cover
// cases (a) without key or rollup (b) without key but with rollup. However, again, the union types make it cumbersome
// without much gain.

// tslint:disable-next-line:no-empty-interface
export interface NestedArray<Datum, RollupType> extends Array<{ key: string, values: NestedArray<Datum, RollupType> | Datum[] | undefined, value: RollupType | undefined }> { }
// tslint:disable-next-line:no-empty-interface
export interface NestedMap<Datum, RollupType> extends Map<NestedMap<Datum, RollupType> | Datum[] | RollupType> { }
export interface NestedObject<Datum, RollupType> {
    [key: string]: NestedObject<Datum, RollupType> | Datum[] | RollupType;
}

export interface Nest<Datum, RollupType> {
    key(func: (datum: Datum) => string): this;
    sortKeys(comparator: (a: string, b: string) => number): this;
    sortValues(comparator: (a: Datum, b: Datum) => number): this;
    rollup(func: (values: Datum[]) => RollupType): this;
    map(array: Datum[]): Map<any>; // more specifically it returns NestedMap<Datum, RollupType>
    object(array: Datum[]): { [key: string]: any };  // more specifically it returns NestedObject<Datum, RollupType>
    entries(array: Datum[]): Array<{ key: string; values: any; value: RollupType | undefined }>;  // more specifically it returns NestedArray<Datum, RollupType>
}

export function nest<Datum>(): Nest<Datum, undefined>;
export function nest<Datum, RollupType>(): Nest<Datum, RollupType>;
