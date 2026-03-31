export type PreservedStreamEventType = "info" | "warn" | "error";

export abstract class Stream {
    listeners: Record<string, unknown>;
    on(type: PreservedStreamEventType, listener: (data: { message: string }) => void): void;
    on(type: string, listener: (...data: unknown[]) => void): void;
    off(type: PreservedStreamEventType, listener: (data: { message: string }) => void): boolean;
    off(type: string, listener: (...data: unknown[]) => void): boolean;
    trigger(type: PreservedStreamEventType, listener: (data: { message: string }) => void): void;
    trigger(type: string, listener: (...data: unknown[]) => void): void;
    dispose(): void;
    pipe(destination: Stream): void;
}

export interface RawAttributes {
    RESOLUTION?: { width: number; height: number };
    BANDWIDTH?: number;
    "FRAME-RATE"?: number;
    "PROGRAM-ID"?: number;
    PRECISE?: number;
    "TIME-OFFSET"?: unknown;
    URI?: string;
    CODECS?: string;
    AUDIO?: string;
    SUBTITLES?: string;

    [other: string]: unknown;
}

export interface Attributes {
    resolution?: unknown;

    [other: string]: unknown;
}

export interface ByteRange {
    length: number;
    offset: number;
}

export interface Segment {
    dateTimeString?: string;
    dateTimeObject?: Date;
    programDateTime?: number;
    title?: string;
    duration: number;
    uri: string;

    timeline?: number;
    parts?: Attributes[];
    preloadHints?: object[];
    key?: {
        method: string;
        uri: string;
        iv?: Uint32Array;
    };
    map?: {
        uri: string;
        byterange: ByteRange;
    };
    byterange?: ByteRange;
    attributes?: RawAttributes;
    discontinuity?: boolean;
    cueOut?: string;
    cueOutCont?: string;
    cueIn?: string;
}

export interface IframePlaylist {
    attributes: Attributes;
    uri: string;
    timeline: number;
}

export interface Manifest {
    allowCache: boolean;
    discontinuityStarts: number[];
    dateRanges: RawAttributes[];
    iFramePlaylists: IframePlaylist[];
    segments: Segment[];
    preloadSegment?: Segment;
    skip?: Attributes;
    serverControl?: Attributes;
    renditionReports?: Attributes[];
    partInf?: Attributes[];
    partTargetDuration?: number;
    definitions?: object;
    version?: number;
    contentProtection?: {
        "com.apple.fps.1_0"?: {
            attributes: Attributes;
        };
        "com.microsoft.playready"?: {
            uri?: unknown;
        };
        "com.widevine.alpha"?: {
            attributes: {
                schemeIdUri: unknown;
                keyId: string;
            };
            pssh: unknown;
        };
    };
    mediaSequence?: number;
    discontinuitySequence?: number;
    independentSegments?: boolean;
    playlistType?: "VOD" | "EVENT";
    mediaGroups?: {
        [groupName: string]: {
            [groupId: string]: {
                [itemName: string]: {
                    default: boolean;
                    autoselect: boolean;
                    language: string;
                    uri?: string;
                    instreamId?: string;
                    characteristics?: string;
                    forced?: boolean;
                };
            };
        };
    };
    start?: {
        timeOffset: unknown;
        precise: unknown;
    };

    dateTimeString?: string;
    dateTimeObject?: Date;
    targetDuration?: number;
    totalDuration?: number;
    endList?: boolean;
    custom?: unknown;
    playlists?: PlaylistItem[];
}

export interface PlaylistItem {
    attributes: RawAttributes;
    uri: string;
    timeline: number;
    contentProtection?: Manifest["contentProtection"];
}

export class Parser extends Stream {
    constructor(options?: {
        uri?: string;
        mainDefinitions?: Record<string, string>;
    });
    lineStream: LineStream;
    parseStream: ParseStream;
    mainDefinitions: Record<string, string>;
    params: URLSearchParams;
    lastProgramDateTime: null;

    push(lines: string): void;

    end(): void;

    manifest: Manifest;

    requiredCompatibilityversion(currentVersion: number, targetVersion: number): void;

    addParser: ParseStream["addParser"];
    addTagMapper: ParseStream["addTagMapper"];
}

export class LineStream extends Stream {
    buffer: string;

    push(data: string): void;
}

export class ParseStream extends Stream {
    push(line: string): void;

    addParser(options: {
        expression: RegExp;
        customType: string;
        dataParser?(line: string): string | number;
        segment?: boolean;
    }): void;

    addTagMapper(options: { expression: RegExp; map?(line: string): string }): void;
}
