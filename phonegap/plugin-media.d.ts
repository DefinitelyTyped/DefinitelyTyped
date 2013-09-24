interface Media {
    getCurrentPosition(onSuccess: (position: number) => void, mediaError?: (mediaError: MediaError) => any): void;
    getDuration(): number;
    play(): void;
    pause(): void;
    release(): void;
    seekTo(milliseconds: number): void;
    startRecord(): void;
    stopRecord(): void;
    stop(): void;
}
declare var Media: {
    new(src: string, onSuccess?: () => void, onError: (error: MediaError) => void, mediaStatus?: () => void): Media;
}
