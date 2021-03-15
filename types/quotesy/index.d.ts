// Type definitions for quotesy 1.0
// Project: https://github.com/dwyl/quotes#readme
// Definitions by: Nate Silva <https://github.com/natesilva>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * returns an Array of Quote Objects
 */
export function parse_json(): Quote[];

/**
 * returns a random quote
 * @returns a random quote from the list
 */
export function random(): Quote;

/**
 * returns a random quote for a specific tag
 * @param tag the tag to search for
 * @returns a random quote from the list with the desired tag
 */
export function random_by_tag(tag: string): Quote;

/** A single quote from the database */
export interface Quote {
    /** The author of the quote */
    author: string;
    /** The text of the quote */
    text: string;
}
