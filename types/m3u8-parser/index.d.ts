export abstract class Stream {
    private listeners: Record<string, unknown>;
    private on(type: string, listener: () => void): void;
    private off(type: string, listener: () => void): void;
    private trigger(type: string, ...args: unknown[]): void;
    private dispose(): void;
    private pipe(destination: Stream): void;
}

export interface RawAttributes {
    RESOLUTION?: unknown;
    BANDWIDTH?: number;
    "FRAME-RATE"?: number;
    "PROGRAM-ID"?: number;
    PRECISE?: number;
    "TIME-OFFSET"?: unknown;

    [other: string]: unknown;
}

export interface Attributes {
    resoltion?: unknown;

    [other: string]: unknown;
}

export interface ByteRange {
    length: number;
    offset: number;
}

export interface Segment {
    dateTimeString: string;
    dateTimeObject: Date;
    programDateTime: number;
    title: string;
    duration: number;
    uri: string;

    timeline?: number;
    parts?: Attributes[];
    preloadHints?: object[];
    key?: {
        method: string;
        uri: string;
        iv: string;
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
    playlistType?: "VOD" | "EVENT";
    mediaGroups?: {
        [groupName: string]: {
            [groupId: string]: {
                default: boolean;
                autoselect: boolean;
                language: string;
                uri: string;
                instreamId: string;
                characteristics: string;
                forced: boolean;
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
    playlists?: (Manifest & { attributes: Attributes })[];
}

export class Parser extends Stream {
    constructor(options?: {
        url?: string;
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
