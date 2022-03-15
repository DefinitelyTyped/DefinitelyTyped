// Type definitions for ffprobe 1.1
// Project: https://github.com/eugeneware/ffprobe
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace getInfo {
    type FFProbeBoolean = '0' | '1';

    interface Options {
        path: string;
    }

    /**
     * Based on the XML definition of the ffprobe stream type
     * {@see https://github.com/FFmpeg/FFmpeg/blob/master/doc/ffprobe.xsd#L206}
     */
    interface FFProbeStream {
        index: number;
        codec_name?: string | undefined;
        codec_long_name?: string | undefined;
        profile?: string | undefined;
        codec_type?: 'video' | 'audio' | 'images' | undefined;
        codec_time_base: string;
        codec_tag_string: string;
        codec_tag: string;
        extradata?: string | undefined;

        // Video attributes
        width?: number | undefined;
        height?: number | undefined;
        coded_width?: number | undefined;
        coded_height?: number | undefined;
        closed_captions?: FFProbeBoolean | undefined;
        has_b_frames?: number | undefined;
        sample_aspect_ratio?: string | undefined;
        display_aspect_ratio?: string | undefined;
        pix_fmt?: string | undefined;
        level?: number | undefined;
        color_range?: string | undefined;
        color_space?: string | undefined;
        color_transfer?: string | undefined;
        color_primaries?: string | undefined;
        chroma_location?: string | undefined;
        field_order?: string | undefined;
        timecode?: string | undefined;
        refs?: number | undefined;

        // Audio attributes
        sample_fmt?: string | undefined;
        sample_rate?: number | undefined;
        channels?: number | undefined;
        channel_layout?: string | undefined;
        bits_per_sample?: number | undefined;

        id: string;
        r_frame_rate: string;
        avg_frame_rate: string;
        time_base: string;
        start_pts?: number | undefined;
        start_time?: number | undefined;
        duration_ts?: string | undefined;
        duration?: number | undefined;
        bit_rate?: number | undefined;
        max_bit_rate?: number | undefined;
        bits_per_raw_sample?: number | undefined;
        nb_frames?: number | undefined;
        nb_read_frames?: number | undefined;
        nb_read_packets?: number | undefined;

        // Not in XML file, but is still in the output of ffprobe MKV files.
        is_avc?: number | undefined;
        nal_length_size?: number | undefined;

        disposition: {
            default: number;
            dub: number;
            original: number;
            comment: number;
            lyrics: number;
            karaoke: number;
            forced: number;
            hearing_impaired: number;
            visual_impaired: number;
            clean_effects: number;
            attached_pic: number;
            timed_thumbnails?: number | undefined;
        };
        tags: {
            language?: string | undefined;
            handler_name?: string | undefined;
            creation_time?: string | undefined;
            [tag: string]: string | undefined;
        };
    }

    interface FFProbeResult {
        streams: FFProbeStream[];
    }
}

declare function getInfo(
    filePath: string,
    options: getInfo.Options,
    cb: (err: Error, info: getInfo.FFProbeResult) => void,
): void;

declare function getInfo(filePath: string, options: getInfo.Options): Promise<getInfo.FFProbeResult>;

export = getInfo;
