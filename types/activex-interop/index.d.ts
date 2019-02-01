// Type definitions for Javascript Automation interop 0.0
// Project: https://msdn.microsoft.com/en-us/library/ff521046(v=vs.85).aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

// tslint:disable-next-line no-empty-interface
interface ActiveXObjectNameMap { }

interface ActiveXObject {
    new <K extends keyof ActiveXObjectNameMap>(progid: K): ActiveXObjectNameMap[K];
    new(s: string): any;
}
declare var ActiveXObject: ActiveXObject;

/**
 * Represents an Automation SAFEARRAY
 */
declare class SafeArray<T = any> {
    private constructor();
    private SafeArray_typekey: SafeArray<T>;
}

/**
 * Allows enumerating over a COM collection, which may not have indexed item access.
 */
interface Enumerator<T = any> {
    /**
     * Returns true if the current item is the last one in the collection, or the collection is empty,
     * or the current item is undefined.
     */
    atEnd(): boolean;

    /**
     * Returns the current item in the collection
     */
    item(): T;

    /**
     * Resets the current item in the collection to the first item. If there are no items in the collection,
     * the current item is set to undefined.
     */
    moveFirst(): void;

    /**
     * Moves the current item to the next item in the collection. If the enumerator is at the end of
     * the collection or the collection is empty, the current item is set to undefined.
     */
    moveNext(): void;
}

interface EnumeratorConstructor {
    new <T = any>(collection: { Item(index: any): T }): Enumerator<T>;
}

declare var Enumerator: EnumeratorConstructor;

/**
 * Enables reading from a COM safe array, which might have an alternate lower bound, or multiple dimensions.
 */
interface VBArray<T = any> {
    /**
     * Returns the number of dimensions (1-based).
     */
    dimensions(): number;

    /**
     * Takes an index for each dimension in the array, and returns the item at the corresponding location.
     */
    getItem(dimension1Index: number, ...dimensionNIndexes: number[]): T;

    /**
     * Returns the smallest available index for a given dimension.
     * @param dimension 1-based dimension (defaults to 1)
     */
    lbound(dimension?: number): number;

    /**
     * Returns the largest available index for a given dimension.
     * @param dimension 1-based dimension (defaults to 1)
     */
    ubound(dimension?: number): number;

    /**
     * Returns a Javascript array with all the elements in the VBArray. If there are multiple dimensions,
     * each successive dimension is appended to the end of the array.
     * Example: [[1,2,3],[4,5,6]] becomes [1,2,3,4,5,6]
     */
    toArray(): T[];
}

interface VBArrayConstructor {
    new <T = any>(safeArray: SafeArray<T>): VBArray<T>;
}

declare var VBArray: VBArrayConstructor;

/** Automation date (VT_DATE) */
declare class VarDate {
    private constructor();
    private VarDate_typekey: VarDate;
}

interface DateConstructor {
    new(vd: VarDate): Date;
}

interface Date {
    getVarDate: () => VarDate;
}
