/**
 * Returns a flattened array that represents the DFS traversal of the supplied
 * input array. For example:
 *
 *   var deep = ["a", ["b", "c"], "d", {"e": [1, 2]}, [["f"], "g"]];
 *   var flat = flattenArray(deep);
 *   console.log(flat);
 *   > ["a", "b", "c", "d", {"e": [1, 2]}, "f", "g"];
 *
 * @see https://github.com/jonschlinkert/arr-flatten
 * @copyright 2014-2015 Jon Schlinkert
 * @license MIT
 */
declare function flattenArray(array: any[]): any[];

declare namespace flattenArray {}

export = flattenArray;
