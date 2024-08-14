/**
 * Escape `'` with `\\`
 * @param input the input string
 */
declare function escapeQuote(input: string): string;

/**
 * Escape the given character with the given escape character
 * @param input the input string
 * @param character the character to escape (e.g. `'`)
 * @param escape_character the character to escape with (e.g. `\\`)
 */
declare function escapeQuote(input: string, character: string, escape_character: string): string;

export = escapeQuote;
