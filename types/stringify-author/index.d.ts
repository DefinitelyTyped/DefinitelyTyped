import { Author } from "parse-author";

/**
 * Converts an `author` to a human-readable string.
 *
 * @param author
 * The author to stringify.
 *
 * @returns
 * A string representing the `author`.
 */
declare function stringify(author: Author): string;

export = stringify;
