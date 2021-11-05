// Type definitions for changelog-parser 2.8
// Project: https://github.com/hypermodules/changelog-parser
// Definitions by: Adam Zerella <https://github.com/adamzerella>
//                 Oliver Steele <https://github.com/osteele>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4

// Options must contain exactly one of filePath or text. This can be expressed
// with a type, but not an interface. (See
// <https://github.com/osteele/vscode-p5server/blob/fee241c06f/scripts/types/changelog-parser.d.ts>,
// which contains the ambient interface that this type was extracted from.)
//
// The DefinitelyTyped lint settings don't allow type literals, so define an
// interface here, and use it to construct a type expression in the argument.

// This type can't be exported, because the module interface has a default
// export.
//
// To use the type of this interface in your code, import `parseChangelog` and
// define:
//   type Options = Exclude<Parameters<typeof parseChangelog>[0], string>;
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

// This type can't be exported, because the module interface has a default
// export.
//
// To use the type of this interface in your code, import `parseChangelog` and
// define:
//   type Changelog = Parameters<NonNullable<Parameters<typeof parseChangelog>[1]>>[1];
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

/**
 * Change log parser for node.
 */
// The implementation returns a Promise whether or not a callback is specified.
// This type declaration reflects this.
declare function parseChangelog(
    options:
        | (Partial<Exclude<Options, 'filePath' | 'text'>> & (Pick<Options, 'filePath'> | Pick<Options, 'text'>))
        | string,
    callback?: (error: string | null, result: Changelog) => void,
): Promise<Changelog>;

export = parseChangelog;
