/**
 * Parse a string into an object with `name`, `email` and `url` properties following npm conventions.
 *
 * Useful for the `authors` property in package.json or for parsing an AUTHORS file into an array of authors objects.
 */
declare function parse(author: string): parse.Author;

export = parse;

declare namespace parse {
    interface Author {
        name?: string | undefined;
        email?: string | undefined;
        url?: string | undefined;
    }
}
