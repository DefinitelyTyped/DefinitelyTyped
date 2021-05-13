// Type definitions for common-ancestor-path 1.0
// Project: https://github.com/isaacs/common-ancestor-path
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = commonAncestorPath;

/**
 * Find the common ancestor of 2 or more paths on Windows or Unix
 *
 * @returns The nearest (deepest) common ancestor path, or `null` if on different roots on Windows.
 *
 * @example
 * import ancestor = require('common-ancestor-path');
 *
 * // output /a/b
 * console.log(ancestor('/a/b/c/d', '/a/b/x/y/z', '/a/b/c/i/j/k'));
 *
 * // normalizes separators, but NOT cases, since it matters sometimes
 * console.log(ancestor('C:\\a\\b\\c', 'C:\\a\\b\\x'));
 *
 * // no common ancestor on different windows drive letters
 * // so, this returns null
 * console.log(ancestor('c:\\a\\b\\c', 'd:\\d\\e\\f'));
 */
declare function commonAncestorPath(...paths: string[]): string | null;
