type RecursiveWeakMap<K extends readonly object[], V> = WeakMap<K[number], V | RecursiveWeakMap<K, V>>;
/**
 * Data structure for the renderer. It allows defining values
 * with chained, hierarchical keys. Keys are meant to be
 * objects since the module internally works with Weak Maps
 * for performance reasons.
 *
 * @private
 */
declare class ChainMap<K extends readonly object[], V> {
    weakMaps: Record<number, RecursiveWeakMap<K, V>>;
    /**
     * Constructs a new Chain Map.
     */
    constructor();
    /**
     * Returns the Weak Map for the given keys.
     *
     * @param {Array<Object>} keys - List of keys.
     * @return {WeakMap} The weak map.
     */
    _getWeakMap(keys: K): RecursiveWeakMap<K, V>;
    /**
     * Returns the value for the given array of keys.
     *
     * @param {Array<Object>} keys - List of keys.
     * @return {any} The value. Returns `undefined` if no value was found.
     */
    get(keys: K): V | undefined;
    /**
     * Sets the value for the given keys.
     *
     * @param {Array<Object>} keys - List of keys.
     * @param {any} value - The value to set.
     * @return {ChainMap} A reference to this Chain Map.
     */
    set(keys: K, value: V): this;
    /**
     * Deletes a value for the given keys.
     *
     * @param {Array<Object>} keys - The keys.
     * @return {boolean} Returns `true` if the value has been removed successfully and `false` if the value has not be found.
     */
    delete(keys: K): boolean;
}
export default ChainMap;
