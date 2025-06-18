/**
 * Returns an Array of Quote Objects
 */
export function parse_json(): Quote[];

/**
 * Returns a random quote from the list
 */
export function random(): Quote;

/**
 * Returns a random quote for a specific tag
 * @param tag the tag to search for
 */
export function random_by_tag(tag: string): Quote;

/** A single quote from the database */
export interface Quote {
    /** The author of the quote */
    author: string;
    /** The text of the quote */
    text: string;
    /** Comma-separated list of words associated with the quote */
    tags?: string | undefined;
    /** A URL where the origin of the quote can be verified */
    source?: string | undefined;
}
