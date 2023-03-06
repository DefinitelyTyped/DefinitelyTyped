// Type definitions for jMuxer 2.0
// Project: https://github.com/samirkumardas/jmuxer
// Definitions by: Samir Das <https://github.com/samirkumardas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Duplex } from "stream";

declare namespace JMuxer {
    interface Options {
        node: string | HTMLVideoElement;
        mode?: 'both' | 'audio' | 'video' | undefined;
        flushingTime?: number | undefined;
        clearBuffer?: boolean | undefined;
        fps?: number | undefined;
        debug?: boolean | undefined;
        onReady?: (() => void) | undefined;
        onError?: ((data: any) => void) | undefined;
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
