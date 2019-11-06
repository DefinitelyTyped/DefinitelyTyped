// Type definitions for mergerino 0.4
// Project: https://github.com/fuzetsu/mergerino#readme
// Definitions by: Slawomir "Fivitti" Figiel <https://github.com/fivitti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

// TypeScript in version below 3.4 doesn't correctly support FunctionPatch. Arguments have "any" type.

/**
 * Nice side effect of flattening array arguments is that you can easily
 * add conditions to your patches using nested arrays.
 *
 * Arrays may be nested in any depth.
 */
export interface DeepArray<T> extends ReadonlyArray<T | DeepArray<T>> { }

/**
 * If you want to fully remove a property from an object specify undefined as the value.
 */
export type DeletePatch = undefined;

/**
 * If you want to replace a property based on its current value, use a function.
 *
 * If you pass a function it will receive the current value as the first argument
 * and the merge function as the second. The return value will be the replacement.
 * The value you return will bypass merging logic and simply overwrite the property.
 */
export type FunctionPatch<T> = (val: T, merge: Merge<T extends object ? T : never>) => T;

/**
 * If you want to replace a array specify new array as the value.
 *
 * If you want edit array's item or insert new item specify object as the value.
 * Keys of this object are array's indexes, values are patches of array's items.
 */
export type ArrayPatch<T> = T extends Array<infer V> ? ObjectPatch<Record<number, V>> : never;

/**
 * Mergerino merges immutably meaning that the target object will never be mutated (changed).
 * Instead each object along the path your patch specifies will be shallow copied into a new object.
 */
export type NestedPatch<T> = T extends object ? ObjectPatch<T> : never;

/**
 * 1. Each object along the path your patch specifies will be shallow copied into a new object.
 * 2. Specify undefined as the value fully remove a property from an object.
 * 3. Use a function if you want to replace a property based on its current value.
 */
export type ObjectPatch<S extends object> = { [K in keyof S]?: S[K] | DeletePatch | FunctionPatch<S[K]> | NestedPatch<S[K]> | ArrayPatch<S[K]> };

/**
 * Falsy patches are ignored
 */
export type Falsy = false | 0 | '' | null | undefined;

/**
 * Passing a function as a top level patch acts exactly the same as a function
 * passed to a specific property. It receives the full state object as the first
 * argument, the merge function as the second.
 */
export type TopLevelPatch<S extends object> = FunctionPatch<S> | ObjectPatch<S> | ArrayPatch<S> | Falsy;

/**
 * You can pass multiple patches in a single merge call, array arguments will
 * be flattened before processing.
 */
export type MultipleTopLevelPatch<S extends object> = TopLevelPatch<S> | DeepArray<TopLevelPatch<S>>;

/**
 * Main Mergerino function. An immutable merge util for state management.
 *
 * You can pass multiple patches in a single merge call, array arguments will be flattened before processing.
 * Since falsy patches are ignored.
 */
export type Merge<S extends object> = (source: S, ...patches: Array<MultipleTopLevelPatch<S>>) => S;

/**
 * Main Mergerino function. An immutable merge util for state management.
 *
 * You can pass multiple patches in a single merge call, array arguments will be flattened before processing.
 * Since falsy patches are ignored.
 */
// tslint:disable-next-line:npm-naming
export default function merge<S extends object>(source: S, ...patches: Array<MultipleTopLevelPatch<S>>): S;
// Mergerino uses "default export", but no in minified version which is checked by dtslint.
// This line supress error: The types for mergerino specify 'export default' but the source does not mention 'default' anywhere.
