// Type definitions for yt-player 3.3
// Project: https://github.com/feross/yt-player
// Definitions by: Thomas Röggla <https://github.com/troeggla>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from "events";

interface YouTubePlayerOptions {
    width?: number;
    height?: number;
    autoplay?: boolean;
    captions?: false | string;
    controls?: boolean;
    keyboard?: boolean;
    fullscreen?: boolean;
    annotations?: boolean;
    modestBranding?: boolean;
    related?: boolean;
    info?: boolean;
    timeupdateFrequency?: number;
    playsInline?: boolean;
}

type YoutubePlayerState = "unstarted" | "ended" | "playing" | "paused" | "buffering" | "cued";

declare class YouTubePlayer extends EventEmitter {
    videoId: string;
    destroyed: boolean;

    constructor(element: HTMLElement | string, options?: YouTubePlayerOptions);
    load(videoId: string, autoplay?: boolean): void;

    play(): void;
    pause(): void;
    stop(): void;
    seek(seconds: number): void;

    setVolume(volume: number): void;
    getVolume(): number;
    mute(): void;
    unMute(): void;
    isMuted(): boolean;

    setSize(width: number, height: number): void;

    setPlaybackRate(rate: number): void;
    getPlaybackRate(): number;
    getAvailablePlaybackRates(): number[];

    getDuration(): number;
    getProgress(): number;
    getState(): YoutubePlayerState;
    getCurrentTime(): number;

    destroy(): void;

    on(event: "timeupdate", callback: (seconds: number) => void): this;
    on(event: "playbackQualityChange", callback: (quality: number) => void): this;
    on(event: "playbackRateChange", callback: (playbackRate: number) => void): this;

    on(event: YoutubePlayerState, callback: () => void): this;

    on(event: "error", callback: (err: Error) => void): this;
    on(event: "unplayable", callback: (videoId: string) => void): this;
}

export = YouTubePlayer;
