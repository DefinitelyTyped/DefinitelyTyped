// Type definitions for normalize-for-search 2.1
// Project: https://github.com/ikr/normalize-for-search
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace normalizeForSearch;

export = normalizeForSearch;

/**
 * Un-accents and un-umlauts characters in a string. Also preliminary converts the string to lower
 * case.
 *
 * @example
 * import normalizeForSearch = require('normalize-for-search');
 *
 * normalizeForSearch('Dät ist naïve und ÜBERCOOL, ё-маё!');
 * // => 'daet ist naive und uebercool, е-мае!'
 */
declare function normalizeForSearch(searchString: string): string;
