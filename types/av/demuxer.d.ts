/// <reference path="./stream.d.ts" />
/// <reference path="./eventEmitter.d.ts" />
/// <reference path="./baseTypes.d.ts" />

declare namespace AV {
    abstract class Demuxer {
        static register(demuxer: DemuxerConstructor): void;
        static find(buffer: Buffer): Demuxer | null;

        stream: Stream;

        readChunk(): void;

        init(): void;

        on(event: "format", fn: (object: Format) => void): void;
        on(event: "duration", fn: (msecs: number) => void): void;
        on(event: "metadata", fn: (object: Metadata) => void): void;
        on(event: "cookie", fn: (buffer: Buffer) => void): void;
        on(event: "data", fn: (buffer: Buffer, isLastBuffer: boolean) => void): void;
        on(event: "error", fn: (err: Error) => void): void;

        off(event: "format", fn: (object: Format) => void): void;
        off(event: "duration", fn: (msecs: number) => void): void;
        off(event: "metadata", fn: (object: Metadata) => void): void;
        off(event: "cookie", fn: (buffer: Buffer) => void): void;
        off(event: "data", fn: (buffer: Buffer, isLastBuffer: boolean) => void): void;
        off(event: "error", fn: (err: Error) => void): void;

        once(event: "format", fn: (object: Format) => void): void;
        once(event: "duration", fn: (msecs: number) => void): void;
        once(event: "metadata", fn: (object: Metadata) => void): void;
        once(event: "cookie", fn: (buffer: Buffer) => void): void;
        once(event: "data", fn: (buffer: Buffer, isLastBuffer: boolean) => void): void;
        once(event: "error", fn: (err: Error) => void): void;

        emit(event: "format", fn: (object: Format) => void): void;
        emit(event: "duration", fn: (msecs: number) => void): void;
        emit(event: "metadata", fn: (object: Metadata) => void): void;
        emit(event: "cookie", fn: (buffer: Buffer) => void): void;
        emit(event: "data", fn: (buffer: Buffer, isLastBuffer: boolean) => void): void;
        emit(event: "error", fn: (err: Error) => void): void;
    }

    interface DemuxerConstructor {
        new(): Demuxer;

        probe(stream: Stream): boolean;
    }
}
