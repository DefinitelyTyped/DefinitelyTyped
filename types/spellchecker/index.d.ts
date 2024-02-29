/* ---------------------------------------------------------------------------
                       Custom Types / Interfaces
--------------------------------------------------------------------------- */
/**
 * MisspelledLocation - shape of an object returned by checkSpelling to
 * identify locations of misspelled words in a corpus.
 * @description a misspelled word can be found by corpus.slice(start, end)
 * start - start index of a misspelled word in a corpus
 * end - end index of a misspelled word in a corpus
 */
export interface MisspelledLocation {
    start: number;
    end: number;
}

/* ---------------------------------------------------------------------------
                                Methods
--------------------------------------------------------------------------- */
/**
 * Spellchecker.isMisspelled - Check if a word is misspelled.
 * @param word - String word to check.
 * @returns boolean - true if the word is misspelled, false otherwise.
 */
export function isMisspelled(word: string): boolean;

/**
 * Spellchecker.getCorrectionsForMisspelling - Get the corrections for a misspelled word.
 * @param word - String word to get corrections for.
 * @returns array - Returns a non-null but possibly empty array of string corrections.
 */
export function getCorrectionsForMisspelling(word: string): string[];

/**
 * Spellchecker.checkSpelling - Identify misspelled words in a corpus of text.
 * @param corpus - String corpus of text to spellcheck.
 * @returns array - Returns an Array containing {start, end} objects that describe an
 *                  index range within the original String that contains a misspelled word.
 */
export function checkSpelling(corpus: string): MisspelledLocation[];

/**
 * Spellchecker.checkSpellingAsync - Asynchronously identify misspelled words.
 * @param corpus - String corpus of text to spellcheck.
 * @returns array - Returns a Promise that resolves with the Array described by checkSpelling().
 */
export function checkSpellingAsync(corpus: string): Promise<MisspelledLocation[]>;

/**
 * Spellchecker.add - Adds a word to the dictionary.
 * When using Hunspell, this will not modify the .dic file;
 * new words must be added each time the spellchecker is created. Use a custom dictionary file.
 * @param word - String word to add.
 * @returns void
 */
export function add(word: string): void;
