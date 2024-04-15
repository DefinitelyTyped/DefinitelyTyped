export as namespace romajiConv;

/**
 * RomajiConv のインスタンスを返す
 *
 * @param someString 変換対象の文字列
 * @return のインスタンス
 */
declare function romajiConv(someString: string): romajiConv.RomajiConv;

declare namespace romajiConv {
    interface RomajiConv {
        /**
         * 変換前の文字列を返す
         *
         * @return 変換前の文字列
         */
        string(): string;

        /**
         * 文字列の変換
         *
         * @param someString ローマ字 or ひらがな or カタカナ
         * @param mapObject マッピングオブジェクト
         * @return ひらがな or カタカナ
         */
        convert(someString: string, mapObject: object): string;

        /**
         * 変換後のひらがなを返す
         *
         * @return 変換後のひらがな
         */
        toHiragana(): string;

        /**
         * 変換後のカタカナを返す
         *
         * @return 変換後のカタカナ
         */
        toKatakana(): string;
    }

    /**
     * 変換後のひらがなを返す
     *
     * @param someString 変換対象の文字列
     * @return 変換後のひらがな
     */
    function toHiragana(someString: string): string;

    /**
     * 変換後のカタカナを返す
     *
     * @param someString 変換対象の文字列
     * @return 変換後のカタカナ
     */
    function toKatakana(someString: string): string;
}

export = romajiConv;
