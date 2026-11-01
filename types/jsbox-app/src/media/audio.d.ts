// JSBox Audio API TypeScript Declaration

declare namespace AudioTypes {
    interface PlayOptions {
        id?: number;
        url?: string;
        path?: string;
        events?: {
            itemEnded?: () => void;
            timeJumped?: () => void;
            didPlayToEndTime?: () => void;
            failedToPlayToEndTime?: () => void;
            playbackStalled?: () => void;
            newAccessLogEntry?: () => void;
            newErrorLogEntry?: () => void;
        };
    }
}

interface JBAudio {
    play(options: AudioTypes.PlayOptions): void;
    pause(): void;
    resume(): void;
    stop(): void;
    seek(seconds: number): void;
    /** 0: paused, 1: waiting, 2: playing */
    status: 0 | 1 | 2;
    duration: number;
    offset: number;
}

declare const $audio: JBAudio;
