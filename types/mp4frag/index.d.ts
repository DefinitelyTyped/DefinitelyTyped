// Type definitions for mp4frag 0.6
// Project: https://github.com/kevinGodell/mp4frag
// Definitions by: Ken Sanders <https://github.com/kensand>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import { Transform } from 'stream';
import 'node/buffer';

declare namespace Mp4Frag {
    /**
     * A SegmentObject.
     *
     * An object with values
     * <code>
     * {
     *     segment: null,
     *     sequence: -1,
     *     duration: -1;
     *     timestamp: -1,
     *     keyframe: true
     * }
     * </code
     * is returned in erroneous conditions (before a segment has been generated, etc. Refer to individual function docs.
     */
    interface SegmentObject {
        segment?: Buffer;
        sequence: number;
        duration: number;
        timestamp: number;
        keyframe: boolean;
    }

    interface Mp4FragOptions {
        /**
         * Base name of files in m3u8 playlist. Affects the generated m3u8 playlist by naming file fragments.
         *
         * Must be set to generate m3u8 playlist. e.g. 'front_door'
         */
        hlsPlaylistBase?: string;

        /**
         * Number of segments to use in m3u8 playlist. Must be an integer ranging from 2 to 20.
         *
         * Defaults to 4.
         */
        hlsPlaylistSize?: number;

        /**
         * Number of extra segments to keep in memory. Must be an integer ranging from 0 to 10.
         *
         * Defaults to 0.
         */
        hlsPlaylistExtra?: number;

        /**
         * Indicates that m3u8 playlist should be generated after [initialization]{@link Mp4Frag#initialization}
         * is created and before media segments are created.
         *
         * Defaults to true.
         */
        hlsPlaylistInit?: boolean;

        /**
         * Number of segments to keep in memory. Has no effect if using options.hlsPlaylistBase.
         * Must be an integer ranging from 2 to 30.
         *
         * Defaults to 2.
         */
        segmentCount?: number;
    }
}

declare class Mp4Frag extends Transform {
    /**
     * Construct a new Mp4Frag object.
     *
     * @throws If options.hlsPlaylistBase contains characters other than letters(a-zA-Z) and underscores(_).
     */
    constructor(options?: Mp4Frag.Mp4FragOptions);

    /**
     * Returns the audio codec information as a <b>string</b>.
     * Returns <b>null</b> if requested before [initialized event]{@link Mp4Frag#event:initialized}.
     */
    get audioCodec(): string | null;

    /**
     * Returns the video codec information as a <b>string</b>.
     * Returns <b>null</b> if requested before [initialized event]{@link Mp4Frag#event:initialized}.
     */
    get videoCodec(): string | null;
    /**
     * Returns the mime type information as a <b>string</b>.
     * Returns <b>null</b> if requested before [initialized event]{@link Mp4Frag#event:initialized}.
     */
    get mime(): string | null;

    /**
     * Returns the Mp4 initialization fragment as a <b>Buffer</b>.
     * Returns <b>null</b> if requested before [initialized event]{@link Mp4Frag#event:initialized}.
     */
    get initialization(): Buffer | null;

    /**
     * Returns the latest [SegmentObject]{@link SegmentObject} as a <b>Buffer</b>.
     * Returns <b>null</b> if requested before first [segment event]{@link Mp4Frag#event:segment}.
     */
    get segment(): Buffer | null;

    /**
     * Returns the latest [SegmentObject]{@link SegmentObject}.
     * Returns <b>{segment: null, sequence: -1, duration: -1; timestamp: -1, keyframe: true}</b> if requested before
     * first [segment event]{@link Mp4Frag#event:segment}.
     */
    get segmentObject(): Mp4Frag.SegmentObject;

    /**
     * Returns the timestamp of the latest [SegmentObject]{@link SegmentObject} as an <b>Integer</b>(<i>milliseconds</i>).
     * Returns <b>-1</b> if requested before first [segment event]{@link Mp4Frag#event:segment}.
     */
    get timestamp(): number;

    /**
     * Returns the duration of latest [SegmentObject]{@link SegmentObject} as a <b>Float</b>(<i>seconds</i>).
     * Returns <b>-1</b> if requested before first [segment event]{@link Mp4Frag#event:segment}.
     */
    get duration(): number;

    /**
     * Returns the total duration of all [SegmentObjects]{@link SegmentObject} as a <b>Float</b>(<i>seconds</i>).
     * Returns <b>-1</b> if requested before first [segment event]{@link Mp4Frag#event:segment}.
     */
    get totalDuration(): number;

    /**
     * Returns the total byte length of the Mp4 initialization and all [SegmentObjects]{@link SegmentObject} as an <b>Integer</b>(<i>bytes</i>).
     * Returns <b>-1</b> if requested before [initialized event]{@link Mp4Frag#event:initialized}.
     */
    get totalByteLength(): number | null;

    /**
     * Returns the fmp4 HLS m3u8 playlist as a <b>string</b>.
     * Returns <b>null</b> if requested before [initialized event]{@link Mp4Frag#event:initialized}.
     */
    get m3u8(): string | null;

    /**
     * Returns the sequence of the latest [SegmentObject]{@link SegmentObject} as an <b>Integer</b>.
     * Returns <b>-1</b> if requested before first [segment event]{@link Mp4Frag#event:segment}.
     */
    get sequence(): number;

    /**
     * Returns a boolean indicating if the current segment contains a keyframe.
     * Returns <b>false</b> if the current segment does not contain a keyframe.
     * Returns <b>true</b> if segment only contains audio.
     */
    get keyframe(): boolean;

    /**
     * Returns a boolean indicating if all segments contain a keyframe.
     * Returns <b>false</b> if any segments do not contain a keyframe.
     */
    get allKeyframes(): boolean;

    /**
     * Returns an array of [SegmentObject]{@link SegmentObject}
     * Returns <b>null</b> if requested before first [segment event]{@link Mp4Frag#event:segment}.
     */
    get segmentObjects(): Mp4Frag.SegmentObject[] | null;

    /**
     * - Returns the [SegmentObject]{@link SegmentObject} that corresponds to the sequence number.
     * - Returns <b>null</b> if there is no segment that corresponds to sequence number.
     */
    getSegmentObject(sequence: number | string): Mp4Frag.SegmentObject | null;

    /**
     * Clear cached values
     */
    resetCache(): void;
}

export = Mp4Frag;
