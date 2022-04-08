/**
 * Transforms object or iterable to map. Iterable needs to be in the format acceptable by the `Map` constructor.
 *
 *  map = toMap( { 'foo': 1, 'bar': 2 } );
 *  map = toMap( [ [ 'foo', 1 ], [ 'bar', 2 ] ] );
 *  map = toMap( anotherMap );
 *
 */
export default function toMap<T>(data: Record<string, T> | Array<[string, T]> | Map<string, T>): Map<string, T>;
