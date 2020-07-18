// Type definitions for stringify-author 0.1
// Project: https://github.com/jonschlinkert/stringify-author
// Definitions by: Manuel Thalmann <https://github.com/manuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
