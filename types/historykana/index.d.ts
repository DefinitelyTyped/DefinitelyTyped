// Type definitions for HistoryKana 1.0
// Project: https://github.com/terrierscript/historykana, https://github.com/inuscript/historykana
// Definitions by: shiratsuki <https://github.com/h-shiratsuki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/**
 * Get Kana string from input history array.
 * @param histories Input History Array
 * @param options kanaRegexp : Hiragana detection regular expression rule.
 */
declare function historykana(histories: string[], options?: object): string;

export = historykana;
