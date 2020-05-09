// Type definitions for hls-parser 0.5
// Project: https://github.com/kuu/hls-parser#readme
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
//                 Christopher Manouvrier <https://github.com/cmanou>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

/// <reference types="node" />

export interface Byterange {
    length: number;
    offset: number;
}

export interface Options {
    strictMode: boolean;
}

export class Data {
    type: 'playlist' | 'segment';
}

export namespace types {
    interface BasePlaylistConstructorProperties {
        uri?: string;
        version?: number;
        independentSegments?: boolean;
        start?: { offset: number; precise: boolean };
        source?: string;
    }

    class Playlist extends Data {
        isMasterPlaylist: boolean;

        uri?: string;

        version?: number;

        independentSegments: boolean;

        start?: { offset: number; precise: boolean };

        source?: string;

        constructor(properties: BasePlaylistConstructorProperties & { isMasterPlaylist: boolean });
    }

    class MasterPlaylist extends Playlist {
        variants: readonly Variant[];

        currentVariant?: number;

        sessionDataList: readonly SessionData[];

        sessionKeyList: readonly Key[];

        constructor(
            properties: BasePlaylistConstructorProperties & {
                variants?: readonly Variant[];
                currentVariant?: number;
                sessionDataList?: readonly SessionData[];
                sessionKeyList?: readonly Key[];
                source?: string;
            },
        );
    }

    class MediaPlaylist extends Playlist {
        targetDuration: number;

        mediaSequenceBase?: number;

        discontinuitySequenceBase?: number;

        endlist: boolean;

        playlistType?: 'EVENT' | 'VOD';

        isIFrame: boolean;

        segments: readonly Segment[];

        constructor(
            properties: BasePlaylistConstructorProperties & {
                targetDuration: number;
                mediaSequenceBase?: number;
                discontinuitySequenceBase?: number;
                endlist?: boolean;
                playlistType?: 'EVENT' | 'VOD';
                isIFrame?: boolean;
                segments?: readonly Segment[];
                source?: string;
            },
        );
    }

    class Variant {
        uri: string;

        isIFrameOnly?: boolean;

        bandwidth: number;

        averageBandwidth?: number;

        codecs?: string;

        resolution?: { width: number; height: number };

        frameRate?: number;

        hdcpLevel?: string;

        audio: ReadonlyArray<Rendition<'AUDIO'>>;

        video: ReadonlyArray<Rendition<'VIDEO'>>;

        subtitles: ReadonlyArray<Rendition<'SUBTITLES'>>;

        closedCaptions: ReadonlyArray<Rendition<'CLOSED-CAPTIONS'>>;

        currentRenditions: { audio?: number; video?: number; subtitles?: number; closedCaptions?: number };

        constructor(properties: {
            uri: string;
            isIFrameOnly?: boolean;
            bandwidth: number;
            averageBandwidth?: number;
            codecs?: string;
            resolution?: { width: number; height: number };
            frameRate?: number;
            hdcpLevel?: string;
            audio?: ReadonlyArray<Rendition<'AUDIO'>>;
            video?: ReadonlyArray<Rendition<'VIDEO'>>;
            subtitles?: ReadonlyArray<Rendition<'SUBTITLES'>>;
            closedCaptions?: ReadonlyArray<Rendition<'CLOSED-CAPTIONS'>>;
            currentRenditions?: { audio?: number; video?: number; subtitles?: number; closedCaptions?: number };
        });
    }

    class Rendition<T> {
        type: T;

        uri?: string;

        groupId: string;

        language?: string;

        assocLanguage?: string;

        name: string;

        isDefault: boolean;

        autoselect: boolean;

        forced: boolean;

        instreamId?: string;

        characteristics?: string;

        channels?: string;

        constructor(properties: {
            type: T;
            uri?: string;
            groupId: string;
            language?: string;
            assocLanguage?: string;
            name: string;
            isDefault?: boolean;
            autoselect?: boolean;
            forced?: boolean;
            instreamId?: string;
            characteristics?: string;
            channels?: string;
        });
    }

    class SessionData {
        id: string;

        value?: string;

        uri?: string;

        language?: string;

        constructor(properties: { id: string; value?: string; uri?: string; language?: string });
    }

    class Segment extends Data {
        uri: string;

        duration: number;

        title?: string;

        byterange?: Byterange;

        discontinuity?: boolean;

        mediaSequenceNumber: number;

        discontinuitySequence: number;

        key?: Key;

        map?: MediaInitializationSection;

        programDateTime?: Date;

        dateRange: DateRange;

        constructor(properties: {
            uri: string;
            duration: number;
            title?: string;
            byterange?: Byterange;
            discontinuity?: boolean;
            mediaSequenceNumber: number;
            discontinuitySequence: number;
            key?: Key;
            map?: MediaInitializationSection;
            programDateTime?: Date;
            dateRange?: DateRange;
        });
    }

    class Key {
        method: string;

        uri?: string;

        iv?: Buffer;

        format?: string;

        formatVersion?: string;

        constructor(properties: { method: string; uri?: string; iv?: Buffer; format?: string; formatVersion?: string });
    }

    class MediaInitializationSection {
        uri: string;

        byterange?: Byterange;

        constructor(properties: { uri: string; byterange?: Byterange });
    }

    class DateRange {
        id: string;

        classId?: string;

        start: Date;

        end?: Date;

        duration?: number;

        plannedDuration?: number;

        endOnNext?: boolean;

        attributes?: object;

        constructor(properties: {
            id: string;
            classId?: string;
            start: Date;
            end?: Date;
            duration?: number;
            plannedDuration?: number;
            endOnNext?: boolean;
            attributes?: object;
        });
    }
}

export function parse(manifest: string): types.MasterPlaylist | types.MediaPlaylist;

export function stringify(playlist: types.MasterPlaylist | types.MediaPlaylist): string;

export function setOptions(overrides: Partial<Options>): void;

export function getOptions(): Options;
