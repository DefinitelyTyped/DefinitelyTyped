/**
 * Convert the given string to a regular expression.
 *
 * ```handlebars
 * {{toRegex "foo"}}
 * <!-- results in: /foo/ -->
 * ```
 * @param {String} `str`
 * @return {RegExp}
 * @api public
 */
export function toRegex(str: string, locals: any, options: any): RegExp;
/**
 * Returns true if the given `str` matches the given regex. A regex can
 * be passed on the context, or using the [toRegex](#toregex) helper as a
 * subexpression.
 *
 * ```handlebars
 * {{test "bar" (toRegex "foo")}}
 * <!-- results in: false -->
 * {{test "foobar" (toRegex "foo")}}
 * <!-- results in: true -->
 * {{test "foobar" (toRegex "^foo$")}}
 * <!-- results in: false -->
 * ```
 * @param {String} `str`
 * @return {RegExp}
 * @api public
 */
export function test(str: string, regex: any): RegExp;
