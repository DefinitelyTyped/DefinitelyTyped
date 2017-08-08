// Type definitions for chunked-dc 0.1
// Project: https://github.com/saltyrtc/chunked-dc-js
// Definitions by: Danilo Bargen <https://github.com/dbrgn/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Interfaces
declare namespace chunkedDc {
    /** common.ts */

    interface CommonStatic {
        HEADER_LENGTH: number;
    }

    /** chunker.ts */

    interface Chunker extends IterableIterator<Uint8Array> {
        hasNext: boolean;
        next(): IteratorResult<Uint8Array>;
        [Symbol.iterator](): IterableIterator<Uint8Array>;
    }

    interface ChunkerStatic {
        new(id: number, message: Uint8Array, chunkSize: number): Chunker;
    }

    /** unchunker.ts */

    type MessageListener = (message: Uint8Array, context?: any) => void;

    interface Unchunker {
        onMessage: MessageListener;
        add(chunk: ArrayBuffer, context?: any): void;
        gc(maxAge: number): number;
    }

    interface UnchunkerStatic {
        new(): Unchunker;
    }

    /** main.ts */

    interface Standalone {
        Chunker: ChunkerStatic;
        Unchunker: UnchunkerStatic;
    }
}

// Entry point for the packed ES5 version:
declare var chunkedDc: chunkedDc.Standalone;

// Entry point for the ES2015 version:
declare var Chunker: chunkedDc.ChunkerStatic;
declare var Unchunker: chunkedDc.UnchunkerStatic;
