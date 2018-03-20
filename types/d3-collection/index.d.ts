// Type definitions for D3JS d3-collection module 1.0
// Project: https://github.com/d3/d3-collection/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// Last module patch version validated against: 1.0.4

/**
 * Reference type things that can be coerced to string implicitely
 */
export interface Stringifiable {
    toString(): string;
}

// ---------------------------------------------------------------------
// Objects
// ---------------------------------------------------------------------

/**
 * Returns an array containing the property names of the specified object (an associative array).
 * The order of the returned array is undefined.
 *
 * @param obj An object.
 */
export function keys(obj: object): string[];

/**
 * Returns an array containing the property values of the specified object (an associative array).
 * The order of the returned array is undefined.
 *
 * The generic refers to the data type of the values.
 *
 * @param obj An object.
 */
export function values<T>(obj: { [key: string]: T } | ArrayLike<T>): T[];
/**
 * Returns an array containing the property values of the specified object (an associative array).
 * The order of the returned array is undefined.
 *
 * @param obj An object.
 */
export function values(obj: object): any[];

/**
 * Returns an array containing the property keys and values of the specified object (an associative array).
 * Each entry is an object with a key and value attribute.The order of the returned array is undefined.
 *
 * The generic refers to the data type of the values.
 *
 * @param obj An object.
 */
export function entries<T>(obj: { [key: string]: T } | ArrayLike<T>): Array<{ key: string, value: T }>;
/**
 * Returns an array containing the property keys and values of the specified object (an associative array).
 * Each entry is an object with a key and value attribute.The order of the returned array is undefined.
 *
 * @param obj An object.
 */
export function entries(obj: object): Array<{ key: string, value: any }>;

// ---------------------------------------------------------------------
// map / Map
// ---------------------------------------------------------------------

/**
 * A datastructure similar to ES6 Maps, but with a few differences:
 * - Keys are coerced to strings.
 * - map.each, not map.forEach. (Also, no thisArg.)
 * - map.remove, not map.delete.
 * - map.entries returns an array of {key, value} objects, not an iterator of [key, value].
 * - map.size is a method, not a property; also, there’s map.empty.
 *
 * The generic refers to the data type of the map entry values.
 */
export interface Map<T> {
    /**
     * Returns true if and only if this map has an entry for the specified key string.
     * Note: the value may be null or undefined.
     *
     * @param key Key of map entry to access.
     */
    has(key: string): boolean;
    /**
     * Returns the value for the specified key string.
     * If the map does not have an entry for the specified key, returns undefined.
     *
     * @param key Key of map entry to access.
     */
    get(key: string): T | undefined;
    /**
     * Sets the value for the specified key string and returns the updated map.
     * If the map previously had an entry for the same key string, the old entry is replaced with the new value.
     *
     * @param key Key of map entry to access.
     * @param value Value to set for entry at key.
     */
    set(key: string, value: T): this;
    /**
     * If the map has an entry for the specified key string, removes the entry and returns true.
     * Otherwise, this method does nothing and returns false.
     *
     * @param key Map key for which to remove the entry.
     */
    remove(key: string): boolean;
    /**
     * Removes all entries from this map.
     */
    clear(): void;
    /**
     * Returns an array of string keys for every entry in this map.
     * The order of the returned keys is arbitrary.
     */
    keys(): string[];
    /**
     * Returns an array of values for every entry in this map.
     * The order of the returned values is arbitrary.
     */
    values(): T[];
    /**
     * Returns an array of key-value objects for each entry in this map. The order of the returned entries is arbitrary.
     * Each entry’s key is a string, but the value can have arbitrary type.
     */
    entries(): Array<{ key: string, value: T }>;
    /**
     * Calls the specified function for each entry in this map and returns undefined.
     * The iteration order is arbitrary.
     *
     * @param func Function to call for each entry. The function is passed the entry’s value and key as arguments,
     * followed by the map itself.
     */
    each(func: (value: T, key: string, map: Map<T>) => void): void;
    /**
     * Returns true if and only if this map has zero entries.
     */
    empty(): boolean;
    /**
     * Returns the number of entries in this map.
     */
    size(): number;
}

/**
 * Constructs a new empty map.
 *
 * The generic refers to the data type of the map entry values.
 */
export function map<T = any>(): Map<T>;
/**
 * Constructs a new map by copying another map.
 *
 * The generic refers to the data type of the map entry values.
 *
 * @param d3Map A D3 Map.
 */
export function map<T>(d3Map: Map<T>): Map<T>;
/**
 * Constructs a new map by copying all enumerable properties from the specified object into this map.
 *
 * The generic refers to the data type of the map entry values.
 *
 * @param obj Object to construct the map from.
 */
export function map<T>(obj: { [key: string]: T }): Map<T>;
/**
 * Constructs a new map by copying all enumerable properties from the specified object into this map.
 *
 * The generic refers to the data type of the map entry values.
 *
 * @param obj Object to construct the map from.
 */
export function map<T>(obj: { [key: number]: T }): Map<T>;
/**
 * Constructs a new map from the elements of an array.
 * An optional key function may be specified to compute the key for each value in the array.
 *
 * The generic refers to the data type of the map entry values.
 *
 * @param array Array to convert into a map
 * @param key An optional key function. The functions is invoked for each element in the array being passed
 * the element's value , it's zero-based index in the array, and the array itself. The function must return a unique string
 * to be used as the map entry's key.
 */
export function map<T>(array: T[], key?: (value: T, i?: number, array?: T[]) => string): Map<T>;
/**
 * Constructs a new map by copying all enumerable properties from the specified object into this map.
 *
 * @param obj Object to construct the map from.
 */
export function map(obj: object): Map<any>;

// ---------------------------------------------------------------------
// set / Set
// ---------------------------------------------------------------------

/**
 * A datastructure similar to ES6 Sets, but with a few differences:
 *
 * - Values are coerced to strings.
 * - set.each, not set.forEach. (Also, no thisArg.)
 * - set.remove, not set.delete.
 * - set.size is a method, not a property; also, there’s set.empty.
 */
export interface Set {
    /**
     * Returns true if and only if this set has an entry for the specified value string.
     *
     * @param value Value whose membership in the class to test.
     */
    has(value: string | Stringifiable): boolean;
    /**
     * Adds the specified value string to this set and returns the set.
     *
     * @param value Value to add to set.
     */
    add(value: string | Stringifiable): this;
    /**
     * If the set contains the specified value string, removes it and returns true.
     * Otherwise, this method does nothing and returns false.
     *
     * @param value Value to remove from set.
     */
    remove(value: string | Stringifiable): boolean;
    /**
     * Removes all values from this set.
     */
    clear(): void;
    /**
     * Returns an array of the string values in this set. The order of the returned values is arbitrary.
     * Can be used as a convenient way of computing the unique values for a set of strings.
     */
    values(): string[];
    /**
     * Calls the specified function for each value in this set, passing the value as the first two arguments (for symmetry with map.each),
     * followed by the set itself. Returns undefined.
     * The iteration order is arbitrary.
     *
     * @param func Function to call for each set element. The first and second argument of the function are both passed
     * the 'value' of the set entry for consistency with the map.each(...) signature, as a third argument the entire set is passed in.
     */
    each(func: (value: string, valueRepeat: string, set: Set) => void): void;
    /**
     * Returns true if and only if this set has zero values.
     */
    empty(): boolean;
    /**
     * Returns the number of values in this set.
     */
    size(): number;
}

/**
 * Constructs a new empty set.
 */
export function set(): Set;
/**
 * Constructs a new set by copying an existing set.
 *
 * @param set A D3 set.
 */
export function set(d3Set: Set): Set;
/**
 * Constructs a new set by adding the given array of string values to the returned set.
 *
 * @param array An array of strings of values which can be implicitly converted to strings.
 */
export function set(array: Array<string | Stringifiable>): Set;
/**
 * Constructs a new set from an array, adds an array of mapped string values to the returned set.
 * The specified accessor function is invoked equivalent to calling array.map(accessor) before constructing the set.
 *
 * The generic refers to the data type of the array elements.
 *
 * @param array An Array of values to map and add as set elements.
 * @param key An accessor function used to map the original array elements to string elements to be added to the set.
 * The function is invoked for each array element, being passed the element's value, it's zero-based index in the array, and the array itself.
 */
export function set<T>(array: T[], key: (value: T, index: number, array: T[]) => string): Set;

// ---------------------------------------------------------------------
// nest / Nest
// ---------------------------------------------------------------------

/**
 * A more formal defintion of the nested array returned by Nest.entries(...). This data structure is intended as a reference only.
 *
 * As the union types cannot be ex ante simplified without knowledge
 * of the nesting level (number of key(...) operations) and whether the data were rolled-up, this data structure becomes cumbersome
 * to use in practice. This is particularly true for discrimiation of array element types.
 * The use of the rollup function, or lack thereof, also determines whether NestedArray has the 'values' property
 * with an array of type Datum at leaf level, or has a rolled-up 'value' property.
 */
// tslint:disable-next-line:no-empty-interface
export interface NestedArray<Datum, RollupType> extends Array<{ key: string, values: NestedArray<Datum, RollupType> | Datum[] | undefined, value: RollupType | undefined }> { }

/**
 * A more formal defintion of the nested array returned by Nest.map(...). This data structure is intended as a reference only.
 *
 * As the union types cannot be ex ante simplified without knowledge
 * of the nesting level (number of key(...) operations) and whether the data were rolled-up, this data structure becomes cumbersome
 * to use in practice.
 */
// tslint:disable-next-line:no-empty-interface
export interface NestedMap<Datum, RollupType> extends Map<NestedMap<Datum, RollupType> | Datum[] | RollupType> { }

/**
 * A more formal defintion of the nested array returned by Nest.object(...). This data structure is intended as a reference only.
 *
 * As the union types cannot be ex ante simplified without knowledge
 * of the nesting level (number of key(...) operations) and whether the data were rolled-up, this data structure becomes cumbersome
 * to use in practice.
 */
export interface NestedObject<Datum, RollupType> {
    [key: string]: NestedObject<Datum, RollupType> | Datum[] | RollupType;
}

/**
 * A nest operator for generating nested data structures from arrays.
 *
 * Nesting allows elements in an array to be grouped into a hierarchical tree structure;
 * think of it like the GROUP BY operator in SQL, except you can have multiple levels of grouping, and the resulting output is a tree rather than a flat table.
 * The levels in the tree are specified by key functions. The leaf nodes of the tree can be sorted by value, while the internal nodes can be sorted by key.
 * An optional rollup function will collapse the elements in each leaf node using a summary function.
 * The nest operator is reusable, and does not retain any references to the data that is nested.
 *
 * The first generic refers to the data type of the array elements on which the nest operator will
 * be invoked.
 *
 * The second generic refers to the data type returned by the roll-up function to be used with the
 * nest operator.
 */
export interface Nest<Datum, RollupType> {
    /**
     * Registers a new key function and returns this nest operator.
     * The key function will be invoked for each element in the input array and must return a string identifier to assign the element to its group.
     * Most often, the function is a simple accessor. (Keys functions are not passed the input array index.)
     *
     * Each time a key is registered, it is pushed onto the end of the internal array of keys,
     * and the nest operator applies an additional level of nesting.
     *
     * @param func A key accessor function being invoked for each element.
     */
    key(func: (datum: Datum) => string): this;
    /**
     * Sorts key values for the current key using the specified comparator function, such as d3.ascending or d3.descending.
     *
     * If no comparator is specified for the current key, the order in which keys will be returned is undefined.
     *
     * Note that this only affects the result of nest.entries;
     * the order of keys returned by nest.map and nest.object is always undefined, regardless of comparator.
     *
     * @param comparator A comparator function which returns a negative value if, according to the sorting criterion,
     * a is less than b, or a positive value if a is greater than b, or 0 if the two values are the same under the sorting criterion.
     */
    sortKeys(comparator: (a: string, b: string) => number): this;
    /**
     * Sorts leaf elements using the specified comparator function, such as d3.ascending or d3.descending.
     * This is roughly equivalent to sorting the input array before applying the nest operator;
     * however it is typically more efficient as the size of each group is smaller.
     *
     * If no value comparator is specified, elements will be returned in the order they appeared in the input array.
     * This applies to nest.map, nest.entries and nest.object.
     *
     * @param comparator A comparator function which returns a negative value if, according to the sorting criterion,
     * a is less than b, or a positive value if a is greater than b, or 0 if the two values are the same under the sorting criterion.
     */
    sortValues(comparator: (a: Datum, b: Datum) => number): this;
    /**
     * Specifies a rollup function to be applied on each group of leaf elements and returns this nest operator.
     * The return value of the rollup function will replace the array of leaf values in either the associative array returned by nest.map or nest.object;
     * for nest.entries, it replaces the leaf entry.values with entry.value.
     *
     * If a leaf comparator is specified, the leaf elements are sorted prior to invoking the rollup function.
     *
     * @param func A function computing the rollup value for a group of leaf elements.
     */
    rollup(func: (values: Datum[]) => RollupType): this;
    /**
     * Applies the nest operator to the specified array, returning a nested map.
     *
     * Each entry in the returned map corresponds to a distinct key value returned by the first key function.
     * The entry value depends on the number of registered key functions: if there is an additional key, the value is another map;
     * otherwise, the value is the array of elements filtered from the input array that have the given key value.
     *
     * NOTE:
     *
     * Strictly speaking the return type of this method is:
     *
     * (1) NestedMap<Datum, RollupType>, if at least one key function was defined,
     *
     * (2) Datum[], if neither a key nor a rollup function were defined, and
     *
     * (3) RollupType, if no keys, but a rollup function were defined.
     *
     * Since (2) and (3) are edge cases with little to no practical relevance, they have been omitted in favour of ease-of-use.
     *
     * Should you determine that this simplification creates an issue in practice, please file an issue on
     * https://github.com/DefinitelyTyped/DefinitelyTyped.
     *
     * The formal, generalized return type under (1) is cumbersome to work with in practice. The recommended approach
     * is to define the type of the variable being assigned the return value using knowledge specific to the use-case at hand.
     * I.e. making use of knowing how many keys are applied, and the nature of any roll-up function will make working with
     * the variable more meaningful, despite the compromise in type-safety.
     *
     * @param array An array to create a nested data structure from.
     */
    map(array: Datum[]): Map<any>;
    /**
     * Applies the nest operator to the specified array, returning a nested object.
     * Each entry in the returned associative array corresponds to a distinct key value returned by the first key function.
     * The entry value depends on the number of registered key functions: if there is an additional key, the value is another associative array;
     * otherwise, the value is the array of elements filtered from the input array that have the given key value.
     *
     * WARNING: this method is unsafe if any of the keys conflict with built-in JavaScript properties, such as __proto__.
     * If you cannot guarantee that the keys will be safe, you should use nest.map instead.
     *
     * NOTE:
     *
     * Strictly speaking the return type of this method is:
     *
     * (1) NestedObject<Datum, RollupType>, if at least one key function was defined,
     *
     * (2) Datum[], if neither a key nor a rollup function were defined, and
     *
     * (3) RollupType, if no keys, but a rollup function were defined.
     *
     * Since (2) and (3) are edge cases with little to no practical relevance, they have been omitted in favour of ease-of-use.
     *
     * Should you determine that this simplification creates an issue in practice, please file an issue on
     * https://github.com/DefinitelyTyped/DefinitelyTyped.
     *
     * The formal, generalized return type under (1) is cumbersome to work with in practice. The recommended approach
     * is to define the type of the variable being assigned the return value using knowledge specific to the use-case at hand.
     * I.e. making use of knowing how many keys are applied, and the nature of any roll-up function will make working with
     * the variable more meaningful, despite the compromise in type-safety.
     *
     * @param array An array to create a nested data structure from.
     */
    object(array: Datum[]): { [key: string]: any };
    /**
     * Applies the nest operator to the specified array, returning an array of key-values entries.
     * Conceptually, this is similar to applying map.entries to the associative array returned by nest.map,
     * but it applies to every level of the hierarchy rather than just the first (outermost) level.
     * Each entry in the returned array corresponds to a distinct key value returned by the first key function.
     * The entry value depends on the number of registered key functions: if there is an additional key, the value is another nested array of entries;
     * otherwise, the value is the array of elements filtered from the input array that have the given key value.
     *
     * NOTE:
     *
     * Strictly speaking the return type of this method is:
     *
     * (1) NestedArray<Datum, RollupType>, if at least one key function was defined,
     *
     * (2) Datum[], if neither a key nor a rollup function were defined, and
     *
     * (3) RollupType, if no keys, but a rollup function were defined.
     *
     * Since (2) and (3) are edge cases with little to no practical relevance, they have been omitted in favour of ease-of-use.
     *
     * Should you determine that this simplification creates an issue in practice, please file an issue on
     * https://github.com/DefinitelyTyped/DefinitelyTyped.
     *
     * The formal, generalized return type under (1) is cumbersome to work with in practice. The recommended approach
     * is to define the type of the variable being assigned the return value using knowledge specific to the use-case at hand.
     * I.e. making use of knowing how many keys are applied, and the nature of any roll-up function will make working with
     * the variable more meaningful, despite the compromise in type-safety.
     *
     * @param array An array to create a nested data structure from.
     */
    entries(array: Datum[]): Array<{ key: string; values: any; value: RollupType | undefined }>;
}

/**
 * Creates a new nest operator.
 *
 * The first generic refers to the data type of the array elements on which the nest operator will
 * be invoked.
 *
 * The second generic refers to the data type returned by the roll-up function to be used with the
 * nest operator. If not explicitly set, this generic parameter defaults to undefined, implying that
 * no rollup function will be applied.
 */
export function nest<Datum, RollupType = undefined>(): Nest<Datum, RollupType>;
