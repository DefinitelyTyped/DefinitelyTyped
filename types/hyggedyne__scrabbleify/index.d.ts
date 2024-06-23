/**
 * Scrabbleify words (mix letters within words and output the result)
 *
 * Supports mixing characters within words.
 * Respects the position of inviolates like basic punctuation and numbers. (customizable) 1234567890, ,'".;: and \~!@#$%^&*()_+{}[]|
 *
 * @param inputString - input words
 * @param separator - By default separator is a ' ' but can use one or more custom separators.
 */
export function scrabbleify(
    inputString: string,
    separator?: string | string[],
    inviolates?: boolean | string[],
): string;

export const numbers: string[];

export const punctuation: string[];

export const symbols: string[];
