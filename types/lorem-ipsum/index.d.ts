// Type definitions for lorem-ipsum 1.0
// Project: https://github.com/knicklabs/node-lorem-ipsum
// Definitions by: Dusan Radovanovic <https://github.com/durad>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface LoremIpsumOptions {
    /**
     * Number of words, sentences, or paragraphs to generate.
     */
    count?: number;

    /**
     * Generate words, sentences, or paragraphs.
     */
    units?: 'words' | 'sentences' | 'paragraphs';

    /**
     * Minimum words per sentence.
     */
    sentenceLowerBound?: number;

    /**
     * Maximum words per sentence.
     */
    sentenceUpperBound?: number;

    /**
     * Minimum sentences per paragraph.
     */
    paragraphLowerBound?: number;

    /**
     * Maximum sentences per paragraph.
     */
    paragraphUpperBound?: number;

    /**
     * Plain text or html.
     */
    format?: 'plain' | 'html';

    /**
     * Custom word dictionary.
     */
    words?: string[];

    /**
     * A PRNG function. Uses Math.random by default.
     */
    random?(): number;

    /**
     * The character to insert between paragraphs. Defaults to default EOL.
     */
    suffix?: string;
}

declare namespace loremIpsum {}

/**
 * Generate a passage of lorem ipsum text.
 */
declare function loremIpsum(options?: LoremIpsumOptions): string;

export = loremIpsum;
