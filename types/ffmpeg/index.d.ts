type WatermarkSettings = Partial<{
    position: "NE" | "NC" | "NW" | "SE" | "SC" | "SW" | "C" | "CE" | "CW";
    margin_nord: number;
    margin_sud: number;
    margin_east: number;
    margin_west: number;
}>;

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
    keep_aspect_ratio: boolean;
    padding_color: string;
    file_name: string;
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

interface Duration {
    raw: string;
    seconds: number;
}

type FLVMetadata = Partial<{
    duration: Duration;
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
    /**
     * If the ffmpeg parameters are not present in the list of available function
     * you can add it manually through the following function.
     * @param command
     * @param argument
     * @example
     * ```ts
     * // Change the output to avi format
     * video.addCommand('-f', 'avi');
     * ```
     */
    addCommand(command: string, argument: string): void;

    addInput(argument: string): void;
    addFilterComplex(argument: string): void;
    setOutput(path: string): void;

    /**
     * Disables audio encoding.
     */
    setDisableAudio(): Video;

    /**
     * Disables video encoding.
     */
    setDisableVideo(): Video;

    /**
     * Sets the new video format.
     * @param format
     * @example
     * ```ts
     * video.setVideoFormat('avi')
     * ```
     */
    setVideoFormat(format: string): Video;

    /**
     * Sets the new audio codec.
     * @param codec
     * @example
     * ```ts
     * video.setVideoCodec('mpeg4')
     * ```
     */
    setVideoCodec(codec: string): Video;

    /**
     * Sets the video bitrate in kb.
     * @param bitrate
     * @example
     * ```ts
     * video.setVideoBitRate(1024)
     * ```
     */
    setVideoBitRate(bitrate: number): Video;

    /**
     * Sets the framerate of the video.
     * @param framerate
     * @example
     * ```ts
     * video.setVideoFrameRate(25)
     * ```
     */
    setVideoFrameRate(framerate: number): Video;

    /**
     * Sets the start time. You can specify the value in seconds or in date time format.
     * @param time the time in seconds or a date time string
     * @example
     * ```ts
     * // Seconds
     * video.setVideoStartTime(13)
     * // Date time format
     * video.setVideoStartTime('00:00:13')
     * ```
     */
    setVideoStartTime(time: number | string): Video;

    /**
     * Sets the duration. You can specify the value in seconds or in date time format.
     * @param duration the time in seconds or a date time string
     * @example
     * ```ts
     * // Seconds
     * video.setVideoDuration(100)
     * // Date time format
     * video.setVideoDuration('00:01:40')
     * ```
     */
    setVideoDuration(duration: number | string): Video;

    /**
     * Sets the new aspetc ratio. You can specify the value with a number or with a string in the format 'xx:xx'.
     * @param aspect the ratio as a number or string in the format 'xx:xx'
     * @example
     * ```ts
     * // Value
     * video.setVideoAspectRatio(1.77)
     * // Format xx:xx
     * video.setVideoAspectRatio('16:9')
     * ```
     */
    setVideoAspectRatio(aspect: number | string): Video;

    /**
     * Set the size of the video. This library can handle automatic resizing of the video.
     * You can also apply a padding automatically keeping the original aspect ratio.
     * @param size The following size formats are allowed:
     * - 640x480 Fixed size (plain ffmpeg way)
     * - 50% Percental resizing
     * - ?x480 Fixed height, calculate width
     * - 640x? Fixed width, calculate height
     * @param keepPixelAspectRatio
     * @param keepAspectRatio
     * @param paddingColor
     * ```ts
     * // In this example, the video will be automatically resized to 640 pixels wide and will be applied a white padding
     * video.setVideoSize('640x?', true, true, '#fff')
     * // In this example, the video will be resized to 640x480 pixel, and if the aspect ratio is different the video will be stretched
     * video.setVideoSize('640x480', true, false)
     * ```
     */
    setVideoSize(size: string, keepPixelAspectRatio: boolean, keepAspectRatio: boolean, paddingColor?: string): Video;

    /**
     * Sets the new audio codec.
     * @param codec
     * @example
     * ```ts
     * video.setAudioCodec('libfaac')
     * ```
     */
    setAudioCodec(codec: string): Video;

    /**
     * Sets the audio sample frequency for audio outputs in kb.
     * @param frequency
     * @example
     * ```ts
     * video.setAudioFrequency(48)
     * ```
     */
    setAudioFrequency(frequency: number): Video;

    /**
     * Sets the number of audio channels.
     * @param channel
     * @example
     * ```ts
     * video.setAudioChannels(2)
     * ```
     */
    setAudioChannels(channel: number): Video;

    /**
     * Sets the audio bitrate in kb.
     * @param bitrate
     * @example
     * ```ts
     * video.setAudioBitRate(128)
     * ```
     */
    setAudioBitRate(bitrate: number): Video;

    /**
     * Sets the audio quality.
     * @param quality
     * @example
     * ```ts
     * video.setAudioQuality(128)
     * ```
     */
    setAudioQuality(quality: number): Video;

    /**
     * Sets the watermark.
     * @param watermarkPath The path where the image is stored to be inserted as watermark
     * @param settings
     * @example
     * ```ts
     * // Add the watermark to the bottom right corner of the video
     * video.setWatermark('/path/to/retrieve/watermark_file.png')
     * ```
     */
    setWatermark(watermarkPath: string, settings?: WatermarkSettings): Video;

    /**
     * After setting the desired parameters have to start the conversion process.
     * To do this you must call the function 'save'.
     * @param destinationFileName The final destination of the file
     * @param cb A callback function for the path of the new file
     * @returns The path to the newly created file, or void if the callback was defined
     */
    save(destinationFileName: string): Promise<string>;
    save(destinationFileName: string, cb: (err: Error, file: string) => void): void;

    /**
     * This function extracts the audio stream of a video into an mp3 file.
     * @param destinationFileName Full path of the new file
     * @param cb A callback function fo the path of the new audio file
     * @returns The path to the newly created file, or void if the callback was defined
     */
    fnExtractSoundToMP3(destinationFileName: string): Promise<string>;
    fnExtractSoundToMP3(destinationFileName: string, cb: (err: Error, file: string) => void): void;

    /**
     * This function takes care of extracting one or more frames from the video that is being developed.
     * @param destinationFolder Destination folder for the frames generated
     * @param settings Settings to change the default settings
     * @param cb A callback function for an array of paths to the created frames
     * @returns A promise for an array of paths to the created frames, or void if the callback was defined
     */
    fnExtractFrameToJPG(destinationFolder: string, settings?: FrameToJPGSettings): Promise<string[]>;
    fnExtractFrameToJPG(
        destinationFolder: string,
        settings?: FrameToJPGSettings,
        cb?: (err: Error, files: string[]) => void,
    ): void;

    /**
     * This function takes care of adding a watermark to the video that is being developed.
     * You can specify the exact position in which position the image.
     * @param watermarkPath The full path where the image is stored to add as watermark
     * @param newPilePath Name of the new video. If not specified will be created by the function
     * @param settings Settings to change the default settings
     * @param cb A callback function for the path of the new video containing the watermark
     * @returns The path to the newly created video, or void if the callback was defined
     */
    fnAddWatermark(watermarkPath: string, newPilePath?: string, settings?: WatermarkSettings): Promise<string>;
    fnAddWatermark(
        watermarkPath: string,
        newPilePath?: string,
        settings?: WatermarkSettings,
        cb?: (err: Error, file: string) => void,
    ): void;

    metadata: StandardVideoMetadata & AVIMetadata & FLVMetadata;
}

interface Iffmpeg {
    new(filePath: string, cb?: (err: Error, video: Video) => void): Promise<Video>;
}

declare var ffmpeg: Iffmpeg;

export = ffmpeg;
