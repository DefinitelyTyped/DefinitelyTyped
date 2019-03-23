// Type definitions for changelog-parser 2.7
// Project: https://github.com/hypermodules/changelog-parser
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface Options {
    /**
     * Path to changelog file
     */
    filePath: string;
    /**
     * Changelog file string to parse
     */
    removeMarkdown: boolean;
}

declare function parseChangelog(options: Options|string, callback?: (result: string, error?: string) => void): Promise<object>;

export = parseChangelog;
