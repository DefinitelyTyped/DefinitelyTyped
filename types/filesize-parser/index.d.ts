// Type definitions for filesize-parser 1.5
// Project: https://github.com/patrickkettner/filesize-parser
// Definitions by: Florian Reuschel <https://github.com/loilo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface FilesizeParserOptions {
    base?: 2 | 10;
}

interface StringLike {
    toString(): string;
}

declare function filesizeParser(input: StringLike, options?: FilesizeParserOptions): number;

export = filesizeParser;
