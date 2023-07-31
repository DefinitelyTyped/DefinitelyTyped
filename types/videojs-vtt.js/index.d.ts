// Type definitions for videojs-vtt.js v0.15.5
// NPM Package:     https://www.npmjs.com/package/videojs-vtt.js
// Github Project:  https://github.com/videojs/vtt.js
// Definitions by:  David Ko <https://github.com/davidholyko>
// Definitions:     https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'videojs-vtt.js' {
    export type NumberBetween_0_100 = number;
    export type TimeInSeconds = number;
    export type VttText = string;
    export type DecoderFn = (data: string) => string;
    export type Decoder = { decode: Decoder };
    export type restore = () => void;
    export type shim = () => void;

    type VttParser = {
        buffer: string;
        decoder: Decoder;
        regionList: Array<string>;
        state: 'INITIAL' | 'BADCUE' | 'HEADER' | 'NOTE' | 'ID' | 'CUETEXT' | null;
        vttjs: {};
        window: Window;

        onregion: (region: string) => void;
        oncue: (cue: VTTCue) => void;
        onflush: () => void;
        onparsingerror: (e: Error) => void;
        parse: (moreData?: VttText) => VttParser;
        flush: () => void;
    };

    export interface VttParserConstructor {
        new (window: Window, stringDecoder?: ReturnType<typeof WebVTT.StringDecoder>): VttParser;
    }

    export namespace WebVTT {
        export const Parser: VttParserConstructor;
        export function StringDecoder(): Decoder;
        export function processCues(window: Window, cues: Array<VTTCue>, overlay: HTMLElement | null): void;
        export function convertCueToDOMTree(window: Window, text: string): void;
    }
}

export declare var VTTCue: {
    prototype: VTTCue;
    new (startTime: TimeInSeconds, endTime: TimeInSeconds, text: string): VTTCue;

    // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#text-track-cue-display-state
    displayState?: any;
    hasBeenReset?: boolean;
};

export declare var VTTRegion: {
    prototype: VTTRegion;
    new (): VTTRegion;

    fromJSON(json: any): VTTRegion;
    create(options: any): VTTRegion;
};
