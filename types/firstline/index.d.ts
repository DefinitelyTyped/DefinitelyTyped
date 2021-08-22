// Type definitions for firstline 2.0
// Project: https://github.com/pensierinmusica/firstline
// Definitions by: Emily Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />
export = firstline;

declare function firstline(filePath: string, opts?: firstline.Options): Promise<string>;

declare namespace firstline {
    interface Options {
        /** @default 'utf8' */
        encoding?: BufferEncoding | undefined;
        /** @default '\n' */
        lineEnding?: string | undefined;
    }
}
