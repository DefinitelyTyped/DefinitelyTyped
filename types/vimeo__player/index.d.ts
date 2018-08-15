// Type definitions for @vimeo/player 2.6.3
// Project: https://github.com/vimeo/player.js
// Definitions by: Denis Yılmaz <https://github.com/denisyilmaz>
//                 Felix Albert <f.albert.work@icloud.com>
//                 Tim Chen <https://github.com/timc13>
//                 Terry Mun <https://github.com/terrymun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type CallbackFunction = (...args: any[]) => any;

export interface Error {name: string; message: string; method: string; }

export interface PasswordError extends Error {name: "PasswordError"; message: string; method: string; }
export interface PrivacyError extends Error {name: "PrivacyError"; message: string; method: string; }
export interface InvalidTrackLanguageError extends Error {name: "InvalidTrackLanguageError"; message: string; method: string; }
export interface InvalidTrackError extends Error {name: "InvalidTrackError"; message: string; method: string; }
export interface UnsupportedError extends Error {name: "UnsupportedError"; message: string; method: string; }
export interface ContrastError extends Error {name: "ContrastError"; message: string; method: string; }
export interface InvalidCuePoint extends Error {name: "InvalidCuePoint"; message: string; method: string; }
export interface RangeError extends Error {name: "RangeError"; message: string; method: string; }
export interface TypeError extends Error {name: "TypeError"; message: string; method: string; }

export type EventName = "play" | "pause" | "ended" | "timeupdate" | "progress" | "seeked" | "texttrackchange" |
                        "cuechange" | "cuepoint" | "volumechange" | "playbackratechange" | "bufferstart" | "bufferend" | "error" | "loaded" |  string;
export type EventCallback = (data: any) => any;

export class Player {
    constructor(element: HTMLIFrameElement|HTMLElement|string, options?: Options);

    on(event: EventName, callback: EventCallback): void;
    off(event: EventName, callback?: EventCallback): void;
    loadVideo(id: number): VimeoPromise<number, TypeError | PasswordError | PrivacyError | Error>;
    ready(): VimeoPromise<void, Error>;
    enableTextTrack(language: string, kind?: string): VimeoPromise<VimeoTextTrack, InvalidTrackLanguageError | InvalidTrackError | Error>;
    disableTextTrack(): VimeoPromise<void, Error>;
    pause(): VimeoPromise<void, PasswordError | PrivacyError |Error>;
    play(): VimeoPromise<void, PasswordError | PrivacyError |Error>;
    unload(): VimeoPromise<void, Error>;
    getAutopause(): VimeoPromise<boolean, UnsupportedError | Error>;
    setAutopause(autopause: boolean): VimeoPromise<boolean, UnsupportedError | Error>;
    getColor(): VimeoPromise<string, Error>;
    setColor(color: string): VimeoPromise<string, ContrastError | TypeError | Error>;
    addCuePoint(time: number, data: VimeoCuePointData): VimeoPromise<string, UnsupportedError | RangeError | Error>;
    removeCuePoint(id: string): VimeoPromise<string, UnsupportedError | InvalidCuePoint | Error>;
    getCuePoints(): VimeoPromise<VimeoCuePoint[], UnsupportedError | Error>;
    getCurrentTime(): VimeoPromise<number, Error>;
    setCurrentTime(seconds: number): VimeoPromise<number, RangeError | Error>;
    getDuration(): VimeoPromise<number, Error>;
    getEnded(): VimeoPromise<boolean, Error>;
    getLoop(): VimeoPromise<boolean, Error>;
    setLoop(loop: boolean): VimeoPromise<boolean, Error>;
    getPaused(): VimeoPromise<boolean, Error>;
    getPlaybackRate(): VimeoPromise<number, Error>;
    setPlaybackRate(playbackRate: number): VimeoPromise<number, RangeError | Error>;
    getTextTracks(): VimeoPromise<VimeoTextTrack[], Error>;
    getVideoEmbedCode(): VimeoPromise<string, Error>;
    getVideoId(): VimeoPromise<number, Error>;
    getVideoTitle(): VimeoPromise<string, Error>;
    getVideoWidth(): VimeoPromise<number, Error>;
    getVideoHeight(): VimeoPromise<number, Error>;
    getVideoUrl(): VimeoPromise<string, PrivacyError | Error>;
    getVolume(): VimeoPromise<number, Error>;
    setVolume(volume: number): VimeoPromise<number, RangeError | Error>;
    destroy(): VimeoPromise<void, Error>;
}

export interface VimeoCuePoint {
    time: number;
    data: VimeoCuePointData;
    id: string;
}

export interface VimeoCuePointData extends Object {
    customKey: string;
}

export interface VimeoTextTrack {
    language: string;
    kind: string;
    label: string;
    mode?: string;
}

export interface Options {
    id?: number;
    url?: string;
    autopause?: boolean;
    autoplay?: boolean;
    background?: boolean;
    byline?: boolean;
    color?: string;
    height?: number;
    loop?: boolean;
    maxheight?: number;
    maxwidth?: number;
    muted?: boolean;
    playsinline?: boolean;
    portrait?: boolean;
    responsive?: boolean;
    speed?: boolean;
    title?: boolean;
    transparent?: boolean;
    width?: number;
}

export interface VimeoPromise<Result, Reason> extends Promise<Result> {
    (
        successCallback?: (promiseValue: Result) => void,
        rejectCallback?: (reasonValue: Reason) => void
    ): Promise<Result>;
}

/*~ You can declare properties of the module using const, let, or var */
export default Player;
