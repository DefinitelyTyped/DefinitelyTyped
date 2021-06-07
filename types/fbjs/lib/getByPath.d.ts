/**
 * Get a value from an object based on the given path
 *
 * Usage example:
 *
 *   var obj = {
 *     a : {
 *       b : 123
 *     }
 *   };
 *
 * var result = getByPath(obj, ['a', 'b']); // 123
 *
 * You may also specify the path using an object with a path field
 *
 * var result = getByPath(obj, {path: ['a', 'b']}); // 123
 *
 * If the path doesn't exist undefined will be returned
 *
 * var result = getByPath(obj, ['x', 'y', 'z']); // undefined
 */
declare function getByPath(root: any /*?Object | Error*/, path: string[], fallbackValue?: any): any;

declare namespace getByPath {}

export = getByPath;
