// Type definitions for filesize-parser 1.5
// Project: https://github.com/patrickkettner/filesize-parser#readme
// Definitions by: Gary King <https://github.com/garyking>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function filesizeParser(size: string, options?: Options): number;

interface Options {
    base: 2 | 10;
}

export = filesizeParser;
