// Type definitions for word-extractor 0.3
// Project: https://github.com/morungos/node-word-extractor
// Definitions by: Rodrigo Saboya <https://github.com/saboya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class WordExtractor {
    extract(documentPath: string): Promise<WordExtractor.Document>;
}

export = WordExtractor;

declare namespace WordExtractor {
    class Document {
        getBody(): string;
        getFootnotes(): string;
        getHeaders(): string;
        getAnnotations(): string;
        getEndNotes(): string;
    }
}
