// Type definitions for parse-author 2.0
// Project: https://github.com/jonschlinkert/parse-author
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Parse a string into an object with `name`, `email` and `url` properties following npm conventions.
 *
 * Useful for the `authors` property in package.json or for parsing an AUTHORS file into an array of authors objects.
 */
declare function parse(author: string): parse.Author;

export = parse;

declare namespace parse {
    interface Author {
        name?: string;
        email?: string;
        url?: string;
    }
}
