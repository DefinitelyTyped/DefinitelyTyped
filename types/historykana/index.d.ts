// Type definitions for HistoryKana 1.0.0
// Project: https://github.com/terrierscript/historykana
// Definitions by: shiratsuki <https://github.com/h-shiratsuki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// HistoryKana Version: 1.0.4

declare module "historykana" {
    export default HistoryKana;
}

declare const HistoryKana: HistoryKanaStatic;

interface HistoryKanaStatic {
    /**
     * Get Kana string from input history array.
     * @param histories Input History Array
     */
    (histories: string[]): string;

    /**
     * Get Kana string from input history array.
     * @param histories Input History Array
     * @param options kanaRegexp : Hiragana detection regular expression rule.
     */
    (histories: string[], options: object): string;
}
