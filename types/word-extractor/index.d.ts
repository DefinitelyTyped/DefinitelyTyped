// Type definitions for word-extractor 1.0
// Project: https://github.com/morungos/node-word-extractor
// Definitions by: Rodrigo Saboya <https://github.com/saboya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class WordExtractor {
    extract(documentPath: string | Uint8Array): Promise<WordExtractor.Document>;
}

export = WordExtractor;

declare namespace WordExtractor {
    class Document {
        getBody(): string;
        getFootnotes(): string;
        getHeaders(options?: { includeFooters?: boolean | undefined }): string;
        getFooters(): string;
        getAnnotations(): string;
        getTextboxes(
            options?: { includeHeadersAndFooters?: boolean | undefined; includeBody?: boolean | undefined },
        ): string;
        getEndnotes(): string;
    }
}
