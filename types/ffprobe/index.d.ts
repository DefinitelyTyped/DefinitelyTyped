// Type definitions for ffprobe 1.1
// Project: https://github.com/eugeneware/ffprobe
// Definitions by: Sergey <https://github.com/SergeyAlexsandrovich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace getInfo {
    interface Options {
        path: string;
    }

    interface FFProbeStream {
        index: number;
        codec_name: string;
        codec_long_name: string;
        profile: string;
        codec_type: 'video' | 'audio' | 'images';
        codec_time_base: string;
        codec_tag_string: string;
        codec_tag: string;
        width?: number;
        height?: number;
        coded_width?: number;
        coded_height?: number;
        has_b_frames?: number;
        sample_aspect_ratio?: string;
        display_aspect_ratio?: string;
        pix_fmt?: string;
        level?: number;
        sample_fmt?: string;
        sample_rate?: number;
        channel_layout?: string;
        channels?: number;
        bits_per_sample?: number;
        chroma_location?: string;
        refs?: number;
        is_avc?: number;
        nal_length_size?: number;
        r_frame_rate: string;
        avg_frame_rate?: string;
        time_base?: string;
        start_pts: number;
        start_time: number;
        duration_ts: string;
        duration: number;
        bit_rate: number;
        bits_per_raw_sample?: number;
        nb_frames: number;
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
        };
        tags: {
            language?: string;
            handler_name: string;
            creation_time?: string;
        };
    }

    interface FFProbeResult {
        streams: FFProbeStream[];
    }
}

declare function getInfo(filePath: string, options: getInfo.Options, cb: (err: Error, info: getInfo.FFProbeResult) => void): void;

declare function getInfo(filePath: string, options: getInfo.Options): Promise<getInfo.FFProbeResult>;

export = getInfo;
