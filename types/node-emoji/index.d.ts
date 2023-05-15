// Type definitions for node-emoji 2.0
// Project: https://github.com/omnidan/node-emoji#readme
// Definitions by: Tristan Jones <https://github.com/jonestristand>
//                 styu <https://github.com/styu>
//                 rimiti <https://github.com/rimiti>
//                 Josh Goldberg <https://github.com/JoshuaKGoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Emoji {
    emoji: string;
    name: string;
}

export interface EmojifyOptions {
    /**
     * The string to fallback to if an emoji was not found.
     */
    fallback?: string;

    /**
     * Adds a middleware layer to modify each matched emoji after parsing.
     */
    format?: (emoji: string, part: string, string: string) => string;
}

/**
 * Parse all markdown-encoded emojis in a string.
 */
export function emojify(input: string, options?: EmojifyOptions): string;

/**
 * Get the name and character of an emoji.
 */
export function find(emoji: string): Emoji | undefined;

/**
 * Get an emoji from an emoji name.
 */
export function get(emoji: string): string | undefined;

/**
 * Check if this library supports a specific emoji.
 */
export function hasEmoji(emoji: string): boolean;

/**
 * Get a random emoji.
 */
export function random(): Emoji;

/**
 * Replace the emojis in a string.
 */
export function replace(input: string, replacement: ((emoji: Emoji) => string) | string): string;

/**
 * Search for emojis containing the provided name in their name.
 */
export function search(searchTerm: string): Emoji[];

export interface StripOptions {
    /**
     * Whether to keep the extra space after a stripped emoji.
     */
    preserveSpaces?: boolean;
}

/**
 * Remove all of the emojis from a string.
 */
export function strip(input: string, options?: StripOptions): string;

/**
 * Convert all emojis in a string to their markdown-encoded counterparts.
 */
export function unemojify(input: string): string;

/**
 * Get an emoji name from an emoji.
 */
export function which(emoji: string): string;
