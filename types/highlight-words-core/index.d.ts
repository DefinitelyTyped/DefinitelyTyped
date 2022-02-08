// Type definitions for highlight-words-core 1.2
// Project: https://github.com/bvaughn/highlight-words-core
// Definitions by: James Lismore <https://github.com/jlismore>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface FindChunksArgs {
    autoEscape?: boolean | undefined;
    caseSensitive?: boolean | undefined;
    sanitize?: ((text: string) => string) | undefined;
    searchWords: string[];
    textToHighlight: string;
}

export interface Chunk {
    start: number;
    end: number;
    highlight: boolean;
}

export interface FindAllArgs extends FindChunksArgs {
    findChunks?: ((args: FindChunksArgs) => Chunk[]) | undefined;
}

export function findAll(args: FindAllArgs): Chunk[];
