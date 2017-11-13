// Type definitions for jsonpath 0.2.11
// Project: https://www.npmjs.org/package/jsonpath
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>, Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type PathComponent = string | number;

/**
 * Find elements in `obj` matching `pathExpression`. Returns an array of elements that
 * satisfy the provided JSONPath expression,or an empty array if none were matched.
 * Returns only first `count` elements if specified.
 */
export declare function query(obj: any, pathExpression: string, count?: number): any[];

/**
 * Find paths to elements in `obj` matching `pathExpression`. Returns an array of
 * element paths that satisfy the provided JSONPath expression. Each path is itself an
 * array of keys representing the location within `obj` of the matching element. Returns
 * only first `count` paths if specified.
 */
export declare function paths(obj: any, pathExpression: string, count?: number): PathComponent[][];

/**
 * Find elements and their corresponding paths in `obj` matching `pathExpression`.
 * Returns an array of node objects where each node has a `path` containing an array of
 * keys representing the location within `obj`, and a `value` pointing to the matched
 * element. Returns only first `count` nodes if specified.
 */
export declare function nodes(obj: any, pathExpression: string, count?: number): { path: PathComponent[]; value: any; }[];

/**
 * Returns the value of the first element matching `pathExpression`. If `newValue` is
 * provided, sets the value of the first matching element and returns the new value.
 */
export declare function value(obj: any, pathExpression: string): any;
export declare function value<T>(obj: any, pathExpression: string, newValue: T): T;

/**
 * Returns the parent of the first matching element.
 */
export declare function parent(obj: any, pathExpression: string): any;

/**
 * Runs the supplied function `fn` on each matching element, and replaces each
 * matching element with the return value from the function. The function accepts the
 * value of the matching element as its only parameter. Returns matching nodes with
 * their updated values.
 */
export declare function apply(obj: any, pathExpression: string, fn: (x: any) => any): { path: PathComponent[]; value: any; }[];

/**
 * Parse the provided JSONPath expression into path components and their associated
 * operations.
 */
export declare function parse(pathExpression: string): any[];

/**
 * Returns a path expression in string form, given a path. The supplied path may either
 * be a flat array of keys, as returned by `jp.nodes` for example, or may alternatively be a
 * fully parsed path expression in the form of an array of path components as returned
 * by `jp.parse`.
 */
export declare function stringify(path: PathComponent[]): string;

export as namespace jsonpath;
