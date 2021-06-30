// Type definitions for omgopass 3.2
// Project: https://github.com/omgovich/omgopass#readme
// Definitions by: Nikolai Kolodziej <https://github.com/kldzj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface OmgopassOptions {
    /**
     * Count of syllables
     * @default 3
     */
    syllablesCount?: number;
    /**
     * Minimal length of a syllable
     * @default 2
     */
    minSyllableLength?: number;
    /**
     * Max length of a syllable
     * @default 3
     */
    maxSyllableLength?: number;
    /**
     * Put numbers in the password
     * @default true
     */
    hasNumbers?: boolean;
    /**
     * Use titlecase
     * @default true
     */
    titlecased?: boolean;
    /**
     * Vowel alphabet
     * @default 'aeiouy'
     */
    vowels?: string;
    /**
     * Consonant alphabet
     * @default 'bcdfghklmnprstvz'
     */
    consonants?: string;
    /**
     * Symbols that separate syllables
     * @default ''
     */
    separators?: string;
}

declare function omgopass(options?: OmgopassOptions): string;

export = omgopass;
