/**
 * Convert a `Map` instance into a plain `object`.
 * @param map The target to be converted
 */
declare function MapToObj<K extends string | number | symbol, V>(map: Map<K, V>): Record<K, V>;

export = MapToObj;
