declare module goog {
    function require(name: 'goog.math.RangeSet'): typeof goog.math.RangeSet;
}

declare module goog.math {

    /**
     * Constructs a new RangeSet, which can store numeric ranges.
     *
     * Ranges are treated as half-closed: that is, they are exclusive of their end
     * value [start, end).
     *
     * New ranges added to the set which overlap the values in one or more existing
     * ranges will be merged.
     *
     * @struct
     * @constructor
     * @final
     */
    class RangeSet {
        constructor();
        
        /**
         * Compares two sets for equality.
         *
         * @param {goog.math.RangeSet} a A range set.
         * @param {goog.math.RangeSet} b A range set.
         * @return {boolean} Whether both sets contain the same values.
         */
        static equals(a: goog.math.RangeSet, b: goog.math.RangeSet): boolean;
        
        /**
         * @return {!goog.math.RangeSet} A new RangeSet containing the same values as
         *      this one.
         */
        clone(): goog.math.RangeSet;
        
        /**
         * Adds a range to the set. If the new range overlaps existing values, those
         * ranges will be merged.
         *
         * @param {goog.math.Range} a The range to add.
         */
        add(a: goog.math.Range): void;
        
        /**
         * Removes a range of values from the set.
         *
         * @param {goog.math.Range} a The range to remove.
         */
        remove(a: goog.math.Range): void;
        
        /**
         * Determines whether a given range is in the set. Only succeeds if the entire
         * range is available.
         *
         * @param {goog.math.Range} a The query range.
         * @return {boolean} Whether the entire requested range is set.
         */
        contains(a: goog.math.Range): boolean;
        
        /**
         * Determines whether a given value is set in the RangeSet.
         *
         * @param {number} value The value to test.
         * @return {boolean} Whether the given value is in the set.
         */
        containsValue(value: number): boolean;
        
        /**
         * Returns the union of this RangeSet with another.
         *
         * @param {goog.math.RangeSet} set Another RangeSet.
         * @return {!goog.math.RangeSet} A new RangeSet containing all values from
         *     either set.
         */
        union(set: goog.math.RangeSet): goog.math.RangeSet;
        
        /**
         * Subtracts the ranges of another set from this one, returning the result
         * as a new RangeSet.
         *
         * @param {!goog.math.RangeSet} set The RangeSet to subtract.
         * @return {!goog.math.RangeSet} A new RangeSet containing all values in this
         *     set minus the values of the input set.
         */
        difference(set: goog.math.RangeSet): goog.math.RangeSet;
        
        /**
         * Intersects this RangeSet with another.
         *
         * @param {goog.math.RangeSet} set The RangeSet to intersect with.
         * @return {!goog.math.RangeSet} A new RangeSet containing all values set in
         *     both this and the input set.
         */
        intersection(set: goog.math.RangeSet): goog.math.RangeSet;
        
        /**
         * Creates a subset of this set over the input range.
         *
         * @param {goog.math.Range} range The range to copy into the slice.
         * @return {!goog.math.RangeSet} A new RangeSet with a copy of the values in the
         *     input range.
         */
        slice(range: goog.math.Range): goog.math.RangeSet;
        
        /**
         * Creates an inverted slice of this set over the input range.
         *
         * @param {goog.math.Range} range The range to copy into the slice.
         * @return {!goog.math.RangeSet} A new RangeSet containing inverted values from
         *     the original over the input range.
         */
        inverse(range: goog.math.Range): goog.math.RangeSet;
        
        /**
         * @return {number} The sum of the lengths of ranges covered in the set.
         */
        coveredLength(): number;
        
        /**
         * @return {goog.math.Range} The total range this set covers, ignoring any
         *     gaps between ranges.
         */
        getBounds(): goog.math.Range;
        
        /**
         * @return {boolean} Whether any ranges are currently in the set.
         */
        isEmpty(): boolean;
        
        /**
         * Removes all values in the set.
         */
        clear(): void;
        
        /**
         * Returns an iterator that iterates over the ranges in the RangeSet.
         *
         * @param {boolean=} opt_keys Ignored for RangeSets.
         * @return {!goog.iter.Iterator} An iterator over the values in the set.
         */
        __iterator__(opt_keys?: boolean): goog.iter.Iterator<any>;
    }
}
