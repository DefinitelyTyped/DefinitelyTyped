// Type definitions for re-template-tag 2.0
// Project: https://github.com/rauschma/re-template-tag
// Definitions by: BendingBender <https://github.com/bendingbender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A template tag for composing regular expressions.
 *
 * @example
 * import { re } from 're-template-tag';
 *
 * const RE_YEAR = /([0-9]{4})/;
 * const RE_MONTH = /([0-9]{2})/;
 * const RE_DAY = /([0-9]{2})/;
 * const RE_DATE = re`/^${RE_YEAR}-${RE_MONTH}-${RE_DAY}$/u`;
 *
 * RE_DATE.test('2017-01-23'); // true
 */
export function re(strs: TemplateStringsArray, ...substs: Array<string | RegExp>): RegExp;

/**
 * All special characters are escaped, because you may want to quote several characters inside parentheses or square brackets.
 */
export function quoteText(text: string): string;
