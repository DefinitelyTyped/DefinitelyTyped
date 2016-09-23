
import jp = require('jsonpath');

var data: any;

/**
 * jp.query(obj, pathExpression)
 * Find elements in obj matching pathExpression. Returns an array of elements that satisfy the provided JSONPath expression, or an empty array if none were matched.
 */
var authors = jp.query(data, '$..author');

/**
 * jp.paths(obj, pathExpression)
 * Find elements in obj matching pathExpression. Returns an array of element paths that satisfy the provided JSONPath expression. Each path is itself an array of keys representing the location within obj of the matching element.
 */
var paths = jp.paths(data, '$..author');

/**
 * jp.nodes(obj, pathExpression)
 * Find elements and their corresponding paths in obj matching pathExpression. Returns an array of node objects where each node has a path containing an array of keys representing the location within obj, and a value pointing to the matched element.
 */
var nodes = jp.nodes(data, '$..author');

/**
 * jp.value(obj, pathExpression, [newValue])
 * Returns the value of the first element matching pathExpression. If newValue is provided, sets the value of the first matching element and returns the new value.
 */
var value = jp.value(data, '$.store..price');
jp.value(data, '$.store..price', 12.5);

/**
 * jp.parent(obj, pathExpression)
 * Returns the parent of the first matching element.
 */
var parent = jp.parent(data, '$.store..price');

/**
 * jp.apply(obj, pathExpression, fn)
 * Runs the supplied function fn on each matching element, and replaces each matching element with the return value from the function. The function accepts the value of the matching element as its only parameter. Returns matching nodes with their updated values.
 */
var nodes = jp.apply(data, '$..author', (value: string) => { return value.toUpperCase() });

/**
 * jp.parse(pathExpression)
 * Parse the provided JSONPath expression into path components and their associated operations.
 */
var path = jp.parse('$..author');

/**
 * jp.stringify(path)
 * Returns a path expression in string form, given a path. The supplied path may either be a flat array of keys, as returned by jp.nodes for example, or may alternatively be a fully parsed path expression in the form of an array of path components as returned by jp.parse.
 */
var pathExpression = jp.stringify(['$', 'store', 'book', 0, 'author']);

