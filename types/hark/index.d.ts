// Type definitions for hark 1.2
// Project: https://github.com/otalk/hark
// Definitions by: baiyufei <https://github.com/baiyufei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = hark;

declare function hark(stream: HTMLAudioElement | HTMLVideoElement | MediaStream, option?: hark.Option): hark.Harker;

declare namespace hark {
    interface Option {
        smoothing?: number;
        interval?: number;
        threshold?: number;
        play?: boolean;
        history?: number;
        audioContext?: AudioContext;
    }

    interface Harker {
        speaking: boolean;
        suspend(): Promise<void>;
        resume(): Promise<void>;
        readonly state: AudioContextState;
        setThreshold(t: number): void;
        setInterval(i: number): void;
        stop(): void;
        speakingHistory: number[];

        on(event: 'speaking' | 'stopped_speaking', listener: () => void): void;
        on(event: 'volume_change', listener: (currentVolume: number, threshold: number) => void): void;
        on(event: 'state_change', listener: (state: AudioContextState) => void): void;
    }
}
