/**
 * Transforms object or iterable to map. Iterable needs to be in the format acceptable by the `Map` constructor.
 *
 *  map = toMap( { 'foo': 1, 'bar': 2 } );
 *  map = toMap( [ [ 'foo', 1 ], [ 'bar', 2 ] ] );
 *  map = toMap( anotherMap );
 */
export default function toMap<K extends string, V extends any>(
    data: Record<K, V> | Array<[K, V]> | Map<K, V>,
): Map<K, V>;
