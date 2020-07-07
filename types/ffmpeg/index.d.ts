// Type definitions for node-ffmpeg 1.0
// Project: https://github.com/damianociarla/node-ffmpeg
// Definitions by: Prasad Nayak <https://github.com/Buzzertech>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

type WatermarkSettings = Partial<{
    position: 'NE' | 'NC' | 'NW' | 'SE' | 'SC' | 'SW' | 'C' | 'CE' | 'CW';
    margin_nord: number;
    margin_sud: number;
    margin_east: number;
    margin_west: number;
}>;

type SaveCallback = (err: Error, files: string) => void;

type FrameToJPGSettings = Partial<{
    start_time: string | number;
    duration_time: string | number;
    frame_rate: number;
    size: string;
    number: number;
    every_n_frames: number;
    every_n_seconds: number;
    every_n_percentage: number;
    keep_pixel_aspect_ratio: boolean;
    keep_aspect_ration: boolean;
    padding_color: string;
    file_name?: string;
}>;

type StandardVideoMetadata = Partial<{
    title: string;
    author: string;
    album_artist: string;
    album: string;
    grouping: string;
    composer: string;
    year: string;
    track: string;
    comment: string;
    genre: string;
    copyright: string;
    description: string;
    synopsis: string;
    show: string;
    episode_id: string;
    network: string;
    lyrics: string;
}>;

type WMVMetadata = Partial<{
    title: string;
    author: string;
    copyright: string;
    comment: string;
    rating: string;
}>;

type AVIMetadata = Partial<{
    IARL: string;
    IART: string;
    ICMS: string;
    ICMT: string;
    ICOP: string;
    ICRD: string | Date;
    ICRP: string;
    IDIM: string;
    IDPI: string;
    IENG: string;
    IGNR: string;
    IKEY: string;
    ILGT: string;
    ILNG: string;
    IMED: string;
    INAM: string;
    IPLT: string;
    IPRD: string;
    ISBJ: string;
    ISFT: string;
    ISHP: string;
    ISRC: string;
    ISRF: string;
    ITCH: string;
}>;

type FLVMetadata = Partial<{
    duration: number;
    filesize: string;
    encoder: string;
    width: number;
    height: number;
    videodatarate: number;
    videocodecid: string;
    audiodatarate: number;
    audiosamplerate: number;
    stereo: boolean;
    audiocodecid: string;
}>;

interface Video {
    addCommand(command: string, argument: string): void;
    addInput(argument: string): void;
    addFilterComplex(argument: string): void;
    setOutput(path: string): void;
    setDisableAudio(): Video;
    setVideoFormat(format: string): Video;

    setVideoCodec(codec: string): Video;
    setVideoBitRate(bitrate: number): Video;
    setVideoFrameRate(framerate: number): Video;

    /**
     *
     * @description time in seconds
     * @example 13
     */
    setVideoStartTime(time: number | string): Video;

    /**
     *
     * @example 13
     */
    setVideoDuration(duration: number | string): Video;

    /**
     *
     * @example 1.77
     */
    setVideoAspectRatio(aspect: number | string): Video;

    setVideoSize(size: string, keepPixelAspectRatio: boolean, keepAspectRatio: boolean, paddingColor?: string): Video;

    setAudioCodec(codec: string): Video;

    setAudioFrequency(frequency: number): Video;
    setAudioChannels(channel: number): Video;

    setAudioBitrate(bitrate: number): Video;

    setAudioQuality(quality: number): Video;

    setWatermark(watermarkPath: string, settings: WatermarkSettings): Video;

    /**
     * After setting the desired parameters have to start the conversion process.
     * To do this you must call the function 'save'.
     */
    save(destinationFileName: string, callback: SaveCallback): void;
    save(destinationFileName: string): Promise<string>;

    fnExtractSoundToMP3(destinationFileName: string, callback: SaveCallback): void;

    fnExtractFrameToJPG(destinationFolder: string, settings: FrameToJPGSettings, callback: SaveCallback): void;

    fnAddWatermark(watermarkPath: string, newPilePath: string, settings: WatermarkSettings, callback: SaveCallback): void;

    metadata: StandardVideoMetadata & AVIMetadata & FLVMetadata;
}

interface Iffmpeg {
    new(filePath: string, cb?: (err: Error, video: Video) => void): Promise<Video>;
}

declare var ffmpeg: Iffmpeg;

export = ffmpeg;
