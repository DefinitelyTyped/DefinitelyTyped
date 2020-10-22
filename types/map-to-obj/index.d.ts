// Type definitions for map-to-obj 0.2
// Project: https://github.com/egoist/map-to-obj#readme
// Definitions by: Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

/**
 * Convert a `Map` instance into a plain `object`.
 * @param map The target to be converted
 */
declare function MapToObj<K extends string | number | symbol, V>(map: Map<K, V>): Record<K, V>;

export = MapToObj;
