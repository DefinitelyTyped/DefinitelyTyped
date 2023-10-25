import * as ESLint from "eslint";
import * as ESTree from "estree";

/**
 * Get the value of an expression that can be statically computed, i.e. without
 * variables references or expressions too complex.
 *
 * Returns:
 * - `undefined` if the value could not be statically computed.
 * - An object with a value property containing the computed value.
 * @example
 * foo // => undefined
 * 42 // => {value: 42}
 * 'foo' // => {value: 'foo'}
 * undefined // => {value: undefined}
 * null // => {value: null}
 * 1 + 2 - 4 + (-1) // => {value: -2}
 * true ? 1 : 2 // => {value: 1}
 * `foo ${'bar'}` // => {value: 'foo bar'}
 * @param node The target node from the AST parser.
 * @returns An object with the computed value or `undefined`
 */
export function computeStaticExpression(
    node: ESTree.Node | ESLint.Rule.Node,
): { value: string | number | null | undefined } | undefined;

/**
 * Checks if there is a reference to a variable named `name` inside of `node`.
 *
 * Returns true if and only if:
 * - There is an `Identifier` named `name` inside of `node`
 * - That `Identifier` is a variable (i.e. not a static property name for instance)
 * - That `Identifier` does not reference a different variable named `name` introduced in a sub-scope of `node`.
 * @example
 * foo(a);
 * // containsIdentifier('a', node) // => true
 * // containsIdentifier('b', node) // => false
 *
 * function foo(fn) {
 *   return function(a) {
 *     return fn(a);
 *   };
 * }
 * // containsIdentifier('a', node) // => false
 * @param name The name of the variable to search for.
 * @param node The target node from the AST parser.
 * @returns A boolean asserting the variable exists.
 */
export function containsIdentifier(name: string, node: ESTree.Node | ESLint.Rule.Node): boolean;

/**
 * Get the name of a `MemberExpression`'s property.
 *
 * Returns:
 * - a `string` if the property is accessed through dot notation.
 * - a `string` if the property is accessed through brackets and is a `string`.
 * - a `number` if the property is accessed through brackets and is a `number`.
 * - `undefined` if `node` is not a `MemberExpression`
 * - `undefined` if the property name is a hard to compute expression.
 * @example
 * foo.bar // => 'bar'
 * foo['bar'] // => 'bar'
 * foo[bar] // => undefined
 * foo[0] // => 0 # Number
 * foo[null] // => null
 * foo[undefined] // => undefined
 * @param node The target node from the AST parser.
 * @returns The name of the property or `undefined`
 */
export function getPropertyName(node: ESTree.Node | ESLint.Rule.Node): string | number | undefined;

/**
 * Gets the source of a `require()` call. If `node` is not a `require` call
 * (in the definition of `isStaticRequire`), it will return `undefined`.
 * @example
 * require('lodash'); // => 'lodash'
 * require('./foo'); // => './foo'
 * @param node The target node from the AST parser.
 * @returns The require source or `undefined`.
 */
export function getRequireSource(node: ESTree.Node | ESLint.Rule.Node): string | undefined;

/**
 * Checks whether node is a function expression or an arrow function
 * expression (not a function declaration).
 * @example
 * (function foo() {}) // => true
 * () => {} // => true
 * function foo() {} // => false
 * @param node The target node from the AST parser.
 * @returns A boolean asserting the node is function expression
 */
export function isFunctionExpression(node: ESTree.Node | ESLint.Rule.Node): boolean;

/**
 * Checks whether `node` is a Promise.
 *
 * Returns `true` if and only if `node` is one of the following:
 * - a call of an expression's `then` or `catch` properties
 * - a call to a property of `Promise` (except `cancel`, `promisify`, `promisifyAll` and `is`)
 * - a call to `new Promise`
 *
 * If `node` uses unknown properties of a value that would be considered a `Promise`,
 * `node` itself would not be considered as a `Promise`.
 * @example
 * foo.then(fn); // => true
 * foo.catch(fn); // => true
 * foo.then(fn).catch(fn); // => true
 * foo.then(fn).isFulfilled(fn); // => false
 * Promise.resolve(value); // => true
 * Promise.reject(value); // => true
 * Promise.race(promises); // => true
 * Promise.all(promises); // => true
 * Promise.map(promises, fn); // => true
 * new Promise(fn); // => true
 * new Promise.resolve(value); // => false
 * @param node The target node from the AST parser.
 * @returns A boolean asserting the node is a `Promise`
 */
export function isPromise(node: ESTree.Node | ESLint.Rule.Node): boolean;

/**
 * Checks whether `node` is a call to CommonJS's `require` function.
 *
 * Returns true if and only if:
 * - `node` is a `CallExpression`
 * - `node`'s callee is an `Identifier` named `require`
 * - `node` has exactly 1 `Literal` argument whose value is a `string`
 * @example
 * require('lodash'); // => true
 * require(foo); // => false
 * foo('lodash'); // => false
 * @param node The target node from the AST parser.
 * @returns A boolean asserting the node is a require function.
 */
export function isStaticRequire(node: ESTree.Node | ESLint.Rule.Node): boolean;

/**
 * Checks if there is a reference to a variable named `name` inside any node of the
 * `nodes` array. Will return `false` if nodes is not an array. This is a shorthand
 * version of `containsIdentifier` that works for arrays.
 * @param name The name of the variable to search for.
 * @param nodes An array of target nodes from the AST parser.
 * @returns A boolean asserting the variable exists.
 */
export function someContainIdentifier(name: string, nodes: Array<ESTree.Node | ESLint.Rule.Node>): boolean;
