// Type definitions for words-to-time-converter 1.0
// Project: https://github.com/momotofu/words-to-time#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Simple words to time converter with options to choose output format: minutes, seconds or hours
 */

export type SpeedType = 'slow' | 'average' | 'fast';

export function wordsToMinutes(text: string, speed?: SpeedType): string;

export function wordsToSeconds(text: string, speed?: SpeedType): string;

export function wordsToHours(text: string, speed?: SpeedType): string;
