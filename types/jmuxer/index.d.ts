/// <reference types="node" />
import { Duplex } from "stream";

declare namespace JMuxer {
    interface Options {
        node: string | HTMLVideoElement;
        mode?: "both" | "audio" | "video" | undefined;
        flushingTime?: number | undefined;
        maxDelay?: number | undefined;
        clearBuffer?: boolean | undefined;
        fps?: number | undefined;
        readFpsFromTrack?: boolean | undefined;
        debug?: boolean | undefined;
        onReady?: (() => void) | undefined;
        onError?: ((data: any) => void) | undefined;
        onMissingVideoFrames?: ((data: Feeder) => void) | undefined;
        onMissingAudioFrames?: ((data: Feeder) => void) | undefined;
    }

    interface Feeder {
        audio?: Uint8Array | undefined;
        video?: Uint8Array | undefined;
        duration?: number | undefined;
    }
}

declare class JMuxer {
    constructor(options: JMuxer.Options);
    feed(data: JMuxer.Feeder): void;
    createStream(): Duplex;
    reset(): void;
    destroy(): void;
}
export = JMuxer;
export as namespace JMuxer;
