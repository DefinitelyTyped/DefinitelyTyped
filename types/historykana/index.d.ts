// Type definitions for HistoryKana 1.0
// Project: https://github.com/terrierscript/historykana
// Definitions by: shiratsuki <https://github.com/h-shiratsuki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version：2.2

/**
 * Get Kana string from input history array.
 * @param histories Input History Array
 */
export default function historykana(histories: string[]): string;

/**
 * Get Kana string from input history array.
 * @param histories Input History Array
 * @param options kanaRegexp : Hiragana detection regular expression rule.
 */
export default function historykana(histories: string[], options: object): string;
