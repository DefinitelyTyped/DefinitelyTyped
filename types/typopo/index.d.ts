// Type definitions for typopo 2.5
// Project: https://github.com/surfinzap/typopo#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Correct typos
 * @param string - input text for correction
 * @param [locale=en-us] - supported languages: en, sk, cs, rue.
 * @param [configuration] - configuration
 * @returns corrected output
 */
export function fixTypos(string: string, locale?: Locale, configuration?: Configuration): string;

export type Locale = 'en-us' | 'de-de' | 'cs' | 'rue' | 'sk';

export interface Configuration {
    /**
     * keep Markdown code blocks in your Markdown files
     */
    keepMarkdownCodeBlocks?: boolean;
    removeLines?: boolean;
    removeWhitespacesBeforeMarkdownList?: boolean;
}

export as namespace typopo;
