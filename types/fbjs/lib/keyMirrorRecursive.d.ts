/**
 * Constructs an enumeration with keys equal to their value. If the value is an
 * object, the method is run recursively, including the parent key as a suffix.
 * An optional prefix can be provided that will be prepended to each value.
 *
 * For example:
 *
 *   var ACTIONS = keyMirror({FOO: null, BAR: { BAZ: null, BOZ: null }}});
 *   ACTIONS.BAR.BAZ = 'BAR.BAZ';
 *
 *   Input:  {key1: null, key2: { nested1: null, nested2: null }}}
 *   Output: {key1: key1, key2: { nested1: nested1, nested2: nested2 }}}
 *
 *   var CONSTANTS = keyMirror({FOO: {BAR: null}}, 'NameSpace');
 *   console.log(CONSTANTS.FOO.BAR); // NameSpace.FOO.BAR
 */
declare function keyMirrorRecursive<T>(obj: T, prefix?: string | null): T;

declare namespace keyMirrorRecursive {}

export = keyMirrorRecursive;
