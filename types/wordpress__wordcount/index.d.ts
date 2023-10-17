export type CountType = "words" | "characters_excluding_spaces" | "characters_including_spaces";

export interface Settings {
    HTMLEntityRegExp: RegExp;
    HTMLRegExp: RegExp;
    HTMLcommentRegExp: RegExp;
    astralRegExp: RegExp;
    characters_excluding_spacesRegExp: RegExp;
    characters_including_spacesRegExp: RegExp;
    connectorRegExp: RegExp;
    l10n: {
        type?: CountType | undefined;
        /** Array of known shortcode names */
        shortcodes?: string[] | undefined;
    };
    /** Characters to be removed from input text. */
    removeRegExp: RegExp;
    spaceRegExp: RegExp;
    wordsRegExp: RegExp;
}

/**
 * Count some words.
 *
 * @param text - The text being processed
 * @param type - The type of count.
 * @param [userSettings] - Custom settings object.
 *
 * @example
 * ```js
 * import { count } from '@wordpress/wordcount';
 * const numberOfWords = count( 'Words to count', 'words' )
 * ```
 */
export function count(text: string, type: CountType, userSettings?: Partial<Settings>): number;
