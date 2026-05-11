/**
 * A simple library for identifying emoji entities within a string in order to render them as Twemoji.
 * For example, this parser is used within the rendering flow for Tweets and other text on mobile.twitter.com
 */

export const TypeName = "emoji";

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
    buildUrl?: ((codepoints: string, assetType: AssetType) => string) | undefined;
    /**
     * @default 'svg'
     */
    assetType?: AssetType | undefined;
}

export type AssetType = "png" | "svg";
/**
 * Parser takes a string and returns an array of the emoji entities it finds.
 */
export function parse(text: string, options?: ParsingOptions): EmojiEntity[];

export function toCodePoints(unicodeSurrogates: string): string[];
