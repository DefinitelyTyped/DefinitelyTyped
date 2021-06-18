// Type definitions for ffprobe 1.1
// Project: https://github.com/eugeneware/ffprobe
// Definitions by: Sergey <https://github.com/SergeyAlexsandrovich>
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
        codec_name?: string;
        codec_long_name?: string;
        profile?: string;
        codec_type?: 'video' | 'audio' | 'images';
        codec_time_base: string;
        codec_tag_string: string;
        codec_tag: string;
        extradata?: string;

        // Video attributes
        width?: number;
        height?: number;
        coded_width?: number;
        coded_height?: number;
        closed_captions?: FFProbeBoolean;
        has_b_frames?: number;
        sample_aspect_ratio?: string;
        display_aspect_ratio?: string;
        pix_fmt?: string;
        level?: number;
        color_range?: string;
        color_space?: string;
        color_transfer?: string;
        color_primaries?: string;
        chroma_location?: string;
        field_order?: string;
        timecode?: string;
        refs?: number;

        // Audio attributes
        sample_fmt?: string;
        sample_rate?: number;
        channels?: number;
        channel_layout?: string;
        bits_per_sample?: number;

        id: string;
        r_frame_rate: string;
        avg_frame_rate: string;
        time_base: string;
        start_pts?: number;
        start_time?: number;
        duration_ts?: string;
        duration?: number;
        bit_rate?: number;
        max_bit_rate?: number;
        bits_per_raw_sample?: number;
        nb_frames?: number;
        nb_read_frames?: number;
        nb_read_packets?: number;

        // Not in XML file, but is still in the output of ffprobe MKV files.
        is_avc?: number;
        nal_length_size?: number;

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
            timed_thumbnails?: number;
        };
        tags: {
            language?: string;
            handler_name?: string;
            creation_time?: string;
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
