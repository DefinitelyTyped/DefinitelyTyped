declare module goog {
    function require(name: 'goog.db.KeyRange'): typeof goog.db.KeyRange;
}

declare module goog.db {

    /**
     * Creates a new IDBKeyRange wrapper object. Should not be created directly,
     * instead use one of the static factory methods. For example:
     * @see goog.db.KeyRange.bound
     * @see goog.db.KeyRange.lowerBound
     *
     * @param {!IDBKeyRange} range Underlying IDBKeyRange object.
     * @constructor
     * @final
     */
    class KeyRange {
        constructor(range: IDBKeyRange);
        
        /**
         * Creates a new key range for a single value.
         *
         * @param {IDBKeyType} key The single value in the range.
         * @return {!goog.db.KeyRange} The key range.
         */
        static only(key: IDBKeyType): goog.db.KeyRange;
        
        /**
         * Creates a key range with upper and lower bounds.
         *
         * @param {IDBKeyType} lower The value of the lower bound.
         * @param {IDBKeyType} upper The value of the upper bound.
         * @param {boolean=} opt_lowerOpen If true, the range excludes the lower bound
         *     value.
         * @param {boolean=} opt_upperOpen If true, the range excludes the upper bound
         *     value.
         * @return {!goog.db.KeyRange} The key range.
         */
        static bound(lower: IDBKeyType, upper: IDBKeyType, opt_lowerOpen?: boolean, opt_upperOpen?: boolean): goog.db.KeyRange;
        
        /**
         * Creates a key range with a lower bound only, finishes at the last record.
         *
         * @param {IDBKeyType} lower The value of the lower bound.
         * @param {boolean=} opt_lowerOpen If true, the range excludes the lower bound
         *     value.
         * @return {!goog.db.KeyRange} The key range.
         */
        static lowerBound(lower: IDBKeyType, opt_lowerOpen?: boolean): goog.db.KeyRange;
        
        /**
         * Creates a key range with a upper bound only, starts at the first record.
         *
         * @param {IDBKeyType} upper The value of the upper bound.
         * @param {boolean=} opt_upperOpen If true, the range excludes the upper bound
         *     value.
         * @return {!goog.db.KeyRange} The key range.
         */
        static upperBound(upper: IDBKeyType, opt_upperOpen?: boolean): goog.db.KeyRange;
        
        /**
         * Returns underlying key range object. This is used in ObjectStore's openCursor
         * and count methods.
         * @return {!IDBKeyRange}
         */
        range(): IDBKeyRange;
    }
}
