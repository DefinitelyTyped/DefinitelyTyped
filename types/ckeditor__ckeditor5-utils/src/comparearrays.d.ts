/**
 * Compares how given arrays relate to each other. One array can be: same as another array, prefix of another array
 * or completely different. If arrays are different, first index at which they differ is returned. Otherwise,
 * a flag specifying the relation is returned. Flags are negative numbers, so whenever a number >= 0 is returned
 * it means that arrays differ.
 *
 *  compareArrays( [ 0, 2 ], [ 0, 2 ] );		// 'same'
 *  compareArrays( [ 0, 2 ], [ 0, 2, 1 ] );		// 'prefix'
 *  compareArrays( [ 0, 2 ], [ 0 ] );			// 'extension'
 *  compareArrays( [ 0, 2 ], [ 1, 2 ] );		// 0
 *  compareArrays( [ 0, 2 ], [ 0, 1 ] );		// 1
 *
 */
export default function compareArrays<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): number | ArrayRelation;
/**
 * :utils/comparearrays~ArrayRelation
 */
export type ArrayRelation = "extension" | "same" | "prefix";
