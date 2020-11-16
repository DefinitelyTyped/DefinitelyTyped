// Type definitions for twemoji-parser 12.1
// Project: https://github.com/twitter/twemoji-parser
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A simple library for identifying emoji entities within a string in order to render them as Twemoji.
 * For example, this parser is used within the rendering flow for Tweets and other text on mobile.twitter.com
 */

export const TypeName = 'emoji';

export interface EmojiEntity {
    /**
     * @default 'emoji'
     */
    type: typeof TypeName;
    text: string;
    /**
     * @default ''
     */
    url: string;
    /**
     * [startIndex: number, lastIndex: number]
     */
    indices: [number, number];
}

export interface ParsingOptions {
    buildUrl?: (codepoints: string, assetType: string) => string;
    /**
     * @default 'svg'
     */
    assetType?: 'png' | 'svg';
}

/**
 * Parser takes a string and returns an array of the emoji entities it finds.
 */
export function parse(text: string, options?: ParsingOptions): EmojiEntity[];

export function toCodePoints(unicodeSurrogates: string): string[];
