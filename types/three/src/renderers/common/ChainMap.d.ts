/**
 * Data structure for the renderer. It allows defining values
 * with chained, hierarchical keys. Keys are meant to be
 * objects since the module internally works with Weak Maps
 * for performance reasons.
 *
 * @private
 */
declare class ChainMap {
    /**
     * A map of Weak Maps by their key length.
     *
     * @type {Object<number, WeakMap>}
     */
    weakMaps: {
        [x: number]: WeakMap<object, unknown>;
    };
    /**
     * Returns the Weak Map for the given keys.
     *
     * @param {Array<Object>} keys - List of keys.
     * @return {WeakMap} The weak map.
     */
    _getWeakMap(keys: object[]): WeakMap<object, unknown>;
    /**
     * Returns the value for the given array of keys.
     *
     * @param {Array<Object>} keys - List of keys.
     * @return {any} The value. Returns `undefined` if no value was found.
     */
    get(keys: object[]): unknown;
    /**
     * Sets the value for the given keys.
     *
     * @param {Array<Object>} keys - List of keys.
     * @param {any} value - The value to set.
     * @return {ChainMap} A reference to this Chain Map.
     */
    set(keys: object[], value: unknown): ChainMap;
    /**
     * Deletes a value for the given keys.
     *
     * @param {Array<Object>} keys - The keys.
     * @return {boolean} Returns `true` if the value has been removed successfully and `false` if the value has not be found.
     */
    delete(keys: object[]): boolean;
}

export default ChainMap;
