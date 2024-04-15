interface MediaRecorderErrorEventInit extends EventInit {
    error: DOMException;
}

interface MediaRecorderErrorEvent extends Event {
    readonly error: DOMException;
}

declare var MediaRecorderErrorEvent: {
    prototype: MediaRecorderErrorEvent;
    new(type: string, eventInitDict: MediaRecorderErrorEventInit): MediaRecorderErrorEvent;
};

interface BlobEventInit extends EventInit {
    data: Blob;
    timecode?: number | undefined;
}

interface BlobEvent extends Event {
    readonly data: Blob;
    readonly timecode: DOMHighResTimeStamp;
}

declare var BlobEvent: {
    prototype: BlobEvent;
    new(type: string, eventInitDict: BlobEventInit): BlobEvent;
};

type BitrateMode = VideoEncoderBitrateMode;

interface MediaRecorderOptions {
    mimeType?: string | undefined;
    audioBitsPerSecond?: number | undefined;
    videoBitsPerSecond?: number | undefined;
    bitsPerSecond?: number | undefined;
    audioBitrateMode?: BitrateMode | undefined;
}

interface MediaRecorderEventMap {
    dataavailable: BlobEvent;
    error: Event;
    pause: Event;
    resume: Event;
    start: Event;
    stop: Event;
}

interface MediaRecorder extends EventTarget {
    readonly stream: MediaStream;
    readonly mimeType: string;
    readonly state: "inactive" | "recording" | "paused";
    readonly videoBitsPerSecond: number;
    readonly audioBitsPerSecond: number;
    readonly audioBitrateMode: BitrateMode;

    ondataavailable: ((this: MediaRecorder, event: BlobEvent) => any) | null;
    onerror: ((this: MediaRecorder, event: Event) => any) | null;
    onpause: ((this: MediaRecorder, event: Event) => any) | null;
    onresume: ((this: MediaRecorder, event: Event) => any) | null;
    onstart: ((this: MediaRecorder, event: Event) => any) | null;
    onstop: ((this: MediaRecorder, event: Event) => any) | null;

    addEventListener<K extends keyof MediaRecorderEventMap>(
        type: K,
        listener: (this: MediaRecorder, ev: MediaRecorderEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof MediaRecorderEventMap>(
        type: K,
        listener: (this: MediaRecorder, ev: MediaRecorderEventMap[K]) => any,
        options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions,
    ): void;

    start(timeslice?: number): void;
    stop(): void;
    resume(): void;
    pause(): void;
    requestData(): void;
}

declare var MediaRecorder: {
    prototype: MediaRecorder;
    new(stream: MediaStream, options?: MediaRecorderOptions): MediaRecorder;
    isTypeSupported(type: string): boolean;
};

interface Window {
    MediaRecorder: typeof MediaRecorder;
    BlobEvent: typeof BlobEvent;
    MediaRecorderErrorEvent: typeof MediaRecorderErrorEvent;
}
