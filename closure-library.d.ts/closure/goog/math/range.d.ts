declare module goog {
    function require(name: 'goog.math.Range'): typeof goog.math.Range;
}

declare module goog.math {

    /**
     * A number range.
     * @param {number} a One end of the range.
     * @param {number} b The other end of the range.
     * @struct
     * @constructor
     */
    class Range {
        constructor(a: number, b: number);
        
        /**
         * Creates a goog.math.Range from an array of two numbers.
         * @param {!Array<number>} pair
         * @return {!goog.math.Range}
         */
        static fromPair(pair: Array<number>): goog.math.Range;
        
        /**
         * @return {!goog.math.Range} A clone of this Range.
         */
        clone(): goog.math.Range;
        
        /**
         * @return {number} Length of the range.
         */
        getLength(): number;
        
        /**
         * Extends this range to include the given point.
         * @param {number} point
         */
        includePoint(point: number): void;
        
        /**
         * Extends this range to include the given range.
         * @param {!goog.math.Range} range
         */
        includeRange(range: goog.math.Range): void;
        
        /**
         * Compares ranges for equality.
         * @param {goog.math.Range} a A Range.
         * @param {goog.math.Range} b A Range.
         * @return {boolean} True iff both the starts and the ends of the ranges are
         *     equal, or if both ranges are null.
         */
        static equals(a: goog.math.Range, b: goog.math.Range): boolean;
        
        /**
         * Given two ranges on the same dimension, this method returns the intersection
         * of those ranges.
         * @param {goog.math.Range} a A Range.
         * @param {goog.math.Range} b A Range.
         * @return {goog.math.Range} A new Range representing the intersection of two
         *     ranges, or null if there is no intersection. Ranges are assumed to
         *     include their end points, and the intersection can be a point.
         */
        static intersection(a: goog.math.Range, b: goog.math.Range): goog.math.Range;
        
        /**
         * Given two ranges on the same dimension, determines whether they intersect.
         * @param {goog.math.Range} a A Range.
         * @param {goog.math.Range} b A Range.
         * @return {boolean} Whether they intersect.
         */
        static hasIntersection(a: goog.math.Range, b: goog.math.Range): boolean;
        
        /**
         * Given two ranges on the same dimension, this returns a range that covers
         * both ranges.
         * @param {goog.math.Range} a A Range.
         * @param {goog.math.Range} b A Range.
         * @return {!goog.math.Range} A new Range representing the bounding
         *     range.
         */
        static boundingRange(a: goog.math.Range, b: goog.math.Range): goog.math.Range;
        
        /**
         * Given two ranges, returns true if the first range completely overlaps the
         * second.
         * @param {goog.math.Range} a The first Range.
         * @param {goog.math.Range} b The second Range.
         * @return {boolean} True if b is contained inside a, false otherwise.
         */
        static contains(a: goog.math.Range, b: goog.math.Range): boolean;
        
        /**
         * Given a range and a point, returns true if the range contains the point.
         * @param {goog.math.Range} range The range.
         * @param {number} p The point.
         * @return {boolean} True if p is contained inside range, false otherwise.
         */
        static containsPoint(range: goog.math.Range, p: number): boolean;
    }
}
