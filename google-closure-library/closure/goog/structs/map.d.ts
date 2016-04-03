declare module goog {
    function require(name: 'goog.structs.Map'): typeof goog.structs.Map;
}

declare module goog.structs {

    /**
     * Class for Hash Map datastructure.
     * @param {*=} opt_map Map or Object to initialize the map with.
     * @param {...*} var_args If 2 or more arguments are present then they
     *     will be used as key-value pairs.
     * @constructor
     * @template K, V
     */
    class Map<K, V> {
        constructor(opt_map?: any, ...var_args: any[]);
        
        /**
         * @return {number} The number of key-value pairs in the map.
         */
        getCount(): number;
        
        /**
         * Returns the values of the map.
         * @return {!Array<V>} The values in the map.
         */
        getValues(): Array<V>;
        
        /**
         * Returns the keys of the map.
         * @return {!Array<string>} Array of string values.
         */
        getKeys(): Array<string>;
        
        /**
         * Whether the map contains the given key.
         * @param {*} key The key to check for.
         * @return {boolean} Whether the map contains the key.
         */
        containsKey(key: any): boolean;
        
        /**
         * Whether the map contains the given value. This is O(n).
         * @param {V} val The value to check for.
         * @return {boolean} Whether the map contains the value.
         */
        containsValue(val: V): boolean;
        
        /**
         * Whether this map is equal to the argument map.
         * @param {goog.structs.Map} otherMap The map against which to test equality.
         * @param {function(V, V): boolean=} opt_equalityFn Optional equality function
         *     to test equality of values. If not specified, this will test whether
         *     the values contained in each map are identical objects.
         * @return {boolean} Whether the maps are equal.
         */
        equals(otherMap: goog.structs.Map<any, any>, opt_equalityFn?: (arg0: V, arg1: V) => boolean): boolean;
        
        /**
         * Default equality test for values.
         * @param {*} a The first value.
         * @param {*} b The second value.
         * @return {boolean} Whether a and b reference the same object.
         */
        static defaultEquals(a: any, b: any): boolean;
        
        /**
         * @return {boolean} Whether the map is empty.
         */
        isEmpty(): boolean;
        
        /**
         * Removes all key-value pairs from the map.
         */
        clear(): void;
        
        /**
         * Removes a key-value pair based on the key. This is O(logN) amortized due to
         * updating the keys array whenever the count becomes half the size of the keys
         * in the keys array.
         * @param {*} key  The key to remove.
         * @return {boolean} Whether object was removed.
         */
        remove(key: any): boolean;
        
        /**
         * Returns the value for the given key.  If the key is not found and the default
         * value is not given this will return {@code undefined}.
         * @param {*} key The key to get the value for.
         * @param {DEFAULT=} opt_val The value to return if no item is found for the
         *     given key, defaults to undefined.
         * @return {V|DEFAULT} The value for the given key.
         * @template DEFAULT
         */
        get<DEFAULT>(key: any, opt_val?: DEFAULT): V|DEFAULT;
        
        /**
         * Adds a key-value pair to the map.
         * @param {*} key The key.
         * @param {V} value The value to add.
         * @return {*} Some subclasses return a value.
         */
        set(key: any, value: V): any;
        
        /**
         * Adds multiple key-value pairs from another goog.structs.Map or Object.
         * @param {Object} map  Object containing the data to add.
         */
        addAll(map: Object): void;
        
        /**
         * Calls the given function on each entry in the map.
         * @param {function(this:T, V, K, goog.structs.Map<K,V>)} f
         * @param {T=} opt_obj The value of "this" inside f.
         * @template T
         */
        forEach<T>(f: (arg0: V, arg1: K, arg2: goog.structs.Map<K, V>) => any, opt_obj?: T): void;
        
        /**
         * Clones a map and returns a new map.
         * @return {!goog.structs.Map} A new map with the same key-value pairs.
         */
        clone(): goog.structs.Map<any, any>;
        
        /**
         * Returns a new map in which all the keys and values are interchanged
         * (keys become values and values become keys). If multiple keys map to the
         * same value, the chosen transposed value is implementation-dependent.
         *
         * It acts very similarly to {goog.object.transpose(Object)}.
         *
         * @return {!goog.structs.Map} The transposed map.
         */
        transpose(): goog.structs.Map<any, any>;
        
        /**
         * @return {!Object} Object representation of the map.
         */
        toObject(): Object;
        
        /**
         * Returns an iterator that iterates over the keys in the map.  Removal of keys
         * while iterating might have undesired side effects.
         * @return {!goog.iter.Iterator} An iterator over the keys in the map.
         */
        getKeyIterator(): goog.iter.Iterator<any>;
        
        /**
         * Returns an iterator that iterates over the values in the map.  Removal of
         * keys while iterating might have undesired side effects.
         * @return {!goog.iter.Iterator} An iterator over the values in the map.
         */
        getValueIterator(): goog.iter.Iterator<any>;
        
        /**
         * Returns an iterator that iterates over the values or the keys in the map.
         * This throws an exception if the map was mutated since the iterator was
         * created.
         * @param {boolean=} opt_keys True to iterate over the keys. False to iterate
         *     over the values.  The default value is false.
         * @return {!goog.iter.Iterator} An iterator over the values or keys in the map.
         */
        __iterator__(opt_keys?: boolean): goog.iter.Iterator<any>;
    }
}
