/*!
 * lunr.SortedSet
 * Copyright (C) @YEAR Oliver Nightingale
 */
/**
 * sorted_set.js is added only to make elasticlunr.js compatible with lunr-languages.
 * if elasticlunr.js support different languages by default, this will make elasticlunr.js
 * much bigger that not good for browser usage.
 */
export declare class SortedSet {
    length: number;
    elements: any[];
    /**
     * lunr.SortedSets are used to maintain an array of uniq values in a sorted
     * order.
     *
     * @constructor
     */
    constructor();
    /**
     * Loads a previously serialised sorted set.
     *
     * @param {Array} serialisedData The serialised set to load.
     * @returns {lunr.SortedSet}
     * @memberOf SortedSet
     */
    static load(serialisedData: any[]): SortedSet;
    /**
     * Inserts new items into the set in the correct position to maintain the
     * order.
     *
     * @param {Object} The objects to add to this set.
     * @memberOf SortedSet
     */
    add(...args: any[]): void;
    /**
     * Converts this sorted set into an array.
     *
     * @returns {Array}
     * @memberOf SortedSet
     */
    toArray(): any[];
    /**
     * Creates a new array with the results of calling a provided function on every
     * element in this sorted set.
     *
     * Delegates to Array.prototype.map and has the same signature.
     *
     * @param {Function} fn The function that is called on each element of the
     * set.
     * @param {Object} ctx An optional object that can be used as the context
     * for the function fn.
     * @returns {Array}
     * @memberOf SortedSet
     */
    map(fn: (item: any) => void, ctx: any): void[];
    /**
     * Executes a provided function once per sorted set element.
     *
     * Delegates to Array.prototype.forEach and has the same signature.
     *
     * @param {Function} fn The function that is called on each element of the
     * set.
     * @param {Object} ctx An optional object that can be used as the context
     * @memberOf SortedSet
     * for the function fn.
     */
    forEach(fn: (item: any) => void, ctx: any): void;
    /**
     * Returns the index at which a given element can be found in the
     * sorted set, or -1 if it is not present.
     *
     * @param {Object} elem The object to locate in the sorted set.
     * @returns {Number}
     * @memberOf SortedSet
     */
    indexOf(elem: any): number;
    /**
     * Returns the position within the sorted set that an element should be
     * inserted at to maintain the current order of the set.
     *
     * This function assumes that the element to search for does not already exist
     * in the sorted set.
     *
     * @param {Object} elem The elem to find the position for in the set
     * @returns {Number}
     * @memberOf SortedSet
     */
    locationFor(elem: any): number;
    /**
     * Creates a new lunr.SortedSet that contains the elements in the intersection
     * of this set and the passed set.
     *
     * @param {lunr.SortedSet} otherSet The set to intersect with this set.
     * @returns {lunr.SortedSet}
     * @memberOf SortedSet
     */
    intersect(otherSet: SortedSet): SortedSet;
    /**
     * Makes a copy of this set
     *
     * @returns {SortedSet}
     * @memberOf SortedSet
     */
    clone(): SortedSet;
    /**
     * Creates a new lunr.SortedSet that contains the elements in the union
     * of this set and the passed set.
     *
     * @param {SortedSet} otherSet The set to union with this set.
     * @returns {SortedSet}
     * @memberOf SortedSet
     */
    union(otherSet: SortedSet): any;
    /**
     * Returns a representation of the sorted set ready for serialisation.
     *
     * @returns {Array}
     * @memberOf SortedSet
     */
    toJSON(): any[];
}
