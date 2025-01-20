interface OmgopassOptions {
    /**
     * Count of syllables
     * @default 3
     */
    syllablesCount?: number | undefined;
    /**
     * Minimal length of a syllable
     * @default 2
     */
    minSyllableLength?: number | undefined;
    /**
     * Max length of a syllable
     * @default 3
     */
    maxSyllableLength?: number | undefined;
    /**
     * Put numbers in the password
     * @default true
     */
    hasNumbers?: boolean | undefined;
    /**
     * Use titlecase
     * @default true
     */
    titlecased?: boolean | undefined;
    /**
     * Vowel alphabet
     * @default 'aeiouy'
     */
    vowels?: string | undefined;
    /**
     * Consonant alphabet
     * @default 'bcdfghklmnprstvz'
     */
    consonants?: string | undefined;
    /**
     * Symbols that separate syllables
     * @default ''
     */
    separators?: string | undefined;
}

declare function omgopass(options?: OmgopassOptions): string;

export = omgopass;
