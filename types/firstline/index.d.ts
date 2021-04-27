// Type definitions for firstline 2.0
// Project: https://github.com/pensierinmusica/firstline
// Definitions by: Emily Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = firstline;

declare function firstline(filePath: string, opts?: { lineEnding?: string, encoding?: string }): Promise<string>;
