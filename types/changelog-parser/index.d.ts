// Type definitions for changelog-parser 2.8
// Project: https://github.com/hypermodules/changelog-parser
// Definitions by: Oliver Steele <https://github.com/osteele>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4

// Options must contain exactly one of filePath or text. This can be expressed
// with a type, but not an interface. (See
// <https://github.com/osteele/vscode-p5server/blob/fee241c06f/scripts/types/changelog-parser.d.ts>,
// which contains the ambient interface that this type was extracted from.)
//
// The DefinitelyTyped lint settings don't allow type literals, so define an
// interface here, and use it to construct a type expression in the argument.

declare namespace parseChangelog {
    interface Options {
        /**
         * Path to changelog file.
         */
        filePath: string;
        /**
         * Text of changelog file (you can use this instead of filePath).
         */
        text: string;
        /**
         * Removes the markdown markup from the changelog entries by default.
         * You can change its value to false to keep the markdown.
         */
        removeMarkdown: boolean;
    }

    interface Changelog {
        title: string;
        description: string;
        versions: Array<{
            version: string | null;
            title: string;
            date: string | null;
            body: string;
            parsed: Record<string, string[]>;
        }>;
    }
}

/**
 * Change log parser for node.
 */
// The implementation returns a Promise whether or not a callback is specified.
// This type declaration reflects this.
declare function parseChangelog(
    options:
        | (Partial<Exclude<parseChangelog.Options, 'filePath' | 'text'>> &
              (Pick<parseChangelog.Options, 'filePath'> | Pick<parseChangelog.Options, 'text'>))
        | string,
    callback?: (error: string | null, result: parseChangelog.Changelog) => void,
): Promise<parseChangelog.Changelog>;

export = parseChangelog;
