/**
 * Plain object or boolean data for an ObjectMask instance.
 */
export type Mask = MaskObj | MaskObj[] | boolean;

/**
 * Plain object data for an ObjectMask instance.
 */
export interface MaskObj {
    [key: string]: Mask;
}

/**
 * Interface for "masked out" hook functions.
 */
export interface MaskedOutHook {
    /**
     * Call signature
     * @param path -  Path on the object that was masked out
     */
    (path: string): void;
}

/**
 * Interface for `onField` and `onChange` hooks for the `syncObject` function.
 */
export interface OnFieldHook {
    /**
     * Call signature.
     * @param field - The field name (dot-separated notation)
     * @param toVal - What the field is being changed to
     * @param fromVal - What the field used to be
     * @param parentObj - The immediate parent object containing the field
     * @returns Usually void, if boolean `false` is returned will stop traversal
     *   in the case of an `onField` hook.
     */
    (
        field: string,
        toVal: any,
        fromVal: any,
        parentObj: Record<string, any>,
    ): any;
}

export interface SyncObjectOptions {
    /**
     * An optional callback to call whenever a field is traversed during this
     * function.  If it returns a boolean `false`, any modification is prevented
     * and further subfields will not be traversed.
     */
    onField: OnFieldHook;

    /**
     * Optional function to be called when a value changes.
     */
    onChange: OnFieldHook;
}

/**
 * Represents a mask, or whitelist, of fields on an object.
 *
 * @remarks
 * This class represents a mask, or whitelist, of fields on an object. Such
 * a mask is stored in a format that looks like this:
 *
 * { foo: true, bar: { baz: true } }
 *
 * This mask applies to the properties "foo" and "bar.baz" on an object.
 * Wilcards can also be used:
 *
 * { foo: false, bar: false, _: true }
 *
 * This will allow all fields but foo and bar. The use of arrays with
 * a single element is equivalent to the use of wildcards, as arrays in
 * the masked object are treated as objects with numeric keys. These
 * two masks are equivalent:
 *
 * { foo: [ { bar: true, baz: true } ] }
 *
 * { foo: { _: { bar: true, baz: true } } }
 *
 * Note: array-type wildcards are converted to underscores on instantiation
 */
export class ObjectMask {
    /**
     * Creates an ObjectMask.
     * @param mask The data for the mask
     */
    constructor(mask: Mask);

    /**
     * Creates a structured mask given a list of fields that should be included
     * in the mask.
     * @param fields - Array of fields to include
     * @returns The created mask
     */
    static createMaskFromFieldList(fields: string[]): ObjectMask;

    /**
     * Combines two or more masks such that the result mask matches fields
     * matched by any of the combined masks.
     * @param masks - Mask data or ObjectMask instances ot add.
     * @returns The result of adding together the component masks. Will be
     *   `true` if either of the masks is `true` or an ObjectMask wrapping
     *   `true`.
     */
    static addMasks(...masks: Array<ObjectMask | Mask>): ObjectMask | true;

    /**
     * Combines two or more masks such that the result mask matches fields
     * matched by the first mask but not the second
     * @param min - the minuend
     * @param sub - the subtrahend
     * @returns The result of subtracting the second mask from the first
     */
    static subtractMasks(
        min: ObjectMask | Mask,
        sub: ObjectMask | Mask,
    ): ObjectMask;

    /**
     * Inverts a mask. The resulting mask disallows all fields previously
     * allowed, and allows all fields previously disallowed.
     * @param - the mask to invert
     * @returns the inverted mask
     */
    static invertMask(mask: ObjectMask | Mask): ObjectMask;

    /**
     * Check if an object is an ObjectMask
     * @param obj - the object to determine if is an ObjectMask
     * @returns true if obj is an ObjectMask, false otherwise
     */
    static isObjectMask(mask: ObjectMask | Mask): boolean;

    /**
     * Adds a set of masks together, but using a logical AND instead of a
     * logical OR (as in addMasks). IE, a field must be allowed in all given
     * masks to be in the result mask.
     * @param masks - Mask data or ObjectMask instances.
     * @returns The result of ANDing together the component masks. Will be
     *   `false` if the result would be an empty mask.
     */
    static andMasks(...masks: Array<ObjectMask | Mask>): ObjectMask | false;

    /**
     * Subtracts a mask.
     * @param mask - the mask to subtract
     * @returns the new mask
     */
    subtractMask(mask: ObjectMask | Mask): ObjectMask;

    /**
     * Adds a field to a filter. If the filter already matches, the method is a
     * no-op.
     * @param path - the dotted path to the field to add
     * @returns returns self
     */
    addField(path: string): this;

    /**
     * Removes a field from a filter. If the mask already does not match, the
     * method is a no-op.
     * @param path - the dotted path to the field to remove
     * @returns returns self
     */
    removeField(path: string): this;

    /**
     * Returns a copy of the given object, but only including the fields allowed
     * by the mask.
     *
     * @remarks
     * If the maskedOutHook function is provided, it is called for each field
     * disallowed by the mask (at the highest level it is disallowed).
     *
     * @param obj - Object to filter
     * @param maskedOutHook - Function to call for fields disallowed
     * by the mask
     */
    filterObject(
        obj: Record<string, any>,
        maskedOutHook?: MaskedOutHook,
    ): Record<string, any>;

    /**
     * Returns a subsection of a mask given a dot-separated path to the
     * subsection.
     * @param path - Dot-separated path to submask to fetch
     * @returns Mask component corresponding to the path
     */
    getSubMask(path: string): ObjectMask;

    /**
     * Returns true if the given path is allowed by the mask. false otherwise.
     * @param path - Dot-separated path
     * @returns Whether or not the given path is allowed
     */
    checkPath(path: string): boolean;

    /**
     * Make a deep copy of the mask.
     * @returns Created copy.
     */
    clone(): ObjectMask;

    /**
     * Returns the internal object that represents this mask.
     * @returns Object representation of this mask
     */
    toObject(): Mask;

    /**
     * Check if a mask is valid in strict form (ie, it only contains objects and
     * booleans)
     * @return Whether or not the mask is strictly valid
     */
    validate(): boolean;

    /**
     * Returns an array of fields in the given object which are restricted by
     * the given mask
     * @param obj - The object to check against
     * @returns Paths to fields that are restricted by the mask
     */
    getMaskedOutFields(obj: Record<string, any>): string[];

    /**
     * Given a dot-notation mapping from fields to values, remove all fields
     * that are not allowed by the mask.
     * @param dottedObj - Map from dotted paths to values, such as
     *   { "foo.bar": "baz" }
     * @param maskedOutHook - Function to call for removed fields
     * @returns The result
     */
    filterDottedObject(
        dottedObj: Record<string, any>,
        maskedOutHook?: MaskedOutHook,
    ): Record<string, any>;

    /**
     * Returns an array of fields in the given object which are restricted by
     * the given mask. The object is in dotted notation as in
     * filterDottedObject()
     * @param obj - The object to check against
     * @returns Paths to fields that are restricted by the mask
     */
    getDottedMaskedOutFields(obj: Record<string, any>): string[];

    /**
     * Given a structured document, ensures that all fields are allowed by the
     * given mask. Returns true or false.
     * @param obj - Object to check.
     * @returns The check result
     */
    checkFields(obj: Record<string, any>): boolean;

    /**
     * Given a dot-notation mapping from fields to values (only 1 level deep is
     * checked), ensure that all fields are in the (structured) mask.
     * @param dottedObj - Mapping from dot-separated paths to values
     * @returns The check result.
     */
    checkDottedFields(dottedObj: Record<string, any>): boolean;

    /**
     * Returns a function that filters object fields based on a structured
     * mask/whitelist.
     * @returns A function(obj) that is the equivalent of callingfilterObject()
     * on obj.
     */
    createFilterFunc(): (obj: Record<string, any>) => Record<string, any>;
}

/**
 * Determines whether a value is considered a scalar or an object.
 *
 * @remarks
 * Currently, primitives plus Date types plus undefined and null plus functions
 * are considered scalar.
 *
 * @param value - Value to check
 * @returns The check result
 */
export function isScalar(val: any): boolean;

/**
 * Returns true if the given value is considered a terminal value for traversal
 * operations.
 *
 * @remarks
 * Terminal values are as follows:
 * - Any scalars (anything isScalar() returns true for)
 * - Any non-plain objects, other than arrays
 *
 * @param value- Value to check
 * @returns The check result
 */
export function isTerminal(val: any): boolean;

/**
 * Checks for deep equality between two object or values.
 * @param a - First value to check.
 * @param b - Second value to check.
 * @returns The check result.
 */
export function deepEquals(a: any, b: any): boolean;

/**
 * Checks whether two scalar values (as determined by isScalar()) are equal.
 * @param a - First value
 * @param b - Second value
 * @returns The check result.
 */
export function scalarEquals(a: any, b: any): boolean;

/**
 * Returns a deep copy of the given value such that entities are not passed
 * by reference.
 * @param obj - The object or value to copy
 * @returns The copied object or value
 */
export function deepCopy(obj: any): any;

/**
 * Given an object, converts it into a one-level-deep object where the keys are
 * dot-separated paths and the values are the values at those paths.
 * @param obj - The object to convert
 * @param includeRedundantLevels - If set to true, the returned object also
 * includes keys for internal objects.  By default, an object such as
 * { foo: { bar: "baz"} } will be converted into { "foo.bar": "baz" }.  If
 * includeRedundantLevels is set, it will instead be converted into
 * { "foo": { bar: "baz" }, "foo.bar": "baz" } .
 * @param stopAtArrays - If set to true, the collapsing function will not
 *   descend into arrays.
 * @returns The result
 */
export function collapseToDotted(
    obj: Record<string, any>,
    includeRedundantLevels?: boolean,
    stopAtArrays?: boolean,
): Record<string, any>;

/**
 * Returns whether or not the given query fields (in dotted notation) match the
 * document (also in dotted notation).  The "queries" here are simple equality
 * matches.
 * @param doc - The document to test
 * @param query - A one-layer-deep set of key/values to check doc for
 * @returns Whether or not the doc matches
 */
export function matchDottedObject(
    doc: Record<string, any>,
    query: Record<string, any>,
): boolean;

/**
 * Same as matchDottedObject, but for non-dotted objects and queries.
 * Deprecated, as it is    equivalent to lodash.isMatch(), which we delegate to.
 * @deprecated
 * @param doc - Object to match against, in structured (not dotted) form
 * @param query - Set of fields (in structed form) to match
 * @returns Whether or not the object matches
 */
export function matchObject(
    doc: Record<string, any>,
    query: Record<string, any>,
): boolean;

/**
 * Synchronizes one object to another object, in-place.  Updates to the existing
 * object are done in-place as much as possible.  Full objects are only replaced
 * if necessary.
 * @param toObj - The object to modify
 * @param fromObj - The object to copy from
 * @param options - Options object.
 * @returns The resulting object (usually the same object as toObj)
 */
export function syncObject(
    toObj: Record<string, any>,
    fromObj: Record<string, any>,
    options?: SyncObjectOptions,
): Record<string, any>;

/**
 * Sets the value at a given path in an object.
 * @param obj - The object
 * @param path - The path, dot-separated
 * @param value - Value to set
 * @returns The same object
 */
export function setPath(
    obj: Record<string, any>,
    path: string,
    value: any,
): Record<string, any>;

/**
 * Deletes the value at a given path in an object.
 * @param obj - The object
 * @param path - The path, dot-separated
 * @returns The object that was passed in
 */

export function deletePath(
    obj: Record<string, any>,
    path: string,
): Record<string, any>;

/**
 * Gets the value at a given path in an object.
 * @param obj - The object
 * @param path - The path, dot-separated
 * @param allowSkipArrays - If true: If a field in an object is an array and the
 * path key is non-numeric, and the array has exactly 1 element, then the first
 * element of the array is used.
 * @return The value at the path
 */
export function getPath(
    obj: Record<string, any>,
    path: string,
    allowSkipArrays?: boolean,
): any;

/**
 * This is the "light", more performant version of `merge()`.  It does not
 * support a customizer function or being used as a lodash iterator.
 * @param object - the destination object
 * @param sources - the source object
 * @returns the merged object
 */
export function mergeLight<TTarget, TSource>(
    target: TTarget,
    source: TSource,
): TTarget & TSource;

/**
 * @see objtools.mergeLight
 */
export function mergeLight<TTarget, TSource1, TSource2>(
    target: TTarget,
    source1: TSource1,
    source2: TSource2,
): TTarget & TSource1 & TSource2;

/**
 * @see objtools.mergeLight
 */
export function mergeLight<TTarget, TSource1, TSource2, TSource3>(
    target: TTarget,
    source1: TSource1,
    source2: TSource2,
    source3: TSource3,
): TTarget & TSource1 & TSource2 & TSource3;

/**
 * @see objtools.mergeLight
 */
export function mergeLight<TTarget, TSource1, TSource2, TSource3, TSource4>(
    target: TTarget,
    source1: TSource1,
    source2: TSource2,
    source3: TSource3,
    source4: TSource4,
): TTarget & TSource1 & TSource2 & TSource3 & TSource4;

/**
 * @see objtools.mergeLight
 */
export function mergeLight(...args: any[]): any;

/**
 * Type for merge customizer functions.
 * @param objectValue - the value at `key` in the base object
 * @param sourceValue - the value at `key` in the source object
 * @param key - the key currently being merged
 * @param object - the base object
 * @param source - the source object
 * @returns The merged value. If `undefined`, merging will be handled by the
 *   invoked method instead.
 */
export type MergeCustomizer = {
    bivariantHack(
        objectValue: any,
        sourceValue: any,
        key: string,
        object: any,
    ): any;
}["bivariantHack"];

/**
 * Merges n objects together.
 * @param object - the destination object
 * @param sources - the source object
 * @param customizer - the function to customize merging properties. If
 *   provided, customizer is invoked to produce the merged values of the
 *   destination and source properties. If customizer returns undefined, merging
 *   is handled by the method instead.
 * @returns the merged object
 */
export function merge<TTarget, TSource>(
    target: TTarget,
    source: TSource,
    customizer?: MergeCustomizer,
): TTarget & TSource;

/**
 * @see objtools.merge
 */
export function merge<TTarget, TSource1, TSource2>(
    target: TTarget,
    source1: TSource1,
    source2: TSource2,
    customizer?: MergeCustomizer,
): TTarget & TSource1 & TSource2;

/**
 * @see objtools.merge
 */
export function merge<TTarget, TSource1, TSource2, TSource3>(
    target: TTarget,
    source1: TSource1,
    source2: TSource2,
    source3: TSource3,
    customizer?: MergeCustomizer,
): TTarget & TSource1 & TSource2 & TSource3;

/**
 * @see objtools.merge
 */
export function merge<TTarget, TSource1, TSource2, TSource3, TSource4>(
    target: TTarget,
    source1: TSource1,
    source2: TSource2,
    source3: TSource3,
    source4: TSource4,
    customizer?: MergeCustomizer,
): TTarget & TSource1 & TSource2 & TSource3 & TSource4;

/**
 * @see objtools.merge
 */
export function merge(...args: any[]): any;

/**
 * This is the "heavy" version of `merge()`, which is significantly less
 * performant than the light version, but supports customizers and being used as
 * a lodash iterator.
 * @param object - the destination object
 * @param sources - the source object
 * @param customizer - the function to customize merging properties. If
 *   provided, customizer is invoked to produce the merged values of the
 *   destination and source properties. If customizer returns undefined, merging
 *   is handled by the method instead.
 * @return the merged object
 */
export function mergeHeavy<TTarget, TSource>(
    target: TTarget,
    source: TSource,
    customizer?: MergeCustomizer,
): TTarget & TSource;

/**
 * @see objtools.mergeHeavy
 */
export function mergeHeavy<TTarget, TSource1, TSource2>(
    target: TTarget,
    source1: TSource1,
    source2: TSource2,
    customizer?: MergeCustomizer,
): TTarget & TSource1 & TSource2;

/**
 * @see objtools.mergeHeavy
 */
export function mergeHeavy<TTarget, TSource1, TSource2, TSource3>(
    target: TTarget,
    source1: TSource1,
    source2: TSource2,
    source3: TSource3,
    customizer?: MergeCustomizer,
): TTarget & TSource1 & TSource2 & TSource3;

/**
 * @see objtools.mergeHeavy
 */
export function mergeHeavy<TTarget, TSource1, TSource2, TSource3, TSource4>(
    target: TTarget,
    source1: TSource1,
    source2: TSource2,
    source3: TSource3,
    source4: TSource4,
    customizer?: MergeCustomizer,
): TTarget & TSource1 & TSource2 & TSource3 & TSource4;

/**
 * @see objtools.mergeHeavy
 */
export function mergeHeavy(...args: any[]): any;

/**
 * Gets the duplicates in an array
 * @param  arr - the array to find duplicates in
 * @returns array of the duplicates in arr
 */
export function getDuplicates(arr: any[]): any[];

/**
 * Diffs n objects
 * @param objects - the objects to diff
 * @returns If no scalars are passed, returns an object with arrays of values at
 *   every path from which all source objects are different. If scalars are
 *   passed, the return value is an array with non-numeric fields. Terminal
 *   arrays will contain objects only if they contain no overlapping keys. See
 *   README.md for usage examples.
 */
export function diffObjects(
    ...objects: Array<Record<string, any>>
): Record<string, any>;

/**
 * @see objtools.diffObjects
 */
export function diffObjects(...args: any[]): any;

/**
 * Diffs two objects
 * @param val1 - the first value to diff
 * @param val2 - the second value to diff
 * @returns an array of dot-separated paths to the shallowest branches present
 *   in both objects from which there are no identical scalar values.
 */
export function dottedDiff(val1: any, val2: any): string[];

/**
 * Construct a consistent hash of an object, array, or other Javascript entity.
 * @param obj - The object to hash.
 * @return The hash string. Long enough so collisions are extremely unlikely.
 */
export function objectHash(obj: any): string;

/**
 * Converts a date string, number of miliseconds or object with a date field
 * into an instance of Date. It will return the same instance if a Date instance
 * is passed in.
 * @param value - the value to convert
 * @returns the converted Date instance
 */
export function sanitizeDate(value: any): Date | null;

/**
 * Checks if value is a plain object, that is, an object created by the Object
 * constructor or one with a [[Prototype]] of null.
 * @param val - Value to check
 * @returns Check result
 */
export function isPlainObject(val: any): boolean;

/**
 * Checks if value is an object or array
 * @param val - Value to check
 * @returns Check result
 */
export function isEmptyObject(val: any): boolean;

/**
 * Checks if value is an empty array
 * @param val - Value to check
 * @returns Check result
 */
export function isEmptyArray(val: any): boolean;

/**
 * Checks if value is an empty object or array
 * @param val - Value to check
 * @returns Check result
 */
export function isEmpty(val: any): boolean;
