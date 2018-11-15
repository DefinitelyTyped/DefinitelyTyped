// Type definitions for w3c MediaStream Recording (Editor’s Draft, 7 November 2018)
// Project: https://w3c.github.io/mediacapture-record
// Definitions by: Elias Meire <https://github.com/eliasmeire>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare interface MediaRecorderErrorEventInit extends EventInit {
    error: DOMException;
}

declare class MediaRecorderErrorEvent extends Event {
    constructor(type: string, eventInitDict: MediaRecorderErrorEventInit);
    readonly error: DOMException;
}

declare interface BlobEventInit extends EventInit {
    data: Blob;
    timecode?: DOMHighResTimeStamp;
}

declare class BlobEvent extends Event {
    constructor(type: string, eventInitDict: BlobEventInit);
    readonly data: Blob;
    readonly timecode: DOMHighResTimeStamp;
}

declare interface MediaRecorderOptions {
    mimeType?: string;
    audioBitsPerSecond?: number;
    videoBitsPerSecond?: number;
    bitsPerSecond?: number;
}

declare type RecordingState = 'inactive' | 'recording' | 'paused';

declare class MediaRecorder extends EventTarget {
    readonly stream: MediaStream;
    readonly mimeType: string;
    readonly state: RecordingState;
    readonly videoBitsPerSecond: number;
    readonly audioBitsPerSecond: number;

    ondataavailable: (event: BlobEvent) => void;
    onerror: (event: MediaRecorderErrorEvent) => void;
    onpause: (event: Event) => void;
    onresume: (event: Event) => void;
    onstart: (event: Event) => void;
    onstop: (event: Event) => void;

    constructor(stream: MediaStream, options?: MediaRecorderOptions);

    start(timeslice?: number): void;
    stop(): void;
    resume(): void;
    pause(): void;
    requestData(): void;

    static isTypeSupported(type: string): boolean;
}

interface Window {
    MediaRecorder: typeof MediaRecorder;
    BlobEvent: typeof BlobEvent;
    MediaRecorderErrorEvent: typeof MediaRecorderErrorEvent;
}
