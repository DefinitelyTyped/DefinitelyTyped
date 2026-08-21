/**
 * This contains all the latin letters and the regex that match these letters
 * with diacritics
 * https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
 */

export interface Diacritic {
    base: string;
    letters: RegExp;
}

export type lettersDiacritics = Diacritic[];
