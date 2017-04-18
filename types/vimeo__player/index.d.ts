// Type definitions for @vimeo/player 2.0
// Project: https://github.com/vimeo/player.js
// Definitions by: Denis Yılmaz <https://github.com/denisyilmaz>, Felix Albert <f.albert.work@icloud.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// tslint:disable-next-line no-single-declare-module
declare module "@vimeo/player" {
    function myMethod(a: string): string;
    function myOtherMethod(a: number): number;

    type CallbackFunction = (...args: any[]) => any;

    interface Error {name: string; message: string; method: string; }

    interface PasswordError extends Error {name: "PasswordError"; message: string; method: string; }
    interface PrivacyError extends Error {name: "PrivacyError"; message: string; method: string; }
    interface InvalidTrackLanguageError extends Error {name: "InvalidTrackLanguageError"; message: string; method: string; }
    interface InvalidTrackError extends Error {name: "InvalidTrackError"; message: string; method: string; }
    interface UnsupportedError extends Error {name: "UnsupportedError"; message: string; method: string; }
    interface ContrastError extends Error {name: "ContrastError"; message: string; method: string; }
    interface InvalidCuePoint extends Error {name: "InvalidCuePoint"; message: string; method: string; }
    interface RangeError extends Error {name: "RangeError"; message: string; method: string; }
    interface TypeError extends Error {name: "TypeError"; message: string; method: string; }

    type EventName = "play" | "pause" | "ended" | "timeupdate" | "progress" | "seeked" | "texttrackchange" | "cuechange" | "cuepoint" | "volumechange" | "error" | "loaded" |  string;
    type EventCallback = (data: any) => any;

    class Player {
        constructor(element: HTMLIFrameElement|HTMLElement|string, options: Options);

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
        getTextTracks(): VimeoPromise<VimeoTextTrack[], Error>;
        getVideoEmbedCode(): VimeoPromise<string, Error>;
        getVideoId(): VimeoPromise<number, Error>;
        getVideoTitle(): VimeoPromise<string, Error>;
        getVideoWidth(): VimeoPromise<number, Error>;
        getVideoHeight(): VimeoPromise<number, Error>;
        getVideoUrl(): VimeoPromise<string, PrivacyError | Error>;
        getVolume(): VimeoPromise<number, Error>;
        setVolume(volume: number): VimeoPromise<number, RangeError | Error>;
    }

    interface VimeoCuePoint {
        time: number;
        data: VimeoCuePointData;
        id: string;
    }

    interface VimeoCuePointData extends Object {
        customKey: string;
    }

    interface VimeoTextTrack {
        language: string;
        kind: string;
        label: string;
        mode?: string;
    }

    interface Options {
        id?: number;
        url?: string;
        autopause?: boolean;
        autoplay?: boolean;
        byline?: boolean;
        color?: string;
        height?: number;
        loop?: boolean;
        maxheight?: number;
        maxwidth?: number;
        portrait?: boolean;
        title?: boolean;
        width?: number;
    }

    interface VimeoPromise<Result, Reason> extends Promise<Result> {
        (
            successCallback?: (promiseValue: Result) => void,
            rejectCallback?: (reasonValue: Reason) => void
        ): Promise<Result>;
    }

    /*~ You can declare properties of the module using const, let, or var */
    const playerMap: WeakMap<any, any>;
    const readyMap: WeakMap<any, any>;
}
