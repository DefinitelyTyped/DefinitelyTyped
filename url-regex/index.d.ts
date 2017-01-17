// Type definitions for url-regex 4.0
// Project: https://github.com/kevva/url-regex
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Regular expression for matching URLs. */
declare function urlRegex(options?: {
    /** Only match an exact string. Useful with RegExp#test to check if a string is a URL. */
    exact?: boolean;
}): RegExp;

export = urlRegex;
