/**
 * Helper that renders the block if **both** of the given values
 * are truthy. If an inverse block is specified it will be rendered
 * when falsy. Works as a block helper, inline helper or
 * subexpression.
 *
 * ```handlebars
 * <!-- {great: true, magnificent: true} -->
 * {{#and great magnificent}}A{{else}}B{{/and}}
 * <!-- results in: 'A' -->
 * ```
 * @param {any} `a`
 * @param {any} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String}
 * block
 * @api public
 */
export function and(...args: any[]): string;
/**
 * Render a block when a comparison of the first and third
 * arguments returns true. The second argument is
 * the [arithemetic operator][operators] to use. You may also
 * optionally specify an inverse block to render when falsy.
 *
 * @param `a`
 * @param `operator` The operator to use. Operators must be enclosed in quotes: `">"`, `"="`, `"<="`, and so on.
 * @param `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or if specified the inverse block is rendered if falsey.
 * block
 * @api public
 */
export function compare(a: any, operator: any, b: any, options: object, ...args: any[]): string;
/**
 * Block helper that renders the block if `collection` has the
 * given `value`, using strict equality (`===`) for comparison,
 * otherwise the inverse block is rendered (if specified). If a
 * `startIndex` is specified and is negative, it is used as the
 * offset from the end of the collection.
 *
 * ```handlebars
 * <!-- array = ['a', 'b', 'c'] -->
 * {{#contains array "d"}}
 *   This will not be rendered.
 * {{else}}
 *   This will be rendered.
 * {{/contains}}
 * ```
 * @param {Array|Object|String} `collection` The collection to iterate over.
 * @param {any} `value` The value to check for.
 * @param {Number} `[startIndex=0]` Optionally define the starting index.
 * @param {Object} `options` Handlebars provided options object.
 * block
 * @api public
 */
export function contains(collection: any[] | object | string, value: any, startIndex: any, options: object): any;
/**
 * Returns the first value that is not undefined, otherwise the "default" value is returned.
 *
 * @param {any} `value`
 * @param {any} `defaultValue`
 * @return {String}
 * @alias .or
 * @api public
 */
declare function _default(...args: any[]): string;
export default _default;
/**
 * Block helper that renders a block if `a` is **equal to** `b`.
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=""` hash argument for the
 * second value.
 *
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @alias is
 * block
 * @api public
 */
export function eq(a: string, b: string, options: object, ...args: any[]): string;
/**
 * Block helper that renders a block if `a` is **greater than** `b`.
 *
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=""` hash argument for the
 * second value.
 *
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * block
 * @api public
 */
export function gt(a: string, b: string, options: object, ...args: any[]): string;
/**
 * Block helper that renders a block if `a` is **greater than or
 * equal to** `b`.
 *
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=""` hash argument for the
 * second value.
 *
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * block
 * @api public
 */
export function gte(a: string, b: string, options: object, ...args: any[]): string;
/**
 * Block helper that renders a block if `value` has `pattern`.
 * If an inverse block is specified it will be rendered when falsy.
 *
 * @param {any} `val` The value to check.
 * @param {any} `pattern` The pattern to check for.
 * @param {Object} `options` Handlebars provided options object
 * @return {String}
 * block
 * @api public
 */
export function has(value: any, pattern: any, options: object, ...args: any[]): string;
/**
 * Returns true if the given `value` is falsey. Uses the [falsey][]
 * library for comparisons. Please see that library for more information
 * or to report bugs with this helper.
 *
 * @param {any} `val`
 * @param {Options} `options`
 * @return {Boolean}
 * @api public
 */
export function isFalsey(val: any, options: object): boolean;
/**
 * Returns true if the given `value` is truthy. Uses the [falsey][]
 * library for comparisons. Please see that library for more information
 * or to report bugs with this helper.
 *
 * @param {any} `val`
 * @param {Options} `options`
 * @return {Boolean}
 * @api public
 */
export function isTruthy(val: any, options: object): boolean;
/**
 * Return true if the given value is an even number.
 *
 * ```handlebars
 * {{#ifEven value}}
 *   render A
 * {{else}}
 *   render B
 * {{/ifEven}}
 * ```
 * @param {Number} `number`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * block
 * @api public
 */
export function ifEven(num: any, options: object): string;
/**
 * Conditionally renders a block if the remainder is zero when
 * `a` operand is divided by `b`. If an inverse block is specified
 * it will be rendered when the remainder is **not zero**.
 *
 * @param {Number}
 * @param {Number}
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * block
 * @api public
 */
export function ifNth(a: any, b: any, options: object): string;
/**
 * Block helper that renders a block if `value` is **an odd number**.
 * If an inverse block is specified it will be rendered when falsy.
 *
 * ```handlebars
 * {{#ifOdd value}}
 *   render A
 * {{else}}
 *   render B
 * {{/ifOdd}}
 * ```
 * @param {Object} `value`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * block
 * @api public
 */
export function ifOdd(val: any, options: object): string;
/**
 * Block helper that renders a block if `a` is **equal to** `b`.
 * If an inverse block is specified it will be rendered when falsy.
 * Similar to [eq](#eq) but does not do strict equality.
 *
 * @param {any} `a`
 * @param {any} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String}
 * block
 * @api public
 */
export function is(a: any, b: any, options: object, ...args: any[]): string;
/**
 * Block helper that renders a block if `a` is **not equal to** `b`.
 * If an inverse block is specified it will be rendered when falsy.
 * Similar to [unlessEq](#unlesseq) but does not use strict equality for
 * comparisons.
 *
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String}
 * block
 * @api public
 */
export function isnt(a: string, b: string, options: object, ...args: any[]): string;
/**
 * Block helper that renders a block if `a` is **less than** `b`.
 *
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=""` hash argument for the
 * second value.
 *
 * @param {Object} `context`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * block
 * @api public
 */
export function lt(a: any, b: any, options: object, ...args: any[]): string;
/**
 * Block helper that renders a block if `a` is **less than or
 * equal to** `b`.
 *
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=""` hash argument for the
 * second value.
 *
 * @param {Sring} `a`
 * @param {Sring} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * block
 * @api public
 */
export function lte(a: string, b: string, options: object, ...args: any[]): string;
/**
 * Block helper that renders a block if **neither of** the given values
 * are truthy. If an inverse block is specified it will be rendered
 * when falsy.
 *
 * @param {any} `a`
 * @param {any} `b`
 * @param `options` Handlebars options object
 * @return {String} Block, or inverse block if specified and falsey.
 * block
 * @api public
 */
export function neither(a: any, b: any, options: any): string;
/**
 * Returns true if `val` is falsey. Works as a block or inline helper.
 *
 * @param {String} `val`
 * @param {Object} `options` Handlebars provided options object
 * @return {String}
 * block
 * @api public
 */
export function not(val: string, options: object): string;
/**
 * Block helper that renders a block if **any of** the given values
 * is truthy. If an inverse block is specified it will be rendered
 * when falsy.
 *
 * ```handlebars
 * {{#or a b c}}
 *   If any value is true this will be rendered.
 * {{/or}}
 * ```
 *
 * @param {...any} `arguments` Variable number of arguments
 * @param {Object} `options` Handlebars options object
 * @return {String} Block, or inverse block if specified and falsey.
 * block
 * @api public
 */
export function or(...args: any[]): string;
/**
 * Block helper that always renders the inverse block **unless `a` is
 * is equal to `b`**.
 *
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Inverse block by default, or block if falsey.
 * block
 * @api public
 */
export function unlessEq(a: string, b: string, options: object): string;
/**
 * Block helper that always renders the inverse block **unless `a` is
 * is greater than `b`**.
 *
 * @param {Object} `a` The default value
 * @param {Object} `b` The value to compare
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Inverse block by default, or block if falsey.
 * block
 * @api public
 */
export function unlessGt(a: object, b: object, options: object): string;
/**
 * Block helper that always renders the inverse block **unless `a` is
 * is less than `b`**.
 *
 * @param {Object} `a` The default value
 * @param {Object} `b` The value to compare
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * block
 * @api public
 */
export function unlessLt(a: object, b: object, options: object): string;
/**
 * Block helper that always renders the inverse block **unless `a` is
 * is greater than or equal to `b`**.
 *
 * @param {any} `a`
 * @param {any} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * block
 * @api public
 */
export function unlessGteq(a: any, b: any, options: object): string;
/**
 * Block helper that always renders the inverse block **unless `a` is
 * is less than or equal to `b`**.
 *
 * @param {any} `a`
 * @param {any} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * block
 * @api public
 */
export function unlessLteq(a: any, b: any, options: object): string;
