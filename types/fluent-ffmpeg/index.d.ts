/// <reference types="node" />

import * as events from "events";
import * as stream from "stream";

declare namespace Ffmpeg {
    interface FfmpegCommandLogger {
        error(...data: any[]): void;
        warn(...data: any[]): void;
        info(...data: any[]): void;
        debug(...data: any[]): void;
    }

    interface FfmpegCommandOptions {
        logger?: FfmpegCommandLogger | undefined;
        niceness?: number | undefined;
        priority?: number | undefined;
        presets?: string | undefined;
        preset?: string | undefined;
        stdoutLines?: number | undefined;
        timeout?: number | undefined;
        source?: string | stream.Readable | undefined;
        cwd?: string | undefined;
    }

    interface FilterSpecification {
        filter: string;
        inputs?: string | string[] | undefined;
        outputs?: string | string[] | undefined;
        options?: any | string | any[] | undefined;
    }

    type PresetFunction = (command: FfmpegCommand) => void;

    interface Filter {
        description: string;
        input: string;
        multipleInputs: boolean;
        output: string;
        multipleOutputs: boolean;
    }
    interface Filters {
        [key: string]: Filter;
    }
    type FiltersCallback = (err: Error, filters: Filters) => void;

    interface Codec {
        type: string;
        description: string;
        canDecode: boolean;
        canEncode: boolean;
        drawHorizBand?: boolean | undefined;
        directRendering?: boolean | undefined;
        weirdFrameTruncation?: boolean | undefined;
        intraFrameOnly?: boolean | undefined;
        isLossy?: boolean | undefined;
        isLossless?: boolean | undefined;
    }
    interface Codecs {
        [key: string]: Codec;
    }
    type CodecsCallback = (err: Error, codecs: Codecs) => void;

    interface Encoder {
        type: string;
        description: string;
        frameMT: boolean;
        sliceMT: boolean;
        experimental: boolean;
        drawHorizBand: boolean;
        directRendering: boolean;
    }
    interface Encoders {
        [key: string]: Encoder;
    }
    type EncodersCallback = (err: Error, encoders: Encoders) => void;

    interface Format {
        description: string;
        canDemux: boolean;
        canMux: boolean;
    }
    interface Formats {
        [key: string]: Format;
    }
    type FormatsCallback = (err: Error, formats: Formats) => void;

    interface FfprobeData {
        streams: FfprobeStream[];
        format: FfprobeFormat;
        chapters: any[];
    }

    interface FfprobeStream {
        [key: string]: any;
        index: number;
        codec_name?: string | undefined;
        codec_long_name?: string | undefined;
        profile?: number | undefined;
        codec_type?: string | undefined;
        codec_time_base?: string | undefined;
        codec_tag_string?: string | undefined;
        codec_tag?: string | undefined;
        width?: number | undefined;
        height?: number | undefined;
        coded_width?: number | undefined;
        coded_height?: number | undefined;
        has_b_frames?: number | undefined;
        sample_aspect_ratio?: string | undefined;
        display_aspect_ratio?: string | undefined;
        pix_fmt?: string | undefined;
        level?: string | undefined;
        color_range?: string | undefined;
        color_space?: string | undefined;
        color_transfer?: string | undefined;
        color_primaries?: string | undefined;
        chroma_location?: string | undefined;
        field_order?: string | undefined;
        timecode?: string | undefined;
        refs?: number | undefined;
        id?: string | undefined;
        r_frame_rate?: string | undefined;
        avg_frame_rate?: string | undefined;
        time_base?: string | undefined;
        start_pts?: number | undefined;
        start_time?: number | undefined;
        duration_ts?: string | undefined;
        duration?: string | undefined;
        bit_rate?: string | undefined;
        max_bit_rate?: string | undefined;
        bits_per_raw_sample?: string | undefined;
        nb_frames?: string | undefined;
        nb_read_frames?: string | undefined;
        nb_read_packets?: string | undefined;
        sample_fmt?: string | undefined;
        sample_rate?: number | undefined;
        channels?: number | undefined;
        channel_layout?: string | undefined;
        bits_per_sample?: number | undefined;
        disposition?: FfprobeStreamDisposition | undefined;
        rotation?: string | number | undefined;
    }

    interface FfprobeStreamDisposition {
        [key: string]: any;
        default?: number | undefined;
        dub?: number | undefined;
        original?: number | undefined;
        comment?: number | undefined;
        lyrics?: number | undefined;
        karaoke?: number | undefined;
        forced?: number | undefined;
        hearing_impaired?: number | undefined;
        visual_impaired?: number | undefined;
        clean_effects?: number | undefined;
        attached_pic?: number | undefined;
        timed_thumbnails?: number | undefined;
    }

    interface FfprobeFormat {
        [key: string]: any;
        filename?: string | undefined;
        nb_streams?: number | undefined;
        nb_programs?: number | undefined;
        format_name?: string | undefined;
        format_long_name?: string | undefined;
        start_time?: number | undefined;
        duration?: number | undefined;
        size?: number | undefined;
        bit_rate?: number | undefined;
        probe_score?: number | undefined;
        tags?: Record<string, string | number> | undefined;
    }

    interface ScreenshotsConfig {
        count?: number | undefined;
        folder?: string | undefined;
        filename?: string | undefined;
        timemarks?: number[] | string[] | undefined;
        timestamps?: number[] | string[] | undefined;
        fastSeek?: boolean | undefined;
        size?: string | undefined;
    }

    interface AudioVideoFilter {
        filter: string;
        options: string | string[] | {};
    }

    // static methods
    function setFfmpegPath(path: string): FfmpegCommand;
    function setFfprobePath(path: string): FfmpegCommand;
    function setFlvtoolPath(path: string): FfmpegCommand;
    function availableFilters(callback: FiltersCallback): void;
    function getAvailableFilters(callback: FiltersCallback): void;
    function availableCodecs(callback: CodecsCallback): void;
    function getAvailableCodecs(callback: CodecsCallback): void;
    function availableEncoders(callback: EncodersCallback): void;
    function getAvailableEncoders(callback: EncodersCallback): void;
    function availableFormats(callback: FormatsCallback): void;
    function getAvailableFormats(callback: FormatsCallback): void;

    class FfmpegCommand extends events.EventEmitter {
        constructor(options?: FfmpegCommandOptions);
        constructor(input?: string | stream.Readable, options?: FfmpegCommandOptions);

        // options/inputs
        mergeAdd(source: string | stream.Readable): FfmpegCommand;
        addInput(source: string | stream.Readable): FfmpegCommand;
        input(source: string | stream.Readable): FfmpegCommand;
        withInputFormat(format: string): FfmpegCommand;
        inputFormat(format: string): FfmpegCommand;
        fromFormat(format: string): FfmpegCommand;
        withInputFps(fps: number): FfmpegCommand;
        withInputFPS(fps: number): FfmpegCommand;
        withFpsInput(fps: number): FfmpegCommand;
        withFPSInput(fps: number): FfmpegCommand;
        inputFPS(fps: number): FfmpegCommand;
        inputFps(fps: number): FfmpegCommand;
        fpsInput(fps: number): FfmpegCommand;
        FPSInput(fps: number): FfmpegCommand;
        nativeFramerate(): FfmpegCommand;
        withNativeFramerate(): FfmpegCommand;
        native(): FfmpegCommand;
        setStartTime(seek: string | number): FfmpegCommand;
        seekInput(seek: string | number): FfmpegCommand;
        loop(duration?: string | number): FfmpegCommand;

        // options/audio
        withNoAudio(): FfmpegCommand;
        noAudio(): FfmpegCommand;
        withAudioCodec(codec: string): FfmpegCommand;
        audioCodec(codec: string): FfmpegCommand;
        withAudioBitrate(bitrate: string | number): FfmpegCommand;
        audioBitrate(bitrate: string | number): FfmpegCommand;
        withAudioChannels(channels: number): FfmpegCommand;
        audioChannels(channels: number): FfmpegCommand;
        withAudioFrequency(freq: number): FfmpegCommand;
        audioFrequency(freq: number): FfmpegCommand;
        withAudioQuality(quality: number): FfmpegCommand;
        audioQuality(quality: number): FfmpegCommand;
        withAudioFilter(filters: string | string[] | AudioVideoFilter[]): FfmpegCommand;
        withAudioFilters(filters: string | string[] | AudioVideoFilter[]): FfmpegCommand;
        audioFilter(filters: string | string[] | AudioVideoFilter[]): FfmpegCommand;
        audioFilters(filters: string | string[] | AudioVideoFilter[]): FfmpegCommand;

        // options/video;
        withNoVideo(): FfmpegCommand;
        noVideo(): FfmpegCommand;
        withVideoCodec(codec: string): FfmpegCommand;
        videoCodec(codec: string): FfmpegCommand;
        withVideoBitrate(bitrate: string | number, constant?: boolean): FfmpegCommand;
        videoBitrate(bitrate: string | number, constant?: boolean): FfmpegCommand;
        withVideoFilter(filters: string | string[] | AudioVideoFilter[]): FfmpegCommand;
        withVideoFilters(filters: string | string[] | AudioVideoFilter[]): FfmpegCommand;
        videoFilter(filters: string | string[] | AudioVideoFilter[]): FfmpegCommand;
        videoFilters(filters: string | string[] | AudioVideoFilter[]): FfmpegCommand;
        withOutputFps(fps: number): FfmpegCommand;
        withOutputFPS(fps: number): FfmpegCommand;
        withFpsOutput(fps: number): FfmpegCommand;
        withFPSOutput(fps: number): FfmpegCommand;
        withFps(fps: number): FfmpegCommand;
        withFPS(fps: number): FfmpegCommand;
        outputFPS(fps: number): FfmpegCommand;
        outputFps(fps: number): FfmpegCommand;
        fpsOutput(fps: number): FfmpegCommand;
        FPSOutput(fps: number): FfmpegCommand;
        fps(fps: number): FfmpegCommand;
        FPS(fps: number): FfmpegCommand;
        takeFrames(frames: number): FfmpegCommand;
        withFrames(frames: number): FfmpegCommand;
        frames(frames: number): FfmpegCommand;

        // options/videosize
        keepPixelAspect(): FfmpegCommand;
        keepDisplayAspect(): FfmpegCommand;
        keepDisplayAspectRatio(): FfmpegCommand;
        keepDAR(): FfmpegCommand;
        withSize(size: string): FfmpegCommand;
        setSize(size: string): FfmpegCommand;
        size(size: string): FfmpegCommand;
        withAspect(aspect: string | number): FfmpegCommand;
        withAspectRatio(aspect: string | number): FfmpegCommand;
        setAspect(aspect: string | number): FfmpegCommand;
        setAspectRatio(aspect: string | number): FfmpegCommand;
        aspect(aspect: string | number): FfmpegCommand;
        aspectRatio(aspect: string | number): FfmpegCommand;
        applyAutopadding(pad?: boolean, color?: string): FfmpegCommand;
        applyAutoPadding(pad?: boolean, color?: string): FfmpegCommand;
        applyAutopad(pad?: boolean, color?: string): FfmpegCommand;
        applyAutoPad(pad?: boolean, color?: string): FfmpegCommand;
        withAutopadding(pad?: boolean, color?: string): FfmpegCommand;
        withAutoPadding(pad?: boolean, color?: string): FfmpegCommand;
        withAutopad(pad?: boolean, color?: string): FfmpegCommand;
        withAutoPad(pad?: boolean, color?: string): FfmpegCommand;
        autoPad(pad?: boolean, color?: string): FfmpegCommand;
        autopad(pad?: boolean, color?: string): FfmpegCommand;

        // options/output
        addOutput(target: string | stream.Writable, pipeopts?: { end?: boolean | undefined }): FfmpegCommand;
        output(target: string | stream.Writable, pipeopts?: { end?: boolean | undefined }): FfmpegCommand;
        seekOutput(seek: string | number): FfmpegCommand;
        seek(seek: string | number): FfmpegCommand;
        withDuration(duration: string | number): FfmpegCommand;
        setDuration(duration: string | number): FfmpegCommand;
        duration(duration: string | number): FfmpegCommand;
        toFormat(format: string): FfmpegCommand;
        withOutputFormat(format: string): FfmpegCommand;
        outputFormat(format: string): FfmpegCommand;
        format(format: string): FfmpegCommand;
        map(spec: string): FfmpegCommand;
        updateFlvMetadata(): FfmpegCommand;
        flvmeta(): FfmpegCommand;

        // options/custom
        addInputOption(options: string[]): FfmpegCommand;
        addInputOption(...options: string[]): FfmpegCommand;
        addInputOptions(options: string[]): FfmpegCommand;
        addInputOptions(...options: string[]): FfmpegCommand;
        withInputOption(options: string[]): FfmpegCommand;
        withInputOption(...options: string[]): FfmpegCommand;
        withInputOptions(options: string[]): FfmpegCommand;
        withInputOptions(...options: string[]): FfmpegCommand;
        inputOption(options: string[]): FfmpegCommand;
        inputOption(...options: string[]): FfmpegCommand;
        inputOptions(options: string[]): FfmpegCommand;
        inputOptions(...options: string[]): FfmpegCommand;
        addOutputOption(options: string[]): FfmpegCommand;
        addOutputOption(...options: string[]): FfmpegCommand;
        addOutputOptions(options: string[]): FfmpegCommand;
        addOutputOptions(...options: string[]): FfmpegCommand;
        addOption(options: string[]): FfmpegCommand;
        addOption(...options: string[]): FfmpegCommand;
        addOptions(options: string[]): FfmpegCommand;
        addOptions(...options: string[]): FfmpegCommand;
        withOutputOption(options: string[]): FfmpegCommand;
        withOutputOption(...options: string[]): FfmpegCommand;
        withOutputOptions(options: string[]): FfmpegCommand;
        withOutputOptions(...options: string[]): FfmpegCommand;
        withOption(options: string[]): FfmpegCommand;
        withOption(...options: string[]): FfmpegCommand;
        withOptions(options: string[]): FfmpegCommand;
        withOptions(...options: string[]): FfmpegCommand;
        outputOption(options: string[]): FfmpegCommand;
        outputOption(...options: string[]): FfmpegCommand;
        outputOptions(options: string[]): FfmpegCommand;
        outputOptions(...options: string[]): FfmpegCommand;
        filterGraph(
            spec: string | FilterSpecification | Array<string | FilterSpecification>,
            map?: string[] | string,
        ): FfmpegCommand;
        complexFilter(
            spec: string | FilterSpecification | Array<string | FilterSpecification>,
            map?: string[] | string,
        ): FfmpegCommand;

        // options/misc
        usingPreset(preset: string | PresetFunction): FfmpegCommand;
        preset(preset: string | PresetFunction): FfmpegCommand;

        // processor
        renice(niceness: number): FfmpegCommand;
        kill(signal: string): FfmpegCommand;
        _getArguments(): string[];

        // capabilities
        setFfmpegPath(path: string): FfmpegCommand;
        setFfprobePath(path: string): FfmpegCommand;
        setFlvtoolPath(path: string): FfmpegCommand;
        availableFilters(callback: FiltersCallback): void;
        getAvailableFilters(callback: FiltersCallback): void;
        availableCodecs(callback: CodecsCallback): void;
        getAvailableCodecs(callback: CodecsCallback): void;
        availableEncoders(callback: EncodersCallback): void;
        getAvailableEncoders(callback: EncodersCallback): void;
        availableFormats(callback: FormatsCallback): void;
        getAvailableFormats(callback: FormatsCallback): void;

        // ffprobe
        ffprobe(callback: (err: any, data: FfprobeData) => void): void;
        ffprobe(index: number, callback: (err: any, data: FfprobeData) => void): void;
        ffprobe(options: string[], callback: (err: any, data: FfprobeData) => void): void; // tslint:disable-line unified-signatures
        ffprobe(index: number, options: string[], callback: (err: any, data: FfprobeData) => void): void;

        // recipes
        saveToFile(output: string): FfmpegCommand;
        save(output: string): FfmpegCommand;
        writeToStream(stream: stream.Writable, options?: { end?: boolean | undefined }): stream.Writable;
        pipe(stream?: stream.Writable, options?: { end?: boolean | undefined }): stream.Writable | stream.PassThrough;
        stream(stream: stream.Writable, options?: { end?: boolean | undefined }): stream.Writable;
        takeScreenshots(config: number | ScreenshotsConfig, folder?: string): FfmpegCommand;
        thumbnail(config: number | ScreenshotsConfig, folder?: string): FfmpegCommand;
        thumbnails(config: number | ScreenshotsConfig, folder?: string): FfmpegCommand;
        screenshot(config: number | ScreenshotsConfig, folder?: string): FfmpegCommand;
        screenshots(config: number | ScreenshotsConfig, folder?: string): FfmpegCommand;
        mergeToFile(target: string | stream.Writable, tmpFolder: string): FfmpegCommand;
        concatenate(target: string | stream.Writable, options?: { end?: boolean | undefined }): FfmpegCommand;
        concat(target: string | stream.Writable, options?: { end?: boolean | undefined }): FfmpegCommand;
        clone(): FfmpegCommand;
        run(): void;
    }

    function ffprobe(file: string, callback: (err: any, data: FfprobeData) => void): void;
    function ffprobe(file: string, index: number, callback: (err: any, data: FfprobeData) => void): void;
    function ffprobe(file: string, options: string[], callback: (err: any, data: FfprobeData) => void): void; // tslint:disable-line unified-signatures
    function ffprobe(
        file: string,
        index: number,
        options: string[],
        callback: (err: any, data: FfprobeData) => void,
    ): void;
}
declare function Ffmpeg(options?: Ffmpeg.FfmpegCommandOptions): Ffmpeg.FfmpegCommand;
declare function Ffmpeg(input?: string | stream.Readable, options?: Ffmpeg.FfmpegCommandOptions): Ffmpeg.FfmpegCommand;

export = Ffmpeg;
