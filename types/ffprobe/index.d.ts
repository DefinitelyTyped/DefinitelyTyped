declare namespace getInfo {
    type FFProbeBoolean = "0" | "1";

    interface BaseSideData {
        side_data_type: string;
    }

    interface UnknownSideData extends BaseSideData {
        /**
         * Based on the C code related to the default side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2298}
         */
        side_data_type: "unknown";
    }

    interface DisplayMatrixSideData extends BaseSideData {
        /**
         * Based on the C code related to Display Matrix side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2300-L2304}
         */
        side_data_type: "Display Matrix";
        /**
         * Mismatches the type linked earlier because ffprobe JSON output
         * reads the printed integers for the display matrix as a string
         */
        displaymatrix: string;
        rotation: number;
    }

    interface Stereo3dSideData extends BaseSideData {
        /**
         * Based on the C code related to Stereo 3D side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2306-L2308}
         */
        side_data_type: "Stereo 3D";
        /**
         * Based on the C code of the libauvutil stereo3d file
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/libavutil/stereo3d.c#L47-L56}
         */
        type:
            | "unknown"
            | "2D"
            | "side by side"
            | "top and bottom"
            | "frame alternate"
            | "checkerboard"
            | "side by side (quincunx subsampling)"
            | "interleaved lines"
            | "interleaved columns";
        inverted: number;
    }

    interface BaseSphericalMappingSideData extends BaseSideData {
        /**
         * Based on the C code related to Spherical Mapping side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2310-L2326}
         */
        side_data_type: "Spherical Mapping";
        /**
         * Based on the C code of the libauvutil spherical file
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/libavutil/spherical.c#L55-L59}
         */
        projection: string;
        yaw: number;
        pitch: number;
        roll: number;
    }

    interface UnknownSphericalMappingSideData extends BaseSphericalMappingSideData {
        projection: "unknown";
    }

    interface EquirectangularSphericalMappingSideData extends BaseSphericalMappingSideData {
        projection: "equirectangular";
    }

    interface CubeMapSphericalMappingSideData extends BaseSphericalMappingSideData {
        projection: "cubemap";
        /**
         * Based on the C code related to Cube Map Spherical Mapping side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2313}
         */
        padding: number;
    }

    interface TiltedEquirectangularSphericalMappingSideData extends BaseSphericalMappingSideData {
        projection: "tiled equirectangular";
        /**
         * Based on the C code related to Cube Map Spherical Mapping side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2315-L2321}
         */
        bound_left: number;
        bound_top: number;
        bound_right: number;
        bound_bottom: number;
    }

    type SphericalMappingSideData =
        | UnknownSphericalMappingSideData
        | EquirectangularSphericalMappingSideData
        | CubeMapSphericalMappingSideData
        | TiltedEquirectangularSphericalMappingSideData;

    interface SkipSamplesSideData extends BaseSideData {
        /**
         * Based on the C code related to Skip Samples side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2328-L2331}
         */
        side_data_type: "Skip Samples";
        skip_samples: number;
        discard_padding: number;
        skip_reason: number;
        discard_reason: number;
    }

    interface BaseMasteringDisplayMetadataSideData extends BaseSideData {
        /**
         * Based on the C code related to Mastering display metadata side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2333-L2350}
         */
        side_data_type: "Mastering display metadata";
    }

    interface PrimariesMasteringDisplayMetadataSideData extends BaseMasteringDisplayMetadataSideData {
        /**
         * Based on the C code related to Primaries Mastering display metadata side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2336-L2344}
         */
        red_x: string;
        red_y: string;
        green_x: string;
        green_y: string;
        blue_x: string;
        blue_y: string;

        white_point_x: string;
        white_point_y: string;
    }

    interface LuminanceMasteringDisplayMetadataSideData extends BaseMasteringDisplayMetadataSideData {
        /**
         * Based on the C code related to Luminance Mastering display metadata side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2348-L2349}
         */
        min_luminance: string;
        max_luminance: string;
    }

    type MasteringDisplayMetadataSideData =
        | PrimariesMasteringDisplayMetadataSideData
        | LuminanceMasteringDisplayMetadataSideData
        | (PrimariesMasteringDisplayMetadataSideData & LuminanceMasteringDisplayMetadataSideData);

    interface ContentLightLevelMetadataSideData extends BaseSideData {
        /**
         * Based on the C code related to Content light level metadata side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2352-L2354}
         */
        side_data_type: "Content light level metadata";
        max_content: number;
        max_average: number;
    }

    interface DoviConfigurationRecordSideData extends BaseSideData {
        /**
         * Based on the C code related to DOVI configuration record side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2356-L2364}
         */
        side_data_type: "DOVI configuration record";
        dv_version_major: number;
        dv_version_minor: number;
        dv_profile: number;
        dv_level: number;
        rpu_present_flag: number;
        el_present_flag: number;
        bl_present_flag: number;
        dv_bl_signal_compatibility_id: number;
    }

    interface AudioServiceTypeSideData extends BaseSideData {
        /**
         * Based on the C code related to Audio Service Type side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2366-L2367}
         */
        side_data_type: "Audio Service Type";
        service_type: number;
    }

    interface MpegtsStreamIdSideData extends BaseSideData {
        /**
         * Based on the C code related to MPEGTS Stream ID side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2369}
         */
        side_data_type: "MPEGTS Stream ID";
        id: number;
    }

    interface CpbPropertiesSideData extends BaseSideData {
        /**
         * Based on the C code related to CPB properties side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2371-L2376}
         */
        side_data_type: "CPB properties";
        max_bitrate: number;
        min_bitrate: number;
        avg_bitrate: number;
        buffer_size: number;
        vbv_delay: number;
    }

    interface WebvttSideData extends BaseSideData {
        /**
         * Based on the C code related to Webvtt side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2379-L2381}
         */
        side_data_type: "WebVTT ID" | "WebVTT Settings";
        data?: string | undefined;
        data_hash: string;
    }

    interface ActiveFormatDescriptionSideData extends BaseSideData {
        /**
         * Based on the C code related to Active format description side data section
         * {@see https://github.com/FFmpeg/FFmpeg/blob/b37795688a9bfa6d5a2e9b2535c4b10ebc14ac5d/fftools/ffprobe.c#L2383}
         */
        side_data_type: "Active format description";
        active_format?: number;
    }

    type SideData =
        | UnknownSideData
        | DisplayMatrixSideData
        | Stereo3dSideData
        | SphericalMappingSideData
        | SkipSamplesSideData
        | MasteringDisplayMetadataSideData
        | ContentLightLevelMetadataSideData
        | DoviConfigurationRecordSideData
        | AudioServiceTypeSideData
        | MpegtsStreamIdSideData
        | AudioServiceTypeSideData
        | MpegtsStreamIdSideData
        | CpbPropertiesSideData
        | WebvttSideData
        | ActiveFormatDescriptionSideData;

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
        codec_type?: "video" | "audio" | "images" | undefined;
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
        duration_ts?: number | undefined;
        duration?: string | undefined;
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

        side_data_list?: SideData[] | undefined;
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
