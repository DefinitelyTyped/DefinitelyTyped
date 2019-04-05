// Type definitions for trim-newlines 2.0
// Project: https://github.com/sindresorhus/trim-newlines#readme
// Definitions by: Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function trimNewlines(input: string): string;

declare namespace trimNewlines {
    function start(input: string): string;
    function end(input: string): string;
}

export = trimNewlines;
