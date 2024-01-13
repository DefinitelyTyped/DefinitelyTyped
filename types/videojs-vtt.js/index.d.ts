type TimeInSeconds = number;
type VttText = string;
type DecoderFn = (data: string) => string;
interface Decoder {
    decode: DecoderFn;
}

export function shim(): void;
export function restore(): void;

interface VttParser {
    buffer: string;
    decoder: Decoder;
    regionList: string[];
    state: "INITIAL" | "BADCUE" | "HEADER" | "NOTE" | "ID" | "CUETEXT" | null;
    vttjs: {};
    window: Window;

    onregion: (region: VTTRegion) => void;
    oncue: (cue: VTTCue) => void;
    onflush: () => void;
    onparsingerror: (e: Error) => void;
    parse: (moreData?: VttText) => VttParser;
    flush: () => void;
}

interface VttParserConstructor {
    new(window: Window, stringDecoder?: ReturnType<typeof WebVTT.StringDecoder>): VttParser;
}

export namespace WebVTT {
    const Parser: VttParserConstructor;
    function StringDecoder(): Decoder;
    function processCues(window: Window, cues: VTTCue[], overlay: HTMLElement | null): void;
    function convertCueToDOMTree(window: Window, text: string): HTMLElement;
}

export const VTTCue: {
    prototype: VTTCue;
    new(startTime: TimeInSeconds, endTime: TimeInSeconds, text: string): VTTCue;

    // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#text-track-cue-display-state
    displayState?: any;
    hasBeenReset?: boolean;
};

export const VTTRegion: {
    prototype: VTTRegion;
    new(): VTTRegion;

    fromJSON(json: any): VTTRegion;
    create(options: any): VTTRegion;
};

export {};
