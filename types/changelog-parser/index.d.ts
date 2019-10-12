// Type definitions for changelog-parser 2.7
// Project: https://github.com/hypermodules/changelog-parser
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface Options {
    /**
     * Path to changelog file.
     */
    filePath: string;
    /**
     * Removes the markdown markup from the changelog entries by default.
     * You can change its value to false to keep the markdown.
     */
    removeMarkdown: boolean;
}

/**
 * Change log parser for node.
 */
declare function parseChangelog(options: Partial<Options>|string,
    callback?: (error: string|null, result: object) => void): Promise<object>;

export = parseChangelog;
