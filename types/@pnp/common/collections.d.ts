/**
 * Interface defining an object with a known property type
 */
export interface ITypedHash<T> {
    [key: string]: T;
}
/**
 * Converts the supplied object to a map
 *
 * @param o The object to map
 */
export declare function objectToMap<K, V>(o: any): Map<K, V>;
/**
 * Merges to Map instances together, overwriting values in target with matching keys, last in wins
 *
 * @param target map into which the other maps are merged
 * @param maps One or more maps to merge into the target
 */
export declare function mergeMaps<K, V>(target: Map<K, V>, ...maps: Map<K, V>[]): Map<K, V>;
//# sourceMappingURL=collections.d.ts.map