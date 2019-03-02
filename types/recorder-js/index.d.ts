// Type definitions for recorder-js 1.0
// Project: https://github.com/ijsnow/studiojs#readme
// Definitions by: Yusuke Higuchi <https://github.com/higuri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export default Recorder;

declare class Recorder {
    constructor(audioContext: AudioContext, config?: Recorder.RecorderConfig);
    static download(blob: Blob, filename: string): void;
    init(stream: MediaStream): Promise<void>;
    start(): Promise<MediaStream | undefined>;
    stop(): Promise<Recorder.RecorderResult>;
}

declare namespace Recorder {
    type OnAnalysedHandler = (data: number[], lastNonZero: number) => void;

    interface RecorderConfig {
        onAnalysed?: OnAnalysedHandler;
    }

    interface RecorderResult {
        blob: Blob;
        buffer: Float32Array[];
    }
}
