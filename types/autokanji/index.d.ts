/**
 * Javascript library that provides autocomplete suggestions for kanjibased on a kana input.
 * The kana to kanji translations are based off the JMDict Dictionary Project.
 */

/**
 *  Returns an array of matches in descending leniency
 */
export function find(input: string): string[];

/**
 * Changes the level of leniency we check when determining possible matches.
 * Setting this to 1 makes sure all characters in input must match the kanji translation
 * and 2 makes sure every character but the last one matches and so on. The default is 2.
 */
export function setLenience(level: number): void;
