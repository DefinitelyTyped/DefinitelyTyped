// Type definitions for reserved-words 0.1
// Project: https://github.com/zxqfox/reserved-words#readme
// Definitions by: Spencer Miskoviak <https://github.com/skovy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare namespace reserved {
    type Dialect =
        | "es3"
        | 3
        | "es5"
        | 5
        | "es2015"
        | 6
        | "es7"
        | 7
        | "es6"
        | "next";
}

interface Reserved {
    /**
     * Checks a word for being a reserved word and returns true if the provided
     * identifier string is a reserved word in some ECMAScript dialect.
     *
     * @param word word to check
     * @param dialect dialect or version
     * @param strict strict mode additionally checks whether word is a keyword or
     * future reserved word under strict mode.
     */
    check(word: string, dialect?: reserved.Dialect, strict?: boolean): boolean;
}

declare const reserved: Reserved;
export = reserved;
export as namespace reserved;
