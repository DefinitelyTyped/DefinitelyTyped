// Type definitions for jabber 1.2
// Project: https://github.com/dejavu1987/jabber#readme
// Definitions by: owl-from-hogvarts <https://github.com/owl-from-hogvarts>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Jabber {
    /**
     *
     * @param themeWords Custom words that need to appear in some density
     * @param themeWordDensity appearance of themeword 1 per this number so 5 will make it approx 1 per 5 words
     * @param extraVowels additional vowel chars
     * @param extraConsonants additional consonants
     */
    constructor(themeWords?: ReadonlyArray<string>, themeWordDensity?: number, extraVowels?: string, extraConsonants?: string);
    /**
     * Create word of certain length
     */
    createWord(length: number, capitalize?: boolean, avoidThemeWords?: boolean): string;
    /**
     * Create paragraph of certain number of words
     */
    createParagraph(length: number): string;
    /**
     * Create fake full name
     */
    createFullName(salutation?: boolean): string;
    createEmail(customDomain?: string): string;
}

export = Jabber;
