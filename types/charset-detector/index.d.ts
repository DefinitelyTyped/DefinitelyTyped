declare namespace detect {
    /**
     * charset detect match result
     */
    interface CharsetMatch {
        /**
         * confidence between 0 and 100
         */
        confidence: number;
        /**
         * name of charset
         * @example 'UTF-8'
         */
        charsetName: string;
        /**
         * language of charset
         * @example 'zh'
         */
        lang?: string | undefined;
    }

    /**
     * input statics
     */
    interface InputStats {
        /**
         * whether input contains bytes larger that 0x7F (127)
         */
        readonly c1Bytes: boolean;
        /**
         * count of bytes, eg. `byteStats[32] === 17` means there are 17 bytes with value of `32` in the input
         */
        readonly byteStats: ReadonlyArray<number>;
    }
    type CharsetMatcher = (input: ArrayLike<number>, stats: InputStats) => CharsetMatch | null;
    const DEFAULT_CS_RECOGNIZERS: ReadonlyArray<CharsetMatcher>;
    const ALL_CS_RECOGNIZERS: ReadonlyArray<CharsetMatcher>;
}

/**
 * ICU based port of charset detection to javascript
 * @param input accept node Buffer, but will work with anything that follow such rules:
 *              - allow indexing by []
 *              - has .length
 *              - each numbered property is byte 0-255
 * @param matchers charset detectors, default value is `detect.DEFAULT_CS_RECOGNIZERS`
 * @returns array of matches sorted by most confident first
 */
declare function detect(
    input: ArrayLike<number>,
    matchers?: ReadonlyArray<detect.CharsetMatcher>,
): detect.CharsetMatch[];

export = detect;
