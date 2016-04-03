declare module goog {
    function require(name: 'goog.labs.structs.Map'): typeof goog.labs.structs.Map;
}

declare module goog.labs.structs {

    /**
     * Creates a new map.
     * @constructor
     * @struct
     * @final
     */
    class Map {
        constructor();
        
        /**
         * Adds the (key, value) pair, overriding previous entry with the same
         * key, if any.
         * @param {string} key The key.
         * @param {*} value The value.
         */
        set(key: string, value: any): void;
        
        /**
         * Gets the value for the given key.
         * @param {string} key The key whose value we want to retrieve.
         * @param {*=} opt_default The default value to return if the key does
         *     not exist in the map, default to undefined.
         * @return {*} The value corresponding to the given key, or opt_default
         *     if the key does not exist in this map.
         */
        get(key: string, opt_default?: any): any;
        
        /**
         * Removes the map entry with the given key.
         * @param {string} key The key to remove.
         * @return {boolean} True if the entry is removed.
         */
        remove(key: string): boolean;
        
        /**
         * Adds the content of the map to this map. If a new entry uses a key
         * that already exists in this map, the existing key is replaced.
         * @param {!goog.labs.structs.Map} map The map to add.
         */
        addAll(map: goog.labs.structs.Map): void;
        
        /**
         * @return {boolean} True if the map is empty.
         */
        isEmpty(): boolean;
        
        /**
         * @return {number} The number of the entries in this map.
         */
        getCount(): number;
        
        /**
         * @param {string} key The key to check.
         * @return {boolean} True if the map contains the given key.
         */
        containsKey(key: string): boolean;
        
        /**
         * Whether the map contains the given value. The comparison is done
         * using !== comparator. Also returns true if the passed value is NaN
         * and a NaN value exists in the map.
         * @param {*} value Value to check.
         * @return {boolean} True if the map contains the given value.
         */
        containsValue(value: any): boolean;
        
        /**
         * @return {!Array<string>} An array of all the keys contained in this map.
         */
        getKeys(): Array<string>;
        
        /**
         * @return {!Array<*>} An array of all the values contained in this map.
         *     There may be duplicates.
         */
        getValues(): Array<any>;
        
        /**
         * @return {!Array<Array<?>>} An array of entries. Each entry is of the
         *     form [key, value]. Do not rely on consistent ordering of entries.
         */
        getEntries(): Array<Array<any>>;
        
        /**
         * Clears the map to the initial state.
         */
        clear(): void;
        
        /**
         * Clones this map.
         * @return {!goog.labs.structs.Map} The clone of this map.
         */
        clone(): goog.labs.structs.Map;
    }
}

declare module goog.labs.structs.Map {

    /**
     * Browser feature enum necessary for map.
     * @enum {boolean}
     */
    type BrowserFeature = boolean;
    var BrowserFeature: {
        OBJECT_CREATE_SUPPORTED: BrowserFeature;
        OBJECT_KEYS_SUPPORTED: BrowserFeature;
    };
}
