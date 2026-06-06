/**
 * Location of the default settings file
 * @default __dirname + "/settings.json"
 */
export let settingsFile: string;

/**
 * Loads the dependent modules(namely, loads the `enamdict` name database).
 * If, for some reason, you don't need to do any surname/given name correction, or correction of stress marks,
 * then you can skip this step (this would likely be a very abnormal usage of this library).
 */
export function init(callback: () => void): void;

/**
 * Parses a single string name and returns an object representing that name.
 * Optionally you can specify some settings to modify how the name is parsed.
 */
export function parseName(name: string, options?: ParseOptions): ParseResults;

/**
 * Same as the normal `parseName` method but accepts an object that's in the same form as the object returned from parseName.
 * This is useful as you can take existing romaji-name-generated name objects and
 * re-parse them again (to easily upgrade them when new changes are made to the romaji-name module).
 */
export function parseName(results: ParseResults): ParseResults;

export interface ParseResults {
    /**
     * The original string that was passed in to parseName.
     */
    original: string;

    /**
     * An object holding the settings that were passed in to the parseName method.
     */
    settings?: ParseOptions | undefined;

    /**
     * A guess at the locale of the name. Only two values exist: "ja" and "".
     * Note that just because "ja" was returned it does not guarantee that the person is actually Japanese,
     * just that the name looks to be Japanese-like (for example: Some Chinese names also return "ja").
     */
    locale: Locale;

    /**
     * A string of the Romaji form of the given name. (Will only exist if a Romaji form was originally provided.)
     */
    given?: string | undefined;

    /**
     * A string of the Kana form of the given name.
     * (Will only exist if a Romaji form was originally provided and if the locale is "ja".)
     */
    given_kana?: string | undefined;

    /**
     * A string of the Kanji form of the given name. (Will only exist if a Kanji form was originally provided.)
     */
    given_kanji?: string | undefined;

    /**
     * A string of the Romaji form of the middlename.
     */
    middle?: string | undefined;

    /**
     * A string of the Romaji form of the surname.
     * (Will only exist if a Romaji form was originally provided.)
     */
    surname?: string | undefined;

    /**
     * A string of the Kana form of the surname.
     * (Will only exist if a Romaji form was originally provided and if the locale is "ja".)
     */
    surname_kana?: string | undefined;

    /**
     * A string of the Kanji form of the surname. (Will only exist if a Kanji form was originally provided.)
     */
    surname_kanji?: string | undefined;

    /**
     * A number representing the generation of the name. For example "John Smith II" would have a generation of 2.
     */
    generation?: number | undefined;

    /**
     * The full name, in properly-stressed romaji, including the generation. For example: "Nakamura Gakuryō II".
     */
    name: string;

    /**
     * The full name, in ascii text, including the generation.
     * This is a proper ascii representation of the name (with long vowels converted from "ō" into "oo", for example).
     * Example: "Nakamura Gakuryoo II".
     */
    ascii?: string | undefined;

    /**
     * The full name, in plain text, including the generation.
     * This is the same as the name property but with all stress formatting stripped from it.
     * This could be useful to use in the generation of a URL slug, or some such. It should never be displayed to an end-user as it will almost always be incorrect.
     * Example: "Nakamura Gakuryo II".
     */
    plain: string;

    /**
     * The full name, in kana, without the generation. For example: "なかむらがくりょう".
     */
    kana?: string | undefined;

    /**
     * The full name, in kanji, including the generation. For example: "戯画堂芦幸 2世".
     */
    kanji?: string | undefined;

    /**
     * If the name is a representation of an unknown individual (e.g. it's the string "Unknown", "Not known", or many of the other variations)
     * then this property will exist and be true.
     */
    unknown?: true | undefined;

    /**
     * If the name includes a prefix like "Attributed to" then this will be true.
     */
    attributed?: boolean | undefined;

    /**
     *  If the name includes some sort of "After" or "In the style of" or similar prefix then this will be true.
     */
    after?: boolean | undefined;

    /**
     * If the name includes a prefix like "School of", "Pupil of", or similar then this will be true.
     */
    school?: boolean | undefined;
}

/**
 * Optional settings that change how the name parsing functions
 */
export interface ParseOptions {
    /**
     * Names that don't have a "ja" locale should be flipped ("Smith John" becomes "John Smith").
     */
    flipNonJa?: boolean | undefined;

    /**
     * Removes anything that's wrapped in parentheses.
     * Normally this is left intact and any extra information is parsed from it.
     */
    stripParens?: boolean | undefined;

    /**
     * Assumes that the first name is always the given name.
     */
    givenFirst?: boolean | undefined;
}

/**
 * A guess at the locale of the name.
 */
export type Locale = "ja" | "";
