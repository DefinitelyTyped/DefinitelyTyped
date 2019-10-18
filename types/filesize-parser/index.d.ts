// Type definitions for filesize-parser 1.5
// Project: https://github.com/patrickkettner/filesize-parser
// Definitions by: Florian Reuschel <https://github.com/loilo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface FilesizeParserOptions {
    base?: number;
}

declare function filesizeParser(input: string, options?: FilesizeParserOptions): number;

export = filesizeParser;
