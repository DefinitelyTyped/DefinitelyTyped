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
