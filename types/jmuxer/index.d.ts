// Type definitions for jMuxer
// Project: https://github.com/samirkumardas/jmuxer
// Definitions by: Samir Das <https://github.com/samirkumardas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace JMuxer {
    interface Options {
        node: string | HTMLVideoElement;
        mode?: 'both' | 'audio' | 'video';
        flushingTime?: number;
        clearBuffer?: boolean;
        fps?: number;
        debug?: boolean;
        onReady?: () => void;
    }

    interface Feeder {
        audio?: Uint8Array;
        video?: Uint8Array;
        duration?: number;
    }
}

declare class JMuxer {
    constructor(options: JMuxer.Options);
    feed(data: JMuxer.Feeder):void;
    createStream(): Duplex;
    destroy(): void;
}
export = JMuxer;
export as namespace JMuxer;