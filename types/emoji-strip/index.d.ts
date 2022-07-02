// Type definitions for emoji-strip 1.0
// Project: https://github.com/nizaroni/emoji-strip
// Definitions by: Gary King <https://github.com/garyking>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/**
 * Strip emojis from text.
 *
 * @param text The text from which to strip the emojis.
 * @returns The text, with emojis removed.
 */
declare function emojiStrip(text: string): string;

export = emojiStrip;
