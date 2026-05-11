/// <reference types="node" />

export interface Byterange {
    length: number;
    offset: number;
}

export interface Options {
    strictMode?: boolean;
    allowClosedCaptionsNone?: boolean;
    silent?: boolean;
}

export class Data {
    type: "playlist" | "segment";
}

export namespace types {
    interface BasePlaylistConstructorProperties {
        uri?: string | undefined;
        version?: number | undefined;
        independentSegments?: boolean | undefined;
        start?: { offset: number; precise: boolean } | undefined;
        source?: string | undefined;
    }

    class Playlist extends Data {
        isMasterPlaylist: boolean;

        uri?: string | undefined;

        version?: number | undefined;

        independentSegments: boolean;

        start?: { offset: number; precise: boolean } | undefined;

        source?: string | undefined;

        constructor(properties: BasePlaylistConstructorProperties & { isMasterPlaylist: boolean });
    }

    class MasterPlaylist extends Playlist {
        isMasterPlaylist: true;

        variants: readonly Variant[];

        currentVariant?: number | undefined;

        sessionDataList: readonly SessionData[];

        sessionKeyList: readonly Key[];

        constructor(
            properties: BasePlaylistConstructorProperties & {
                variants?: readonly Variant[] | undefined;
                currentVariant?: number | undefined;
                sessionDataList?: readonly SessionData[] | undefined;
                sessionKeyList?: readonly Key[] | undefined;
                source?: string | undefined;
            },
        );
    }

    interface LowLatencyCompatibility {
        canBlockReload?: boolean | undefined;
        canSkipUntil?: boolean | undefined;
        holdBack?: number | undefined;
        partHoldBack?: number | undefined;
    }

    class MediaPlaylist extends Playlist {
        isMasterPlaylist: false;

        targetDuration: number;

        mediaSequenceBase?: number | undefined;

        discontinuitySequenceBase?: number | undefined;

        endlist: boolean;

        playlistType?: "EVENT" | "VOD" | undefined;

        isIFrame: boolean;

        segments: readonly Segment[];

        prefetchSegments: readonly PrefetchSegment[];

        lowLatencyCompatibility?: LowLatencyCompatibility | undefined;

        partTargetDuration?: number | undefined;

        renditionReports?: readonly RenditionReport[] | undefined;

        skip?: number | undefined;

        constructor(
            properties: BasePlaylistConstructorProperties & {
                targetDuration: number;
                mediaSequenceBase?: number | undefined;
                discontinuitySequenceBase?: number | undefined;
                endlist?: boolean | undefined;
                playlistType?: "EVENT" | "VOD" | undefined;
                isIFrame?: boolean | undefined;
                segments?: readonly Segment[] | undefined;
                prefetchSegments?: readonly PrefetchSegment[] | undefined;
                source?: string | undefined;
                lowLatencyCompatibility?: LowLatencyCompatibility | undefined;
                partTargetDuration?: number | undefined;
                renditionReports?: readonly RenditionReport[] | undefined;
                skip?: number | undefined;
            },
        );
    }

    class Variant {
        uri: string;

        isIFrameOnly?: boolean | undefined;

        bandwidth: number;

        averageBandwidth?: number | undefined;

        codecs?: string | undefined;

        resolution?: { width: number; height: number } | undefined;

        frameRate?: number | undefined;

        hdcpLevel?: string | undefined;

        audio: ReadonlyArray<Rendition<"AUDIO">>;

        video: ReadonlyArray<Rendition<"VIDEO">>;

        subtitles: ReadonlyArray<Rendition<"SUBTITLES">>;

        closedCaptions: ReadonlyArray<Rendition<"CLOSED-CAPTIONS">>;

        currentRenditions: {
            audio?: number | undefined;
            video?: number | undefined;
            subtitles?: number | undefined;
            closedCaptions?: number | undefined;
        };

        constructor(properties: {
            uri: string;
            isIFrameOnly?: boolean | undefined;
            bandwidth: number;
            averageBandwidth?: number | undefined;
            codecs?: string | undefined;
            resolution?: { width: number; height: number } | undefined;
            frameRate?: number | undefined;
            hdcpLevel?: string | undefined;
            audio?: ReadonlyArray<Rendition<"AUDIO">> | undefined;
            video?: ReadonlyArray<Rendition<"VIDEO">> | undefined;
            subtitles?: ReadonlyArray<Rendition<"SUBTITLES">> | undefined;
            closedCaptions?: ReadonlyArray<Rendition<"CLOSED-CAPTIONS">> | undefined;
            currentRenditions?:
                | {
                    audio?: number | undefined;
                    video?: number | undefined;
                    subtitles?: number | undefined;
                    closedCaptions?: number | undefined;
                }
                | undefined;
        });
    }

    class Rendition<T> {
        type: T;

        uri?: string | undefined;

        groupId: string;

        language?: string | undefined;

        assocLanguage?: string | undefined;

        name: string;

        isDefault: boolean;

        autoselect: boolean;

        forced: boolean;

        instreamId?: string | undefined;

        characteristics?: string | undefined;

        channels?: string | undefined;

        constructor(properties: {
            type: T;
            uri?: string | undefined;
            groupId: string;
            language?: string | undefined;
            assocLanguage?: string | undefined;
            name: string;
            isDefault?: boolean | undefined;
            autoselect?: boolean | undefined;
            forced?: boolean | undefined;
            instreamId?: string | undefined;
            characteristics?: string | undefined;
            channels?: string | undefined;
        });
    }

    class SessionData {
        id: string;

        value?: string | undefined;

        uri?: string | undefined;

        language?: string | undefined;

        constructor(properties: {
            id: string;
            value?: string | undefined;
            uri?: string | undefined;
            language?: string | undefined;
        });
    }

    class Segment extends Data {
        uri: string;

        duration: number;

        title?: string | undefined;

        byterange?: Byterange | undefined;

        discontinuity?: boolean | undefined;

        mediaSequenceNumber: number;

        discontinuitySequence: number;

        key?: Key | undefined;

        map?: MediaInitializationSection | undefined;

        programDateTime?: Date | undefined;

        dateRange: DateRange;

        parts?: readonly PartialSegment[] | undefined;

        constructor(properties: {
            uri: string;
            duration: number;
            title?: string | undefined;
            byterange?: Byterange | undefined;
            discontinuity?: boolean | undefined;
            mediaSequenceNumber: number;
            discontinuitySequence: number;
            key?: Key | undefined;
            map?: MediaInitializationSection | undefined;
            programDateTime?: Date | undefined;
            dateRange?: DateRange | undefined;
            parts?: readonly PartialSegment[] | undefined;
        });
    }

    interface ByteRange {
        length: number;
        offset: number;
    }

    class PartialSegment {
        hint?: boolean | undefined;

        uri: string;

        duration?: number | undefined;

        independent?: boolean | undefined;

        byterange?: ByteRange | undefined;

        gap?: boolean | undefined;

        constructor(properties: {
            hint?: boolean | undefined;
            uri: string;
            duration?: number | undefined;
            independent?: boolean | undefined;
            byterange?: ByteRange | undefined;
            gap?: boolean | undefined;
        });
    }

    class PrefetchSegment extends Data {
        uri: string;

        discontinuity?: boolean | undefined;

        mediaSequenceNumber: number;

        discontinuitySequence: number;

        key?: Key | undefined;

        constructor(properties: {
            uri: string;
            discontinuity?: boolean | undefined;
            mediaSequenceNumber: number;
            discontinuitySequence: number;
            key?: Key | undefined;
        });
    }

    class Key {
        method: string;

        uri?: string | undefined;

        iv?: Buffer | undefined;

        format?: string | undefined;

        formatVersion?: string | undefined;

        constructor(properties: {
            method: string;
            uri?: string | undefined;
            iv?: Buffer | undefined;
            format?: string | undefined;
            formatVersion?: string | undefined;
        });
    }

    class MediaInitializationSection {
        uri: string;

        byterange?: Byterange | undefined;

        constructor(properties: { uri: string; byterange?: Byterange | undefined });
    }

    class DateRange {
        id: string;

        classId?: string | undefined;

        start: Date;

        end?: Date | undefined;

        duration?: number | undefined;

        plannedDuration?: number | undefined;

        endOnNext?: boolean | undefined;

        attributes?: object | undefined;

        constructor(properties: {
            id: string;
            classId?: string | undefined;
            start: Date;
            end?: Date | undefined;
            duration?: number | undefined;
            plannedDuration?: number | undefined;
            endOnNext?: boolean | undefined;
            attributes?: object | undefined;
        });
    }

    class RenditionReport {
        uri: string;

        lastMSN?: number | undefined;

        lastPart?: number | undefined;

        constructor(properties: { uri: string; lastMSN?: number | undefined; lastPart?: number | undefined });
    }
}

export function parse(manifest: string): types.MasterPlaylist | types.MediaPlaylist;

export function stringify(playlist: types.MasterPlaylist | types.MediaPlaylist): string;

export function setOptions(overrides: Partial<Options>): void;

export function getOptions(): Options;
