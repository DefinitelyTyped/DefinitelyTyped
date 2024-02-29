export = hark;

declare function hark(stream: HTMLAudioElement | HTMLVideoElement | MediaStream, option?: hark.Option): hark.Harker;

declare namespace hark {
    interface Option {
        smoothing?: number | undefined;
        interval?: number | undefined;
        threshold?: number | undefined;
        play?: boolean | undefined;
        history?: number | undefined;
        audioContext?: AudioContext | undefined;
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

        on(event: "speaking" | "stopped_speaking", listener: () => void): void;
        on(event: "volume_change", listener: (currentVolume: number, threshold: number) => void): void;
        on(event: "state_change", listener: (state: AudioContextState) => void): void;
    }
}
