export = pinyin;
export as namespace pinyin;

/**
 * 转换中文字符为拼音。可以设定拼音风格，可以打开多音字选项，也可以打开分词。
 * @example
 * pinyin("中心") // returns [ [ 'zhōng' ], [ 'xīn' ] ]
 */
declare function pinyin(words: string, options?: pinyin.Options): string[][];

declare namespace pinyin {
    /**
     * 按拼音比较两个字符串 a 和 b 的顺序。
     * 如果返回 -1 表示 a 在 b 前
     * 如果返回  0 表示 a 和 b 顺序相同
     * 如果返回  1 表示 a 在 b 后
     */
    function compare(a: string, b: string): -1 | 0 | 1;
    /**
     * 普通风格，即不带声调。
     * 如：pin yin
     */
    const STYLE_NORMAL: number;
    /**
     * 声调风格，拼音声调在韵母第一个字母上。
     * 如：pīn yīn
     */
    const STYLE_TONE: number;
    /**
     * 声调风格 2，即拼音声调以数字形式在各个拼音之后，用数字 [0-4] 进行表示。
     * 如：pin1 yin1
     */
    const STYLE_TONE2: number;
    /**
     * 声调风格 3，即拼音声调以数字形式在注音字符之后，用数字 [0-4] 进行表示。
     * 如：pi1n yi1n
     */
    const STYLE_TO3NE: number;
    /**
     * 声母风格，只返回各个拼音的声母部分。对于没有声母的汉字，返回空白字符串。
     * 如：中国 的拼音 zh g
     * 注：声母风格会区分 zh 和 z，ch 和 c，sh 和 s。
     * 部分汉字没有声母，如 啊，饿 等，另外 y, w, yu 都不是声母， 这些汉字的拼音声母风格会返回 ""
     */
    const STYLE_INITIALS: number;
    /**
     * 首字母风格，只返回拼音的首字母部分。
     * 如：p y
     */
    const STYLE_FIRST_LETTER: number;
    interface Options {
        /**
         * 设置拼音风格，默认风格是 {@link STYLE_TONE}
         * @see {@link STYLE_NORMAL}
         * @see {@link STYLE_TONE}
         * @see {@link STYLE_TONE2}
         * @see {@link STYLE_TO3NE}
         * @see {@link STYLE_INITIALS}
         * @see {@link STYLE_FIRST_LETTER}
         */
        style?: number | undefined;
        /**
         * 是否启用分词模式，默认关闭。
         * 中文分词有助于极大的降低多音字问题。但性能会极大的下降，内存也会使用更多。
         */
        segment?: boolean | undefined;
        /**
         * 是否启用多音字模式，默认关闭。
         * 关闭多音字模式时，返回每个汉字第一个匹配的拼音。
         * 启用多音字模式时，返回多音字的所有拼音列表。
         */
        heteronym?: boolean | undefined;

        /**
         * 按词组分组拼音
         */
        group?: boolean | undefined;
    }
}
