export = jsonStringify;

/**
 * Stringify an object sorting scalars before objects, and defaulting to 2-space indent.
 *
 * @example
 * import stringify = require('json-stringify-nice');
 * const obj = {
 *   z: 1,
 *   y: 'z',
 *   obj: { a: {}, b: 'x' },
 *   a: { b: 1, a: { nested: true} },
 *   yy: 'a',
 * };
 *
 * console.log(stringify(obj));
 *
 * // output:
 * // {
 * //   "y": "z", <-- alphabetical sorting like whoa!
 * //   "yy": "a",
 * //   "z": 1,
 * //   "a": { <-- a sorted before obj, because alphabetical, and both objects
 * //     "b": 1,
 * //     "a": {  <-- note that a comes after b, because it's an object
 * //       "nested": true
 * //     }
 * //   },
 * //   "obj": {
 * //     "b": "x",
 * //     "a": {}
 * //   }
 * // }
 */
declare function jsonStringify(
    value: any,
    replacer?: Array<number | string> | ((this: any, key: string, value: any) => any) | null,
    space?: string | number,
): string;
