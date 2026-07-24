/**
 * Returns either the `singular` or `plural` inflection of a word based on
 * the given `count`.
 *
 * ```handlebars
 * {{inflect 0 "string" "strings"}}
 * <!-- "strings" -->
 * {{inflect 1 "string" "strings"}}
 * <!-- "string" -->
 * {{inflect 1 "string" "strings" true}}
 * <!-- "1 string" -->
 * {{inflect 2 "string" "strings"}}
 * <!-- "strings" -->
 * {{inflect 2 "string" "strings" true}}
 * <!-- "2 strings" -->
 * ```
 * @param {Number} `count`
 * @param {String} `singular` The singular form
 * @param {String} `plural` The plural form
 * @param {String} `includeCount`
 * @return {String}
 * @api public
 */
export function inflect(count: number, singular: string, plural: string, includeCount: string): string;
/**
 * Returns an ordinalized number as a string.
 *
 * ```handlebars
 * {{ordinalize 1}}
 * <!-- '1st' -->
 * {{ordinalize 21}}
 * <!-- '21st' -->
 * {{ordinalize 29}}
 * <!-- '29th' -->
 * {{ordinalize 22}}
 * <!-- '22nd' -->
 * ```
 *
 * @param {String} `val` The value to ordinalize.
 * @return {String} The ordinalized number
 * @api public
 */
export function ordinalize(val: string): string;
