// Type definitions for @wordpress/wordcount 2.4
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/wordcount/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

export type CountType = 'words' | 'characters_excluding_spaces' | 'characters_including_spaces';

export interface Settings {
    HTMLEntityRegExp: RegExp;
    HTMLRegExp: RegExp;
    HTMLcommentRegExp: RegExp;
    astralRegExp: RegExp;
    characters_excluding_spacesRegExp: RegExp;
    characters_including_spacesRegExp: RegExp;
    connectorRegExp: RegExp;
    l10n: {
        type?: CountType;
        /** Array of known shortcode names */
        shortcodes?: string[];
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
