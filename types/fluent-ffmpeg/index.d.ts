// Type definitions for node-fluent-ffmpeg 2.1
// Project: https://github.com/fluent-ffmpeg/node-fluent-ffmpeg
// Definitions by: KIM Jaesuck a.k.a. gim tcaesvk <https://github.com/tcaesvk>
//                 DingWeizhe <https://github.com/DingWeizhe>
//                 Mounir Abid <https://github.com/mabidina>
//                 Doyoung Ha <https://github.com/hados99>
//                 Prasad Nayak <https://github.com/buzzertech>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        logger?: FfmpegCommandLogger;
        niceness?: number;
        priority?: number;
        presets?: string;
        preset?: string;
        stdoutLines?: number;
        timeout?: number;
        source?: string | stream.Readable;
        cwd?: string;
    }

    interface FilterSpecification {
        filter: string;
        inputs?: string | string[];
        outputs?: string | string[];
        options?: any | string | any[];
    }

    type GetPreset = (command: FfmpegCommand) => string;

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
        drawHorizBand?: boolean;
        directRendering?: boolean;
        weirdFrameTruncation?: boolean;
        intraFrameOnly?: boolean;
        isLossy?: boolean;
        isLossless?: boolean;
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
        codec_name?: string;
        codec_long_name?: string;
        profile?: number;
        codec_type?: string;
        codec_time_base?: string;
        codec_tag_string?: string;
        codec_tag?: string;
        width?: number;
        height?: number;
        coded_width?: number;
        coded_height?: number;
        has_b_frames?: number;
        sample_aspect_ratio?: string;
        display_aspect_ratio?: string;
        pix_fmt?: string;
        level?: string;
        color_range?: string;
        color_space?: string;
        color_transfer?: string;
        color_primaries?: string;
        chroma_location?: string;
        field_order?: string;
        timecode?: string;
        refs?: number;
        id?: string;
        r_frame_rate?: string;
        avg_frame_rate?: string;
        time_base?: string;
        start_pts?: number;
        start_time?: number;
        duration_ts?: string;
        duration?: string;
        bit_rate?: string;
        max_bit_rate?: string;
        bits_per_raw_sample?: string;
        nb_frames?: string;
        nb_read_frames?: string;
        nb_read_packets?: string;
        sample_fmt?: string;
        sample_rate?: number;
        channels?: number;
        channel_layout?: string;
        bits_per_sample?: number;
        disposition?: FfprobeStreamDisposition;
    }

    interface FfprobeStreamDisposition {
        [key: string]: any;
        default?: number;
        dub?: number;
        original?: number;
        comment?: number;
        lyrics?: number;
        karaoke?: number;
        forced?: number;
        hearing_impaired?: number;
        visual_impaired?: number;
        clean_effects?: number;
        attached_pic?: number;
        timed_thumbnails?: number;
    }

    interface FfprobeFormat {
        [key: string]: any;
        filename?: string;
        nb_streams?: number;
        nb_programs?: number;
        format_name?: string;
        format_long_name?: string;
        start_time?: number;
        duration?: number;
        size?: number;
        bit_rate?: number;
        probe_score?: number;
        tags?: any[];
    }

    interface ScreenshotsConfig {
        count?: number;
        folder?: string;
        filename?: string;
        timemarks?: number[] | string[];
        timestamps?: number[] | string[];
        fastSeek?: boolean;
        size?: string;
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
        addOutput(target: string | stream.Writable, pipeopts?: { end?: boolean }): FfmpegCommand;
        output(target: string | stream.Writable, pipeopts?: { end?: boolean }): FfmpegCommand;
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
        preset(format: string): FfmpegCommand;

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
        filterGraph(spec: string | FilterSpecification | Array<string | FilterSpecification>, map?: string[] | string): FfmpegCommand;
        complexFilter(spec: string | FilterSpecification | Array<string | FilterSpecification>, map?: string[] | string): FfmpegCommand;

        // options/misc
        usingPreset(proset: string | GetPreset): FfmpegCommand;
        pnreset(proset: string | GetPreset): FfmpegCommand;

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
        writeToStream(stream: stream.Writable, options?: { end?: boolean }): stream.Writable;
        pipe(stream?: stream.Writable, options?: { end?: boolean }): stream.Writable|stream.PassThrough;
        stream(stream: stream.Writable, options?: { end?: boolean }): stream.Writable;
        takeScreenshots(config: number | ScreenshotsConfig, folder?: string): FfmpegCommand;
        thumbnail(config: number | ScreenshotsConfig, folder?: string): FfmpegCommand;
        thumbnails(config: number | ScreenshotsConfig, folder?: string): FfmpegCommand;
        screenshot(config: number | ScreenshotsConfig, folder?: string): FfmpegCommand;
        screenshots(config: number | ScreenshotsConfig, folder?: string): FfmpegCommand;
        mergeToFile(target: string | stream.Writable, options?: { end?: boolean }): FfmpegCommand;
        concatenate(target: string | stream.Writable, options?: { end?: boolean }): FfmpegCommand;
        concat(target: string | stream.Writable, options?: { end?: boolean }): FfmpegCommand;
        clone(): FfmpegCommand;
        run(): void;
    }

    function ffprobe(file: string, callback: (err: any, data: FfprobeData) => void): void;
    function ffprobe(file: string, index: number, callback: (err: any, data: FfprobeData) => void): void;
    function ffprobe(file: string, options: string[], callback: (err: any, data: FfprobeData) => void): void; // tslint:disable-line unified-signatures
    function ffprobe(file: string, index: number, options: string[], callback: (err: any, data: FfprobeData) => void): void;
}
declare function Ffmpeg(options?: Ffmpeg.FfmpegCommandOptions): Ffmpeg.FfmpegCommand;
declare function Ffmpeg(input?: string | stream.Readable, options?: Ffmpeg.FfmpegCommandOptions): Ffmpeg.FfmpegCommand;

export = Ffmpeg;
